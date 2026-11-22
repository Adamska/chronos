import earcut from "earcut";
import { Vector3 } from "three";
import { densifyPath, interiorGrid, planarPolygon, refineTriangles, type PolygonRings } from "@/geo/planarRings";
import { lonLatToVector3 } from "@/geo/sphericalMath";

const MAX_CHORD_DEGREES = 6;
const a = new Vector3();
const b = new Vector3();
const c = new Vector3();
const ab = new Vector3();
const ac = new Vector3();
const normal = new Vector3();
const centroid = new Vector3();

export interface CapMesh {
  readonly lonLat: number[];
  readonly indices: number[];
}

export function triangulateCap(sourceRings: PolygonRings, maxEdge: number): CapMesh {
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

  const refined = refineTriangles(coords, earcut(coords, holes.length > 0 ? holes : null, 2), MAX_CHORD_DEGREES);
  const indices: number[] = [];
  for (let i = 0; i < refined.length; i += 3) {
    const ia = refined[i] ?? 0;
    const ib = refined[i + 1] ?? 0;
    const ic = refined[i + 2] ?? 0;
    const ax = coords[ia * 2] ?? 0;
    const ay = coords[ia * 2 + 1] ?? 0;
    const planarArea = ((coords[ib * 2] ?? 0) - ax) * ((coords[ic * 2 + 1] ?? 0) - ay) - ((coords[ib * 2 + 1] ?? 0) - ay) * ((coords[ic * 2] ?? 0) - ax);
    if (planarArea === 0) continue;
    lonLatToVector3(ax, ay, 1, a);
    lonLatToVector3(coords[ib * 2] ?? 0, coords[ib * 2 + 1] ?? 0, 1, b);
    lonLatToVector3(coords[ic * 2] ?? 0, coords[ic * 2 + 1] ?? 0, 1, c);
    normal.crossVectors(ab.subVectors(b, a), ac.subVectors(c, a));
    const conditioned = normal.length() > 1e-6 * ab.length() * ac.length();
    const flip = conditioned ? normal.dot(centroid.copy(a).add(b).add(c)) < 0 : planarArea < 0;
    indices.push(ia, flip ? ic : ib, flip ? ib : ic);
  }
  return { lonLat: coords, indices };
}

export function mergeCaps(meshes: readonly CapMesh[]): CapMesh {
  const lonLat: number[] = [];
  const indices: number[] = [];
  for (const mesh of meshes) {
    const offset = lonLat.length / 2;
    for (const value of mesh.lonLat) lonLat.push(value);
    for (const index of mesh.indices) indices.push(index + offset);
  }
  return { lonLat, indices };
}
