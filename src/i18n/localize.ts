import type { CampaignTranslation, SchematicTranslation, StoryTranslation } from "@/i18n/contentTypes";
import { angularDistance } from "@/geo/sphericalMath";
import type { HistoricalEvent } from "@/types/chronicle";
import type { StoryLayer } from "@/types/story";
import type { ChronicleCampaign, DossierSchematic } from "@/types/chronicle";

function localizeSchematic(schematic: DossierSchematic | undefined, translation: SchematicTranslation | undefined): DossierSchematic | undefined {
  if (!schematic || !translation) return schematic;
  if (schematic.kind === "causal") return { ...schematic, steps: translation.steps ?? schematic.steps };
  return {
    ...schematic,
    westLabel: translation.westLabel ?? schematic.westLabel,
    eastLabel: translation.eastLabel ?? schematic.eastLabel,
    eastbound: translation.eastbound ?? schematic.eastbound,
    westbound: translation.westbound ?? schematic.westbound,
  };
}

const EARTH_RADIUS_KM = 6371;

function frenchTrailContext(events: readonly HistoricalEvent[], index: number, title: string, summary: string): string {
  const stop = events[index];
  const previous = events[index - 1];
  if (!stop || !previous) return `${title} commence ici. ${summary}`;
  const km = (Math.round((angularDistance(previous.coordinates, stop.coordinates) * EARTH_RADIUS_KM) / 10) * 10).toLocaleString("fr-FR");
  const elapsed = stop.year - previous.year;
  const when = elapsed > 0 ? `, ${elapsed} an${elapsed > 1 ? "s" : ""} après l’étape précédente` : ", la même année que l’étape précédente";
  return `Étape ${index + 1} sur ${events.length} de «\u00a0${title}\u00a0»\u00a0: environ ${km}\u00a0km depuis ${previous.place.split(",")[0]} à vol d’oiseau${when}.`;
}

function localizeStory(story: StoryLayer | undefined, translation: StoryTranslation): StoryLayer | undefined {
  if (!story) return story;
  return {
    ...story,
    steps: story.steps.map((step) => {
      const local = translation.steps?.[step.id];
      return { ...step, title: local?.title ?? step.title, narration: local?.narration ?? step.narration };
    }),
    figures: story.figures.map((figure) => {
      const local = translation.figures?.[figure.id];
      if (!local) return figure;
      return {
        ...figure,
        name: local.name ?? figure.name,
        role: local.role ?? figure.role,
        places: figure.places.map((place, index) => ({
          ...place,
          place: local.places?.[index]?.place ?? place.place,
          note: local.places?.[index]?.note ?? place.note,
        })),
      };
    }),
  };
}

export function localizeCampaign(campaign: ChronicleCampaign, translation: CampaignTranslation | null): ChronicleCampaign {
  if (!translation) return campaign;
  const events = campaign.events.map((event) => {
    const local = translation.events?.[event.id];
    if (!local) return event;
    const schematic = localizeSchematic(event.schematic, local.schematic);
    return {
      ...event,
      title: local.title ?? event.title,
      place: local.place ?? event.place,
      summary: local.summary ?? event.summary,
      context: local.context ?? event.context,
      whyHere: local.whyHere ?? event.whyHere,
      ...(schematic ? { schematic } : {}),
    };
  });
  const derived = campaign.source === "thread" || campaign.source === "journey";
  if (derived) {
    const title = translation.title ?? campaign.title;
    const summary = translation.summary ?? campaign.summary;
    events.forEach((event, index) => {
      if (!translation.events?.[event.id]?.context) events[index] = { ...event, context: frenchTrailContext(events, index, title, summary) };
    });
  }
  const eventById = new Map(events.map((event) => [event.id, event]));
  return {
    ...campaign,
    title: translation.title ?? campaign.title,
    subtitle: translation.subtitle ?? campaign.subtitle,
    summary: translation.summary ?? campaign.summary,
    keywords: translation.keywords ?? campaign.keywords,
    events,
    chapters: campaign.chapters.map((chapter) => {
      const local = translation.chapters?.[chapter.id];
      const event = chapter.eventId ? eventById.get(chapter.eventId) : undefined;
      return {
        ...chapter,
        title: local?.title ?? (derived && event ? event.title : chapter.title),
        caption: local?.caption ?? (derived && event ? event.summary : chapter.caption),
      };
    }),
    arcs: campaign.arcs.map((arc) => {
      const local = translation.arcs?.[arc.id];
      const from = derived ? eventById.get(campaign.events.find((event) => event.coordinates === arc.path[0])?.id ?? "") : undefined;
      const to = derived && arc.eventId ? eventById.get(arc.eventId) : undefined;
      const label = local?.label ?? (from && to ? `${from.place.split(",")[0]} → ${to.place.split(",")[0]}` : arc.label);
      return { ...arc, label, ...(local?.cargo ? { cargo: local.cargo } : {}) };
    }),
    territories: campaign.territories.map((zone) => ({ ...zone, name: translation.territories?.[zone.id]?.name ?? zone.name })),
    ...(campaign.story ? { story: localizeStory(campaign.story, translation) } : {}),
  };
}
