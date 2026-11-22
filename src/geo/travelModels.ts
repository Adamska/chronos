import { CELL_DEGREES, MASK_HEIGHT, MASK_WIDTH } from "@/geo/landBuild";
import type { LonLat } from "@/types/chronicle";

export const MAX_DAYS = 730;

export interface TravelModel {
  readonly id: string;
  readonly label: string;
  readonly landKmPerDay: number;
  readonly seaKmPerDay: number;
  readonly openOceanFactor: number;
}

const MODELS: readonly (TravelModel & { readonly until: number })[] = [
  { id: "ancient", until: -500, label: "Foot, donkey and coastal oar", landKmPerDay: 25, seaKmPerDay: 70, openOceanFactor: 10 },
  { id: "classical", until: 1450, label: "Caravan, horse and monsoon sail", landKmPerDay: 32, seaKmPerDay: 110, openOceanFactor: 8 },
  { id: "sail", until: 1830, label: "Ocean-going sail and post roads", landKmPerDay: 40, seaKmPerDay: 150, openOceanFactor: 1 },
  { id: "steam", until: 1870, label: "Early steamships and railways", landKmPerDay: 90, seaKmPerDay: 230, openOceanFactor: 1 },
  { id: "rail", until: 1950, label: "Railway networks and steam liners", landKmPerDay: 280, seaKmPerDay: 420, openOceanFactor: 1 },
  { id: "modern", until: Number.POSITIVE_INFINITY, label: "Motorways and container shipping (no air travel)", landKmPerDay: 600, seaKmPerDay: 650, openOceanFactor: 1 },
];

export function travelModelFor(year: number): TravelModel {
  return MODELS.find((model) => year < model.until) ?? (MODELS[MODELS.length - 1] as TravelModel);
}

export function cellIndexFor([lon, lat]: LonLat): number {
  const col = Math.min(MASK_WIDTH - 1, Math.max(0, Math.floor((lon + 180) / CELL_DEGREES)));
  const row = Math.min(MASK_HEIGHT - 1, Math.max(0, Math.floor((90 - lat) / CELL_DEGREES)));
  return row * MASK_WIDTH + col;
}
