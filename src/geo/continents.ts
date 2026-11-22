import type { LonLat } from "@/types/chronicle";

export function continentOf([lon, lat]: LonLat): string {
  if (lat < -60) return "Antarctica";
  if (lon >= -170 && lon <= -30) return lat >= 13 ? "North America" : lat >= 7 && lon <= -77 ? "Central America" : "South America";
  if (lon > 110 && lat < -10 && lon < 180) return "Oceania";
  if (lon < -110 || (lon > 140 && lat < 30)) return "the Pacific";
  if (lon >= -30 && lon <= 60 && lat < 36 && !(lon > 34 && lat > 12)) return "Africa";
  if (lon >= -30 && lon <= 45 && lat >= 36) return "Europe";
  if (lon > 34 && lon <= 63 && lat > 12 && lat < 42) return "the Middle East";
  if (lon > 60 && lon <= 90 && lat < 36 && lat > 5) return "South Asia";
  if (lon > 90 && lat < 25) return "Southeast Asia";
  if (lon > 100 && lat >= 18) return "East Asia";
  return lat > 50 ? "Northern Asia" : "Central Asia";
}
