import type { LonLat } from "@/types/chronicle";

export type FlowKind = "warm-current" | "cold-current" | "wind" | "monsoon";
export type Season = "summer" | "winter";

export interface FlowLine {
  readonly id: string;
  readonly name: string;
  readonly kind: FlowKind;
  readonly path: readonly LonLat[];
  readonly season?: Season;
}

export interface ClimatePeriod {
  readonly id: string;
  readonly name: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly tone: "warm" | "cold";
  readonly note: string;
}

export const FLOW_LINES: readonly FlowLine[] = [
  { id: "gulf-stream", name: "Gulf Stream", kind: "warm-current", path: [[-80, 25], [-79.5, 30], [-75, 35], [-70, 38], [-60, 40], [-50, 42]] },
  { id: "north-atlantic-drift", name: "North Atlantic Drift", kind: "warm-current", path: [[-50, 42], [-40, 46], [-30, 50], [-20, 54], [-10, 58], [2, 63]] },
  { id: "canary", name: "Canary Current", kind: "cold-current", path: [[-12, 42], [-14, 35], [-18, 28], [-21, 20]] },
  { id: "atlantic-north-equatorial", name: "North Equatorial Current", kind: "warm-current", path: [[-21, 18], [-35, 15], [-50, 14], [-62, 14], [-76, 17]] },
  { id: "atlantic-south-equatorial", name: "South Equatorial Current", kind: "warm-current", path: [[8, -2], [-10, -4], [-25, -6], [-34, -7]] },
  { id: "brazil", name: "Brazil Current", kind: "warm-current", path: [[-34, -9], [-38, -15], [-42, -23], [-48, -30], [-55, -37]] },
  { id: "benguela", name: "Benguela Current", kind: "cold-current", path: [[16, -34], [13, -28], [11, -20], [9, -12]] },
  { id: "agulhas", name: "Agulhas Current", kind: "warm-current", path: [[41, -12], [38, -20], [33, -29], [27, -35], [21, -38]] },
  { id: "circumpolar-west", name: "Antarctic Circumpolar Current", kind: "cold-current", path: [[-65, -57], [-20, -53], [20, -50], [60, -49], [100, -50], [140, -52], [178, -55]] },
  { id: "circumpolar-east", name: "Antarctic Circumpolar Current", kind: "cold-current", path: [[-178, -57], [-140, -58], [-100, -58], [-70, -57]] },
  { id: "kuroshio", name: "Kuroshio Current", kind: "warm-current", path: [[122, 22], [124, 26], [128, 30], [135, 33], [142, 36], [150, 38]] },
  { id: "north-pacific", name: "North Pacific Current", kind: "warm-current", path: [[150, 40], [170, 42], [-170, 43], [-150, 44], [-132, 45]] },
  { id: "california", name: "California Current", kind: "cold-current", path: [[-128, 46], [-125, 38], [-120, 32], [-115, 24]] },
  { id: "pacific-north-equatorial", name: "North Equatorial Current", kind: "warm-current", path: [[-115, 15], [-140, 13], [-170, 13], [170, 14], [145, 15], [126, 15]] },
  { id: "humboldt", name: "Humboldt Current", kind: "cold-current", path: [[-75, -42], [-75, -30], [-77, -20], [-80, -10], [-83, -3]] },
  { id: "pacific-south-equatorial", name: "South Equatorial Current", kind: "warm-current", path: [[-86, -3], [-110, -5], [-140, -8], [-170, -10], [170, -12], [156, -14]] },
  { id: "east-australian", name: "East Australian Current", kind: "warm-current", path: [[154, -15], [154, -25], [153.5, -32], [155, -38]] },
  { id: "atlantic-ne-trades", name: "Northeast Trade Winds", kind: "wind", path: [[-14, 30], [-28, 24], [-44, 18], [-60, 15]] },
  { id: "atlantic-se-trades", name: "Southeast Trade Winds", kind: "wind", path: [[6, -24], [-9, -17], [-24, -10], [-34, -4]] },
  { id: "atlantic-westerlies", name: "Westerlies", kind: "wind", path: [[-70, 41], [-50, 45], [-30, 48], [-10, 50]] },
  { id: "roaring-forties", name: "Roaring Forties", kind: "wind", path: [[-20, -42], [20, -42], [60, -42], [100, -42], [140, -44]] },
  { id: "pacific-ne-trades", name: "Northeast Trade Winds", kind: "wind", path: [[-120, 25], [-140, 19], [-160, 15], [175, 13], [150, 13]] },
  { id: "pacific-se-trades", name: "Southeast Trade Winds", kind: "wind", path: [[-82, -16], [-110, -13], [-140, -11], [-170, -11]] },
  { id: "pacific-westerlies", name: "Westerlies", kind: "wind", path: [[142, 38], [160, 42], [-170, 45], [-140, 46]] },
  { id: "somali-jet", name: "Southwest Monsoon", kind: "monsoon", season: "summer", path: [[42, -2], [50, 6], [58, 12], [68, 16], [73, 17]] },
  { id: "bay-of-bengal-summer", name: "Southwest Monsoon", kind: "monsoon", season: "summer", path: [[72, 5], [80, 7], [87, 13], [92, 19]] },
  { id: "south-china-summer", name: "Southwest Monsoon", kind: "monsoon", season: "summer", path: [[104, 4], [109, 9], [113, 15], [118, 21]] },
  { id: "arabian-winter", name: "Northeast Monsoon", kind: "monsoon", season: "winter", path: [[72, 18], [64, 13], [55, 8], [47, 2], [42, -3]] },
  { id: "bay-of-bengal-winter", name: "Northeast Monsoon", kind: "monsoon", season: "winter", path: [[91, 19], [86, 13], [81, 7], [74, 4]] },
  { id: "south-china-winter", name: "Northeast Monsoon", kind: "monsoon", season: "winter", path: [[119, 22], [114, 16], [110, 10], [105, 4]] },
];

export const CLIMATE_PERIODS: readonly ClimatePeriod[] = [
  {
    id: "roman-warm-period",
    name: "Roman Warm Period",
    startYear: -250,
    endYear: 400,
    tone: "warm",
    note: "A relatively mild, stable phase in the Mediterranean and Europe; its extent and timing vary by region.",
  },
  {
    id: "late-antique-little-ice-age",
    name: "Late Antique Little Ice Age",
    startYear: 536,
    endYear: 660,
    tone: "cold",
    note: "Volcanic eruptions in 536, 540 and 547 cooled the Northern Hemisphere, coinciding with famine and the Plague of Justinian.",
  },
  {
    id: "medieval-climate-anomaly",
    name: "Medieval Climate Anomaly",
    startYear: 950,
    endYear: 1250,
    tone: "warm",
    note: "Warmer North Atlantic conditions favoured Norse voyages; elsewhere the period brought severe droughts.",
  },
  {
    id: "little-ice-age",
    name: "Little Ice Age",
    startYear: 1300,
    endYear: 1850,
    tone: "cold",
    note: "Cooler centuries with advancing glaciers, frozen rivers and harvest failures, strongest in the seventeenth century.",
  },
];

export const FLOW_KIND_LABELS: Record<FlowKind, string> = {
  "warm-current": "Warm current",
  "cold-current": "Cold current",
  wind: "Prevailing wind",
  monsoon: "Monsoon",
};
