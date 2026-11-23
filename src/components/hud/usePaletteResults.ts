"use client";

import { useMemo } from "react";
import { readRecent } from "@/components/hud/recent";
import { CATALOG, type CatalogEntry, localizedEntry } from "@/data/catalog";
import { useLibrary } from "@/data/useLibrary";
import { useLocale, useT } from "@/i18n/I18nProvider";
import { storyOf } from "@/data/story";
import { type HistoricalEvent, TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";
import type { KeyFigure } from "@/types/story";

export type PaletteItem =
  | { readonly kind: "chronicle"; readonly entry: CatalogEntry }
  | { readonly kind: "event"; readonly entry: CatalogEntry; readonly event: HistoricalEvent }
  | { readonly kind: "figure"; readonly entry: CatalogEntry; readonly figure: KeyFigure }
  | { readonly kind: "year"; readonly year: number };

export interface PaletteSection {
  readonly title: string;
  readonly items: readonly PaletteItem[];
}

const ERAS = [
  { key: "era.antiquity", end: 500 },
  { key: "era.middleAges", end: 1450 },
  { key: "era.earlyModern", end: 1789 },
  { key: "era.modern", end: Infinity },
] as const;

export function parseYear(query: string): number | null {
  const match = /^(-?\d{1,4})\s*(av\.?\s*j\.?-?c\.?|bce?|bc|avant\s+j\.?-?c\.?)?$/i.exec(query.trim());
  if (!match?.[1]) return null;
  const value = Number(match[1]);
  const year = match[2] ? -Math.abs(value) : value;
  return year === 0 || year < TIMELINE_MIN_YEAR || year > TIMELINE_MAX_YEAR ? null : year;
}

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
        .filter((entry): entry is CatalogEntry => entry !== undefined)
        .slice(0, 4);
      let start = -Infinity;
      return [
        ...(recent.length > 0 ? [{ title: t("palette.section.recent"), items: recent.map((entry) => ({ kind: "chronicle" as const, entry })) }] : []),
        ...ERAS.map((era) => {
          const from = start;
          start = era.end;
          const items = catalog
            .filter((entry) => {
              const middle = (entry.startYear + entry.endYear) / 2;
              return middle >= from && middle < era.end;
            })
            .sort((a, b) => a.startYear - b.startYear)
            .map((entry) => ({ kind: "chronicle" as const, entry }));
          return { title: t(era.key), items };
        }).filter((section) => section.items.length > 0),
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

    const figures = (library ?? [])
      .flatMap((campaign) => {
        const entry = catalog.find((candidate) => candidate.id === campaign.id);
        return entry ? storyOf(campaign).figures.map((figure) => ({ entry, figure })) : [];
      })
      .filter(({ figure }) => matches(`${figure.name} ${figure.role}`, terms) >= Math.min(terms.length, 2))
      .slice(0, 5)
      .map(({ entry, figure }) => ({ kind: "figure" as const, entry, figure }));
    const year = parseYear(trimmed);

    return [
      ...(year !== null ? [{ title: t("palette.section.year"), items: [{ kind: "year" as const, year }] }] : []),
      ...(chronicles.length > 0 ? [{ title: t("palette.section.chronicles"), items: chronicles }] : []),
      ...(figures.length > 0 ? [{ title: t("palette.section.figures"), items: figures }] : []),
      ...(events.length > 0 ? [{ title: t("palette.section.events"), items: events }] : []),
    ];
  }, [terms, trimmed, library, catalog, t]);
}
