import { describe, expect, it } from "vitest";
import { mergeCaps, triangulateCap } from "@/geo/capTriangulation";
import { capGeometry, decodeLandCaps, encodeLandCaps } from "@/geo/landCaps";
import { polygonFromLonLat } from "@/geo/topoBuilder";

describe("land cap binary format", () => {
  it("round-trips triangulated caps and keeps every index in range", () => {
    const land = mergeCaps([
      triangulateCap(polygonFromLonLat([[0, 0], [20, 0], [20, 15], [0, 15]]), 3.5),
      triangulateCap(polygonFromLonLat([[100, -10], [120, -10], [110, 5]]), 3.5),
    ]);
    const barriers = triangulateCap(polygonFromLonLat([[80, 28], [90, 28], [90, 32], [80, 32]]), 1);
    const buffer = encodeLandCaps([
      { mesh: land, radii: new Array<number>(land.lonLat.length / 2).fill(1.0045) },
      { mesh: barriers, radii: new Array<number>(barriers.lonLat.length / 2).fill(1.02) },
    ]);
    const decoded = decodeLandCaps(buffer);
    expect(decoded).not.toBeNull();
    expect(Array.from(decoded?.land.indices ?? [])).toEqual(land.indices);
    expect(decoded?.barriers.radiusCode.length).toBe(barriers.lonLat.length / 2);

    const geometry = capGeometry(decoded!.land);
    const vertices = geometry.getAttribute("position").count;
    expect(Math.max(...Array.from(geometry.getIndex()?.array ?? []))).toBeLessThan(vertices);
    const position = geometry.getAttribute("position");
    expect(Math.hypot(position.getX(0), position.getY(0), position.getZ(0))).toBeCloseTo(1.0045, 4);
  });
});
