import { CAMPAIGN_ENTRIES } from "@/data/catalogCampaigns";
import { TRAIL_ENTRIES } from "@/data/catalogTrails";
import { type Locale, getActiveLocale } from "@/i18n/config";
import { FR_CATALOG } from "@/i18n/content/fr/catalog";
import { localizeCampaign } from "@/i18n/localize";
import type { CampaignSource, ChronicleCampaign } from "@/types/chronicle";

export interface CatalogEntry {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly accent: string;
  readonly source: CampaignSource;
  readonly keywords: readonly string[];
  readonly load: () => Promise<ChronicleCampaign>;
}

export const CATALOG: readonly CatalogEntry[] = [...CAMPAIGN_ENTRIES, ...TRAIL_ENTRIES];
export const DEFAULT_CHRONICLE_ID = "silk-road";

const loaded = new Map<string, Promise<ChronicleCampaign>>();
const libraries = new Map<Locale, Promise<readonly ChronicleCampaign[]>>();

async function localized(campaign: ChronicleCampaign, locale: Locale): Promise<ChronicleCampaign> {
  if (locale === "en") return campaign;
  const { FR_TRANSLATIONS } = await import("@/i18n/content/fr");
  const load = FR_TRANSLATIONS[campaign.id];
  return localizeCampaign(campaign, load ? await load().catch(() => null) : null);
}

export function localizedEntry(entry: CatalogEntry, locale: Locale = getActiveLocale()): CatalogEntry {
  const french = locale === "fr" ? FR_CATALOG[entry.id] : undefined;
  return french ? { ...entry, title: french.title || entry.title, subtitle: french.subtitle || entry.subtitle, keywords: [...french.keywords, ...entry.keywords] } : entry;
}

export function findCatalogEntry(id: string): CatalogEntry | undefined {
  return CATALOG.find((entry) => entry.id === id);
}

export function loadChronicle(id: string, locale: Locale = getActiveLocale()): Promise<ChronicleCampaign | null> {
  const entry = findCatalogEntry(id);
  if (!entry) return Promise.resolve(null);
  const key = `${locale}:${id}`;
  const cached = loaded.get(key) ?? entry.load().then((campaign) => localized(campaign, locale));
  loaded.set(key, cached);
  return cached;
}

export function loadLibrary(locale: Locale = getActiveLocale()): Promise<readonly ChronicleCampaign[]> {
  const cached =
    libraries.get(locale) ??
    import("@/data/library").then((module) => Promise.all(module.LIBRARY.map((campaign) => localized(campaign, locale))));
  libraries.set(locale, cached);
  return cached;
}
