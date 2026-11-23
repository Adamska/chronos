import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

const KNOTS: readonly (readonly [year: number, fraction: number])[] = [
  [TIMELINE_MIN_YEAR, 0],
  [-500, 0.22],
  [500, 0.42],
  [1500, 0.68],
  [1800, 0.84],
  [TIMELINE_MAX_YEAR, 1],
];

export function yearToFraction(year: number): number {
  for (let i = 1; i < KNOTS.length; i += 1) {
    const [y1, f1] = KNOTS[i] ?? [TIMELINE_MAX_YEAR, 1];
    const [y0, f0] = KNOTS[i - 1] ?? [TIMELINE_MIN_YEAR, 0];
    if (year <= y1) return f0 + ((Math.max(year, y0) - y0) / (y1 - y0)) * (f1 - f0);
  }
  return 1;
}

export function fractionToYear(fraction: number): number {
  const f = Math.min(1, Math.max(0, fraction));
  for (let i = 1; i < KNOTS.length; i += 1) {
    const [y1, f1] = KNOTS[i] ?? [TIMELINE_MAX_YEAR, 1];
    const [y0, f0] = KNOTS[i - 1] ?? [TIMELINE_MIN_YEAR, 0];
    if (f <= f1) return y0 + ((f - f0) / (f1 - f0)) * (y1 - y0);
  }
  return TIMELINE_MAX_YEAR;
}

export interface EraBand {
  readonly id: "antiquity" | "middle-ages" | "early-modern" | "modern";
  readonly start: number;
  readonly end: number;
  readonly color: string;
}

export const ERA_BANDS: readonly EraBand[] = [
  { id: "antiquity", start: TIMELINE_MIN_YEAR, end: 500, color: "#b4533c" },
  { id: "middle-ages", start: 500, end: 1450, color: "#6c8fbf" },
  { id: "early-modern", start: 1450, end: 1789, color: "#5fb3a8" },
  { id: "modern", start: 1789, end: TIMELINE_MAX_YEAR, color: "#d9a441" },
];

export const ATLAS_TICKS: readonly number[] = [-3500, -1000, 1, 500, 1000, 1500, 1800, 1900, 2000];
