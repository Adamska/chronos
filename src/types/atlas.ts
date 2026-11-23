import type { ArcKind, LayerKind, LonLat, PrimarySource } from "@/types/chronicle";
import type { StoryLayer } from "@/types/story";

export type TrailKind = "thread" | "journey";

export interface TrailStop {
  readonly id: string;
  readonly year: number;
  readonly place: string;
  readonly coordinates: LonLat;
  readonly title: string;
  readonly summary: string;
  readonly whyHere: string;
  readonly wikipediaSlug: string;
  readonly layer: LayerKind;
  readonly arrivedBy: ArcKind;
  readonly keyFigures?: readonly string[];
  readonly primarySource?: PrimarySource;
}

export interface Trail {
  readonly id: string;
  readonly kind: TrailKind;
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly accent: string;
  readonly keywords: readonly string[];
  readonly stops: readonly TrailStop[];
  readonly story?: StoryLayer;
}

export type PopulationPoint = readonly [year: number, thousands: number];

export interface CityRecord {
  readonly id: string;
  readonly name: string;
  readonly coordinates: LonLat;
  readonly wikipediaSlug: string;
  readonly population: readonly PopulationPoint[];
}
