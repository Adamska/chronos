import { TERRAIN_BARRIERS } from "@/data/geography";
import { CELL_DEGREES, MASK_HEIGHT, MASK_WIDTH } from "@/geo/landBuild";
import type { LonLat } from "@/types/chronicle";

export const MAX_DAYS = 730;
const CELLS = MASK_WIDTH * MASK_HEIGHT;
const KM_PER_CELL = 111.2 * CELL_DEGREES;
const OFFSHORE_CELLS = Math.round(7 / CELL_DEGREES);
const PORT_DELAY_DAYS = 1.5;
const SLICE_MS = 8;

export interface TravelModel {
  readonly id: string;
  readonly label: string;
  readonly landKmPerDay: number;
  readonly seaKmPerDay: number;
  readonly openOceanFactor: number;
}

const MODELS: readonly (TravelModel & { readonly until: number })[] = [
  { id: "ancient", until: -500, label: "Foot, donkey and coastal oar", landKmPerDay: 25, seaKmPerDay: 70, openOceanFactor: 10 },
  { id: "classical", until: 1450, label: "Caravan, horse and monsoon sail", landKmPerDay: 32, seaKmPerDay: 110, openOceanFactor: 8 },
  { id: "sail", until: 1830, label: "Ocean-going sail and post roads", landKmPerDay: 40, seaKmPerDay: 150, openOceanFactor: 1 },
  { id: "steam", until: 1870, label: "Early steamships and railways", landKmPerDay: 90, seaKmPerDay: 230, openOceanFactor: 1 },
  { id: "rail", until: 1950, label: "Railway networks and steam liners", landKmPerDay: 280, seaKmPerDay: 420, openOceanFactor: 1 },
  { id: "modern", until: Number.POSITIVE_INFINITY, label: "Motorways and container shipping (no air travel)", landKmPerDay: 600, seaKmPerDay: 650, openOceanFactor: 1 },
];

export function travelModelFor(year: number): TravelModel {
  return MODELS.find((model) => year < model.until) ?? (MODELS[MODELS.length - 1] as TravelModel);
}

interface StaticField {
  readonly land: Uint8Array;
  readonly barrier: Float32Array;
  readonly coastDistance: Uint8Array;
}

let cachedMask: Uint8Array | null = null;
let cachedField: StaticField | null = null;

const cellLat = (row: number) => 90 - (row + 0.5) * CELL_DEGREES;
const cellLon = (col: number) => -180 + (col + 0.5) * CELL_DEGREES;

function inside(polygon: readonly LonLat[], x: number, y: number): boolean {
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const [xi, yi] = polygon[i] ?? [0, 0];
    const [xj, yj] = polygon[j] ?? [0, 0];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) result = !result;
  }
  return result;
}

function buildStaticField(mask: Uint8Array): StaticField {
  if (cachedMask === mask && cachedField) return cachedField;
  const land = new Uint8Array(CELLS);
  for (let i = 0; i < CELLS; i += 1) land[i] = (mask[i] ?? 0) >= 110 ? 1 : 0;

  const barrier = new Float32Array(CELLS).fill(1);
  for (const range of TERRAIN_BARRIERS) {
    const lons = range.polygon.map(([lon]) => lon);
    const lats = range.polygon.map(([, lat]) => lat);
    for (let row = 0; row < MASK_HEIGHT; row += 1) {
      const lat = cellLat(row);
      if (lat < Math.min(...lats) || lat > Math.max(...lats)) continue;
      for (let col = 0; col < MASK_WIDTH; col += 1) {
        const lon = cellLon(col);
        if (lon < Math.min(...lons) || lon > Math.max(...lons) || !inside(range.polygon, lon, lat)) continue;
        barrier[row * MASK_WIDTH + col] = Math.max(barrier[row * MASK_WIDTH + col] ?? 1, 1 + range.height * 180);
      }
    }
  }

  const coastDistance = new Uint8Array(CELLS).fill(255);
  const queue: number[] = [];
  for (let i = 0; i < CELLS; i += 1) if (land[i]) (coastDistance[i] = 0), queue.push(i);
  for (let head = 0; head < queue.length; head += 1) {
    const cell = queue[head] ?? 0;
    const row = Math.floor(cell / MASK_WIDTH);
    const col = cell % MASK_WIDTH;
    const next = (coastDistance[cell] ?? 0) + 1;
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
      if (next > 254) break;
      const r = row + dr;
      if (r < 0 || r >= MASK_HEIGHT) continue;
      const neighbour = r * MASK_WIDTH + ((col + dc + MASK_WIDTH) % MASK_WIDTH);
      if ((coastDistance[neighbour] ?? 0) > next) (coastDistance[neighbour] = next), queue.push(neighbour);
    }
  }

  cachedMask = mask;
  cachedField = { land, barrier, coastDistance };
  return cachedField;
}

function speedAt(field: StaticField, cell: number, model: TravelModel): number {
  const lat = Math.abs(cellLat(Math.floor(cell / MASK_WIDTH)));
  if (field.land[cell]) return (model.landKmPerDay / (field.barrier[cell] ?? 1)) * (lat > 66 ? 0.35 : 1);
  const offshore = (field.coastDistance[cell] ?? 0) > OFFSHORE_CELLS ? model.openOceanFactor : 1;
  return model.seaKmPerDay / offshore / (lat > 68 ? 6 : 1);
}

export function cellIndexFor([lon, lat]: LonLat): number {
  const col = Math.min(MASK_WIDTH - 1, Math.max(0, Math.floor((lon + 180) / CELL_DEGREES)));
  const row = Math.min(MASK_HEIGHT - 1, Math.max(0, Math.floor((90 - lat) / CELL_DEGREES)));
  return row * MASK_WIDTH + col;
}

export async function solveTravelTimes(mask: Uint8Array, origin: LonLat, model: TravelModel, isStale: () => boolean): Promise<Float32Array | null> {
  const field = buildStaticField(mask);
  const days = new Float64Array(CELLS).fill(Number.POSITIVE_INFINITY);
  let heapCells = new Int32Array(CELLS * 2);
  let heapCosts = new Float64Array(CELLS * 2);
  let size = 0;
  const push = (cell: number, cost: number) => {
    if (size === heapCells.length) {
      const cells = new Int32Array(size * 2);
      const costs = new Float64Array(size * 2);
      cells.set(heapCells);
      costs.set(heapCosts);
      heapCells = cells;
      heapCosts = costs;
    }
    let index = size;
    size += 1;
    while (index > 0) {
      const parent = (index - 1) >> 1;
      const parentCost = heapCosts[parent] as number;
      if (parentCost <= cost) break;
      heapCells[index] = heapCells[parent] as number;
      heapCosts[index] = parentCost;
      index = parent;
    }
    heapCells[index] = cell;
    heapCosts[index] = cost;
  };
  const pop = (): number => {
    const top = heapCells[0] as number;
    size -= 1;
    if (size === 0) return top;
    const lastCell = heapCells[size] as number;
    const lastCost = heapCosts[size] as number;
    let index = 0;
    for (;;) {
      const left = index * 2 + 1;
      if (left >= size) break;
      const right = left + 1;
      const child = right < size && (heapCosts[right] as number) < (heapCosts[left] as number) ? right : left;
      if ((heapCosts[child] as number) >= lastCost) break;
      heapCells[index] = heapCells[child] as number;
      heapCosts[index] = heapCosts[child] as number;
      index = child;
    }
    heapCells[index] = lastCell;
    heapCosts[index] = lastCost;
    return top;
  };

  const solveStart = performance.now();
  const speeds = new Float32Array(CELLS);
  for (let cell = 0; cell < CELLS; cell += 1) speeds[cell] = speedAt(field, cell, model);
  const rowEastWest = new Float32Array(MASK_HEIGHT);
  for (let row = 0; row < MASK_HEIGHT; row += 1) rowEastWest[row] = KM_PER_CELL * Math.max(0.05, Math.cos((cellLat(row) * Math.PI) / 180));
  const start = cellIndexFor(origin);
  days[start] = 0;
  push(start, 0);
  let sliceStart = performance.now();
  let processed = 0;

  while (size > 0) {
    const cost = heapCosts[0] ?? 0;
    const cell = pop();
    if (cost > (days[cell] ?? 0) || cost > MAX_DAYS) continue;
    const row = Math.floor(cell / MASK_WIDTH);
    const col = cell % MASK_WIDTH;
    const ewKm = rowEastWest[row] ?? KM_PER_CELL;
    const diagonal = Math.sqrt(ewKm * ewKm + KM_PER_CELL * KM_PER_CELL);
    const here = speeds[cell] ?? 1;
    const landHere = field.land[cell];
    for (let dr = -1; dr <= 1; dr += 1) {
      const r = row + dr;
      if (r < 0 || r >= MASK_HEIGHT) continue;
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const neighbour = r * MASK_WIDTH + ((col + dc + MASK_WIDTH) % MASK_WIDTH);
        const km = dr === 0 ? ewKm : dc === 0 ? KM_PER_CELL : diagonal;
        const speed = (here + (speeds[neighbour] ?? 1)) / 2;
        const transfer = landHere !== field.land[neighbour] ? PORT_DELAY_DAYS : 0;
        const next = cost + km / speed + transfer;
        if (next < (days[neighbour] ?? Number.POSITIVE_INFINITY)) {
          days[neighbour] = next;
          push(neighbour, next);
        }
      }
    }
    processed += 1;
    if ((processed & 1023) === 0 && performance.now() - sliceStart > SLICE_MS) {
      await new Promise((resolve) => setTimeout(resolve, 0));
      if (isStale()) return null;
      sliceStart = performance.now();
    }
  }
  lastSolveMs = performance.now() - solveStart;
  return Float32Array.from(days);
}

export let lastSolveMs = 0;
