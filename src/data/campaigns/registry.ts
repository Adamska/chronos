import type { ChronicleCampaign } from "@/types/chronicle";

export function eraLabel(year: number): string {
  if (year < -1200) return "Bronze Age";
  if (year < -500) return "Iron Age";
  if (year < 300) return "Classical Antiquity";
  if (year < 650) return "Late Antiquity";
  if (year < 1000) return "Early Middle Ages";
  if (year < 1300) return "High Middle Ages";
  if (year < 1500) return "Late Middle Ages";
  if (year < 1750) return "Early Modern";
  if (year < 1914) return "Industrial Age";
  if (year < 1945) return "World Wars";
  if (year < 1991) return "Cold War";
  return "Contemporary";
}

export function formatYear(year: number): string {
  const rounded = Math.round(year);
  if (rounded < 0) return `${Math.abs(rounded)} BCE`;
  if (rounded === 0) return "1 BCE";
  return `${rounded} CE`;
}

export function formatSpan(start: number, end: number): string {
  if (start < 0 && end > 0) return `${formatYear(start)} – ${formatYear(end)}`;
  const suffix = end < 0 ? " BCE" : " CE";
  return `${Math.abs(Math.round(start))} – ${Math.abs(Math.round(end))}${suffix}`;
}

export function sortCampaignEvents(campaign: ChronicleCampaign): ChronicleCampaign {
  return { ...campaign, events: [...campaign.events].sort((a, b) => a.year - b.year) };
}
