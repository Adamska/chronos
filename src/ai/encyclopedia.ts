import { synthesizeChapters } from "@/ai/normalizeCampaign";
import { CAMPAIGNS, DEFAULT_CAMPAIGN } from "@/data/campaigns";
import { LIBRARY } from "@/data/library";
import type { Locale } from "@/i18n/config";
import { FR_CATALOG } from "@/i18n/content/fr/catalog";
import { translate } from "@/i18n/dictionaries";
import type { ChronicleCampaign, HistoricalEvent } from "@/types/chronicle";

export interface EncyclopediaMatch {
  readonly campaign: ChronicleCampaign;
  readonly notice: string;
  readonly focusEventId: string | null;
}

interface YearWindow {
  readonly start: number;
  readonly end: number;
}

const STOP_WORDS = new Set(
  "a an and the of in on at to for from by with under over into during through about century centuries history spread rise fall age era how why what when who empire empires expansion kingdom war wars great early late europe european asia africa world global".split(
    " ",
  ),
);

const TOPIC_SYNONYMS: readonly (readonly string[])[] = [
  ["mongol", "genghis", "khan", "kublai", "hulagu", "yuan", "ilkhanate", "golden horde", "pax mongolica", "steppe"],
  ["printing", "press", "gutenberg", "paper", "movable type", "book", "manuscript", "translation"],
  ["zheng he", "treasure fleet", "ming", "malacca", "calicut", "monsoon", "indian ocean", "maritime"],
  ["plague", "black death", "pestilence", "epidemic", "pandemic", "yersinia"],
  ["rome", "roman", "byzantine", "constantinople", "justinian", "goths", "vandals", "huns", "attila"],
  ["islam", "abbasid", "caliphate", "baghdad", "house of wisdom", "cordoba", "algebra", "astronomy"],
  ["columbus", "magellan", "da gama", "portuguese", "spanish", "voyage", "exploration", "navigation", "spice"],
  ["railway", "railroad", "steam", "telegraph", "cable", "factory", "coal", "cotton", "industrial"],
  ["cold war", "soviet", "nuclear", "missile", "sputnik", "apollo", "nato", "berlin", "space"],
  ["silk", "caravan", "samarkand", "sogdian", "dunhuang", "marco polo", "oasis"],
];

const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token) && !/\d/.test(token));

interface WeightedTerm {
  readonly pattern: RegExp;
  readonly term: string;
  readonly weight: number;
}

const escapePattern = (term: string): string => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const stem = (token: string): string => {
  const trimmed = token.replace(/(ations?|ings?|ions?|ed|es|s)$/, "");
  return trimmed.length >= 4 ? trimmed : token;
};

function expandTerms(query: string): WeightedTerm[] {
  const lowered = query.toLowerCase();
  const tokens = tokenize(query);
  const weights = new Map<string, number>(tokens.map((term) => [stem(term), 2]));
  tokens.slice(1).forEach((token, index) => weights.set(`${tokens[index]} ${token}`, 4));
  for (const group of TOPIC_SYNONYMS) {
    if (!group.some((term) => new RegExp(`\\b${escapePattern(term)}`).test(lowered))) continue;
    for (const term of group) if (!weights.has(term)) weights.set(term, 1);
  }
  return [...weights].map(([term, weight]) => ({ term, weight, pattern: new RegExp(`\\b${escapePattern(term)}`, "i") }));
}

export function parseYearWindow(query: string): YearWindow | null {
  const lowered = query.toLowerCase();
  const bce = /\b(bce|bc)\b/.test(lowered);
  const century = lowered.match(/(\d{1,2})(?:st|nd|rd|th)\s+century/);
  if (century?.[1]) {
    const index = Number(century[1]);
    return bce ? { start: -index * 100, end: -(index - 1) * 100 } : { start: (index - 1) * 100, end: index * 100 };
  }
  const year = lowered.match(/\b(\d{3,4})s?\b/);
  if (year?.[1]) {
    const value = Number(year[1]) * (bce ? -1 : 1);
    return { start: value - 40, end: value + 40 };
  }
  return null;
}

const countMatches = (text: string, terms: readonly WeightedTerm[]): number =>
  terms.reduce((sum, term) => sum + (term.pattern.test(text) ? term.weight : 0), 0);

const hasDirectHit = (text: string, terms: readonly WeightedTerm[]): boolean =>
  terms.some((term) => term.weight > 1 && term.pattern.test(text));

const overlaps = (window: YearWindow | null, start: number, end: number): boolean =>
  window !== null && start <= window.end && end >= window.start;

function scoreEvent(event: HistoricalEvent, terms: readonly WeightedTerm[], window: YearWindow | null): number {
  const fullText = `${event.title} ${event.keyFigures.join(" ")} ${event.place} ${event.summary} ${event.context}`;
  if (!hasDirectHit(fullText, terms)) return 0;
  const direct = terms.filter((term) => term.weight === 2);
  const coverage = direct.length > 0 ? direct.filter((term) => term.pattern.test(fullText)).length / direct.length : 1;
  const raw =
    countMatches(event.title, terms) * 3 +
    countMatches(event.keyFigures.join(" "), terms) * 3 +
    countMatches(event.place, terms) * 2 +
    countMatches(`${event.summary} ${event.context}`, terms);
  const score = raw * (0.4 + 0.6 * coverage);
  if (!window) return score;
  return overlaps(window, event.year, event.endYear ?? event.year) ? score + 3 : score * 0.4;
}

function scoreCampaign(campaign: ChronicleCampaign, terms: readonly WeightedTerm[], window: YearWindow | null): number {
  const base =
    countMatches(campaign.title, terms) * 4 +
    countMatches(campaign.keywords.join(" "), terms) * 3 +
    countMatches(`${campaign.subtitle} ${campaign.summary}`, terms);
  const eventScores = campaign.events.map((event) => scoreEvent(event, terms, window));
  const eventSignal = eventScores.reduce((sum, score) => sum + Math.min(3, score), 0) * 0.35;
  return base * 0.5 + eventSignal * 0.5 + Math.max(0, ...eventScores) * 1.5 + (overlaps(window, campaign.startYear, campaign.endYear) ? 3 : 0);
}

const titleCase = (text: string): string =>
  text.trim().replace(/\s+/g, " ").replace(/(^|\s)([a-z])/g, (_, space: string, letter: string) => `${space}${letter.toUpperCase()}`);

function assembleChronicle(query: string, events: readonly HistoricalEvent[], terms: readonly WeightedTerm[]): ChronicleCampaign {
  const chosen = [...events].sort((a, b) => a.year - b.year);
  const ids = new Set(chosen.map((event) => event.id));
  const startYear = Math.min(...chosen.map((event) => event.year));
  const endYear = Math.max(...chosen.map((event) => event.endYear ?? event.year));
  const pad = Math.max(5, Math.round((endYear - startYear) * 0.05));
  const sources = CAMPAIGNS.filter((campaign) => campaign.events.some((event) => ids.has(event.id)));
  const arcs = sources
    .flatMap((campaign) => campaign.arcs)
    .filter((arc) => (arc.eventId && ids.has(arc.eventId)) || countMatches(arc.label, terms) > 0)
    .slice(0, 16);
  const territories = sources
    .flatMap((campaign) => campaign.territories)
    .filter((zone) => zone.startYear <= endYear + pad && zone.endYear >= startYear - pad)
    .slice(0, 6);

  return {
    id: `encyclopedia-${tokenize(query).slice(0, 4).join("-") || "chronicle"}`,
    title: titleCase(query),
    subtitle: `Assembled from ${sources.map((campaign) => campaign.title.split(" & ")[0]).join(", ")}`,
    summary: `An encyclopedia chronicle assembled offline from ${chosen.length} curated events that match this question.`,
    startYear: startYear - pad,
    endYear: endYear + pad,
    accent: "#5fb3a8",
    keywords: terms.slice(0, 16).map((term) => term.term),
    source: "encyclopedia",
    chapters: synthesizeChapters(chosen),
    events: chosen,
    arcs,
    territories,
  };
}

export function rankEncyclopediaEvents(query: string): { readonly event: HistoricalEvent; readonly score: number }[] {
  const terms = expandTerms(query);
  const window = parseYearWindow(query);
  return CAMPAIGNS.flatMap((campaign) => campaign.events)
    .map((event) => ({ event, score: scoreEvent(event, terms, window) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function matchEncyclopedia(query: string, locale: Locale = "en"): EncyclopediaMatch {
  const title = (campaign: ChronicleCampaign) => (locale === "fr" ? (FR_CATALOG[campaign.id]?.title ?? campaign.title) : campaign.title);
  const terms = expandTerms(query);
  const window = parseYearWindow(query);
  const scored = rankEncyclopediaEvents(query);
  const ranked = LIBRARY.map((campaign) => ({ campaign, score: scoreCampaign(campaign, terms, window) })).sort((a, b) => b.score - a.score);
  const best = ranked[0];
  const focusFor = (campaign: ChronicleCampaign) => scored.find((entry) => campaign.events.includes(entry.event))?.event.id ?? null;

  if (best && hasDirectHit(best.campaign.title, terms)) {
    return { campaign: best.campaign, notice: translate("encyclopedia.matched", { title: title(best.campaign) }, locale), focusEventId: focusFor(best.campaign) };
  }

  const cutoff = Math.max(5, (scored[0]?.score ?? 0) * 0.3);
  const rankedEvents = scored.filter((entry) => entry.score >= cutoff).slice(0, 18);
  if (rankedEvents.length >= 4) {
    return {
      campaign: assembleChronicle(query, rankedEvents.map((entry) => entry.event), terms),
      notice: translate("encyclopedia.composed", { count: rankedEvents.length }, locale),
      focusEventId: null,
    };
  }

  if (best && best.score > 1) {
    return { campaign: best.campaign, notice: translate("encyclopedia.closest", { title: title(best.campaign) }, locale), focusEventId: focusFor(best.campaign) };
  }
  return { campaign: DEFAULT_CAMPAIGN, notice: translate("encyclopedia.none", undefined, locale), focusEventId: null };
}
