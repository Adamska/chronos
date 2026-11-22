import type { ChronicleCampaign, GeoArc, HistoricalEvent, LayerKind, TerritoryZone } from "@/types/chronicle";

export type LayerVisibility = Readonly<Record<LayerKind, boolean>>;

const smooth = (edge0: number, edge1: number, value: number): number => {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0 || 1)));
  return t * t * (3 - 2 * t);
};

export function campaignFade(campaign: ChronicleCampaign): number {
  return Math.max(1, (campaign.endYear - campaign.startYear) * 0.025);
}

export function eventPresence(event: HistoricalEvent, year: number, fade: number, layers: LayerVisibility): number {
  if (!layers[event.layer]) return 0;
  const arrival = smooth(event.year - fade, event.year, year);
  const end = event.endYear ?? event.year;
  const afterglow = 1 - 0.55 * smooth(end, end + fade * 6, year);
  return arrival * afterglow;
}

export function eventSpotlight(event: HistoricalEvent, year: number, fade: number): number {
  const end = event.endYear ?? event.year;
  return smooth(event.year - fade, event.year, year) * (1 - smooth(end, end + fade * 2, year));
}

export function arcPresence(arc: GeoArc, year: number, fade: number, layers: LayerVisibility): number {
  if (!layers[arc.layer]) return 0;
  return smooth(arc.startYear - fade, arc.startYear, year) * (1 - smooth(arc.endYear, arc.endYear + fade, year));
}

export function territoryPresence(zone: TerritoryZone, year: number, fade: number, layers: LayerVisibility): number {
  if (!layers.borders) return 0;
  return smooth(zone.startYear - fade, zone.startYear, year) * (1 - smooth(zone.endYear, zone.endYear + fade, year));
}

export const ARC_KIND_COLORS: Record<GeoArc["kind"], string> = {
  trade: "#e2b25a",
  migration: "#d98a5f",
  military: "#e0624a",
  knowledge: "#7cc7b8",
  communication: "#8fb8e8",
  exploration: "#c9d4dc",
};

export const LAYER_COLORS: Record<LayerKind, string> = {
  borders: "#c9b48a",
  trade: "#e2b25a",
  conflict: "#e0624a",
  science: "#7cc7b8",
};
