import { geoEquirectangular, geoPath } from "d3-geo";
import { CanvasTexture, ClampToEdgeWrapping, LinearFilter, RepeatWrapping } from "three";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

const FIELD_WIDTH = 1024;
const FIELD_HEIGHT = 512;

function boxBlurHorizontal(source: Float32Array, target: Float32Array, width: number, height: number, radius: number): void {
  const span = radius * 2 + 1;
  for (let y = 0; y < height; y += 1) {
    const row = y * width;
    let sum = 0;
    for (let k = -radius; k <= radius; k += 1) sum += source[row + ((k + width) % width)] ?? 0;
    for (let x = 0; x < width; x += 1) {
      target[row + x] = sum / span;
      const outgoing = source[row + ((x - radius + width) % width)] ?? 0;
      const incoming = source[row + ((x + radius + 1) % width)] ?? 0;
      sum += incoming - outgoing;
    }
  }
}

function boxBlurVertical(source: Float32Array, target: Float32Array, width: number, height: number, radius: number): void {
  const span = radius * 2 + 1;
  for (let x = 0; x < width; x += 1) {
    let sum = 0;
    for (let k = -radius; k <= radius; k += 1) sum += source[Math.min(height - 1, Math.max(0, k)) * width + x] ?? 0;
    for (let y = 0; y < height; y += 1) {
      target[y * width + x] = sum / span;
      const outgoing = source[Math.max(0, y - radius) * width + x] ?? 0;
      const incoming = source[Math.min(height - 1, y + radius + 1) * width + x] ?? 0;
      sum += incoming - outgoing;
    }
  }
}

function blurField(field: Float32Array, width: number, height: number, radius: number, passes: number): Float32Array {
  const result = Float32Array.from(field);
  const scratch = new Float32Array(field.length);
  for (let pass = 0; pass < passes; pass += 1) {
    boxBlurHorizontal(result, scratch, width, height, radius);
    boxBlurVertical(scratch, result, width, height, radius);
  }
  return result;
}

function rasterizeLand(topology: Topology, objectName: string): Float32Array {
  const canvas = document.createElement("canvas");
  canvas.width = FIELD_WIDTH;
  canvas.height = FIELD_HEIGHT;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const mask = new Float32Array(FIELD_WIDTH * FIELD_HEIGHT);
  const object = topology.objects[objectName] as GeometryCollection | undefined;
  if (!context || !object) return mask;

  const projection = geoEquirectangular()
    .scale(FIELD_WIDTH / (2 * Math.PI))
    .translate([FIELD_WIDTH / 2, FIELD_HEIGHT / 2]);
  const path = geoPath(projection, context);
  context.fillStyle = "#ffffff";
  context.beginPath();
  path(feature(topology, object));
  context.fill();

  const pixels = context.getImageData(0, 0, FIELD_WIDTH, FIELD_HEIGHT).data;
  for (let i = 0; i < mask.length; i += 1) mask[i] = (pixels[i * 4] ?? 0) / 255;
  return mask;
}

export function createShelfTexture(topology: Topology, objectName = "land"): CanvasTexture {
  const mask = rasterizeLand(topology, objectName);
  const shelf = blurField(mask, FIELD_WIDTH, FIELD_HEIGHT, 4, 2);
  const basin = blurField(mask, FIELD_WIDTH, FIELD_HEIGHT, 22, 3);

  const canvas = document.createElement("canvas");
  canvas.width = FIELD_WIDTH;
  canvas.height = FIELD_HEIGHT;
  const context = canvas.getContext("2d");
  if (context) {
    const image = context.createImageData(FIELD_WIDTH, FIELD_HEIGHT);
    for (let i = 0; i < mask.length; i += 1) {
      const depth = Math.min(1, 0.55 * Math.sqrt(shelf[i] ?? 0) + 0.65 * Math.sqrt(basin[i] ?? 0));
      const value = Math.round(depth * 255);
      image.data[i * 4] = value;
      image.data[i * 4 + 1] = value;
      image.data[i * 4 + 2] = value;
      image.data[i * 4 + 3] = 255;
    }
    context.putImageData(image, 0, 0);
  }

  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  return texture;
}
