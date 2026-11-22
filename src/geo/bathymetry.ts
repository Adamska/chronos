import { geoEquirectangular, geoPath } from "d3-geo";
import { ClampToEdgeWrapping, DataTexture, LinearFilter, RedFormat, RepeatWrapping, UnsignedByteType } from "three";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

export const SHELF_WIDTH = 512;
export const SHELF_HEIGHT = 256;

export type RasterCanvas = OffscreenCanvas | HTMLCanvasElement;
export type CanvasFactory = (width: number, height: number) => RasterCanvas;

type Context2D = OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D;

function context2d(canvas: RasterCanvas): Context2D | null {
  if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
    return canvas.getContext("2d", { willReadFrequently: true });
  }
  return (canvas as OffscreenCanvas).getContext("2d", { willReadFrequently: true });
}

function boxBlur(source: Float32Array, width: number, height: number, radius: number, passes: number): Float32Array {
  const result = Float32Array.from(source);
  const scratch = new Float32Array(source.length);
  const span = radius * 2 + 1;
  for (let pass = 0; pass < passes; pass += 1) {
    for (let y = 0; y < height; y += 1) {
      const row = y * width;
      let sum = 0;
      for (let k = -radius; k <= radius; k += 1) sum += result[row + ((k + width) % width)] ?? 0;
      for (let x = 0; x < width; x += 1) {
        scratch[row + x] = sum / span;
        sum += (result[row + ((x + radius + 1) % width)] ?? 0) - (result[row + ((x - radius + width) % width)] ?? 0);
      }
    }
    for (let x = 0; x < width; x += 1) {
      let sum = 0;
      for (let k = -radius; k <= radius; k += 1) sum += scratch[Math.min(height - 1, Math.max(0, k)) * width + x] ?? 0;
      for (let y = 0; y < height; y += 1) {
        result[y * width + x] = sum / span;
        sum += (scratch[Math.min(height - 1, y + radius + 1) * width + x] ?? 0) - (scratch[Math.max(0, y - radius) * width + x] ?? 0);
      }
    }
  }
  return result;
}

export function rasterizeLand(topology: Topology, makeCanvas: CanvasFactory, width: number, height: number, objectName = "land"): Float32Array {
  const canvas = makeCanvas(width, height);
  const context = context2d(canvas);
  const mask = new Float32Array(width * height);
  const object = topology.objects[objectName] as GeometryCollection | undefined;
  if (!context || !object) return mask;
  const projection = geoEquirectangular()
    .scale(width / (2 * Math.PI))
    .translate([width / 2, height / 2]);
  context.fillStyle = "#ffffff";
  context.beginPath();
  geoPath(projection, context)(feature(topology, object));
  context.fill();
  const pixels = context.getImageData(0, 0, width, height).data;
  for (let i = 0; i < mask.length; i += 1) mask[i] = (pixels[i * 4] ?? 0) / 255;
  return mask;
}

export async function computeShelfField(
  topology: Topology,
  makeCanvas: CanvasFactory,
  pause: () => Promise<void>,
): Promise<Uint8Array> {
  const mask = rasterizeLand(topology, makeCanvas, SHELF_WIDTH, SHELF_HEIGHT);
  await pause();
  const shelf = boxBlur(mask, SHELF_WIDTH, SHELF_HEIGHT, 2, 2);
  await pause();
  const basin = boxBlur(mask, SHELF_WIDTH, SHELF_HEIGHT, 11, 3);
  await pause();
  const field = new Uint8Array(SHELF_WIDTH * SHELF_HEIGHT);
  for (let y = 0; y < SHELF_HEIGHT; y += 1) {
    const target = (SHELF_HEIGHT - 1 - y) * SHELF_WIDTH;
    for (let x = 0; x < SHELF_WIDTH; x += 1) {
      const i = y * SHELF_WIDTH + x;
      const depth = Math.min(1, 0.55 * Math.sqrt(shelf[i] ?? 0) + 0.65 * Math.sqrt(basin[i] ?? 0));
      field[target + x] = Math.round(depth * 255);
    }
  }
  return field;
}

export function createShelfTexture(field: Uint8Array): DataTexture {
  const texture = new DataTexture(field, SHELF_WIDTH, SHELF_HEIGHT, RedFormat, UnsignedByteType);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}
