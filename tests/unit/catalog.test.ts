import { describe, expect, it } from "vitest";
import { CATALOG, loadChronicle } from "@/data/catalog";
import { LIBRARY } from "@/data/library";

describe("catalog", () => {
  it("lists every chronicle in the library with matching metadata", () => {
    expect(CATALOG.map((entry) => entry.id).sort()).toEqual(LIBRARY.map((campaign) => campaign.id).sort());
    for (const entry of CATALOG) {
      const campaign = LIBRARY.find((candidate) => candidate.id === entry.id);
      expect(entry.title).toBe(campaign?.title);
      expect(entry.subtitle).toBe(campaign?.subtitle);
      expect(entry.startYear).toBe(campaign?.startYear);
      expect(entry.endYear).toBe(campaign?.endYear);
      expect(entry.source).toBe(campaign?.source);
    }
  });

  it("loads each chronicle on demand", async () => {
    for (const entry of CATALOG) {
      const campaign = await loadChronicle(entry.id);
      expect(campaign?.id).toBe(entry.id);
      expect(campaign?.events.length).toBeGreaterThan(5);
    }
  });
});
