import { describe, expect, it } from "vitest";
import { LIBRARY } from "@/data/library";
import { storyOf } from "@/data/story";
import { ERAS } from "@/types/story";

describe("stories", () => {
  it("gives every chronicle an authored story", () => {
    expect(LIBRARY.filter((campaign) => !campaign.story).map((campaign) => campaign.id)).toEqual([]);
  });

  it("only references elements that exist in the chronicle", () => {
    for (const campaign of LIBRARY) {
      const story = storyOf(campaign);
      const events = new Set(campaign.events.map((event) => event.id));
      const arcs = new Set(campaign.arcs.map((arc) => arc.id));
      const zones = new Set(campaign.territories.map((zone) => zone.id));
      const figures = new Set(story.figures.map((figure) => figure.id));
      expect(ERAS, campaign.id).toContain(story.era);
      expect(story.steps.length, campaign.id).toBeGreaterThanOrEqual(10);
      for (const step of story.steps) {
        expect(step.events.length, step.id).toBeGreaterThan(0);
        expect(step.events.filter((id) => !events.has(id)), step.id).toEqual([]);
        expect(step.arcs.filter((id) => !arcs.has(id)), step.id).toEqual([]);
        expect(step.territories.filter((id) => !zones.has(id)), step.id).toEqual([]);
        expect(step.figures.filter((id) => !figures.has(id)), step.id).toEqual([]);
      }
    }
  });

  it("keeps steps and life paths in chronological order", () => {
    for (const campaign of LIBRARY) {
      const story = storyOf(campaign);
      const years = story.steps.map((step) => step.year);
      expect(years, campaign.id).toEqual([...years].sort((a, b) => a - b));
      for (const figure of story.figures) {
        const places = figure.places.map((place) => place.year);
        expect(places, figure.id).toEqual([...places].sort((a, b) => a - b));
        expect(figure.born, figure.id).toBeLessThan(figure.died);
      }
    }
  });

  it("derives steps from chapters when a chronicle has no story", () => {
    const campaign = LIBRARY[0];
    if (!campaign) throw new Error("empty library");
    const derived = storyOf({ ...campaign, story: undefined });
    expect(derived.steps.length).toBe(campaign.chapters.length);
    expect(derived.steps.every((step) => step.events.length <= 1)).toBe(true);
  });
});
