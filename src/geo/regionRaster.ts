import { geoContains, geoEquirectangular, geoPath } from "d3-geo";
import type { Feature, MultiPolygon, Polygon } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import { LANGUAGE_STYLES, RELIGION_STYLES } from "@/data/world/regionStyles";
import { REGION_HISTORIES } from "@/data/world/regions";
import type { LonLat } from "@/types/chronicle";
import type { LanguageId, RegionHistory, ReligionId, Timeline } from "@/types/world";

export type RegionKind = "religion" | "language";

export interface RegionShape {
  readonly history: RegionHistory;
  readonly feature: Feature<Polygon | MultiPolygon>;
}

const FILL_ALPHA = 0.62;
let shapes: Promise<RegionShape[]> | null = null;

export function timelineValue<T extends string>(timeline: Timeline<T>, year: number): T | null {
  let value: T | null = timeline[0]?.[1] ?? null;
  for (const [from, entry] of timeline) {
    if (from > year) break;
    value = entry;
  }
  return value;
}

export function loadRegionShapes(): Promise<RegionShape[]> {
  shapes ??= import("world-atlas/countries-110m.json").then((module) => {
    const topology = (module.default ?? module) as unknown as Topology;
    const object = topology.objects.countries as GeometryCollection<{ name: string }>;
    const collection = feature(topology, object) as unknown as { features: (Feature<Polygon | MultiPolygon, { name: string }> & { id?: string })[] };
    const byId = new Map(REGION_HISTORIES.map((history) => [history.id, history]));
    return collection.features.flatMap((entry) => {
      const history = byId.get(String(entry.id ?? entry.properties.name)) ?? byId.get(entry.properties.name);
      return history ? [{ history, feature: entry }] : [];
    });
  });
  return shapes;
}

export function regionValue(history: RegionHistory, kind: RegionKind, year: number): ReligionId | LanguageId | null {
  return kind === "religion" ? timelineValue(history.religion, year) : timelineValue(history.language, year);
}

export function regionColor(kind: RegionKind, value: ReligionId | LanguageId): string {
  return kind === "religion" ? (RELIGION_STYLES[value as ReligionId]?.color ?? "#777") : (LANGUAGE_STYLES[value as LanguageId]?.color ?? "#777");
}

export async function rasterizeRegions(kind: RegionKind, year: number, width: number, previousKey: string) {
  const list = await loadRegionShapes();
  const values = list.map((shape) => regionValue(shape.history, kind, year));
  const key = `${kind}:${values.join(",")}`;
  if (key === previousKey) return "unchanged" as const;
  const height = width / 2;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  const path = geoPath(geoEquirectangular().scale(width / (2 * Math.PI)).translate([width / 2, height / 2]), context);
  context.globalAlpha = FILL_ALPHA;
  list.forEach((shape, index) => {
    const value = values[index];
    if (!value) return;
    context.beginPath();
    path(shape.feature);
    context.fillStyle = regionColor(kind, value);
    context.fill();
  });
  return { key, width, height, pixels: context.getImageData(0, 0, width, height).data };
}

export async function regionAt(point: LonLat): Promise<RegionHistory | null> {
  const list = await loadRegionShapes();
  return list.find((shape) => geoContains(shape.feature, [point[0], point[1]]))?.history ?? null;
}

export async function regionTally(kind: RegionKind, year: number): Promise<Map<string, number>> {
  const list = await loadRegionShapes();
  const tally = new Map<string, number>();
  for (const shape of list) {
    const value = regionValue(shape.history, kind, year);
    if (value) tally.set(value, (tally.get(value) ?? 0) + 1);
  }
  return tally;
}
