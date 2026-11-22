import { geoCentroid } from "d3-geo";
import type { Vector3 } from "three";
import { CHOKEPOINTS } from "@/data/geography";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import type { ChronicleCampaign, HistoricalEvent, TerritoryZone } from "@/types/chronicle";

export type LabelKind = "event" | "territory" | "chokepoint";

export interface LabelSpec {
  readonly id: string;
  readonly kind: LabelKind;
  readonly text: string;
  readonly priority: number;
  readonly anchor: Vector3;
  readonly event?: HistoricalEvent;
  readonly zone?: TerritoryZone;
}

const cache = new WeakMap<ChronicleCampaign, readonly LabelSpec[]>();
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
    text: point.name,
    priority: 8 + point.rank * 4,
    anchor: lonLatToVector3(point.coordinates[0], point.coordinates[1], 1.006),
  }));
  return [...events, ...zones, ...straits].sort((a, b) => b.priority - a.priority);
}

export function labelsFor(campaign: ChronicleCampaign | null): readonly LabelSpec[] {
  if (!campaign) return EMPTY;
  const cached = cache.get(campaign);
  if (cached) return cached;
  const labels = build(campaign);
  cache.set(campaign, labels);
  return labels;
}
