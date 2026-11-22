import type { LonLat } from "@/types/chronicle";

export interface TerrainBarrier {
  readonly id: string;
  readonly name: string;
  readonly height: number;
  readonly polygon: readonly LonLat[];
}

export interface Chokepoint {
  readonly id: string;
  readonly name: string;
  readonly coordinates: LonLat;
  readonly rank: number;
  readonly note: string;
}

export const TERRAIN_BARRIERS: readonly TerrainBarrier[] = [
  {
    id: "tibetan-plateau",
    name: "Tibetan Plateau",
    height: 0.008,
    polygon: [[78, 35.5], [80, 36.2], [86, 36.4], [91, 36.6], [96, 35.6], [100.5, 34], [102, 31], [99, 28.6], [95.5, 29.4], [92, 29.4], [88, 28.8], [84, 29.9], [81, 31], [79, 32.6]],
  },
  {
    id: "himalayas",
    name: "Himalayas",
    height: 0.02,
    polygon: [[73.6, 35.6], [78, 33.4], [81, 31.1], [85, 29.5], [89, 28.7], [92, 29.1], [95.6, 29.7], [96, 28.5], [92, 27.5], [88.5, 26.9], [85, 27.4], [81, 28.5], [78, 30.1], [75.5, 32.5], [73.2, 34.4]],
  },
  {
    id: "hindu-kush",
    name: "Hindu Kush & Pamir",
    height: 0.015,
    polygon: [[66.8, 34.9], [69, 34.5], [71.5, 35.2], [74.2, 36.2], [75.2, 38.4], [73.5, 39.4], [71, 38.6], [70.5, 36.8], [68.3, 35.7]],
  },
  {
    id: "tian-shan",
    name: "Tian Shan",
    height: 0.012,
    polygon: [[69.5, 41.5], [72, 42.8], [76, 42.9], [80, 43.3], [84, 43.9], [88, 44.1], [95, 43.4], [94.5, 42.5], [88, 42.6], [84, 42.2], [80, 41.6], [76, 40.4], [72, 40.2], [70, 40.6]],
  },
  {
    id: "alps",
    name: "Alps",
    height: 0.011,
    polygon: [[5.6, 44.0], [7.0, 43.9], [8.2, 44.6], [10.5, 45.8], [13.0, 46.2], [15.8, 47.0], [16.0, 47.8], [13.0, 47.9], [10.5, 47.6], [8.0, 47.4], [6.2, 46.4], [5.5, 45.2]],
  },
  {
    id: "pyrenees",
    name: "Pyrenees",
    height: 0.008,
    polygon: [[-1.8, 43.4], [0, 43.0], [1.5, 42.7], [3.2, 42.5], [3.0, 42.2], [1.5, 42.3], [0, 42.6], [-1.7, 43.0]],
  },
  {
    id: "caucasus",
    name: "Caucasus",
    height: 0.011,
    polygon: [[37.5, 44.8], [40, 43.8], [43, 43], [46, 42], [49.5, 40.6], [49, 40.2], [46, 41.2], [43, 42.2], [40, 43.0], [37.2, 44.3]],
  },
  {
    id: "zagros",
    name: "Zagros",
    height: 0.009,
    polygon: [[44.5, 37.0], [46, 35.5], [48, 33.5], [50.5, 31], [53, 29.5], [56, 28], [57, 27.3], [56.5, 26.6], [54, 27.5], [51, 29], [49, 30.6], [47, 32.5], [45.5, 34.3], [44, 36]],
  },
  {
    id: "taurus",
    name: "Taurus",
    height: 0.008,
    polygon: [[29.8, 36.6], [32.5, 36.3], [35, 37.2], [38, 37.8], [41, 38.5], [41, 38], [38, 37.2], [35, 36.7], [32.5, 35.8], [30, 36.1]],
  },
  {
    id: "atlas",
    name: "Atlas Mountains",
    height: 0.008,
    polygon: [[-9.8, 30.5], [-7, 31.5], [-4, 33], [-1, 34.6], [3, 35.8], [8, 36.5], [10, 36.7], [9.5, 35.8], [5, 35], [1, 34], [-2, 32.6], [-5, 31.2], [-8, 30.2]],
  },
  {
    id: "urals",
    name: "Ural Mountains",
    height: 0.006,
    polygon: [[59.5, 51], [60, 55], [59.5, 60], [60.5, 65], [64, 67.8], [65, 67.5], [61.5, 64.5], [60.5, 60], [61, 55], [60.5, 51]],
  },
  {
    id: "andes",
    name: "Andes",
    height: 0.014,
    polygon: [[-73.8, -52], [-72.8, -46], [-72, -40], [-71, -33], [-70.4, -27], [-70.2, -20], [-71.5, -16], [-75, -12], [-78.5, -7], [-80, -3], [-78.8, 1], [-76.5, 4.5], [-73, 8.5], [-71.8, 8], [-74.5, 4], [-77, 0], [-77.5, -4], [-76, -8], [-72.5, -12], [-68.5, -16], [-66.5, -21], [-66.8, -27], [-69, -33], [-70.2, -40], [-71, -46], [-72, -52]],
  },
];

export const CHOKEPOINTS: readonly Chokepoint[] = [
  { id: "malacca", name: "Strait of Malacca", coordinates: [100.9, 3.2], rank: 5, note: "Monsoon gateway between the Indian Ocean and the South China Sea." },
  { id: "bosporus", name: "Bosporus", coordinates: [29.05, 41.12], rank: 5, note: "The only sea link between the Black Sea and the Mediterranean." },
  { id: "gibraltar", name: "Strait of Gibraltar", coordinates: [-5.6, 35.95], rank: 5, note: "Fourteen kilometres separating Europe from Africa." },
  { id: "hormuz", name: "Strait of Hormuz", coordinates: [56.4, 26.6], rank: 4, note: "Mouth of the Persian Gulf." },
  { id: "bab-el-mandeb", name: "Bab-el-Mandeb", coordinates: [43.4, 12.6], rank: 4, note: "Southern door of the Red Sea." },
  { id: "suez", name: "Isthmus of Suez", coordinates: [32.35, 30.6], rank: 4, note: "Land bridge between Africa and Asia." },
  { id: "khyber", name: "Khyber Pass", coordinates: [71.1, 34.1], rank: 4, note: "Historic invasion route into the Indian subcontinent." },
  { id: "hexi", name: "Hexi Corridor", coordinates: [100.4, 38.9], rank: 4, note: "Oasis chain between the Qilian range and the Gobi." },
  { id: "dzungarian-gate", name: "Dzungarian Gate", coordinates: [82.5, 45.2], rank: 3, note: "Wind-scoured steppe gap through the Tian Shan barrier." },
  { id: "panama", name: "Isthmus of Panama", coordinates: [-79.6, 9.1], rank: 3, note: "Narrowest land between two oceans." },
  { id: "good-hope", name: "Cape of Good Hope", coordinates: [18.47, -34.36], rank: 3, note: "Turning point of the sea route to the Indies." },
  { id: "dover", name: "Strait of Dover", coordinates: [1.45, 51.0], rank: 3, note: "Narrow sea between Britain and the continent." },
  { id: "oresund", name: "Øresund", coordinates: [12.7, 55.9], rank: 2, note: "Toll gate of the Baltic trade." },
  { id: "sunda", name: "Sunda Strait", coordinates: [105.8, -6.0], rank: 2, note: "Alternative passage into the Java Sea." },
];
