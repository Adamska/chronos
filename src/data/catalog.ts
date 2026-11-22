import { CAMPAIGN_ENTRIES } from "@/data/catalogCampaigns";
import { TRAIL_ENTRIES } from "@/data/catalogTrails";
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
let library: Promise<readonly ChronicleCampaign[]> | null = null;

export function findCatalogEntry(id: string): CatalogEntry | undefined {
  return CATALOG.find((entry) => entry.id === id);
}

export function loadChronicle(id: string): Promise<ChronicleCampaign | null> {
  const entry = findCatalogEntry(id);
  if (!entry) return Promise.resolve(null);
  const cached = loaded.get(id) ?? entry.load();
  loaded.set(id, cached);
  return cached;
}

export function loadLibrary(): Promise<readonly ChronicleCampaign[]> {
  library ??= import("@/data/library").then((module) => module.LIBRARY);
  return library;
}
