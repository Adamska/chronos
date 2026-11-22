import { BufferGeometry, Float32BufferAttribute, Uint32BufferAttribute } from "three";
import type { CapMesh } from "@/geo/capTriangulation";
import { lonLatToVector3 } from "@/geo/sphericalMath";

export const LAND_CAPS_URL = "/generated/land-caps.bin";
const MAGIC = 0x43485231;
const COORDINATE_SCALE = 60;
const RADIUS_SCALE = 100_000;

export interface CapLayer {
  readonly lonLat: Int16Array;
  readonly radiusCode: Uint16Array;
  readonly indices: Uint32Array;
}

export interface LandCaps {
  readonly land: CapLayer;
  readonly barriers: CapLayer;
}

const padded = (bytes: number) => Math.ceil(bytes / 4) * 4;

function layerBytes(vertices: number, indices: number): number {
  return padded(vertices * 4) + padded(vertices * 2) + indices * 4;
}

export function encodeLandCaps(layers: readonly { readonly mesh: CapMesh; readonly radii: readonly number[] }[]): ArrayBuffer {
  const header = 2 + layers.length * 2;
  const size = header * 4 + layers.reduce((sum, { mesh }) => sum + layerBytes(mesh.lonLat.length / 2, mesh.indices.length), 0);
  const buffer = new ArrayBuffer(size);
  const head = new Uint32Array(buffer, 0, header);
  head[0] = MAGIC;
  head[1] = layers.length;
  let offset = header * 4;
  layers.forEach(({ mesh, radii }, layer) => {
    const vertices = mesh.lonLat.length / 2;
    head[2 + layer * 2] = vertices;
    head[3 + layer * 2] = mesh.indices.length;
    new Int16Array(buffer, offset, vertices * 2).set(mesh.lonLat.map((value) => Math.round(value * COORDINATE_SCALE)));
    offset += padded(vertices * 4);
    new Uint16Array(buffer, offset, vertices).set(radii.map((radius) => Math.round((radius - 1) * RADIUS_SCALE)));
    offset += padded(vertices * 2);
    new Uint32Array(buffer, offset, mesh.indices.length).set(mesh.indices);
    offset += mesh.indices.length * 4;
  });
  return buffer;
}

export function decodeLandCaps(buffer: ArrayBuffer): LandCaps | null {
  const head = new Uint32Array(buffer, 0, 2);
  if (head[0] !== MAGIC || head[1] !== 2) return null;
  const counts = new Uint32Array(buffer, 8, 4);
  let offset = 24;
  const read = (vertices: number, indices: number): CapLayer => {
    const lonLat = new Int16Array(buffer, offset, vertices * 2);
    offset += padded(vertices * 4);
    const radiusCode = new Uint16Array(buffer, offset, vertices);
    offset += padded(vertices * 2);
    const indexArray = new Uint32Array(buffer, offset, indices);
    offset += indices * 4;
    return { lonLat, radiusCode, indices: indexArray };
  };
  const land = read(counts[0] ?? 0, counts[1] ?? 0);
  const barriers = read(counts[2] ?? 0, counts[3] ?? 0);
  return { land, barriers };
}

export function capGeometry(layer: CapLayer): BufferGeometry {
  const vertices = layer.radiusCode.length;
  const positions = new Float32Array(vertices * 3);
  const normals = new Float32Array(vertices * 3);
  const point = lonLatToVector3(0, 0, 1);
  for (let i = 0; i < vertices; i += 1) {
    const radius = 1 + (layer.radiusCode[i] ?? 0) / RADIUS_SCALE;
    lonLatToVector3((layer.lonLat[i * 2] ?? 0) / COORDINATE_SCALE, (layer.lonLat[i * 2 + 1] ?? 0) / COORDINATE_SCALE, 1, point);
    normals.set([point.x, point.y, point.z], i * 3);
    positions.set([point.x * radius, point.y * radius, point.z * radius], i * 3);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  geometry.setIndex(new Uint32BufferAttribute(layer.indices, 1));
  geometry.computeBoundingSphere();
  return geometry;
}

export async function fetchLandCaps(): Promise<LandCaps | null> {
  try {
    const response = await fetch(LAND_CAPS_URL);
    return response.ok ? decodeLandCaps(await response.arrayBuffer()) : null;
  } catch {
    return null;
  }
}
