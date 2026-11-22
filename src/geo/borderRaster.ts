import { geoArea, geoCentroid, geoEquirectangular, geoPath } from "d3-geo";
import type { Feature, MultiPolygon, Polygon } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

export interface PolityProperties {
  readonly name: string;
  readonly from: number;
  readonly to: number;
  readonly area: number;
}

export interface PolityLabel {
  readonly name: string;
  readonly lon: number;
  readonly lat: number;
  readonly area: number;
}

export interface BorderRaster {
  readonly key: string;
  readonly width: number;
  readonly height: number;
  readonly pixels: Uint8ClampedArray;
  readonly labels: readonly PolityLabel[];
}

type PolityFeature = Feature<Polygon | MultiPolygon, PolityProperties>;
type Context2D = OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D;

const PALETTE = ["#b07a45", "#4f8f86", "#a2533f", "#5873a6", "#8f8a3f", "#80608f", "#4d8a5c", "#b9894a", "#4f88aa", "#a8664f", "#6f8f52", "#a95a6e"];
const LABEL_COUNT = 14;

function colorFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(hash) % PALETTE.length] ?? "#a07d55";
}

export function activePolities(topology: Topology, year: number): PolityFeature[] {
  const object = topology.objects.polities as GeometryCollection<PolityProperties> | undefined;
  if (!object) return [];
  const collection = feature(topology, object) as unknown as { features: PolityFeature[] };
  return collection.features.filter((entry) => entry.properties.from <= year && entry.properties.to >= year);
}

export function activeKey(polities: readonly PolityFeature[]): string {
  return polities
    .map((entry) => `${entry.properties.name}:${entry.properties.from}`)
    .sort()
    .join("|");
}

export function rasterizeBorders(polities: readonly PolityFeature[], context: Context2D, width: number, height: number): BorderRaster {
  const projection = geoEquirectangular()
    .scale(width / (2 * Math.PI))
    .translate([width / 2, height / 2]);
  const path = geoPath(projection, context);
  context.clearRect(0, 0, width, height);
  const ordered = [...polities].sort((a, b) => b.properties.area - a.properties.area);

  for (const polity of ordered) {
    context.beginPath();
    path(polity);
    context.fillStyle = colorFor(polity.properties.name);
    context.globalAlpha = 0.36;
    context.fill();
  }
  context.globalAlpha = 1;
  context.lineWidth = width / 2048;
  context.strokeStyle = "rgba(238, 228, 208, 0.75)";
  for (const polity of ordered) {
    context.beginPath();
    path(polity);
    context.stroke();
  }

  const labels = ordered.slice(0, LABEL_COUNT).map((polity) => {
    const [lon, lat] = geoCentroid(polity);
    return { name: polity.properties.name, lon, lat, area: polity.properties.area || geoArea(polity) * 40_589_641 };
  });
  return { key: activeKey(polities), width, height, pixels: context.getImageData(0, 0, width, height).data, labels };
}
