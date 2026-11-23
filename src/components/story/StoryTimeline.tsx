"use client";

import { formatYear } from "@/data/campaigns/registry";
import { storyOf } from "@/data/story";
import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

export function StoryTimeline() {
  const t = useT();
  const campaign = useChronosStore((state) => state.campaign);
  const stepIndex = useChronosStore((state) => state.stepIndex);
  const goToStep = useChronosStore((state) => state.goToStep);
  const borders = useAtlasStore((state) => state.storyBorders);
  const toggleBorders = useAtlasStore((state) => state.toggleStoryBorders);
  if (!campaign) return null;
  const steps = storyOf(campaign).steps;
  const progress = steps.length > 1 ? stepIndex / (steps.length - 1) : 0;

  return (
    <div data-hud-zone className="glass-panel pointer-events-auto flex items-center gap-4 rounded-2xl px-4 py-3 sm:px-5">
      <div className="relative min-w-0 flex-1 py-3">
        <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        <div className="absolute left-2 top-1/2 h-px -translate-y-1/2 bg-ochre/70 transition-[width] duration-700" style={{ width: `calc((100% - 1rem) * ${progress})` }} />
        <ol className="relative flex items-center justify-between" aria-label={t("story.steps")}>
          {steps.map((step, index) => {
            const current = index === stepIndex;
            const done = index < stepIndex;
            return (
              <li key={step.id} className="group relative flex justify-center">
                <button
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-current={current ? "step" : undefined}
                  aria-label={`${index + 1}. ${step.title} (${formatYear(step.year)})`}
                  className="grid size-5 place-items-center"
                >
                  <span className={`block rounded-full transition-all duration-300 ${current ? "size-3 bg-ochre shadow-[0_0_12px_2px_rgb(217_164_65/0.55)]" : done ? "size-2 bg-ochre/70" : "size-2 bg-white/25 group-hover:bg-white/60"}`} />
                </button>
                <span
                  className={`pointer-events-none absolute top-6 whitespace-nowrap font-mono text-[10px] tabular-nums transition-opacity ${current ? "text-ochre-soft opacity-100" : "text-ink-muted opacity-0 group-hover:opacity-100"}`}
                >
                  {formatYear(step.year)}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
      <button
        type="button"
        aria-pressed={borders}
        onClick={toggleBorders}
        className={`hidden shrink-0 rounded-full border px-3 py-1 text-[11.5px] transition sm:block ${borders ? "border-ochre/50 bg-ochre/10 text-ochre-soft" : "border-hairline text-ink-muted hover:text-ink"}`}
      >
        {t("story.borders")}
      </button>
    </div>
  );
}
