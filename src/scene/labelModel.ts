import { geoCentroid } from "d3-geo";
import type { Vector3 } from "three";
import { CITIES } from "@/data/cities";
import { CHOKEPOINTS } from "@/data/geography";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { localChokepoint, localCityName } from "@/i18n/reference";
import type { PolityLabel } from "@/geo/borderRaster";
import type { CityRecord } from "@/types/atlas";
import type { ChronicleCampaign, HistoricalEvent, TerritoryZone } from "@/types/chronicle";
import type { WorldEvent } from "@/types/world";

export type LabelKind = "event" | "territory" | "chokepoint" | "city" | "polity" | "world";

export interface LabelSpec {
  readonly id: string;
  readonly kind: LabelKind;
  readonly text: string;
  readonly priority: number;
  readonly anchor: Vector3;
  readonly event?: HistoricalEvent;
  readonly zone?: TerritoryZone;
  readonly city?: CityRecord;
  readonly world?: WorldEvent;
}

const cache = new WeakMap<ChronicleCampaign, readonly LabelSpec[]>();
const cityCache = new WeakMap<ChronicleCampaign, readonly LabelSpec[]>();
const EMPTY: readonly LabelSpec[] = [];

export const labelNodes = new Map<string, HTMLDivElement>();

function build(campaign: ChronicleCampaign): LabelSpec[] {
  const events: LabelSpec[] = campaign.events.map((event) => ({
    id: event.id,
    kind: "event",
    text: event.title,
    priority: 20 + event.significance * 10,
    anchor: lonLatToVector3(event.coordinates[0], event.coordinates[1], 1.008),
    event,
  }));
  const zones: LabelSpec[] = campaign.territories.map((zone) => {
    const ring = [...zone.polygon, zone.polygon[0] ?? zone.polygon[1] ?? [0, 0]].map(([lon, lat]) => [lon, lat]);
    const [lon, lat] = geoCentroid({ type: "Polygon", coordinates: [ring] });
    return { id: zone.id, kind: "territory", text: zone.name, priority: 38, anchor: lonLatToVector3(lon, lat, 1.012), zone };
  });
  const straits: LabelSpec[] = CHOKEPOINTS.map((point) => ({
    id: `strait-${point.id}`,
    kind: "chokepoint",
    text: localChokepoint(point.id, point).name,
    priority: 8 + point.rank * 4,
    anchor: lonLatToVector3(point.coordinates[0], point.coordinates[1], 1.006),
  }));
  return [...events, ...zones, ...straits].sort((a, b) => b.priority - a.priority);
}

let cityLabelCache: readonly LabelSpec[] | null = null;

const cityLabels = (): readonly LabelSpec[] =>
  (cityLabelCache ??= CITIES.map((city) => ({
    id: `city-${city.id}`,
    kind: "city",
    text: localCityName(city.id, city.name),
    priority: 0,
    anchor: lonLatToVector3(city.coordinates[0], city.coordinates[1], 1.006),
    city,
  })));

export function labelsFor(campaign: ChronicleCampaign | null, withCities = false): readonly LabelSpec[] {
  if (!campaign) return EMPTY;
  const store = withCities ? cityCache : cache;
  const cached = store.get(campaign);
  if (cached) return cached;
  const labels = withCities ? [...build(campaign), ...cityLabels()] : build(campaign);
  store.set(campaign, labels);
  return labels;
}

const polityCache = new WeakMap<readonly PolityLabel[], readonly LabelSpec[]>();

export function polityLabelsFor(labels: readonly PolityLabel[]): readonly LabelSpec[] {
  const cached = polityCache.get(labels);
  if (cached) return cached;
  const specs = labels.map((label) => ({
    id: `polity-${label.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    kind: "polity" as const,
    text: label.name,
    priority: 34 + Math.log10(Math.max(10, label.area)) * 3,
    anchor: lonLatToVector3(label.lon, label.lat, 1.012),
  }));
  polityCache.set(labels, specs);
  return specs;
}

const worldCache = new WeakMap<readonly WorldEvent[], readonly LabelSpec[]>();
const NO_WORLD: readonly WorldEvent[] = [];

export function worldLabelsFor(events: readonly WorldEvent[] | undefined): readonly LabelSpec[] {
  const list = events ?? NO_WORLD;
  const cached = worldCache.get(list);
  if (cached) return cached;
  const specs = list.map((event) => ({
    id: event.id,
    kind: "world" as const,
    text: event.title,
    priority: 30 + event.significance * 8,
    anchor: lonLatToVector3(event.coordinates[0], event.coordinates[1], 1.008),
    world: event,
  }));
  worldCache.set(list, specs);
  return specs;
}

const combined = new WeakMap<readonly LabelSpec[], WeakMap<readonly LabelSpec[], readonly LabelSpec[]>>();

export function combineLabels(base: readonly LabelSpec[], extra: readonly LabelSpec[]): readonly LabelSpec[] {
  if (extra.length === 0) return base;
  const inner = combined.get(base) ?? new WeakMap<readonly LabelSpec[], readonly LabelSpec[]>();
  combined.set(base, inner);
  const cached = inner.get(extra);
  if (cached) return cached;
  const seen = new Set(base.map((label) => label.id));
  const merged = [...base, ...extra.filter((label) => !seen.has(label.id))].sort((a, b) => b.priority - a.priority);
  inner.set(extra, merged);
  return merged;
}
