"use client";

import { useMemo } from "react";
import { readRecent } from "@/components/hud/recent";
import { CATALOG, type CatalogEntry, localizedEntry } from "@/data/catalog";
import { useLibrary } from "@/data/useLibrary";
import { useLocale, useT } from "@/i18n/I18nProvider";
import type { HistoricalEvent } from "@/types/chronicle";

export type PaletteItem =
  | { readonly kind: "chronicle"; readonly entry: CatalogEntry }
  | { readonly kind: "event"; readonly entry: CatalogEntry; readonly event: HistoricalEvent }
  | { readonly kind: "query"; readonly query: string; readonly suggested: boolean };

export interface PaletteSection {
  readonly title: string;
  readonly items: readonly PaletteItem[];
}

const SUGGESTIONS = ["palette.suggestion.1", "palette.suggestion.2", "palette.suggestion.3"] as const;
const SOURCES = ["curated", "thread", "journey"] as const;

const normalise = (text: string) => text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

function matches(haystack: string, terms: readonly string[]): number {
  const text = normalise(haystack);
  return terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
}

export function usePaletteResults(query: string): PaletteSection[] {
  const trimmed = query.trim();
  const terms = useMemo(() => normalise(trimmed).split(/\s+/).filter((term) => term.length > 1), [trimmed]);
  const library = useLibrary(terms.length > 0);
  const t = useT();
  const locale = useLocale();
  const catalog = useMemo(() => CATALOG.map((entry) => localizedEntry(entry, locale)), [locale]);

  return useMemo(() => {
    if (terms.length === 0) {
      const recent = readRecent()
        .map((id) => catalog.find((entry) => entry.id === id))
        .filter((entry): entry is CatalogEntry => entry !== undefined);
      return [
        ...(recent.length > 0 ? [{ title: t("palette.section.recent"), items: recent.map((entry) => ({ kind: "chronicle" as const, entry })) }] : []),
        ...SOURCES.map((source) => ({
          title: t(`palette.section.${source}`),
          items: catalog.filter((entry) => entry.source === source).map((entry) => ({ kind: "chronicle" as const, entry })),
        })),
        { title: t("palette.section.suggestions"), items: SUGGESTIONS.map((key) => ({ kind: "query" as const, query: t(key), suggested: true })) },
      ];
    }

    const chronicles = catalog.map((entry) => ({ entry, score: matches(`${entry.title} ${entry.subtitle} ${entry.keywords.join(" ")}`, terms) }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ entry }) => ({ kind: "chronicle" as const, entry }));
    const events = (library ?? [])
      .flatMap((campaign) => {
        const entry = catalog.find((candidate) => candidate.id === campaign.id);
        return entry ? campaign.events.map((event) => ({ entry, event })) : [];
      })
      .map(({ entry, event }) => ({ entry, event, score: matches(`${event.title} ${event.title} ${event.place} ${event.summary} ${event.whyHere}`, terms) }))
      .filter((result) => result.score >= Math.min(terms.length, 2))
      .sort((a, b) => b.score - a.score || b.event.significance - a.event.significance)
      .slice(0, 8)
      .map(({ entry, event }) => ({ kind: "event" as const, entry, event }));

    return [
      ...(trimmed.length >= 3 ? [{ title: t("palette.section.generate"), items: [{ kind: "query" as const, query: trimmed, suggested: false }] }] : []),
      ...(chronicles.length > 0 ? [{ title: t("palette.section.chronicles"), items: chronicles }] : []),
      ...(events.length > 0 ? [{ title: t("palette.section.events"), items: events }] : []),
    ];
  }, [terms, trimmed, library, catalog, t]);
}
