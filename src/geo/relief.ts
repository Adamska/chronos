import { ClampToEdgeWrapping, DataTexture, LinearFilter, RedFormat, RepeatWrapping, UnsignedByteType } from "three";

export const RELIEF_URL = "/data/elevation.bin";
export const RELIEF_WIDTH = 720;
export const RELIEF_HEIGHT = 360;

let pending: Promise<Uint8Array | null> | null = null;

export function loadReliefGrid(): Promise<Uint8Array | null> {
  pending ??= fetch(RELIEF_URL)
    .then((response) => (response.ok ? response.arrayBuffer() : null))
    .then((buffer) => (buffer && buffer.byteLength === RELIEF_WIDTH * RELIEF_HEIGHT ? new Uint8Array(buffer) : null))
    .catch(() => null);
  return pending;
}

export function createReliefTexture(grid: Uint8Array): DataTexture {
  const texture = new DataTexture(grid, RELIEF_WIDTH, RELIEF_HEIGHT, RedFormat, UnsignedByteType);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}

export function elevationAt(grid: Uint8Array, lon: number, lat: number): number {
  const col = Math.min(RELIEF_WIDTH - 1, Math.max(0, Math.floor(((lon + 180) / 360) * RELIEF_WIDTH)));
  const row = Math.min(RELIEF_HEIGHT - 1, Math.max(0, Math.floor(((90 - lat) / 180) * RELIEF_HEIGHT)));
  const code = grid[row * RELIEF_WIDTH + col] ?? 128;
  if (code >= 128) return ((code - 128) / 127) ** 2 * 6000;
  return -(((127 - code) / 127) ** 2) * 8000;
}
