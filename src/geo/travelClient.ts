import { TERRAIN_BARRIERS } from "@/data/geography";
import { MASK_HEIGHT, MASK_WIDTH } from "@/geo/landBuild";
import { type SolverGrid, solveTravelGrid } from "@/geo/travelSolver";
import type { TravelModel } from "@/geo/travelModels";
import type { LonLat } from "@/types/chronicle";

const WORKER_TIMEOUT_MS = 15_000;

let worker: Worker | null = null;
let workerBroken = false;
let requestId = 0;
const pending = new Map<number, (days: Float32Array | null) => void>();

function gridFor(mask: Uint8Array): SolverGrid {
  return { width: MASK_WIDTH, height: MASK_HEIGHT, mask, barriers: TERRAIN_BARRIERS };
}

function ensureWorker(): Worker | null {
  if (workerBroken || typeof Worker === "undefined") return null;
  if (worker) return worker;
  try {
    worker = new Worker(new URL("../workers/travel.worker.ts", import.meta.url), { type: "module" });
    worker.onmessage = (event: MessageEvent<{ id: number; days: Float32Array }>) => {
      pending.get(event.data.id)?.(event.data.days);
      pending.delete(event.data.id);
    };
    worker.onerror = (event) => {
      event.preventDefault();
      workerBroken = true;
      worker?.terminate();
      worker = null;
      pending.forEach((resolve) => resolve(null));
      pending.clear();
    };
    return worker;
  } catch {
    workerBroken = true;
    return null;
  }
}

function solveInWorker(mask: Uint8Array, origin: LonLat, model: TravelModel): Promise<Float32Array | null> {
  const instance = ensureWorker();
  if (!instance) return Promise.resolve(null);
  requestId += 1;
  const id = requestId;
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => {
      pending.delete(id);
      resolve(null);
    }, WORKER_TIMEOUT_MS);
    pending.set(id, (days) => {
      window.clearTimeout(timer);
      resolve(days);
    });
    instance.postMessage({ id, grid: gridFor(mask), origin, model: { landKmPerDay: model.landKmPerDay, seaKmPerDay: model.seaKmPerDay, openOceanFactor: model.openOceanFactor } });
  });
}

export async function solveTravelTimes(mask: Uint8Array, origin: LonLat, model: TravelModel, isStale: () => boolean): Promise<Float32Array | null> {
  const fromWorker = await solveInWorker(mask, origin, model);
  if (fromWorker || isStale()) return isStale() ? null : fromWorker;
  return solveTravelGrid(gridFor(mask), origin, model, isStale);
}
