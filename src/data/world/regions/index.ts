import type { RegionHistory } from "@/types/world";
import { EUROPE_REGIONS } from "./europe";
import { AFRICA_NORTH_WEST_REGIONS } from "./africa";
import { AFRICA_EAST_SOUTH_REGIONS } from "./africa2";
import { ASIA_WEST_CENTRAL_REGIONS } from "./asia";
import { ASIA_SOUTH_EAST_REGIONS } from "./asia2";
import { AMERICAS_REGIONS } from "./americas";
import { OCEANIA_REGIONS } from "./oceania";

export const REGION_HISTORIES: readonly RegionHistory[] = [
  ...EUROPE_REGIONS,
  ...AFRICA_NORTH_WEST_REGIONS,
  ...AFRICA_EAST_SOUTH_REGIONS,
  ...ASIA_WEST_CENTRAL_REGIONS,
  ...ASIA_SOUTH_EAST_REGIONS,
  ...AMERICAS_REGIONS,
  ...OCEANIA_REGIONS,
];
