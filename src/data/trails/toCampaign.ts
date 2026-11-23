import { angularDistance } from "@/geo/sphericalMath";
import type { Trail } from "@/types/atlas";
import type { CameraKeyframe, ChronicleCampaign, GeoArc, HistoricalEvent } from "@/types/chronicle";

const EARTH_RADIUS_KM = 6371;

const kilometres = (value: number): string => `${Math.round(value / 10) * 10}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function trailToCampaign(trail: Trail): ChronicleCampaign {
  const stops = [...trail.stops].sort((a, b) => a.year - b.year);
  const first = stops[0];
  const last = stops[stops.length - 1];
  const startYear = first?.year ?? 1;
  const endYear = Math.max(last?.year ?? startYear, startYear + 1);

  const events: HistoricalEvent[] = stops.map((stop, index) => {
    const previous = stops[index - 1];
    const distance = previous ? angularDistance(previous.coordinates, stop.coordinates) * EARTH_RADIUS_KM : 0;
    const elapsed = previous ? stop.year - previous.year : 0;
    const context = previous
      ? `Stop ${index + 1} of ${stops.length} on ${trail.title}: about ${kilometres(distance)} km from ${previous.place} along the great circle${
          elapsed > 0 ? `, ${elapsed} year${elapsed === 1 ? "" : "s"} after the previous stop` : ", in the same year as the previous stop"
        }.`
      : `${trail.title} begins here. ${trail.summary}`;
    return {
      id: stop.id,
      title: stop.title,
      year: stop.year,
      place: stop.place,
      coordinates: stop.coordinates,
      layer: stop.layer,
      significance: index === 0 || index === stops.length - 1 ? 5 : 4,
      wikipediaSlug: stop.wikipediaSlug,
      summary: stop.summary,
      context,
      whyHere: stop.whyHere,
      keyFigures: stop.keyFigures ?? [],
      ...(stop.primarySource ? { primarySource: stop.primarySource } : {}),
    };
  });

  const arcs: GeoArc[] = stops.slice(1).map((stop, index) => {
    const previous = stops[index] ?? stop;
    return {
      id: `${trail.id}-leg-${index + 1}`,
      label: `${previous.place} to ${stop.place}`,
      kind: stop.arrivedBy,
      layer: stop.layer,
      path: [previous.coordinates, stop.coordinates],
      startYear: previous.year,
      endYear,
      intensity: 0.75,
      eventId: stop.id,
    };
  });

  const chapters: CameraKeyframe[] = stops.map((stop, index) => {
    const previous = stops[index - 1];
    const hop = previous ? angularDistance(previous.coordinates, stop.coordinates) * EARTH_RADIUS_KM : 0;
    return {
      id: `${stop.id}-chapter`,
      year: stop.year,
      title: stop.title,
      caption: stop.summary,
      target: stop.coordinates,
      altitude: Math.min(2, 0.95 + hop / 7000),
      tilt: 22,
      eventId: stop.id,
    };
  });

  return {
    id: trail.id,
    title: trail.title,
    subtitle: trail.subtitle,
    summary: trail.summary,
    startYear,
    endYear,
    accent: trail.accent,
    keywords: trail.keywords,
    source: trail.kind,
    chapters,
    events,
    arcs,
    territories: [],
    ...(trail.story ? { story: trail.story } : {}),
  };
}
