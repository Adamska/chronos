import type { ChronicleCampaign } from "@/types/chronicle";
import type { Era, StoryLayer, StoryStep } from "@/types/story";

const cache = new WeakMap<ChronicleCampaign, StoryLayer>();

function eraFor(year: number): Era {
  if (year < 500) return "antiquity";
  if (year < 1450) return "middle-ages";
  if (year < 1789) return "early-modern";
  return "modern";
}

function derivedStory(campaign: ChronicleCampaign): StoryLayer {
  const steps: StoryStep[] = campaign.chapters.map((chapter) => {
    const eventId = chapter.eventId ?? campaign.events.find((event) => event.year >= chapter.year)?.id;
    return {
      id: chapter.id,
      year: chapter.year,
      title: chapter.title,
      narration: chapter.caption,
      target: chapter.target,
      altitude: chapter.altitude,
      tilt: chapter.tilt,
      events: eventId ? [eventId] : [],
      arcs: campaign.arcs.filter((arc) => arc.eventId === eventId).map((arc) => arc.id).slice(0, 3),
      territories: campaign.territories
        .filter((zone) => chapter.year >= zone.startYear && chapter.year <= zone.endYear)
        .map((zone) => zone.id)
        .slice(0, 3),
      figures: [],
    };
  });
  return { era: eraFor((campaign.startYear + campaign.endYear) / 2), steps, figures: [] };
}

export function storyOf(campaign: ChronicleCampaign): StoryLayer {
  if (campaign.story) return campaign.story;
  const known = cache.get(campaign);
  if (known) return known;
  const story = derivedStory(campaign);
  cache.set(campaign, story);
  return story;
}

export function eraOf(campaign: ChronicleCampaign): Era {
  return campaign.story?.era ?? eraFor((campaign.startYear + campaign.endYear) / 2);
}
