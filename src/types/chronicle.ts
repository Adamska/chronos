export type LonLat = readonly [lon: number, lat: number];

export type LayerKind = "borders" | "trade" | "conflict" | "science";

export type ArcKind =
  | "trade"
  | "migration"
  | "military"
  | "knowledge"
  | "communication"
  | "exploration";

export type Significance = 1 | 2 | 3 | 4 | 5;

export type CampaignSource = "curated" | "generated" | "encyclopedia" | "thread" | "journey";

export interface PrimarySource {
  readonly excerpt: string;
  readonly attribution: string;
}

export interface ExchangeSchematic {
  readonly kind: "exchange";
  readonly westLabel: string;
  readonly eastLabel: string;
  readonly eastbound: readonly string[];
  readonly westbound: readonly string[];
}

export interface CausalSchematic {
  readonly kind: "causal";
  readonly steps: readonly string[];
}

export type DossierSchematic = ExchangeSchematic | CausalSchematic;

export interface HistoricalEvent {
  readonly id: string;
  readonly title: string;
  readonly year: number;
  readonly endYear?: number;
  readonly place: string;
  readonly coordinates: LonLat;
  readonly layer: LayerKind;
  readonly significance: Significance;
  readonly wikipediaSlug: string;
  readonly summary: string;
  readonly context: string;
  readonly whyHere: string;
  readonly keyFigures: readonly string[];
  readonly primarySource?: PrimarySource;
  readonly schematic?: DossierSchematic;
}

export interface GeoArc {
  readonly id: string;
  readonly label: string;
  readonly kind: ArcKind;
  readonly layer: LayerKind;
  readonly path: readonly LonLat[];
  readonly startYear: number;
  readonly endYear: number;
  readonly intensity: number;
  readonly cargo?: readonly string[];
  readonly eventId?: string;
}

export interface TerritoryZone {
  readonly id: string;
  readonly name: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly color: string;
  readonly polygon: readonly LonLat[];
  readonly eventId?: string;
}

export interface CameraKeyframe {
  readonly id: string;
  readonly year: number;
  readonly title: string;
  readonly caption: string;
  readonly target: LonLat;
  readonly altitude: number;
  readonly tilt: number;
  readonly eventId?: string;
}

export interface ChronicleCampaign {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly accent: string;
  readonly keywords: readonly string[];
  readonly source: CampaignSource;
  readonly chapters: readonly CameraKeyframe[];
  readonly events: readonly HistoricalEvent[];
  readonly arcs: readonly GeoArc[];
  readonly territories: readonly TerritoryZone[];
}

export const LAYER_KINDS: readonly LayerKind[] = ["borders", "trade", "conflict", "science"];

export const LAYER_LABELS: Record<LayerKind, string> = {
  borders: "Borders & Empires",
  trade: "Trade & Diffusion",
  conflict: "Conflicts & Turning Points",
  science: "Science & Ideas",
};

export const TIMELINE_MIN_YEAR = -3000;
export const TIMELINE_MAX_YEAR = 2026;
