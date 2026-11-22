import { type Locale, getActiveLocale } from "@/i18n/config";
import { cityNames } from "@/i18n/reference/fr/cities";
import { climatePeriods, flowKindLabels, flowNames } from "@/i18n/reference/fr/environment";
import { barrierNames, chokepoints } from "@/i18n/reference/fr/geography";
import { perspectives, snapshotNotes } from "@/i18n/reference/fr/knownWorld";
import { travelModelLabels } from "@/i18n/reference/fr/travel";
import { uncertaintyNotes } from "@/i18n/reference/fr/uncertainty";

const pick = (table: Readonly<Record<string, string>>, id: string, fallback: string, locale: Locale) => (locale === "fr" ? (table[id] ?? fallback) : fallback);

export const localCityName = (id: string, fallback: string, locale: Locale = getActiveLocale()) => pick(cityNames, id, fallback, locale);
export const localBarrierName = (id: string, fallback: string, locale: Locale = getActiveLocale()) => pick(barrierNames, id, fallback, locale);
export const localFlowName = (id: string, fallback: string, locale: Locale = getActiveLocale()) => pick(flowNames, id, fallback, locale);
export const localFlowKind = (kind: string, fallback: string, locale: Locale = getActiveLocale()) => pick(flowKindLabels, kind, fallback, locale);
export const localTravelModel = (id: string, fallback: string, locale: Locale = getActiveLocale()) => pick(travelModelLabels, id, fallback, locale);
export const localUncertainty = (eventId: string, fallback: string, locale: Locale = getActiveLocale()) => pick(uncertaintyNotes, eventId, fallback, locale);
export const localSnapshotNote = (perspectiveId: string, year: number, fallback: string, locale: Locale = getActiveLocale()) =>
  pick(snapshotNotes, `${perspectiveId}:${year}`, fallback, locale);

export function localChokepoint(id: string, fallback: { readonly name: string; readonly note: string }, locale: Locale = getActiveLocale()) {
  return locale === "fr" ? (chokepoints[id] ?? fallback) : fallback;
}

export function localClimatePeriod(id: string, fallback: { readonly name: string; readonly note: string }, locale: Locale = getActiveLocale()) {
  return locale === "fr" ? (climatePeriods[id] ?? fallback) : fallback;
}

export function localPerspective(id: string, fallback: { readonly label: string; readonly vantage: string }, locale: Locale = getActiveLocale()) {
  return locale === "fr" ? (perspectives[id] ?? fallback) : fallback;
}
