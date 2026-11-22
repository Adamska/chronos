import { geoDistance } from "d3-geo";
import { CHOKEPOINTS, TERRAIN_BARRIERS } from "@/data/geography";
import { type Locale, getActiveLocale } from "@/i18n/config";
import { numberTag } from "@/i18n/dictionaries";
import { localBarrierName, localChokepoint } from "@/i18n/reference";
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
    if (best && distanceKm >= best.distanceKm) continue;
    const local = localChokepoint(chokepoint.id, chokepoint);
    best = { name: local.name, distanceKm, note: local.note };
  }
  return best;
}

export function nearestBarrier(point: LonLat): ProximityInsight | null {
  let best: ProximityInsight | null = null;
  for (const barrier of TERRAIN_BARRIERS) {
    const distanceKm = Math.min(...barrier.polygon.map((vertex) => greatCircleKm(point, vertex)));
    if (!best || distanceKm < best.distanceKm) best = { name: localBarrierName(barrier.id, barrier.name), distanceKm };
  }
  return best;
}

export function formatKm(distance: number, locale: Locale = getActiveLocale()): string {
  const unit = locale === "fr" ? "\u00a0km" : " km";
  if (distance < 10) return `<${locale === "fr" ? "\u00a0" : " "}10${unit}`;
  const step = distance > 1000 ? 50 : 10;
  return `${(Math.round(distance / step) * step).toLocaleString(numberTag(locale))}${unit}`;
}
