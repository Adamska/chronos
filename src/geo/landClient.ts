import { type LandPayload, buildLandPayload } from "@/geo/landBuild";
import { loadLandTopology } from "@/geo/topoBuilder";

let pending: Promise<LandPayload> | null = null;
let resolvedMask: Uint8Array | null = null;
const maskListeners = new Set<(mask: Uint8Array) => void>();

const makeCanvas = (width: number, height: number) => {
  if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(width, height);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export function loadLandPayload(): Promise<LandPayload> {
  if (!pending) {
    pending = loadLandTopology()
      .then((topology) => buildLandPayload(topology, makeCanvas))
      .then((payload) => {
        resolvedMask = payload.mask;
        maskListeners.forEach((listener) => listener(payload.mask));
        return payload;
      });
  }
  return pending;
}

export function onLandMask(listener: (mask: Uint8Array) => void): () => void {
  if (resolvedMask) listener(resolvedMask);
  maskListeners.add(listener);
  return () => maskListeners.delete(listener);
}
