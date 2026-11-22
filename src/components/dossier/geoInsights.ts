import { geoDistance } from "d3-geo";
import { CHOKEPOINTS, TERRAIN_BARRIERS } from "@/data/geography";
import type { LonLat } from "@/types/chronicle";

const EARTH_RADIUS_KM = 6371;

export interface ProximityInsight {
  readonly name: string;
  readonly distanceKm: number;
  readonly note?: string;
}

export function greatCircleKm(from: LonLat, to: LonLat): number {
  return geoDistance([from[0], from[1]], [to[0], to[1]]) * EARTH_RADIUS_KM;
}

export function routeLegs(path: readonly LonLat[]): number[] {
  const legs: number[] = [];
  for (let i = 0; i < path.length - 1; i += 1) {
    const from = path[i];
    const to = path[i + 1];
    if (from && to) legs.push(greatCircleKm(from, to));
  }
  return legs;
}

export function nearestChokepoint(point: LonLat): ProximityInsight | null {
  let best: ProximityInsight | null = null;
  for (const chokepoint of CHOKEPOINTS) {
    const distanceKm = greatCircleKm(point, chokepoint.coordinates);
    if (!best || distanceKm < best.distanceKm) best = { name: chokepoint.name, distanceKm, note: chokepoint.note };
  }
  return best;
}

export function nearestBarrier(point: LonLat): ProximityInsight | null {
  let best: ProximityInsight | null = null;
  for (const barrier of TERRAIN_BARRIERS) {
    const distanceKm = Math.min(...barrier.polygon.map((vertex) => greatCircleKm(point, vertex)));
    if (!best || distanceKm < best.distanceKm) best = { name: barrier.name, distanceKm };
  }
  return best;
}

export function formatKm(distance: number): string {
  if (distance < 10) return "< 10 km";
  return `${Math.round(distance / (distance > 1000 ? 50 : 10)) * (distance > 1000 ? 50 : 10)} km`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
