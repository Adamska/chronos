import { MASK_HEIGHT, MASK_WIDTH } from "@/geo/landBuild";
import { MAX_DAYS, cellIndexFor } from "@/geo/travelModels";
import type { LonLat } from "@/types/chronicle";

export interface TravelSnapshot {
  readonly days: Float32Array;
  readonly origin: LonLat;
  readonly modelLabel: string;
}

let current: TravelSnapshot | null = null;
const listeners = new Set<(snapshot: TravelSnapshot | null) => void>();

export function publishTravel(snapshot: TravelSnapshot | null): void {
  current = snapshot;
  listeners.forEach((listener) => listener(snapshot));
}

export function subscribeTravel(listener: (snapshot: TravelSnapshot | null) => void): () => void {
  listener(current);
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function travelDaysAt(point: LonLat): number | null {
  if (!current) return null;
  const value = current.days[cellIndexFor(point)];
  return value !== undefined && Number.isFinite(value) ? value : null;
}

export const TRAVEL_GRID_WIDTH = MASK_WIDTH;

export function travelReady(origin: LonLat): boolean {
  return current !== null && current.origin[0] === origin[0] && current.origin[1] === origin[1];
}

export function encodeTravelField(days: Float32Array): Uint8Array {
  const encoded = new Uint8Array(MASK_WIDTH * MASK_HEIGHT);
  const scale = 254 / Math.log1p(MAX_DAYS);
  for (let row = 0; row < MASK_HEIGHT; row += 1) {
    const target = (MASK_HEIGHT - 1 - row) * MASK_WIDTH;
    for (let col = 0; col < MASK_WIDTH; col += 1) {
      const value = days[row * MASK_WIDTH + col] ?? Number.POSITIVE_INFINITY;
      encoded[target + col] = Number.isFinite(value) && value <= MAX_DAYS ? Math.round(Math.log1p(value) * scale) : 255;
    }
  }
  return encoded;
}
