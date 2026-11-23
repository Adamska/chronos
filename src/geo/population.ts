export const POPULATION_BASE_URL = "/data/population";
export const POPULATION_WIDTH = 360;
export const POPULATION_HEIGHT = 180;
export const POPULATION_MIN_DENSITY = 0.1;
export const POPULATION_MAX_DENSITY = 10_000;
const LEVELS = 254;

export interface PopulationIndex {
  years: number[];
  width: number;
  height: number;
  encoding: string;
  source: string;
  license: string;
  attribution: string;
}

export interface PopulationBracket {
  from: number;
  to: number;
  weight: number;
}

let indexRequest: Promise<PopulationIndex | null> | null = null;
const sliceRequests = new Map<number, Promise<Uint8Array | null>>();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function parsePopulationIndex(value: unknown): PopulationIndex | null {
  if (!isRecord(value)) return null;
  const { years, width, height, encoding, source, license, attribution } = value;
  if (!Array.isArray(years) || !years.every((year): year is number => typeof year === "number")) return null;
  if (width !== POPULATION_WIDTH || height !== POPULATION_HEIGHT) return null;
  const text = (field: unknown): string => (typeof field === "string" ? field : "");
  const sorted = [...years].sort((a, b) => a - b);
  return { years: sorted, width, height, encoding: text(encoding), source: text(source), license: text(license), attribution: text(attribution) };
}

export function loadPopulationIndex(): Promise<PopulationIndex | null> {
  indexRequest ??= fetch(`${POPULATION_BASE_URL}/index.json`)
    .then((response) => (response.ok ? (response.json() as Promise<unknown>) : null))
    .then(parsePopulationIndex)
    .catch(() => null)
    .then((index) => {
      if (!index) indexRequest = null;
      return index;
    });
  return indexRequest;
}

export function loadPopulationSlice(year: number): Promise<Uint8Array | null> {
  const cached = sliceRequests.get(year);
  if (cached) return cached;
  const request = fetch(`${POPULATION_BASE_URL}/${year}.bin`)
    .then((response) => (response.ok ? response.arrayBuffer() : null))
    .then((buffer) => (buffer && buffer.byteLength === POPULATION_WIDTH * POPULATION_HEIGHT ? new Uint8Array(buffer) : null))
    .catch(() => null)
    .then((grid) => {
      if (!grid) sliceRequests.delete(year);
      return grid;
    });
  sliceRequests.set(year, request);
  return request;
}

export function populationBracket(year: number, years: readonly number[]): PopulationBracket | null {
  const first = years[0];
  const last = years[years.length - 1];
  if (first === undefined || last === undefined) return null;
  if (year <= first) return { from: first, to: first, weight: 0 };
  if (year >= last) return { from: last, to: last, weight: 0 };
  let low = 0;
  let high = years.length - 1;
  while (high - low > 1) {
    const mid = (low + high) >> 1;
    if ((years[mid] ?? 0) <= year) low = mid;
    else high = mid;
  }
  const from = years[low] ?? first;
  const to = years[high] ?? last;
  return { from, to, weight: to === from ? 0 : (year - from) / (to - from) };
}

export function decodeDensity(code: number): number {
  if (code <= 0) return 0;
  const ratio = POPULATION_MAX_DENSITY / POPULATION_MIN_DENSITY;
  return POPULATION_MIN_DENSITY * ratio ** ((Math.min(code, LEVELS + 1) - 1) / LEVELS);
}

export function populationCell(lon: number, lat: number): number {
  const wrapped = ((((lon + 180) % 360) + 360) % 360) / 360;
  const col = Math.min(POPULATION_WIDTH - 1, Math.floor(wrapped * POPULATION_WIDTH));
  const row = Math.min(POPULATION_HEIGHT - 1, Math.max(0, Math.floor(((90 - lat) / 180) * POPULATION_HEIGHT)));
  return row * POPULATION_WIDTH + col;
}

export function densityAt(grid: Uint8Array, lon: number, lat: number): number {
  return decodeDensity(grid[populationCell(lon, lat)] ?? 0);
}
