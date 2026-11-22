import { CITIES } from "@/data/cities";
import { type Locale, getActiveLocale } from "@/i18n/config";
import { numberTag } from "@/i18n/dictionaries";
import type { CityRecord } from "@/types/atlas";

export function populationAt(city: CityRecord, year: number): number {
  const points = city.population;
  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last || year < first[0] - 50 || year > last[0] + 25) return 0;
  if (year <= first[0]) return first[1] * Math.max(0, 1 - (first[0] - year) / 50);
  if (year >= last[0]) return last[1];
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    if (a && b && year >= a[0] && year <= b[0]) return a[1] + ((b[1] - a[1]) * (year - a[0])) / (b[0] - a[0] || 1);
  }
  return 0;
}

export interface CityRanking {
  readonly city: CityRecord;
  readonly population: number;
}

export function largestCities(year: number, count = 5): CityRanking[] {
  return CITIES.map((city) => ({ city, population: populationAt(city, year) }))
    .filter((entry) => entry.population > 0)
    .sort((a, b) => b.population - a.population)
    .slice(0, count);
}

export function formatPopulation(thousands: number, locale: Locale = getActiveLocale()): string {
  const tag = numberTag(locale);
  if (thousands < 1000) return (Math.round(thousands / 10) * 10000).toLocaleString(tag);
  const digits = thousands >= 10000 ? 0 : 1;
  const millions = (thousands / 1000).toLocaleString(tag, { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return locale === "fr" ? `${millions}\u00a0million${thousands >= 2000 ? "s" : ""}` : `${millions} million`;
}
