"use client";

import { useMemo } from "react";
import { readRecent } from "@/components/hud/recent";
import { CATALOG, type CatalogEntry } from "@/data/catalog";
import { useLibrary } from "@/data/useLibrary";
import type { HistoricalEvent } from "@/types/chronicle";

export type PaletteItem =
  | { readonly kind: "chronicle"; readonly entry: CatalogEntry }
  | { readonly kind: "event"; readonly entry: CatalogEntry; readonly event: HistoricalEvent }
  | { readonly kind: "query"; readonly query: string; readonly suggested: boolean };

export interface PaletteSection {
  readonly title: string;
  readonly items: readonly PaletteItem[];
}

const SUGGESTIONS = ["Spread of the printing press in 15th-century Europe", "Mongol Empire expansion under Genghis Khan", "Voyages of Zheng He"] as const;
const SECTION_TITLES: Record<string, string> = { curated: "Campaigns", thread: "Threads through time", journey: "Journeys" };

const normalise = (text: string) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

function matches(haystack: string, terms: readonly string[]): number {
  const text = normalise(haystack);
  return terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
}

export function usePaletteResults(query: string): PaletteSection[] {
  const trimmed = query.trim();
  const terms = useMemo(() => normalise(trimmed).split(/\s+/).filter((term) => term.length > 1), [trimmed]);
  const library = useLibrary(terms.length > 0);

  return useMemo(() => {
    if (terms.length === 0) {
      const recent = readRecent()
        .map((id) => CATALOG.find((entry) => entry.id === id))
        .filter((entry): entry is CatalogEntry => entry !== undefined);
      return [
        ...(recent.length > 0 ? [{ title: "Recently opened", items: recent.map((entry) => ({ kind: "chronicle" as const, entry })) }] : []),
        ...["curated", "thread", "journey"].map((source) => ({
          title: SECTION_TITLES[source] ?? source,
          items: CATALOG.filter((entry) => entry.source === source).map((entry) => ({ kind: "chronicle" as const, entry })),
        })),
        { title: "Try asking", items: SUGGESTIONS.map((suggestion) => ({ kind: "query" as const, query: suggestion, suggested: true })) },
      ];
    }

    const chronicles = CATALOG.map((entry) => ({ entry, score: matches(`${entry.title} ${entry.subtitle} ${entry.keywords.join(" ")}`, terms) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ entry }) => ({ kind: "chronicle" as const, entry }));
    const events = (library ?? [])
      .flatMap((campaign) => {
        const entry = CATALOG.find((candidate) => candidate.id === campaign.id);
        return entry ? campaign.events.map((event) => ({ entry, event })) : [];
      })
      .map(({ entry, event }) => ({ entry, event, score: matches(`${event.title} ${event.title} ${event.place} ${event.summary} ${event.whyHere}`, terms) }))
      .filter((result) => result.score >= Math.min(terms.length, 2))
      .sort((a, b) => b.score - a.score || b.event.significance - a.event.significance)
      .slice(0, 8)
      .map(({ entry, event }) => ({ kind: "event" as const, entry, event }));

    return [
      ...(trimmed.length >= 3 ? [{ title: "Generate", items: [{ kind: "query" as const, query: trimmed, suggested: false }] }] : []),
      ...(chronicles.length > 0 ? [{ title: "Chronicles", items: chronicles }] : []),
      ...(events.length > 0 ? [{ title: "Events", items: events }] : []),
    ];
  }, [terms, trimmed, library]);
}
