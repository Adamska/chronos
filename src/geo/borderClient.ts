import type { Topology } from "topojson-specification";
import { type BorderRaster, type BorderStyle, activeKey, activePolities, rasterizeBorders } from "@/geo/borderRaster";

const INDEX_URL = "/data/borders/index.json";

interface BorderIndex {
  readonly attribution: string;
  readonly bins: readonly { readonly bin: number; readonly file: string }[];
}

type Reply = { readonly id: number; readonly raster?: BorderRaster; readonly unchanged?: boolean; readonly error?: string };

let index: Promise<BorderIndex | null> | null = null;
let worker: Worker | null = null;
let workerBroken = false;
let requestId = 0;
const pending = new Map<number, (reply: Reply) => void>();

export function loadBorderIndex(): Promise<BorderIndex | null> {
  index ??= fetch(INDEX_URL)
    .then((response) => (response.ok ? (response.json() as Promise<BorderIndex>) : null))
    .catch(() => null);
  return index;
}

export function binUrlFor(borderIndex: BorderIndex, year: number): string | null {
  const eligible = borderIndex.bins.filter((entry) => entry.bin <= year);
  const chosen = eligible[eligible.length - 1] ?? borderIndex.bins[0];
  return chosen ? `/data/borders/${chosen.file}` : null;
}

function ensureWorker(): Worker | null {
  if (workerBroken || typeof Worker === "undefined" || typeof OffscreenCanvas === "undefined") return null;
  if (worker) return worker;
  try {
    worker = new Worker(new URL("../workers/borders.worker.ts", import.meta.url), { type: "module" });
    worker.onmessage = (event: MessageEvent<Reply>) => {
      pending.get(event.data.id)?.(event.data);
      pending.delete(event.data.id);
    };
    worker.onerror = (event) => {
      event.preventDefault();
      workerBroken = true;
      pending.forEach((resolve, id) => resolve({ id, error: "worker failed" }));
      pending.clear();
    };
    return worker;
  } catch {
    workerBroken = true;
    return null;
  }
}

async function rasterizeOnMainThread(url: string, year: number, width: number, height: number, previousKey: string, style: BorderStyle): Promise<BorderRaster | "unchanged"> {
  const topology = (await (await fetch(url)).json()) as Topology;
  const polities = activePolities(topology, year);
  if (activeKey(polities) === previousKey) return "unchanged";
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("No 2D context");
  return rasterizeBorders(polities, context, width, height, style);
}

export async function renderBorders(year: number, width: number, height: number, previousKey: string, style: BorderStyle = "fill"): Promise<BorderRaster | "unchanged" | null> {
  const borderIndex = await loadBorderIndex();
  const url = borderIndex ? binUrlFor(borderIndex, year) : null;
  if (!url) return null;
  const instance = ensureWorker();
  if (instance) {
    requestId += 1;
    const id = requestId;
    const reply = await new Promise<Reply>((resolve) => {
      pending.set(id, resolve);
      instance.postMessage({ id, url, year, width, height, previousKey, style });
    });
    if (reply.unchanged) return "unchanged";
    if (reply.raster) return reply.raster;
  }
  return rasterizeOnMainThread(url, year, width, height, previousKey, style).catch(() => null);
}
