import type { LonLat } from "@/types/chronicle";

export type Era = "antiquity" | "middle-ages" | "early-modern" | "modern";

export const ERAS: readonly Era[] = ["antiquity", "middle-ages", "early-modern", "modern"];

export interface FigurePlace {
  readonly year: number;
  readonly place: string;
  readonly coordinates: LonLat;
  readonly note: string;
}

export interface KeyFigure {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly born: number;
  readonly died: number;
  readonly wikipediaSlug: string;
  readonly places: readonly FigurePlace[];
}

export interface StoryStep {
  readonly id: string;
  readonly year: number;
  readonly title: string;
  readonly narration: string;
  readonly target: LonLat;
  readonly altitude: number;
  readonly tilt: number;
  readonly events: readonly string[];
  readonly arcs: readonly string[];
  readonly territories: readonly string[];
  readonly figures: readonly string[];
}

export interface StoryLayer {
  readonly era: Era;
  readonly steps: readonly StoryStep[];
  readonly figures: readonly KeyFigure[];
}
