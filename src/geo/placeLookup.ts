import { geoContains } from "d3-geo";
import type { Topology } from "topojson-specification";
import { CITIES } from "@/data/cities";
import { binUrlFor, loadBorderIndex } from "@/geo/borderClient";
import { type PolityProperties, activePolities } from "@/geo/borderRaster";
import { angularDistance } from "@/geo/sphericalMath";
import { populationAt } from "@/scene/cityMetrics";
import type { CityRecord } from "@/types/atlas";
import type { LonLat } from "@/types/chronicle";

const EARTH_RADIUS_KM = 6371;
const topologies = new Map<string, Promise<Topology | null>>();

function loadTopology(url: string): Promise<Topology | null> {
  const cached =
    topologies.get(url) ??
    fetch(url)
      .then((response) => (response.ok ? (response.json() as Promise<Topology>) : null))
      .catch(() => null);
  topologies.set(url, cached);
  return cached;
}

export async function polityAt(year: number, point: LonLat): Promise<PolityProperties | null> {
  const index = await loadBorderIndex();
  const url = index ? binUrlFor(index, year) : null;
  const topology = url ? await loadTopology(url) : null;
  if (!topology) return null;
  const matches = activePolities(topology, year).filter((polity) => geoContains(polity, [point[0], point[1]]));
  matches.sort((a, b) => a.properties.area - b.properties.area);
  return matches[0]?.properties ?? null;
}

export interface NearbyCity {
  readonly city: CityRecord;
  readonly population: number;
  readonly distanceKm: number;
}

export function nearestCity(year: number, point: LonLat, maxKm = 700): NearbyCity | null {
  let best: NearbyCity | null = null;
  for (const city of CITIES) {
    const population = populationAt(city, year);
    if (population <= 0) continue;
    const distanceKm = angularDistance(point, city.coordinates) * EARTH_RADIUS_KM;
    if (distanceKm <= maxKm && (!best || distanceKm < best.distanceKm)) best = { city, population, distanceKm };
  }
  return best;
}

export function kilometresBetween(a: LonLat, b: LonLat): number {
  return angularDistance(a, b) * EARTH_RADIUS_KM;
}
