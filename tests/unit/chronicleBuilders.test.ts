import { describe, expect, it } from "vitest";
import { answerOffline } from "@/ai/askOffline";
import { normalizeGeneratedCampaign } from "@/ai/normalizeCampaign";
import type { GeneratedCampaign } from "@/ai/chronicleSchema";
import { TRAILS } from "@/data/trails";
import { trailToCampaign } from "@/data/trails/toCampaign";

const point = (lon: number, lat: number) => ({ lon, lat });

const generated: GeneratedCampaign = {
  title: "Test",
  subtitle: "Subtitle",
  summary: "Summary",
  startYear: 1500,
  endYear: 1400,
  keywords: ["Test"],
  chapters: [],
  events: [1, 2].map((index) => ({
    id: "same",
    title: `Event ${index}`,
    year: 0,
    endYear: null,
    place: "Somewhere",
    coordinates: point(200, 95),
    layer: "trade" as const,
    significance: 9,
    wikipediaSlug: "Silk Road",
    summary: "Something happened.",
    context: "Context.",
    whyHere: "Geography.",
    keyFigures: ["Someone"],
    primarySource: null,
    schematic: null,
  })),
  arcs: [{ id: "a", label: "Route", kind: "trade", layer: "trade", path: [point(0, 0), point(10, 10)], startYear: 1400, endYear: 1450, intensity: 3, cargo: [], eventId: "same" }],
  territories: [],
};

describe("chronicle builders", () => {
  it("normalises generated campaigns into safe domain data", () => {
    const campaign = normalizeGeneratedCampaign(generated, "test query");
    expect(campaign.startYear).toBe(1400);
    expect(campaign.endYear).toBe(1500);
    expect(new Set(campaign.events.map((event) => event.id)).size).toBe(2);
    expect(campaign.events[0]?.coordinates).toEqual([180, 89.5]);
    expect(campaign.events[0]?.significance).toBe(5);
    expect(campaign.events[0]?.wikipediaSlug).toBe("Silk_Road");
    expect(campaign.arcs[0]?.intensity).toBe(1);
    expect(campaign.chapters.length).toBeGreaterThan(0);
  });

  it("turns every trail into a chronicle with one chapter per stop", () => {
    for (const trail of TRAILS) {
      const campaign = trailToCampaign(trail);
      expect(campaign.chapters).toHaveLength(trail.stops.length);
      expect(campaign.arcs).toHaveLength(trail.stops.length - 1);
      expect(campaign.source).toBe(trail.kind);
    }
  });

  it("answers follow-up questions from the chronicle offline", () => {
    const campaign = trailToCampaign(TRAILS.find((trail) => trail.id === "journey-zheng-he")!);
    const events = campaign.events.map((event) => ({ ...event, coordinates: [event.coordinates[0], event.coordinates[1]] as [number, number] }));
    const answer = answerOffline("Why did the fleet stop at Malacca?", events);
    expect(answer.eventIds.length).toBeGreaterThan(0);
    expect(answer.focus).not.toBeNull();
  });
});
