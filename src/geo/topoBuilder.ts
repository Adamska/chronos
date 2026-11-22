import earcut from "earcut";
import { BufferGeometry, Float32BufferAttribute, Vector3 } from "three";
import { feature, mesh } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import type { MultiLineString, MultiPolygon, Polygon, Position } from "geojson";
import {
  densifyPath,
  interiorGrid,
  planarPolygon,
  refineTriangles,
  signedArea,
  unwrapPath,
  type PolygonRings,
} from "@/geo/planarRings";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import type { LonLat } from "@/types/chronicle";


export interface ExtrusionOptions {
  readonly baseRadius: number;
  readonly topRadius: number;
  readonly maxEdgeDegrees?: number;
  readonly walls?: boolean;
}

export interface MeshBuffers {
  positions: number[];
  normals: number[];
}

const vA = new Vector3();
const vB = new Vector3();
const vC = new Vector3();
const edgeAB = new Vector3();
const edgeAC = new Vector3();
const faceNormal = new Vector3();
const capOutward = new Vector3();
const MAX_CHORD_DEGREES = 6;


function pushTriangle(
  buffers: MeshBuffers,
  a: Vector3,
  b: Vector3,
  c: Vector3,
  outward: Vector3,
  radialNormals: boolean,
): void {
  faceNormal.crossVectors(edgeAB.subVectors(b, a), edgeAC.subVectors(c, a));
  const flip = faceNormal.dot(outward) < 0;
  const ordered = flip ? [a, c, b] : [a, b, c];
  faceNormal.normalize();
  if (flip) faceNormal.negate();
  for (const vertex of ordered) {
    buffers.positions.push(vertex.x, vertex.y, vertex.z);
    if (radialNormals) {
      const length = vertex.length() || 1;
      buffers.normals.push(vertex.x / length, vertex.y / length, vertex.z / length);
    } else {
      buffers.normals.push(faceNormal.x, faceNormal.y, faceNormal.z);
    }
  }
}

function appendCap(buffers: MeshBuffers, sourceRings: PolygonRings, radius: number, maxEdge: number): void {
  const rings = planarPolygon(sourceRings);
  const coords: number[] = [];
  const holes: number[] = [];
  rings.forEach((ring, index) => {
    if (index > 0) holes.push(coords.length / 2);
    for (const [lon = 0, lat = 0] of densifyPath(ring, maxEdge, false)) coords.push(lon, lat);
  });

  for (const [lon, lat] of interiorGrid(rings, maxEdge)) {
    holes.push(coords.length / 2);
    coords.push(lon, lat);
  }

  const triangles = earcut(coords, holes.length > 0 ? holes : null, 2);
  const refined = refineTriangles(coords, triangles, MAX_CHORD_DEGREES);

  for (let i = 0; i < refined.length; i += 3) {
    const ia = refined[i] ?? 0, ib = refined[i + 1] ?? 0, ic = refined[i + 2] ?? 0;
    lonLatToVector3(coords[ia * 2] ?? 0, coords[ia * 2 + 1] ?? 0, radius, vA);
    lonLatToVector3(coords[ib * 2] ?? 0, coords[ib * 2 + 1] ?? 0, radius, vB);
    lonLatToVector3(coords[ic * 2] ?? 0, coords[ic * 2 + 1] ?? 0, radius, vC);
    pushTriangle(buffers, vA, vB, vC, capOutward.copy(vA).add(vB).add(vC), true);
  }
}

function appendWalls(buffers: MeshBuffers, rings: PolygonRings, base: number, top: number, maxEdge: number): void {
  const b0 = new Vector3(), b1 = new Vector3(), t0 = new Vector3(), t1 = new Vector3();
  const outward = new Vector3();
  planarPolygon(rings).forEach((ring, ringIndex) => {
    const dense = densifyPath(ring, maxEdge, false);
    const side = (signedArea(dense) > 0 ? 1 : -1) * (ringIndex === 0 ? 1 : -1);
    for (let i = 0; i < dense.length; i += 1) {
      const p = dense[i];
      const q = dense[(i + 1) % dense.length];
      if (!p || !q) continue;
      lonLatToVector3(p[0] ?? 0, p[1] ?? 0, base, b0);
      lonLatToVector3(q[0] ?? 0, q[1] ?? 0, base, b1);
      lonLatToVector3(p[0] ?? 0, p[1] ?? 0, top, t0);
      lonLatToVector3(q[0] ?? 0, q[1] ?? 0, top, t1);
      outward.subVectors(b1, b0).cross(b0).multiplyScalar(side);
      pushTriangle(buffers, b0, b1, t1, outward, false);
      pushTriangle(buffers, b0, t1, t0, outward, false);
    }
  });
}

export function appendExtrudedPolygon(buffers: MeshBuffers, rings: PolygonRings, options: ExtrusionOptions): void {
  const { baseRadius, topRadius, maxEdgeDegrees = 2.5, walls = true } = options;
  if (rings.length === 0) return;
  appendCap(buffers, rings, topRadius, maxEdgeDegrees);
  if (walls && topRadius > baseRadius) appendWalls(buffers, rings, baseRadius, topRadius, maxEdgeDegrees);
}

export function buildExtrudedGeometry(polygons: readonly PolygonRings[], options: ExtrusionOptions): BufferGeometry {
  const buffers: MeshBuffers = { positions: [], normals: [] };
  for (const rings of polygons) appendExtrudedPolygon(buffers, rings, options);
  return geometryFromBuffers(buffers);
}

export function geometryFromBuffers(buffers: MeshBuffers): BufferGeometry {
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(buffers.positions, 3));
  geometry.setAttribute("normal", new Float32BufferAttribute(buffers.normals, 3));
  geometry.computeBoundingSphere();
  return geometry;
}

export function polygonFromLonLat(ring: readonly LonLat[]): PolygonRings {
  const closed: Position[] = ring.map(([lon, lat]) => [lon, lat]);
  const first = ring[0];
  const last = ring[ring.length - 1];
  if (first && last && (first[0] !== last[0] || first[1] !== last[1])) closed.push([first[0], first[1]]);
  return [closed];
}

function toPolygonList(geometry: Polygon | MultiPolygon): PolygonRings[] {
  return geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
}

export function extractLandPolygons(topology: Topology, objectName = "land"): PolygonRings[] {
  const object = topology.objects[objectName] as GeometryCollection | undefined;
  if (!object) return [];
  const collection = feature(topology, object);
  return collection.features.flatMap((entry) => {
    const { geometry } = entry;
    return geometry.type === "Polygon" || geometry.type === "MultiPolygon" ? toPolygonList(geometry) : [];
  });
}

export function buildCoastlineGeometry(topology: Topology, radius: number, objectName = "land"): BufferGeometry {
  const object = topology.objects[objectName] as GeometryCollection | undefined;
  const lines: MultiLineString = object ? mesh(topology, object) : { type: "MultiLineString", coordinates: [] };
  const positions: number[] = [];
  for (const line of lines.coordinates) {
    const dense = densifyPath(unwrapPath(line), 1.5, true);
    for (let i = 0; i < dense.length - 1; i += 1) {
      const p = dense[i];
      const q = dense[i + 1];
      if (!p || !q) continue;
      lonLatToVector3(p[0] ?? 0, p[1] ?? 0, radius, vA);
      lonLatToVector3(q[0] ?? 0, q[1] ?? 0, radius, vB);
      positions.push(vA.x, vA.y, vA.z, vB.x, vB.y, vB.z);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  return geometry;
}

export async function loadLandTopology(): Promise<Topology> {
  const module = await import("world-atlas/land-110m.json");
  return module.default as unknown as Topology;
}

export type { PolygonRings } from "@/geo/planarRings";
