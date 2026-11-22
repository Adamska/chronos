import type { AskEvent, AskResponse } from "@/ai/askSchema";

const STOP = new Set("the a an of in on at to for from by with and or why how what when where who did was were is are this that it its there".split(" "));

const terms = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP.has(word))
    .map((word) => word.replace(/(ings?|ed|es|s)$/, "").slice(0, 7));

export function answerOffline(question: string, events: readonly AskEvent[]): AskResponse {
  const wanted = terms(question);
  const ranked = events
    .map((event) => {
      const haystack = terms(`${event.title} ${event.place} ${event.summary} ${event.whyHere}`);
      const title = terms(`${event.title} ${event.place}`);
      const score = wanted.reduce((sum, word) => sum + (title.includes(word) ? 3 : 0) + (haystack.includes(word) ? 1 : 0), 0);
      return { event, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const best = ranked[0]?.event;
  if (!best) {
    return {
      answer: "This chronicle has no entry that speaks directly to that question. Try naming a place, a person or a route from the timeline.",
      eventIds: [],
      focus: null,
      mode: "offline",
    };
  }
  const second = ranked[1]?.event;
  const answer = `${best.title} (${best.year < 0 ? `${-best.year} BCE` : `${best.year} CE`}): ${best.whyHere}${
    second ? ` See also ${second.title}, at ${second.place.split(",")[0]}.` : ""
  }`;
  return {
    answer,
    eventIds: ranked.slice(0, 3).map((entry) => entry.event.id),
    focus: { lon: best.coordinates[0], lat: best.coordinates[1], altitude: 1.05 },
    mode: "offline",
  };
}
