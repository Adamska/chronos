import { describe, expect, it } from "vitest";
import {
  POPULATION_HEIGHT,
  POPULATION_WIDTH,
  decodeDensity,
  densityAt,
  parsePopulationIndex,
  populationBracket,
  populationCell,
} from "@/geo/population";

const YEARS = [-3000, -2000, -1000, 1, 100, 1700, 1750, 2000, 2017];

describe("population bracket", () => {
  it("interpolates between the surrounding slices", () => {
    expect(populationBracket(-1500, YEARS)).toEqual({ from: -2000, to: -1000, weight: 0.5 });
    expect(populationBracket(1725, YEARS)).toEqual({ from: 1700, to: 1750, weight: 0.5 });
    const late = populationBracket(2010, YEARS);
    expect(late?.from).toBe(2000);
    expect(late?.to).toBe(2017);
    expect(late?.weight).toBeCloseTo(10 / 17, 10);
  });

  it("starts a new bracket on an exact slice year", () => {
    expect(populationBracket(100, YEARS)).toEqual({ from: 100, to: 1700, weight: 0 });
    expect(populationBracket(1, YEARS)).toEqual({ from: 1, to: 100, weight: 0 });
  });

  it("clamps outside the covered range", () => {
    expect(populationBracket(-9000, YEARS)).toEqual({ from: -3000, to: -3000, weight: 0 });
    expect(populationBracket(2025, YEARS)).toEqual({ from: 2017, to: 2017, weight: 0 });
    expect(populationBracket(1500, [1500])).toEqual({ from: 1500, to: 1500, weight: 0 });
    expect(populationBracket(1500, [])).toBeNull();
  });
});

describe("population decoding", () => {
  it("maps codes onto the log scale", () => {
    expect(decodeDensity(0)).toBe(0);
    expect(decodeDensity(1)).toBeCloseTo(0.1, 10);
    expect(decodeDensity(255)).toBeCloseTo(10_000, 6);
    expect(decodeDensity(1 + 254 * 0.6)).toBeCloseTo(100, 6);
    expect(decodeDensity(300)).toBeCloseTo(10_000, 6);
  });

  it("indexes cells from the north-west corner", () => {
    expect(populationCell(-179.5, 89.5)).toBe(0);
    expect(populationCell(179.5, -89.5)).toBe(POPULATION_WIDTH * POPULATION_HEIGHT - 1);
    expect(populationCell(180, 0)).toBe(populationCell(-180, 0));
    expect(populationCell(2.35, 48.85)).toBe(41 * POPULATION_WIDTH + 182);
  });

  it("reads densities from a grid", () => {
    const grid = new Uint8Array(POPULATION_WIDTH * POPULATION_HEIGHT);
    grid[populationCell(31.2, 30.5)] = 128;
    expect(densityAt(grid, 31.2, 30.5)).toBeCloseTo(Math.sqrt(1000), 6);
    expect(densityAt(grid, 0, 0)).toBe(0);
  });

  it("validates the index file", () => {
    const index = parsePopulationIndex({ years: [100, -3000], width: 360, height: 180, encoding: "e", source: "s", license: "l", attribution: "a" });
    expect(index?.years).toEqual([-3000, 100]);
    expect(parsePopulationIndex({ years: ["x"], width: 360, height: 180 })).toBeNull();
    expect(parsePopulationIndex({ years: [1], width: 720, height: 360 })).toBeNull();
  });
});
