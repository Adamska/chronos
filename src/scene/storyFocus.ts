import { storyOf } from "@/data/story";
import { useChronosStore } from "@/store/useChronosStore";

export interface StoryFocus {
  readonly key: string;
  readonly events: ReadonlyMap<string, number>;
  readonly arcs: ReadonlySet<string>;
  readonly territories: ReadonlySet<string>;
  readonly figures: ReadonlySet<string>;
  readonly lead: string | null;
}

const PAST_WEIGHT = 0.28;
let cached: StoryFocus = { key: "", events: new Map(), arcs: new Set(), territories: new Set(), figures: new Set(), lead: null };

export function storyFocus(): StoryFocus {
  const { campaign, stepIndex, mode } = useChronosStore.getState();
  const key = `${campaign?.id ?? ""}:${stepIndex}:${mode}`;
  if (cached.key === key) return cached;
  const events = new Map<string, number>();
  const arcs = new Set<string>();
  const territories = new Set<string>();
  const figures = new Set<string>();
  let lead: string | null = null;
  if (campaign && mode === "story") {
    const steps = storyOf(campaign).steps;
    steps.slice(0, stepIndex).forEach((step) => step.events.forEach((id) => events.set(id, PAST_WEIGHT)));
    const current = steps[stepIndex];
    if (current) {
      current.events.forEach((id) => events.set(id, 1));
      current.arcs.forEach((id) => arcs.add(id));
      current.territories.forEach((id) => territories.add(id));
      current.figures.forEach((id) => figures.add(id));
      lead = current.events[0] ?? null;
    }
  }
  cached = { key, events, arcs, territories, figures, lead };
  return cached;
}
