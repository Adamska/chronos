import { describe, expect, it } from "vitest";
import { matchEncyclopedia, parseYearWindow } from "@/ai/encyclopedia";
import { DEFAULT_CAMPAIGN } from "@/data/campaigns";

describe("offline encyclopedia", () => {
  it.each([
    ["Mongol Empire expansion under Genghis Khan", "mongol-empire"],
    ["Voyages of Zheng He", "journey-zheng-he"],
    ["Spread of the printing press in 15th-century Europe", "thread-printing"],
    ["The Black Death", "thread-plague"],
  ])("matches %s to a whole chronicle", (query, id) => {
    expect(matchEncyclopedia(query).campaign.id).toBe(id);
  });

  it("falls back to the default chronicle for nonsense", () => {
    expect(matchEncyclopedia("zzzz qqqq").campaign.id).toBe(DEFAULT_CAMPAIGN.id);
  });

  it("points at the most relevant event when it returns a curated chronicle", () => {
    const match = matchEncyclopedia("Fall of Constantinople 1453");
    expect(match.focusEventId).not.toBeNull();
    expect(match.campaign.events.some((event) => event.id === match.focusEventId)).toBe(true);
  });

  it("parses centuries and BCE years", () => {
    expect(parseYearWindow("15th century")).toEqual({ start: 1400, end: 1500 });
    expect(parseYearWindow("5th century BCE")).toEqual({ start: -500, end: -400 });
    expect(parseYearWindow("the year 1453")).toEqual({ start: 1413, end: 1493 });
  });
});
