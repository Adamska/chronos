import { spawn } from "node:child_process";
import { createWriteStream, existsSync } from "node:fs";
import { mkdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as WebStream } from "node:stream/web";
import { fileURLToPath } from "node:url";

interface ZipEntry {
  method: number;
  dosTime: number;
  crc: number;
  csize: number;
  usize: number;
  offset: number;
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CACHE = path.join(ROOT, ".cache", "hyde");
const OUT = path.join(ROOT, "public", "data", "population");
const ACCESS = "https://archaeology.datastations.nl/api/access/datafile";
const DATASET = "https://doi.org/10.17026/dans-25g-gez3";
const BASELINE_FILE = 5490328;
const GENERAL_FILE = 5490327;
const COLS = 360;
const ROWS = 180;
const SRC_COLS = 4320;
const SRC_ROWS = 2160;
const FACTOR = SRC_COLS / COLS;
const MIN_DENSITY = 0.1;
const MAX_DENSITY = 10_000;
const ZERO_BELOW = 0.05;
const EARTH_RADIUS_KM = 6371.0088;
const MAX32 = 0xffffffff;
const LICENSE = "CC BY 3.0 (HYDE 3.2.1 readme); deposited at DANS under CC0 1.0";
const ATTRIBUTION =
  "Population density: HYDE 3.2.1 baseline (Klein Goldewijk, Beusen, Doelman & Stehfest 2017, Earth Syst. Sci. Data 9, 927-953), Utrecht University / PBL, CC BY 3.0. Aggregated to 1 degree by Chronos.";
const CITATION =
  "Klein Goldewijk, K., Beusen, A., Doelman, J. & Stehfest, E. (2017). Anthropogenic land use estimates for the Holocene - HYDE 3.2. *Earth System Science Data* 9, 927-953. https://doi.org/10.5194/essd-9-927-2017";

const centuries = Array.from({ length: 17 }, (_, i): [number, string] => [(i + 1) * 100, `${(i + 1) * 100}AD`]);
const modern = [1750, 1800, 1850, 1900, 1950, 2000, 2017].map((year): [number, string] => [year, `${year}AD`]);
const STEPS: [number, string][] = [[-3000, "3000BC"], [-2000, "2000BC"], [-1000, "1000BC"], [1, "0AD"], ...centuries, ...modern];

async function ranged(file: number, range: string): Promise<Response> {
  const response = await fetch(`${ACCESS}/${file}`, { headers: { Range: `bytes=${range}` } });
  if (response.status !== 206 || !response.body) throw new Error(`Range ${range} of file ${file} failed: HTTP ${response.status}`);
  return response;
}

async function rangedBytes(file: number, range: string): Promise<Buffer> {
  return Buffer.from(await (await ranged(file, range)).arrayBuffer());
}

function readZip64(cd: Buffer, start: number, end: number, entry: ZipEntry): void {
  for (let q = start; q + 4 <= end; q += 4 + cd.readUInt16LE(q + 2)) {
    if (cd.readUInt16LE(q) !== 1) continue;
    let r = q + 4;
    for (const key of ["usize", "csize", "offset"] as const) {
      if (entry[key] !== MAX32) continue;
      entry[key] = Number(cd.readBigUInt64LE(r));
      r += 8;
    }
  }
}

async function directory(file: number): Promise<Map<string, ZipEntry>> {
  const tail = await rangedBytes(file, "-65536");
  const eocd = tail.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  const zip64 = tail.lastIndexOf(Buffer.from([0x50, 0x4b, 0x06, 0x06]));
  if (eocd < 0) throw new Error(`File ${file} has no zip directory`);
  const size = zip64 >= 0 ? Number(tail.readBigUInt64LE(zip64 + 40)) : tail.readUInt32LE(eocd + 12);
  const start = zip64 >= 0 ? Number(tail.readBigUInt64LE(zip64 + 48)) : tail.readUInt32LE(eocd + 16);
  const cd = await rangedBytes(file, `${start}-${start + size - 1}`);
  const entries = new Map<string, ZipEntry>();
  for (let p = 0; p + 46 <= cd.length && cd.readUInt32LE(p) === 0x02014b50; ) {
    const nameLength = cd.readUInt16LE(p + 28);
    const extraEnd = p + 46 + nameLength + cd.readUInt16LE(p + 30);
    const [dosTime, crc, csize, usize] = [12, 16, 20, 24].map((at) => cd.readUInt32LE(p + at)) as [number, number, number, number];
    const entry: ZipEntry = { method: cd.readUInt16LE(p + 10), dosTime, crc, csize, usize, offset: cd.readUInt32LE(p + 42) };
    readZip64(cd, p + 46 + nameLength, extraEnd, entry);
    entries.set(path.basename(cd.toString("utf8", p + 46, p + 46 + nameLength)), entry);
    p = extraEnd + cd.readUInt16LE(p + 32);
  }
  return entries;
}

function struct(size: number, fields: [number, number, number][]): Buffer {
  const buffer = Buffer.alloc(size);
  for (const [offset, value, width] of fields) buffer[width === 2 ? "writeUInt16LE" : "writeUInt32LE"](value, offset);
  return buffer;
}

function miniZip(name: string, entry: ZipEntry): { local: Buffer; trailer: Buffer } {
  const nameBytes = Buffer.from(name, "utf8");
  const version = entry.method === 9 ? 21 : 20;
  const shared: [number, number, number][] = [[0, entry.method, 2], [2, entry.dosTime, 4], [6, entry.crc, 4], [10, entry.csize, 4], [14, entry.usize, 4], [18, nameBytes.length, 2]];
  const at = (base: number): [number, number, number][] => shared.map(([offset, value, width]) => [base + offset, value, width]);
  const local = Buffer.concat([struct(30, [[0, 0x04034b50, 4], [4, version, 2], ...at(8)]), nameBytes]);
  const central = Buffer.concat([struct(46, [[0, 0x02014b50, 4], [4, version, 2], [6, version, 2], ...at(10)]), nameBytes]);
  const end = struct(22, [[0, 0x06054b50, 4], [8, 1, 2], [10, 1, 2], [12, central.length, 4], [16, local.length + entry.csize, 4]]);
  return { local, trailer: Buffer.concat([central, end]) };
}

const listings = new Map<number, Promise<Map<string, ZipEntry>>>();

async function cached(file: number, name: string): Promise<string> {
  const target = path.join(CACHE, `${name}.zip`);
  if (existsSync(target)) return target;
  if (!listings.has(file)) listings.set(file, directory(file));
  const entry = (await listings.get(file))?.get(name);
  if (!entry) throw new Error(`${name} not found in DANS file ${file}`);
  const local = await rangedBytes(file, `${entry.offset}-${entry.offset + 29}`);
  const dataStart = entry.offset + 30 + local.readUInt16LE(26) + local.readUInt16LE(28);
  console.log(`Downloading ${name} (${(entry.csize / 1e6).toFixed(1)} MB compressed)`);
  const response = await ranged(file, `${dataStart}-${dataStart + entry.csize - 1}`);
  const { local: head, trailer } = miniZip(name, entry);
  const part = `${target}.part`;
  await writeFile(part, head);
  await pipeline(Readable.fromWeb(response.body as WebStream<Uint8Array>), createWriteStream(part, { flags: "a" }));
  await writeFile(part, trailer, { flag: "a" });
  await rename(part, target);
  return target;
}

async function readGrid(zip: string, onValue: (cell: number, value: number) => void): Promise<void> {
  const child = spawn("unzip", ["-p", zip], { stdio: ["ignore", "pipe", "inherit"] });
  const exit = new Promise<number>((resolve, reject) => {
    child.on("error", reject);
    child.on("close", (code) => resolve(code ?? 1));
  });
  const meta = new Map<string, number>();
  let key = "";
  let tokens = 0;
  let index = 0;
  const token = (text: string): void => {
    if (tokens++ < 12) {
      if (tokens % 2 === 1) key = text.toLowerCase();
      else meta.set(key, Number(text));
      return;
    }
    const value = Number(text);
    if (value > 0) onValue(Math.floor(index / SRC_COLS / FACTOR) * COLS + Math.floor((index % SRC_COLS) / FACTOR), value);
    index++;
  };
  let carry = "";
  for await (const chunk of child.stdout as AsyncIterable<Buffer>) {
    let start = 0;
    for (let i = 0; i < chunk.length; i++) {
      if ((chunk[i] ?? 0) > 32) continue;
      const text = carry + chunk.toString("latin1", start, i);
      carry = "";
      if (text) token(text);
      start = i + 1;
    }
    carry += chunk.toString("latin1", start);
  }
  if (carry) token(carry);
  if ((await exit) !== 0) throw new Error(`unzip failed for ${zip}; delete it to download again`);
  const shape = [meta.get("ncols"), meta.get("nrows"), meta.get("xllcorner"), meta.get("yllcorner")];
  if (shape.join() !== [SRC_COLS, SRC_ROWS, -180, -90].join() || index !== SRC_COLS * SRC_ROWS) throw new Error(`Unexpected grid ${zip}: ${shape.join()}`);
}

async function sumGrid(zip: string): Promise<Float64Array> {
  const grid = new Float64Array(COLS * ROWS);
  await readGrid(zip, (cell, value) => void (grid[cell] = (grid[cell] ?? 0) + value));
  return grid;
}

function encode(density: number): number {
  if (!(density >= ZERO_BELOW)) return 0;
  const clamped = Math.min(MAX_DENSITY, Math.max(MIN_DENSITY, density));
  return 1 + Math.round((254 * Math.log10(clamped / MIN_DENSITY)) / Math.log10(MAX_DENSITY / MIN_DENSITY));
}

function decode(code: number): number {
  return code === 0 ? 0 : MIN_DENSITY * (MAX_DENSITY / MIN_DENSITY) ** ((code - 1) / 254);
}

const sphereArea = (row: number): number =>
  EARTH_RADIUS_KM ** 2 * (Math.PI / 180) * Math.abs(Math.sin(((90 - row) * Math.PI) / 180) - Math.sin(((89 - row) * Math.PI) / 180));

const ENCODING = `Uint8 row-major ${COLS}x${ROWS}, row 0 centred at 89.5N, column 0 centred at 179.5W. 0 = under ${ZERO_BELOW} people per km2; 1..255 = log10 scale, density = ${MIN_DENSITY} * 10^(5 * (code - 1) / 254) people per km2 of land, clamped to ${MIN_DENSITY}..${MAX_DENSITY}.`;

function attribution(): string {
  const steps = STEPS.map(([year, step]) => `${year} (${step})`).join(", ");
  return `# Population density grids\n\nThe files in this directory are derived from **HYDE 3.2.1** (History Database of the Global Environment, baseline scenario) by Kees Klein Goldewijk et al., Utrecht University and PBL Netherlands Environmental Assessment Agency.\n\n## Citation\n\n${CITATION}\n\n## License\n\nThe HYDE 3.2.1 readme states: "The Creative Commons License (CC BY 3.0) applies to all of the HYDE data." The DANS Data Station record lists the deposit as CC0 1.0. Either way, redistribution of this derived product is permitted with attribution.\n\n## Source\n\n- Dataset: ${DATASET} (DANS Data Station Archaeology, file \`HYDE3_2_1-baseline.zip\`, id ${BASELINE_FILE}; land area from \`HYDE3_2_1-general_supplementary.zip\`, id ${GENERAL_FILE})\n- Only the needed members are fetched with HTTP range requests from ${ACCESS}/<id>\n- HYDE 3.3 (https://doi.org/10.24416/UU01-67UHB4, CC BY 4.0) is served behind a browser proof-of-work challenge and could not be downloaded by a script.\n\n## Processing\n\nGenerated by \`scripts/build-population.mts\` (\`npm run data:population\`).\n\n1. Population counts \`popc_<step>.asc\` (5 arc-minute, 4320 x 2160) are summed into 1 degree cells (12 x 12 source cells each).\n2. Density is that sum divided by the summed HYDE maximum land area \`maxln_cr.asc\` of the cell, in people per km2 of land. Cells without land area use the spherical cell area.\n3. Encoding: ${ENCODING}\n4. Time steps (file year and HYDE step): ${steps}. HYDE 3.2.1 has no 500 BCE step and ends in 2017, which stands in for 2020.\n`;
}

async function main(): Promise<void> {
  await Promise.all([mkdir(CACHE, { recursive: true }), mkdir(OUT, { recursive: true })]);
  console.log("Loading land area");
  const land = await sumGrid(await cached(GENERAL_FILE, "maxln_cr.asc"));
  for (const [year, step] of STEPS) {
    const population = await sumGrid(await cached(BASELINE_FILE, `popc_${step}.asc`));
    const bytes = new Uint8Array(COLS * ROWS);
    let raw = 0;
    let decoded = 0;
    for (let cell = 0; cell < bytes.length; cell++) {
      const area = (land[cell] ?? 0) > 0 ? (land[cell] ?? 0) : sphereArea(Math.floor(cell / COLS));
      const people = population[cell] ?? 0;
      bytes[cell] = encode(people / area);
      raw += people;
      decoded += decode(bytes[cell] ?? 0) * area;
    }
    await writeFile(path.join(OUT, `${year}.bin`), bytes);
    console.log(`${year} (${step}): ${(raw / 1e6).toFixed(1)} M people, ${(decoded / 1e6).toFixed(1)} M decoded, ${bytes.filter((code) => code > 0).length} cells`);
  }
  const years = STEPS.map(([year]) => year);
  const hydeSteps = Object.fromEntries(STEPS.map(([year, step]) => [String(year), step]));
  const source = `HYDE 3.2.1 baseline, ${DATASET}`;
  const index = { years, hydeSteps, width: COLS, height: ROWS, encoding: ENCODING, source, license: LICENSE, attribution: ATTRIBUTION };
  await writeFile(path.join(OUT, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
  await writeFile(path.join(OUT, "ATTRIBUTION.md"), attribution());
  console.log(`Wrote ${STEPS.length} slices to ${OUT}`);
}

await main();
