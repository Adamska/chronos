import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { TERRAIN_BARRIERS } from "../src/data/geography";
import { mergeCaps, triangulateCap } from "../src/geo/capTriangulation";
import { LAND_TOP } from "../src/geo/landBuild";
import { LAND_CAPS_URL, encodeLandCaps } from "../src/geo/landCaps";
import { extractLandPolygons, loadLandTopology, polygonFromLonLat } from "../src/geo/topoBuilder";

const started = performance.now();
const topology = await loadLandTopology();
const land = mergeCaps(extractLandPolygons(topology).map((rings) => triangulateCap(rings, 3.5)));
const barrierMeshes = TERRAIN_BARRIERS.map((barrier) => ({ mesh: triangulateCap(polygonFromLonLat(barrier.polygon), 1), radius: LAND_TOP + barrier.height }));
const barriers = mergeCaps(barrierMeshes.map(({ mesh }) => mesh));
const barrierRadii = barrierMeshes.flatMap(({ mesh, radius }) => new Array<number>(mesh.lonLat.length / 2).fill(radius));

const buffer = encodeLandCaps([
  { mesh: land, radii: new Array<number>(land.lonLat.length / 2).fill(LAND_TOP) },
  { mesh: barriers, radii: barrierRadii },
]);
const target = join(process.cwd(), "public", LAND_CAPS_URL);
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, Buffer.from(buffer));
console.log(
  `Land caps: ${land.indices.length / 3} land and ${barriers.indices.length / 3} barrier triangles, ${(buffer.byteLength / 1024).toFixed(0)} KB in ${Math.round(performance.now() - started)} ms`,
);
