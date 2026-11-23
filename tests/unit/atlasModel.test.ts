import { describe, expect, it } from "vitest";
import { fractionToYear, yearToFraction } from "@/components/atlas/atlasScale";
import { parseYear } from "@/components/hud/usePaletteResults";
import { atlasYearsPerSecond, stepDwellSeconds } from "@/components/hud/usePlayback";
import { REGION_HISTORIES } from "@/data/world/regions";
import { LANGUAGE_STYLES, RELIGION_STYLES } from "@/data/world/regionStyles";
import { timelineValue } from "@/geo/regionRaster";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

describe("atlas timeline scale", () => {
  it("maps the full span onto 0..1 and back", () => {
    expect(yearToFraction(TIMELINE_MIN_YEAR)).toBe(0);
    expect(yearToFraction(TIMELINE_MAX_YEAR)).toBe(1);
    for (const year of [-2500, -800, 1, 476, 1066, 1492, 1789, 1914, 2000]) {
      expect(fractionToYear(yearToFraction(year))).toBeCloseTo(year, 6);
    }
  });

  it("is strictly increasing and gives recent centuries more room", () => {
    let previous = -1;
    for (let year = TIMELINE_MIN_YEAR; year <= TIMELINE_MAX_YEAR; year += 25) {
      const fraction = yearToFraction(year);
      expect(fraction).toBeGreaterThan(previous);
      previous = fraction;
    }
    expect(yearToFraction(2000) - yearToFraction(1800)).toBeGreaterThan(yearToFraction(-2800) - yearToFraction(-3000));
  });

  it("plays ancient times faster than modern ones", () => {
    expect(atlasYearsPerSecond(-2000)).toBeGreaterThan(atlasYearsPerSecond(1900));
    expect(stepDwellSeconds("one two three")).toBeLessThan(stepDwellSeconds(Array.from({ length: 60 }, () => "word").join(" ")));
  });
});

describe("search years", () => {
  it("understands plain, BCE and French dates", () => {
    expect(parseYear("1789")).toBe(1789);
    expect(parseYear("-44")).toBe(-44);
    expect(parseYear("44 BC")).toBe(-44);
    expect(parseYear("52 av. J.-C.")).toBe(-52);
    expect(parseYear("0")).toBeNull();
    expect(parseYear("rome")).toBeNull();
  });
});

describe("religion and language regions", () => {
  it("uses only styled categories in chronological timelines", () => {
    for (const region of REGION_HISTORIES) {
      for (const [timeline, styles] of [
        [region.religion, RELIGION_STYLES],
        [region.language, LANGUAGE_STYLES],
      ] as const) {
        const years = timeline.map(([year]) => year);
        expect(years, region.name).toEqual([...years].sort((a, b) => a - b));
        expect(years[0], region.name).toBeLessThanOrEqual(-3000);
        for (const [, value] of timeline) expect(Object.keys(styles), region.name).toContain(value);
      }
    }
  });

  it("reads the value in force at a given year", () => {
    const egypt = REGION_HISTORIES.find((region) => region.name === "Egypt");
    expect(egypt).toBeDefined();
    if (!egypt) return;
    expect(timelineValue(egypt.religion, -1000)).toBe("ancient-polytheism");
    expect(timelineValue(egypt.religion, 1500)).toBe("islam-sunni");
    expect(timelineValue(egypt.language, 1900)).toBe("semitic");
  });
});
