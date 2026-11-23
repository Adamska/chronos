"use client";

import { formatSpan, formatYear } from "@/data/campaigns/registry";
import { storyOf } from "@/data/story";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";

const ARROW = "flex size-9 items-center justify-center rounded-full border border-hairline text-ink-muted transition hover:border-ochre/40 hover:text-ink disabled:opacity-30";

function StoryControls({ index, total }: { readonly index: number; readonly total: number }) {
  const t = useT();
  const isPlaying = useChronosStore((state) => state.isPlaying);
  const togglePlaying = useChronosStore((state) => state.togglePlaying);
  const stepStory = useChronosStore((state) => state.stepStory);
  return (
    <div className="flex items-center gap-2">
      <button type="button" className={ARROW} disabled={index <= 0} onClick={() => stepStory(-1)} aria-label={t("story.previous")}>
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 3 5 8l5 5" /></svg>
      </button>
      <button
        type="button"
        onClick={togglePlaying}
        aria-label={isPlaying ? t("story.pause") : t("story.play")}
        className="flex h-9 items-center gap-2 rounded-full border border-ochre/40 bg-ochre/10 px-4 text-[12.5px] text-ochre-soft transition hover:bg-ochre/20"
      >
        {isPlaying ? (
          <svg viewBox="0 0 16 16" className="size-3" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" rx="1" /><rect x="9.5" y="2" width="3.5" height="12" rx="1" /></svg>
        ) : (
          <svg viewBox="0 0 16 16" className="size-3" fill="currentColor"><path d="M4 2.5v11a.6.6 0 0 0 .9.5l9-5.5a.6.6 0 0 0 0-1l-9-5.5a.6.6 0 0 0-.9.5Z" /></svg>
        )}
        {isPlaying ? t("story.pause") : t("story.play")}
      </button>
      <button type="button" className={ARROW} disabled={index >= total - 1} onClick={() => stepStory(1)} aria-label={t("story.next")}>
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 3 5 5-5 5" /></svg>
      </button>
    </div>
  );
}

export function StoryPanel() {
  const t = useT();
  const campaign = useChronosStore((state) => state.campaign);
  const stepIndex = useChronosStore((state) => state.stepIndex);
  const figureId = useChronosStore((state) => state.figureId);
  const showFigure = useChronosStore((state) => state.showFigure);
  const select = useChronosStore((state) => state.select);
  const setMode = useChronosStore((state) => state.setMode);
  const setPaletteOpen = useChronosStore((state) => state.setPaletteOpen);
  if (!campaign) return null;
  const story = storyOf(campaign);
  const step = story.steps[stepIndex];
  if (!step) return null;
  const figures = story.figures.filter((figure) => step.figures.includes(figure.id));
  const lead = step.events[0];
  const last = stepIndex >= story.steps.length - 1;

  return (
    <section data-hud-zone aria-live="polite" className="glass-panel pointer-events-auto flex min-h-0 max-h-full w-full flex-col rounded-2xl">
      <header className="flex items-start justify-between gap-3 border-b border-hairline px-5 pb-3 pt-4">
        <div className="min-w-0">
          <p className="eyebrow">{formatSpan(campaign.startYear, campaign.endYear)}</p>
          <h1 className="mt-1 truncate font-serif text-[17px] text-ink">{campaign.title}</h1>
        </div>
        <button type="button" onClick={() => setPaletteOpen(true)} className="shrink-0 rounded-full border border-hairline px-2.5 py-1 text-[11px] text-ink-muted hover:text-ink">
          {t("story.change")}
        </button>
      </header>
      <div key={step.id} className="fade-rise scrollbar-quiet min-h-0 flex-1 overflow-y-auto px-5 py-4">
        <p className="font-mono text-[11px] text-ochre-soft">
          {t("story.stepOf", { index: stepIndex + 1, total: story.steps.length })} · {formatYear(step.year)}
        </p>
        <h2 className="mt-1.5 font-serif text-[24px] leading-[1.15] text-ink sm:text-[27px]">{step.title}</h2>
        <p className="mt-3 font-serif text-[15.5px] leading-[1.6] text-ink/90">{step.narration}</p>
        {figures.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {figures.map((figure) => (
              <button
                key={figure.id}
                type="button"
                aria-pressed={figureId === figure.id}
                onClick={() => showFigure(figure.id)}
                className={`flex items-center gap-2 rounded-full border py-1 pl-1 pr-3 text-[12px] transition ${figureId === figure.id ? "border-ochre/50 bg-ochre/10 text-ochre-soft" : "border-hairline text-ink/85 hover:text-ink"}`}
              >
                <span className="grid size-6 place-items-center rounded-full bg-white/[0.06] font-serif text-[12px]">{figure.name.charAt(0)}</span>
                {figure.name}
              </button>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px]">
          {lead ? (
            <button type="button" onClick={() => select({ kind: "event", id: lead })} className="text-teal-chart hover:underline">
              {t("story.more")}
            </button>
          ) : null}
          {last ? (
            <button type="button" onClick={() => setMode("atlas")} className="text-ochre-soft hover:underline">
              {t("story.exploreEra")}
            </button>
          ) : null}
        </div>
      </div>
      <footer className="flex items-center justify-between gap-3 border-t border-hairline px-5 py-3">
        <StoryControls index={stepIndex} total={story.steps.length} />
      </footer>
    </section>
  );
}
