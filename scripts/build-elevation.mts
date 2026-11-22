import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { geoBounds, geoContains } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryObject } from "topojson-specification";
import type { Polygon, Position } from "geojson";

const ERDDAP = "https://oceanwatch.pifsc.noaa.gov/erddap/griddap";
const DATASET = "ETOPO_2022_v1_60s";
const COLS = 720;
const ROWS = 360;
const SOURCE_PER_CELL = 30;
const STRIDE = 5;
const OFFSET = 2;
const SAMPLES = SOURCE_PER_CELL / STRIDE;
const BANDS = 6;
const SOURCE_ROWS = 10800;
const SOURCE_COLS = 21600;
const FILL = -99999;
const MAX_DEPTH = 8000;
const MAX_ELEVATION = 6000;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "data");
const require = createRequire(import.meta.url);

const sampleCols = SOURCE_COLS / STRIDE;
const rowsPerBand = SOURCE_ROWS / BANDS;

function bandUrl(band: number): string {
  const first = band * rowsPerBand + OFFSET;
  const last = (band + 1) * rowsPerBand - SOURCE_PER_CELL + OFFSET + STRIDE * (SAMPLES - 1);
  const lat = `[${first}:${STRIDE}:${last}]`;
  const lon = `[${OFFSET}:${STRIDE}:${SOURCE_COLS - SOURCE_PER_CELL + OFFSET + STRIDE * (SAMPLES - 1)}]`;
  return `${ERDDAP}/${DATASET}.dods?z${encodeURIComponent(lat + lon)}`;
}

function parseDods(buffer: ArrayBuffer, expected: number): Float32Array {
  const bytes = new Uint8Array(buffer);
  const marker = new TextEncoder().encode("\nData:\n");
  let start = -1;
  for (let i = 0; i <= bytes.length - marker.length && start < 0; i++) {
    if (marker.every((byte, j) => bytes[i + j] === byte)) start = i + marker.length;
  }
  if (start < 0) throw new Error("DAP response has no data section");
  const view = new DataView(buffer, start);
  const count = view.getUint32(0);
  if (count !== expected) throw new Error(`Expected ${expected} values, received ${count}`);
  const values = new Float32Array(count);
  for (let i = 0; i < count; i++) values[i] = view.getFloat32(8 + i * 4);
  return values;
}

async function fetchBand(band: number, attempts = 4): Promise<Float32Array> {
  const url = bandUrl(band);
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
      return parseDods(await response.arrayBuffer(), rowsPerBand / STRIDE * sampleCols);
    } catch (error) {
      if (attempt >= attempts) throw error;
      console.warn(`Band ${band + 1} failed (${String(error)}), retrying`);
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
    }
  }
}

function averageBand(samples: Float32Array, band: number, grid: Float64Array): void {
  const cellRows = rowsPerBand / SOURCE_PER_CELL;
  for (let k = 0; k < cellRows; k++) {
    const row = ROWS - 1 - (band * cellRows + k);
    for (let col = 0; col < COLS; col++) {
      const sourceCell = (col + COLS / 2) % COLS;
      let sum = 0;
      let n = 0;
      for (let i = 0; i < SAMPLES; i++) {
        const offset = (k * SAMPLES + i) * sampleCols + sourceCell * SAMPLES;
        for (let j = 0; j < SAMPLES; j++) {
          const value = samples[offset + j] ?? FILL;
          if (value <= FILL || Number.isNaN(value)) continue;
          sum += value;
          n++;
        }
      }
      grid[row * COLS + col] = n > 0 ? sum / n : Number.NaN;
    }
  }
}

function cellCenter(row: number, col: number): [number, number] {
  return [-180 + (col + 0.5) * (360 / COLS), 90 - (row + 0.5) * (180 / ROWS)];
}

interface LandPolygon {
  geometry: Polygon;
  bounds: [[number, number], [number, number]];
}

async function loadLand(): Promise<LandPolygon[]> {
  const file = require.resolve("world-atlas/land-110m.json");
  const topology = JSON.parse(await readFile(file, "utf8")) as Topology<{ land: GeometryObject }>;
  const land = feature(topology, topology.objects.land);
  const features = land.type === "FeatureCollection" ? land.features : [land];
  const rings: Position[][][] = features.flatMap(({ geometry }) => {
    if (geometry.type === "Polygon") return [geometry.coordinates];
    if (geometry.type === "MultiPolygon") return geometry.coordinates;
    return [];
  });
  return rings.map((coordinates) => {
    const geometry: Polygon = { type: "Polygon", coordinates };
    return { geometry, bounds: geoBounds(geometry) };
  });
}

function isOnLand(land: LandPolygon[], point: [number, number]): boolean {
  const [lon, lat] = point;
  return land.some(({ geometry, bounds: [[west, south], [east, north]] }) => {
    if (lat < south || lat > north) return false;
    const inLongitude = west <= east ? lon >= west && lon <= east : lon >= west || lon <= east;
    return inLongitude && geoContains(geometry, point);
  });
}

function encode(elevation: number, onLand: boolean): number {
  if (elevation >= 0) return Math.round(128 + 127 * Math.sqrt(Math.min(elevation, MAX_ELEVATION) / MAX_ELEVATION));
  if (onLand) return 128;
  return Math.round(127 - 127 * Math.sqrt(Math.min(-elevation, MAX_DEPTH) / MAX_DEPTH));
}

function attribution(): string {
  const example = bandUrl(0);
  return `# Elevation and bathymetry grid

\`public/data/elevation.bin\` is derived from **ETOPO 2022** (60 arc-second, ice surface), the global relief model published by the NOAA National Centers for Environmental Information (NCEI).

## Citation

NOAA National Centers for Environmental Information. 2022: ETOPO 2022 15 Arc-Second Global Relief Model. NOAA National Centers for Environmental Information. https://doi.org/10.25921/fd45-gt74

## License

ETOPO 2022 is a work of the United States Government (NOAA NCEI) and is in the public domain. It is provided without warranty and is not intended for navigation or legal use.

## Source

- Product page: https://www.ncei.noaa.gov/products/etopo-global-relief-model
- Served by the NOAA PIFSC OceanWatch ERDDAP: ${ERDDAP}/${DATASET}.html
- Downloaded in ${BANDS} latitude bands of DAP binary data, for example: ${example}

## Processing

Generated by \`scripts/build-elevation.mts\` (\`npm run data:elevation\`).

1. The 1 arc-minute grid (${SOURCE_COLS} x ${SOURCE_ROWS} cell centres, longitude 0 to 360) is sampled every ${STRIDE}th row and column, giving a symmetric ${SAMPLES} x ${SAMPLES} lattice inside every 0.5 degree cell.
2. The ${SAMPLES * SAMPLES} samples in each cell are averaged into a ${COLS} x ${ROWS} grid with cell centres from 89.75 to -89.75 latitude and -179.75 to 179.75 longitude.
3. Each cell is stored as one unsigned byte, row-major, row 0 northernmost and column 0 westernmost (${COLS * ROWS} bytes).
   - Ocean, 0 to 127: \`round(127 - 127 * sqrt(min(depth, ${MAX_DEPTH}) / ${MAX_DEPTH}))\`, so 127 is sea level and 0 is ${MAX_DEPTH} m or deeper.
   - Land, 128 to 255: \`round(128 + 127 * sqrt(min(elevation, ${MAX_ELEVATION}) / ${MAX_ELEVATION}))\`, so 128 is sea level and 255 is ${MAX_ELEVATION} m or higher.
4. Cells with a mean elevation of 0 m or more are land. Cells below sea level whose centre lies inside the Natural Earth 1:110m land polygons (\`world-atlas/land-110m.json\`, the land outline the globe draws) are clamped to 128. This covers depressions such as Qattara, lake beds such as the Great Lakes and Baikal, and coastal cells where the 0.5 degree mean dips below sea level. Water bodies outside those polygons, including the Caspian Sea, keep their depth. At this resolution the Dead Sea cells average above sea level.
`;
}

async function main(): Promise<void> {
  const grid = new Float64Array(COLS * ROWS);
  for (let band = 0; band < BANDS; band++) {
    console.log(`Downloading band ${band + 1}/${BANDS}`);
    averageBand(await fetchBand(band), band, grid);
  }
  const missing = grid.filter(Number.isNaN).length;
  if (missing > 0) throw new Error(`${missing} cells have no data`);

  const land = await loadLand();
  const bytes = new Uint8Array(COLS * ROWS);
  let clamped = 0;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const index = row * COLS + col;
      const elevation = grid[index] ?? 0;
      const onLand = elevation < 0 && isOnLand(land, cellCenter(row, col));
      if (onLand) clamped++;
      bytes[index] = encode(elevation, onLand);
    }
  }

  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "elevation.bin"), bytes);
  await writeFile(path.join(outDir, "ELEVATION_ATTRIBUTION.md"), attribution());
  const landCells = bytes.filter((byte) => byte >= 128).length;
  console.log(`Wrote ${bytes.length} bytes: ${landCells} land cells (${clamped} below sea level clamped to 128)`);
}

await main();
