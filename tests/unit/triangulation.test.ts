import { describe, expect, it } from "vitest";
import { TERRAIN_BARRIERS } from "@/data/geography";
import { buildExtrudedGeometry, extractLandPolygons, loadLandTopology, polygonFromLonLat } from "@/geo/topoBuilder";

function onceUsedEdges(positions: ArrayLike<number>): number {
  const key = (i: number) => `${positions[i * 3]?.toFixed(6)},${positions[i * 3 + 1]?.toFixed(6)},${positions[i * 3 + 2]?.toFixed(6)}`;
  const edges = new Map<string, number>();
  for (let t = 0; t < positions.length / 3; t += 3) {
    for (const [a, b] of [[t, t + 1], [t + 1, t + 2], [t + 2, t]] as const) {
      const ka = key(a);
      const kb = key(b);
      const edge = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
      edges.set(edge, (edges.get(edge) ?? 0) + 1);
    }
  }
  return [...edges.values()].filter((count) => count === 1).length;
}

function outwardFraction(positions: ArrayLike<number>): number {
  let outward = 0;
  const triangles = positions.length / 9;
  for (let t = 0; t < triangles; t += 1) {
    const p = (i: number) => [positions[t * 9 + i * 3] ?? 0, positions[t * 9 + i * 3 + 1] ?? 0, positions[t * 9 + i * 3 + 2] ?? 0];
    const [a, b, c] = [p(0), p(1), p(2)] as [number[], number[], number[]];
    const u = [b[0]! - a[0]!, b[1]! - a[1]!, b[2]! - a[2]!];
    const v = [c[0]! - a[0]!, c[1]! - a[1]!, c[2]! - a[2]!];
    const n = [u[1]! * v[2]! - u[2]! * v[1]!, u[2]! * v[0]! - u[0]! * v[2]!, u[0]! * v[1]! - u[1]! * v[0]!];
    const centroid = [a[0]! + b[0]! + c[0]!, a[1]! + b[1]! + c[1]!, a[2]! + b[2]! + c[2]!];
    if (n[0]! * centroid[0]! + n[1]! * centroid[1]! + n[2]! * centroid[2]! >= 0) outward += 1;
  }
  return outward / triangles;
}

describe("spherical triangulation", () => {
  it("builds the land caps without cracks and with outward winding", async () => {
    const topology = await loadLandTopology();
    const geometry = buildExtrudedGeometry(extractLandPolygons(topology), { baseRadius: 1, topRadius: 1.0045, maxEdgeDegrees: 3.5, walls: false });
    const positions = geometry.getAttribute("position").array;
    expect(positions.length / 9).toBeGreaterThan(20_000);
    expect(onceUsedEdges(positions)).toBeLessThan(5_600);
    expect(outwardFraction(positions)).toBeGreaterThan(0.999);
  });

  it("keeps every vertex on or above the sphere", async () => {
    const geometry = buildExtrudedGeometry([polygonFromLonLat(TERRAIN_BARRIERS[0]!.polygon)], { baseRadius: 1, topRadius: 1.01, maxEdgeDegrees: 1 });
    const positions = geometry.getAttribute("position").array;
    for (let i = 0; i < positions.length; i += 3) {
      expect(Math.hypot(positions[i] ?? 0, positions[i + 1] ?? 0, positions[i + 2] ?? 0)).toBeGreaterThan(0.999);
    }
  });
});
