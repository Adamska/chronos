import type { CampaignTranslation, SchematicTranslation } from "@/i18n/contentTypes";
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
  const eventById = new Map(events.map((event) => [event.id, event]));
  const derived = campaign.source === "thread" || campaign.source === "journey";
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
  };
}
