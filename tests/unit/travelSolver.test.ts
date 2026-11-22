import { describe, expect, it } from "vitest";
import { solveTravelGrid } from "@/geo/travelSolver";

const width = 180;
const height = 90;
const model = { landKmPerDay: 32, seaKmPerDay: 110, openOceanFactor: 8 };

function grid(mask: Uint8Array) {
  return { width, height, mask, barriers: [] };
}

describe("travel-time solver", () => {
  it("reaches every cell of an all-land planet within two years", async () => {
    const days = await solveTravelGrid(grid(new Uint8Array(width * height).fill(255)), [0, 0], model);
    expect(days).not.toBeNull();
    const finite = Array.from(days ?? []).filter(Number.isFinite);
    expect(finite.length).toBe(width * height);
    expect(Math.max(...finite)).toBeLessThan(730);
  });

  it("grows travel time with distance from the origin", async () => {
    const days = (await solveTravelGrid(grid(new Uint8Array(width * height).fill(255)), [0, 0], model)) ?? new Float32Array();
    const at = (lon: number, lat: number) => days[Math.floor((90 - lat) / 2) * width + Math.floor((lon + 180) / 2)] ?? Number.NaN;
    expect(at(1, 1)).toBeLessThan(at(20, 1));
    expect(at(20, 1)).toBeLessThan(at(90, 1));
  });

  it("treats mountain barriers as slower terrain", async () => {
    const mask = new Uint8Array(width * height).fill(255);
    const open = (await solveTravelGrid(grid(mask), [0, 0], model)) ?? new Float32Array();
    const blocked =
      (await solveTravelGrid({ width, height, mask, barriers: [{ polygon: [[4, -30], [8, -30], [8, 30], [4, 30]], height: 0.02 }] }, [0, 0], model)) ??
      new Float32Array();
    const cell = 45 * width + 96;
    expect(blocked[cell] ?? 0).toBeGreaterThan(open[cell] ?? 0);
  });
});
