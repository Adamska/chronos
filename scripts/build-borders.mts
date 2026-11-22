import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { geoArea } from "d3-geo";
import type { Feature, FeatureCollection, Position } from "geojson";
import { ATTRIBUTION, attributionMarkdown, LICENSE, SOURCE_REPO, SOURCE_ZIP } from "./borders-attribution.mjs";
import { encodeBin, type PolityFeature, type PolityGeometry } from "./borders-topology.mjs";

interface SourceProperties {
  Name: string;
  FromYear: number;
  ToYear: number;
  Area: number | null;
  Type: string;
  Components: string;
}

type SourceCollection = FeatureCollection<PolityGeometry | null, SourceProperties>;

interface BinEntry {
  bin: number;
  file: string;
  bytes: number;
  polities: number;
}

const OUT_DIR = fileURLToPath(new URL("../public/data/borders/", import.meta.url));
const BIN_SIZE = 100;
const MIN_POLITY_KM2 = 2_000;
const BIN_BUDGET_BYTES = 250_000;
const EARTH_RADIUS_KM = 6371.0088;

async function download(workDir: string): Promise<string> {
  const response = await fetch(SOURCE_ZIP);
  if (!response.ok) throw new Error(`Download failed: ${response.status} ${response.statusText}`);
  const zipPath = path.join(workDir, "cliopatria.geojson.zip");
  await writeFile(zipPath, Buffer.from(await response.arrayBuffer()));
  execFileSync("unzip", ["-o", "-q", zipPath, "-d", workDir]);
  const geojson = (await readdir(workDir)).find((file) => file.endsWith(".geojson"));
  if (!geojson) throw new Error("No .geojson file found in the Cliopatria archive");
  return path.join(workDir, geojson);
}

function orientPolygon(rings: Position[][]): Position[][] {
  return geoArea({ type: "Polygon", coordinates: rings }) > 2 * Math.PI ? rings.map((ring) => [...ring].reverse()) : rings;
}

function orient(geometry: PolityGeometry): PolityGeometry {
  return geometry.type === "Polygon"
    ? { type: "Polygon", coordinates: orientPolygon(geometry.coordinates) }
    : { type: "MultiPolygon", coordinates: geometry.coordinates.map(orientPolygon) };
}

function toPolity({ properties, geometry }: Feature<PolityGeometry | null, SourceProperties>): PolityFeature | null {
  if (properties.Type !== "POLITY" || properties.Components || !geometry) return null;
  const oriented = orient(geometry);
  const area = Math.round(properties.Area ?? geoArea(oriented) * EARTH_RADIUS_KM ** 2);
  return {
    type: "Feature",
    properties: { name: properties.Name, from: properties.FromYear, to: properties.ToYear, area },
    geometry: oriented,
  };
}

function mergeUnchanged(polities: PolityFeature[]): PolityFeature[] {
  const sorted = polities.toSorted((a, b) => a.properties.name.localeCompare(b.properties.name) || a.properties.from - b.properties.from);
  const merged: PolityFeature[] = [];
  let previousKey = "";
  for (const polity of sorted) {
    const key = JSON.stringify(polity.geometry);
    const last = merged.at(-1);
    if (last && last.properties.name === polity.properties.name && last.properties.to + 1 === polity.properties.from && key === previousKey) {
      last.properties.to = polity.properties.to;
    } else {
      merged.push(structuredClone(polity));
    }
    previousKey = key;
  }
  return merged;
}

function selectForBin(polities: PolityFeature[], bin: number): PolityFeature[] {
  const overlapping = polities.filter(({ properties: p }) => p.from <= bin + BIN_SIZE - 1 && p.to >= bin);
  const large = overlapping.filter(({ properties: p }) => p.area >= MIN_POLITY_KM2);
  return (large.length > 0 ? large : overlapping).toSorted((a, b) => a.properties.from - b.properties.from || b.properties.area - a.properties.area);
}

async function loadPolities(workDir: string): Promise<{ polities: PolityFeature[]; datasetName: string }> {
  console.log(`Downloading ${SOURCE_ZIP}`);
  const sourcePath = await download(workDir);
  const source = JSON.parse(await readFile(sourcePath, "utf8")) as SourceCollection;
  const records = source.features.map(toPolity).filter((p): p is PolityFeature => p !== null);
  const polities = mergeUnchanged(records);
  console.log(`Loaded ${records.length} polity records (${polities.length} after merging unchanged spans) from ${path.basename(sourcePath)}`);
  return { polities, datasetName: path.basename(sourcePath) };
}

async function writeBins(polities: PolityFeature[]): Promise<BinEntry[]> {
  const binOf = (year: number) => Math.floor(year / BIN_SIZE) * BIN_SIZE;
  const first = binOf(Math.min(...polities.map((p) => p.properties.from)));
  const last = binOf(Math.max(...polities.map((p) => p.properties.to)));
  const bins: BinEntry[] = [];
  for (let bin = first; bin <= last; bin += BIN_SIZE) {
    const selected = selectForBin(polities, bin);
    if (selected.length === 0) continue;
    const { json, bytes, polities: count, weightKm2 } = encodeBin(selected, BIN_BUDGET_BYTES);
    const file = `${bin}.json`;
    await writeFile(path.join(OUT_DIR, file), json);
    bins.push({ bin, file, bytes, polities: count });
    console.log(`${file.padStart(10)} ${String(count).padStart(5)} polities ${(bytes / 1024).toFixed(1).padStart(7)} KB  (simplified at ${Math.round(weightKm2)} km²)`);
  }
  return bins;
}

async function main(): Promise<void> {
  const workDir = await mkdtemp(path.join(tmpdir(), "chronos-cliopatria-"));
  try {
    const { polities, datasetName } = await loadPolities(workDir);
    await rm(OUT_DIR, { recursive: true, force: true });
    await mkdir(OUT_DIR, { recursive: true });
    const bins = await writeBins(polities);
    const index = { source: SOURCE_REPO, license: LICENSE, attribution: ATTRIBUTION, bins };
    await writeFile(path.join(OUT_DIR, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
    await writeFile(path.join(OUT_DIR, "ATTRIBUTION.md"), attributionMarkdown(datasetName));
    const total = bins.reduce((sum, entry) => sum + entry.bytes, 0);
    console.log(`Wrote ${bins.length} bins (${(total / 1024 / 1024).toFixed(2)} MB) to ${OUT_DIR}`);
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}

await main();
