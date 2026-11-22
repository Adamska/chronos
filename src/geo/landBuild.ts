import type { BufferGeometry } from "three";
import type { Topology } from "topojson-specification";
import { TERRAIN_BARRIERS } from "@/data/geography";
import { type CanvasFactory, computeShelfField, rasterizeLand } from "@/geo/bathymetry";
import {
  type MeshBuffers,
  appendExtrudedPolygon,
  buildCoastlineGeometry,
  extractLandPolygons,
  geometryFromBuffers,
  polygonFromLonLat,
} from "@/geo/topoBuilder";

export const LAND_BASE = 1.0;
export const LAND_TOP = 1.0045;
export const MASK_WIDTH = 720;
export const MASK_HEIGHT = 360;
export const CELL_DEGREES = 360 / MASK_WIDTH;

const SLICE_BUDGET_MS = 8;

export interface LandPayload {
  readonly land: BufferGeometry;
  readonly barriers: BufferGeometry;
  readonly coastline: BufferGeometry;
  readonly shelf: Uint8Array;
  readonly mask: Uint8Array;
}

function yieldToBrowser(): Promise<void> {
  const scheduler = (globalThis as { scheduler?: { yield?: () => Promise<void> } }).scheduler;
  if (scheduler?.yield) return scheduler.yield();
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function createSlicer() {
  let sliceStart = performance.now();
  return async () => {
    if (performance.now() - sliceStart < SLICE_BUDGET_MS) return;
    await yieldToBrowser();
    sliceStart = performance.now();
  };
}

export async function buildLandPayload(topology: Topology, makeCanvas: CanvasFactory): Promise<LandPayload> {
  const slice = createSlicer();
  const landBuffers: MeshBuffers = { positions: [], normals: [] };
  for (const rings of extractLandPolygons(topology)) {
    appendExtrudedPolygon(landBuffers, rings, { baseRadius: LAND_BASE, topRadius: LAND_TOP, maxEdgeDegrees: 3.5 });
    await slice();
  }

  const barrierBuffers: MeshBuffers = { positions: [], normals: [] };
  for (const barrier of TERRAIN_BARRIERS) {
    appendExtrudedPolygon(barrierBuffers, polygonFromLonLat(barrier.polygon), {
      baseRadius: LAND_TOP - 0.001,
      topRadius: LAND_TOP + barrier.height,
      maxEdgeDegrees: 1,
    });
    await slice();
  }

  const coastline = buildCoastlineGeometry(topology, LAND_TOP + 0.0004);
  await yieldToBrowser();
  const coarse = rasterizeLand(topology, makeCanvas, MASK_WIDTH, MASK_HEIGHT);
  const mask = new Uint8Array(coarse.length);
  coarse.forEach((value, index) => (mask[index] = Math.round(value * 255)));
  await yieldToBrowser();
  const shelf = await computeShelfField(topology, makeCanvas, yieldToBrowser);

  return { land: geometryFromBuffers(landBuffers), barriers: geometryFromBuffers(barrierBuffers), coastline, shelf, mask };
}
