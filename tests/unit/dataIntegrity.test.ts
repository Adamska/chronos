import { describe, expect, it } from "vitest";
import { CITIES } from "@/data/cities";
import { LIBRARY } from "@/data/library";
import { UNCERTAINTY } from "@/data/uncertainty";
import type { LonLat } from "@/types/chronicle";

const validPoint = ([lon, lat]: LonLat) => lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90;

function selfIntersects(polygon: readonly LonLat[]): boolean {
  const side = (a: LonLat, b: LonLat, c: LonLat) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  for (let i = 0; i < polygon.length; i += 1) {
    for (let j = i + 2; j < polygon.length; j += 1) {
      if (i === 0 && j === polygon.length - 1) continue;
      const a = polygon[i]!, b = polygon[(i + 1) % polygon.length]!, c = polygon[j]!, d = polygon[(j + 1) % polygon.length]!;
      if (side(c, d, a) * side(c, d, b) < 0 && side(a, b, c) * side(a, b, d) < 0) return true;
    }
  }
  return false;
}

describe.each(LIBRARY.map((campaign) => [campaign.id, campaign] as const))("chronicle %s", (_, campaign) => {
  it("has unique, kebab-case ids", () => {
    const ids = [...campaign.events, ...campaign.arcs, ...campaign.territories, ...campaign.chapters].map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("keeps every date inside its span and never uses year zero", () => {
    for (const event of campaign.events) {
      expect(event.year).toBeGreaterThanOrEqual(campaign.startYear);
      expect(event.year).toBeLessThanOrEqual(campaign.endYear);
      expect(event.year).not.toBe(0);
    }
  });

  it("uses valid coordinates and resolvable references", () => {
    const events = new Set(campaign.events.map((event) => event.id));
    for (const event of campaign.events) expect(validPoint(event.coordinates)).toBe(true);
    for (const arc of campaign.arcs) {
      expect(arc.path.length).toBeGreaterThanOrEqual(2);
      arc.path.forEach((point) => expect(validPoint(point)).toBe(true));
      if (arc.eventId) expect(events.has(arc.eventId)).toBe(true);
    }
    for (const chapter of campaign.chapters) if (chapter.eventId) expect(events.has(chapter.eventId)).toBe(true);
  });

  it("draws simple territories that never cross the antimeridian", () => {
    for (const zone of campaign.territories) {
      const lons = zone.polygon.map(([lon]) => lon);
      expect(Math.max(...lons) - Math.min(...lons)).toBeLessThan(180);
      expect(selfIntersects(zone.polygon)).toBe(false);
    }
  });
});

describe("reference data", () => {
  it("annotates only events that exist", () => {
    const events = new Set(LIBRARY.flatMap((campaign) => campaign.events.map((event) => event.id)));
    for (const id of Object.keys(UNCERTAINTY)) expect(events.has(id)).toBe(true);
  });

  it("keeps city population series chronological", () => {
    for (const city of CITIES) {
      const years = city.population.map(([year]) => year);
      expect([...years].sort((a, b) => a - b)).toEqual(years);
    }
  });
});
