import type { GeneratedCampaign } from "@/ai/chronicleSchema";
import type {
  CameraKeyframe,
  ChronicleCampaign,
  DossierSchematic,
  GeoArc,
  HistoricalEvent,
  LonLat,
  Significance,
  TerritoryZone,
} from "@/types/chronicle";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

const TERRITORY_PALETTE = ["#b4875a", "#6f9a8d", "#a35d4a", "#7186a6", "#8c8a5a", "#8a6a86"];

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "item";

const toPoint = ({ lon, lat }: { lon: number; lat: number }): LonLat => [
  clamp(Number.isFinite(lon) ? lon : 0, -180, 180),
  clamp(Number.isFinite(lat) ? lat : 0, -89.5, 89.5),
];

const toYear = (year: number): number => {
  const rounded = Math.round(clamp(year, TIMELINE_MIN_YEAR, TIMELINE_MAX_YEAR));
  return rounded === 0 ? 1 : rounded;
};

function uniqueIds(prefix: string) {
  const seen = new Set<string>();
  return (raw: string): string => {
    const base = `${prefix}-${slugify(raw)}`;
    let candidate = base;
    for (let suffix = 2; seen.has(candidate); suffix += 1) candidate = `${base}-${suffix}`;
    seen.add(candidate);
    return candidate;
  };
}

function toSchematic(schematic: GeneratedCampaign["events"][number]["schematic"]): DossierSchematic | undefined {
  if (!schematic) return undefined;
  if (schematic.kind === "causal") {
    const steps = schematic.steps.filter(Boolean).slice(0, 6);
    return steps.length >= 2 ? { kind: "causal", steps } : undefined;
  }
  const eastbound = schematic.eastbound.filter(Boolean).slice(0, 5);
  const westbound = schematic.westbound.filter(Boolean).slice(0, 5);
  if (!schematic.westLabel || !schematic.eastLabel || eastbound.length + westbound.length === 0) return undefined;
  return { kind: "exchange", westLabel: schematic.westLabel, eastLabel: schematic.eastLabel, eastbound, westbound };
}

export function normalizeGeneratedCampaign(generated: GeneratedCampaign, query: string): ChronicleCampaign {
  const campaignId = `generated-${slugify(query).slice(0, 32)}-${Date.now().toString(36)}`;
  const startYear = toYear(Math.min(generated.startYear, generated.endYear));
  const endYear = toYear(Math.max(generated.startYear, generated.endYear, startYear + 1));
  const inSpan = (year: number) => clamp(toYear(year), startYear, endYear);

  const eventId = uniqueIds("gen");
  const idMap = new Map<string, string>();
  const events: HistoricalEvent[] = generated.events
    .map((event) => {
      const id = eventId(event.id || event.title);
      idMap.set(event.id, id);
      const year = inSpan(event.year);
      const endYearValue = event.endYear === null ? undefined : inSpan(event.endYear);
      const schematic = toSchematic(event.schematic);
      return {
        id,
        title: event.title.trim(),
        year,
        ...(endYearValue !== undefined && endYearValue > year ? { endYear: endYearValue } : {}),
        place: event.place.trim(),
        coordinates: toPoint(event.coordinates),
        layer: event.layer,
        significance: clamp(Math.round(event.significance), 1, 5) as Significance,
        wikipediaSlug: event.wikipediaSlug.trim().replace(/\s+/g, "_"),
        summary: event.summary.trim(),
        context: event.context.trim(),
        whyHere: event.whyHere.trim(),
        keyFigures: event.keyFigures.filter(Boolean).slice(0, 4),
        ...(event.primarySource?.excerpt ? { primarySource: event.primarySource } : {}),
        ...(schematic ? { schematic } : {}),
      } satisfies HistoricalEvent;
    })
    .filter((event) => event.title && event.summary)
    .sort((a, b) => a.year - b.year);

  const resolveEvent = (id: string | null) => (id ? idMap.get(id) : undefined);
  const arcId = uniqueIds("gen-arc");
  const arcs: GeoArc[] = generated.arcs
    .filter((arc) => arc.path.length >= 2)
    .map((arc) => {
      const start = inSpan(arc.startYear);
      const related = resolveEvent(arc.eventId);
      return {
        id: arcId(arc.id || arc.label),
        label: arc.label.trim(),
        kind: arc.kind,
        layer: arc.layer,
        path: arc.path.slice(0, 8).map(toPoint),
        startYear: start,
        endYear: Math.max(start, inSpan(arc.endYear)),
        intensity: clamp(arc.intensity, 0.2, 1),
        cargo: arc.cargo.filter(Boolean).slice(0, 5),
        ...(related ? { eventId: related } : {}),
      };
    });

  const territoryId = uniqueIds("gen-zone");
  const territories: TerritoryZone[] = generated.territories
    .filter((zone) => zone.polygon.length >= 4)
    .map((zone, index) => {
      const polygon = zone.polygon.slice(0, 40).map(toPoint);
      const longitudes = polygon.map(([lon]) => lon);
      return {
        id: territoryId(zone.id || zone.name),
        name: zone.name.trim(),
        startYear: inSpan(zone.startYear),
        endYear: Math.max(inSpan(zone.startYear), inSpan(zone.endYear)),
        color: /^#[0-9a-f]{6}$/i.test(zone.color) ? zone.color : (TERRITORY_PALETTE[index % TERRITORY_PALETTE.length] ?? "#b4875a"),
        polygon,
        span: Math.max(...longitudes) - Math.min(...longitudes),
      };
    })
    .filter((zone) => zone.span < 180)
    .map(({ span: _span, ...zone }) => zone);

  const chapterId = uniqueIds("gen-chapter");
  const chapters: CameraKeyframe[] = generated.chapters
    .map((chapter) => {
      const related = resolveEvent(chapter.eventId);
      return {
        id: chapterId(chapter.id || chapter.title),
        year: inSpan(chapter.year),
        title: chapter.title.trim(),
        caption: chapter.caption.trim(),
        target: toPoint(chapter.target),
        altitude: clamp(chapter.altitude, 0.7, 2.4),
        tilt: clamp(chapter.tilt, 0, 35),
        ...(related ? { eventId: related } : {}),
      };
    })
    .sort((a, b) => a.year - b.year);

  return {
    id: campaignId,
    title: generated.title.trim(),
    subtitle: generated.subtitle.trim(),
    summary: generated.summary.trim(),
    startYear,
    endYear,
    accent: "#d9a441",
    keywords: generated.keywords.map((keyword) => keyword.toLowerCase()).slice(0, 20),
    source: "generated",
    chapters: chapters.length > 0 ? chapters : synthesizeChapters(events),
    events,
    arcs,
    territories,
  };
}

export function synthesizeChapters(events: readonly HistoricalEvent[]): CameraKeyframe[] {
  const highlights = [...events]
    .sort((a, b) => b.significance - a.significance || a.year - b.year)
    .slice(0, 7)
    .sort((a, b) => a.year - b.year);
  return highlights.map((event) => ({
    id: `chapter-${event.id}`,
    year: event.year,
    title: event.title,
    caption: event.summary,
    target: event.coordinates,
    altitude: 1.15,
    tilt: 22,
    eventId: event.id,
  }));
}
