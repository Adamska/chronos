import { type Locale, getActiveLocale } from "@/i18n/config";
import type { ChronicleCampaign } from "@/types/chronicle";

const ERAS: readonly (readonly [number, string, string])[] = [
  [-1200, "Bronze Age", "Âge du bronze"],
  [-500, "Iron Age", "Âge du fer"],
  [300, "Classical Antiquity", "Antiquité classique"],
  [650, "Late Antiquity", "Antiquité tardive"],
  [1000, "Early Middle Ages", "Haut Moyen Âge"],
  [1300, "High Middle Ages", "Moyen Âge central"],
  [1500, "Late Middle Ages", "Bas Moyen Âge"],
  [1750, "Early Modern", "Époque moderne"],
  [1914, "Industrial Age", "Âge industriel"],
  [1945, "World Wars", "Guerres mondiales"],
  [1991, "Cold War", "Guerre froide"],
];

export function eraLabel(year: number, locale: Locale = getActiveLocale()): string {
  const era = ERAS.find(([until]) => year < until);
  if (era) return locale === "fr" ? era[2] : era[1];
  return locale === "fr" ? "Époque contemporaine" : "Contemporary";
}

export function formatYear(year: number, locale: Locale = getActiveLocale()): string {
  const rounded = Math.round(year) === 0 ? -1 : Math.round(year);
  if (locale === "fr") return rounded < 0 ? `${Math.abs(rounded)}\u00a0av.\u00a0J.-C.` : `${rounded}`;
  return rounded < 0 ? `${Math.abs(rounded)} BCE` : `${rounded} CE`;
}

export function formatSpan(start: number, end: number, locale: Locale = getActiveLocale()): string {
  if (locale === "fr") return start < 0 && end > 0 ? `${formatYear(start, locale)} – ${formatYear(end, locale)}` : `${formatYear(start, locale)} – ${formatYear(end, locale)}`;
  if (start < 0 && end > 0) return `${formatYear(start, locale)} – ${formatYear(end, locale)}`;
  const suffix = end < 0 ? " BCE" : " CE";
  return `${Math.abs(Math.round(start))} – ${Math.abs(Math.round(end))}${suffix}`;
}

export function sortCampaignEvents(campaign: ChronicleCampaign): ChronicleCampaign {
  return { ...campaign, events: [...campaign.events].sort((a, b) => a.year - b.year) };
}
