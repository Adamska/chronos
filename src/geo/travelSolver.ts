export type GridPoint = readonly [lon: number, lat: number];

export interface SolverModel {
  readonly landKmPerDay: number;
  readonly seaKmPerDay: number;
  readonly openOceanFactor: number;
}

export interface SolverBarrier {
  readonly polygon: readonly GridPoint[];
  readonly height: number;
}

export interface SolverGrid {
  readonly width: number;
  readonly height: number;
  readonly mask: Uint8Array;
  readonly barriers: readonly SolverBarrier[];
}

const PORT_DELAY_DAYS = 1.5;
const SLICE_MS = 8;
export const SOLVER_MAX_DAYS = 730;

interface StaticField {
  readonly land: Uint8Array;
  readonly barrier: Float32Array;
  readonly coastDistance: Uint8Array;
}

let cachedMask: Uint8Array | null = null;
let cachedBarriers: readonly SolverBarrier[] | null = null;
let cachedField: StaticField | null = null;

function inside(polygon: readonly GridPoint[], x: number, y: number): boolean {
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const [xi, yi] = polygon[i] ?? [0, 0];
    const [xj, yj] = polygon[j] ?? [0, 0];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) result = !result;
  }
  return result;
}

function buildStaticField(grid: SolverGrid): StaticField {
  const { mask, width, height } = grid;
  const cells = width * height;
  const cellDegrees = 360 / width;
  const cellLat = (row: number) => 90 - (row + 0.5) * cellDegrees;
  const cellLon = (col: number) => -180 + (col + 0.5) * cellDegrees;
  if (cachedMask === mask && cachedBarriers === grid.barriers && cachedField) return cachedField;
  const land = new Uint8Array(cells);
  for (let i = 0; i < cells; i += 1) land[i] = (mask[i] ?? 0) >= 110 ? 1 : 0;

  const barrier = new Float32Array(cells).fill(1);
  for (const range of grid.barriers) {
    const lons = range.polygon.map(([lon]) => lon);
    const lats = range.polygon.map(([, lat]) => lat);
    for (let row = 0; row < height; row += 1) {
      const lat = cellLat(row);
      if (lat < Math.min(...lats) || lat > Math.max(...lats)) continue;
      for (let col = 0; col < width; col += 1) {
        const lon = cellLon(col);
        if (lon < Math.min(...lons) || lon > Math.max(...lons) || !inside(range.polygon, lon, lat)) continue;
        barrier[row * width + col] = Math.max(barrier[row * width + col] ?? 1, 1 + range.height * 180);
      }
    }
  }

  const coastDistance = new Uint8Array(cells).fill(255);
  const queue: number[] = [];
  for (let i = 0; i < cells; i += 1) {
    if (!land[i]) continue;
    coastDistance[i] = 0;
    queue.push(i);
  }
  for (let head = 0; head < queue.length; head += 1) {
    const cell = queue[head] ?? 0;
    const row = Math.floor(cell / width);
    const col = cell % width;
    const next = (coastDistance[cell] ?? 0) + 1;
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
      if (next > 254) break;
      const r = row + dr;
      if (r < 0 || r >= height) continue;
      const neighbour = r * width + ((col + dc + width) % width);
      if ((coastDistance[neighbour] ?? 0) <= next) continue;
      coastDistance[neighbour] = next;
      queue.push(neighbour);
    }
  }

  cachedMask = mask;
  cachedBarriers = grid.barriers;
  cachedField = { land, barrier, coastDistance };
  return cachedField;
}

function speedAt(field: StaticField, cell: number, model: SolverModel, width: number, offshoreCells: number): number {
  const lat = Math.abs(90 - (Math.floor(cell / width) + 0.5) * (360 / width));
  if (field.land[cell]) return (model.landKmPerDay / (field.barrier[cell] ?? 1)) * (lat > 66 ? 0.35 : 1);
  const offshore = (field.coastDistance[cell] ?? 0) > offshoreCells ? model.openOceanFactor : 1;
  return model.seaKmPerDay / offshore / (lat > 68 ? 6 : 1);
}

export async function solveTravelGrid(
  grid: SolverGrid,
  origin: GridPoint,
  model: SolverModel,
  isStale: () => boolean = () => false,
): Promise<Float32Array | null> {
  const { width, height } = grid;
  const cells = width * height;
  const cellDegrees = 360 / width;
  const kmPerCell = 111.2 * cellDegrees;
  const offshoreCells = Math.round(7 / cellDegrees);
  const cellLat = (row: number) => 90 - (row + 0.5) * cellDegrees;
  const field = buildStaticField(grid);
  const days = new Float64Array(cells).fill(Number.POSITIVE_INFINITY);
  let heapCells = new Int32Array(cells * 2);
  let heapCosts = new Float64Array(cells * 2);
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

  const speeds = new Float32Array(cells);
  for (let cell = 0; cell < cells; cell += 1) speeds[cell] = speedAt(field, cell, model, width, offshoreCells);
  const rowEastWest = new Float32Array(height);
  for (let row = 0; row < height; row += 1) rowEastWest[row] = kmPerCell * Math.max(0.05, Math.cos((cellLat(row) * Math.PI) / 180));
  const startCol = Math.min(width - 1, Math.max(0, Math.floor((origin[0] + 180) / cellDegrees)));
  const startRow = Math.min(height - 1, Math.max(0, Math.floor((90 - origin[1]) / cellDegrees)));
  const start = startRow * width + startCol;
  days[start] = 0;
  push(start, 0);
  let sliceStart = performance.now();
  let processed = 0;

  while (size > 0) {
    const cost = heapCosts[0] ?? 0;
    const cell = pop();
    if (cost > (days[cell] ?? 0) || cost > SOLVER_MAX_DAYS) continue;
    const row = Math.floor(cell / width);
    const col = cell % width;
    const ewKm = rowEastWest[row] ?? kmPerCell;
    const diagonal = Math.sqrt(ewKm * ewKm + kmPerCell * kmPerCell);
    const here = speeds[cell] ?? 1;
    const landHere = field.land[cell];
    for (let dr = -1; dr <= 1; dr += 1) {
      const r = row + dr;
      if (r < 0 || r >= height) continue;
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) continue;
        const neighbour = r * width + ((col + dc + width) % width);
        const km = dr === 0 ? ewKm : dc === 0 ? kmPerCell : diagonal;
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
  return Float32Array.from(days);
}
