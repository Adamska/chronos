import { describe, expect, it } from "vitest";
import { LIBRARY } from "@/data/library";
import { FR_TRANSLATIONS } from "@/i18n/content/fr";
import { dictionaries } from "@/i18n/dictionaries";

describe("french content", () => {
  it("has a translation for every chronicle in the library", () => {
    expect(Object.keys(FR_TRANSLATIONS).sort()).toEqual(LIBRARY.map((campaign) => campaign.id).sort());
  });

  it("translates the title and summary of every event", async () => {
    for (const [id, load] of Object.entries(FR_TRANSLATIONS)) {
      const campaign = LIBRARY.find((candidate) => candidate.id === id);
      expect(campaign, id).toBeDefined();
      const translation = await load();
      const missing = (campaign?.events ?? []).filter((event) => !translation.events?.[event.id]?.title || !translation.events[event.id]?.summary).map((event) => event.id);
      expect(missing, id).toEqual([]);
      const known = new Set(campaign?.events.map((event) => event.id));
      expect(Object.keys(translation.events ?? {}).filter((eventId) => !known.has(eventId)), id).toEqual([]);
    }
  });

  it("keeps the french dictionary complete and free of placeholder drift", () => {
    for (const [key, english] of Object.entries(dictionaries.en)) {
      const french = dictionaries.fr[key as keyof typeof dictionaries.en];
      expect(french, key).toBeTruthy();
      expect((french.match(/\{\w+\}/g) ?? []).sort(), key).toEqual((english.match(/\{\w+\}/g) ?? []).sort());
    }
  });
});
