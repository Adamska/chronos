import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon } from "geojson";
import { feature, quantize } from "topojson-client";
import { topology } from "topojson-server";
import { filter, filterWeight, presimplify, type Ring, simplify, sphericalRingArea, sphericalTriangleArea } from "topojson-simplify";
import type { GeometryCollection, MultiPolygon as TopoMultiPolygon, Objects, Polygon as TopoPolygon, Topology } from "topojson-specification";

export type PolityGeometry = Polygon | MultiPolygon;

export interface PolityProperties {
  name: string;
  from: number;
  to: number;
  area: number;
}

export type PolityFeature = Feature<PolityGeometry, PolityProperties>;

type PolityObjects = Objects<PolityProperties>;
type TopoPolity = TopoPolygon<PolityProperties> | TopoMultiPolygon<PolityProperties>;
type ArcIndexes = number | ArcIndexes[];

const EARTH_RADIUS_KM = 6371.0088;
const STERADIANS_PER_KM2 = 1 / EARTH_RADIUS_KM ** 2;
const MIN_RING_KM2 = 300;
const BASE_WEIGHT_KM2 = 100;
const MAX_WEIGHT_KM2 = 3_000;
const WEIGHT_STEP = 1.5;
const QUANTIZATION = 1e4;

export interface EncodedBin {
  json: string;
  bytes: number;
  polities: number;
  weightKm2: number;
}

function isPolity(geometry: { type: string | null }): geometry is TopoPolity {
  return geometry.type === "Polygon" || geometry.type === "MultiPolygon";
}

function shiftArcs(arcs: ArcIndexes, offset: number): ArcIndexes {
  if (Array.isArray(arcs)) return arcs.map((arc) => shiftArcs(arc, offset));
  return arcs < 0 ? ~(~arcs + offset) : arcs + offset;
}

function unsignedRingArea(ring: Ring): number {
  const area = sphericalRingArea(ring, false);
  return Math.min(area, 4 * Math.PI - area);
}

function simplifiedFeatures(weighted: Topology<PolityObjects>, weightKm2: number): PolityFeature[] {
  const simplified = simplify(weighted, weightKm2 * STERADIANS_PER_KM2);
  const keepRing = filterWeight(simplified, MIN_RING_KM2 * STERADIANS_PER_KM2, unsignedRingArea);
  const filtered = toFeatures(filter(simplified, keepRing));
  return filtered.length > 0 ? filtered : toFeatures(simplified);
}

function isPolityFeature(candidate: Feature<Geometry | null, PolityProperties>): candidate is PolityFeature {
  return candidate.geometry?.type === "Polygon" || candidate.geometry?.type === "MultiPolygon";
}

function toFeatures(topo: Topology): PolityFeature[] {
  const polities = topo.objects.polities;
  if (polities?.type !== "GeometryCollection") return [];
  return feature<PolityProperties>(topo, polities as GeometryCollection<PolityProperties>).features.filter(isPolityFeature);
}

function groupedTopology(features: PolityFeature[]): Topology<{ polities: GeometryCollection<PolityProperties> }> {
  const groups = Map.groupBy(features, (f) => f.properties.name);
  const arcs: Topology["arcs"] = [];
  const geometries: TopoPolity[] = [];
  for (const group of groups.values()) {
    const part = topology({ polities: { type: "FeatureCollection", features: group } as FeatureCollection });
    const collection = part.objects.polities as GeometryCollection<PolityProperties>;
    for (const geometry of collection.geometries.filter(isPolity)) {
      geometries.push({ ...geometry, arcs: shiftArcs(geometry.arcs, arcs.length) } as TopoPolity);
    }
    arcs.push(...part.arcs);
  }
  return { type: "Topology", arcs, objects: { polities: { type: "GeometryCollection", geometries } } };
}

export function encodeBin(features: PolityFeature[], budgetBytes: number): EncodedBin {
  const collection: FeatureCollection<PolityGeometry, PolityProperties> = { type: "FeatureCollection", features };
  const weighted = presimplify(topology({ polities: collection }) as Topology<PolityObjects>, sphericalTriangleArea);
  for (let weightKm2 = BASE_WEIGHT_KM2; ; weightKm2 *= WEIGHT_STEP) {
    const kept = simplifiedFeatures(weighted, weightKm2);
    const json = JSON.stringify(quantize(groupedTopology(kept), QUANTIZATION));
    const bytes = Buffer.byteLength(json);
    if (bytes <= budgetBytes || weightKm2 * WEIGHT_STEP > MAX_WEIGHT_KM2) {
      return { json, bytes, polities: kept.length, weightKm2 };
    }
  }
}
