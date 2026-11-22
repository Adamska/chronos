"use client";

import { useEffect, useRef } from "react";
import { FocusTrack } from "@/components/hud/FocusTrack";
import { LayerToggles } from "@/components/hud/LayerToggles";
import { ClimateBands, ScrubTrack, TickAxis, toFraction, type YearRange } from "@/components/hud/TimelineTrack";
import { CLIMATE_PERIODS } from "@/data/environment";
import { eraLabel, formatYear } from "@/data/campaigns/registry";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

const OVERVIEW: YearRange = { start: TIMELINE_MIN_YEAR, end: TIMELINE_MAX_YEAR };

function YearReadout() {
  const yearNode = useRef<HTMLSpanElement>(null);
  const eraNode = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const render = (year: number) => {
      if (yearNode.current) yearNode.current.textContent = formatYear(year);
      if (eraNode.current) eraNode.current.textContent = eraLabel(year);
    };
    render(useChronosStore.getState().year);
    return useChronosStore.subscribe((state) => render(state.year));
  }, []);

  return (
    <div className="flex min-w-[7rem] flex-col leading-none sm:min-w-[8.5rem]">
      <span ref={yearNode} className="font-mono text-[19px] font-medium sm:text-[22px] tabular-nums tracking-tight text-ink" />
      <span ref={eraNode} className="eyebrow mt-1.5" />
    </div>
  );
}

function PlayButton() {
  const isPlaying = useChronosStore((state) => state.isPlaying);
  const togglePlaying = useChronosStore((state) => state.togglePlaying);
  const t = useT();
  return (
    <button
      type="button"
      onClick={togglePlaying}
      aria-label={isPlaying ? t("timeline.pause") : t("timeline.play")}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ochre/40 bg-ochre/10 text-ochre-soft transition hover:bg-ochre/20"
    >
      {isPlaying ? (
        <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" rx="1" /><rect x="9.5" y="2" width="3.5" height="12" rx="1" /></svg>
      ) : (
        <svg viewBox="0 0 16 16" className="ml-0.5 size-3.5" fill="currentColor"><path d="M4 2.5v11a.6.6 0 0 0 .9.5l9-5.5a.6.6 0 0 0 0-1l-9-5.5a.6.6 0 0 0-.9.5Z" /></svg>
      )}
    </button>
  );
}

function ChapterStepper() {
  const campaign = useChronosStore((state) => state.campaign);
  const activeChapterId = useChronosStore((state) => state.activeChapterId);
  const stepChapter = useChronosStore((state) => state.stepChapter);
  const t = useT();
  const chapters = campaign?.chapters ?? [];
  const index = chapters.findIndex((chapter) => chapter.id === activeChapterId);
  const active = chapters[index];
  const arrow = "flex size-7 items-center justify-center rounded-full text-ink-muted transition hover:bg-white/5 hover:text-ink disabled:opacity-30";
  return (
    <div className="hidden min-w-0 flex-1 items-center gap-2 md:flex">
      <button type="button" className={arrow} disabled={index <= 0} onClick={() => stepChapter(-1)} aria-label={t("timeline.previousChapter")}>
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 3 5 8l5 5" /></svg>
      </button>
      <div className="min-w-0">
        <p className="eyebrow">{t("timeline.chapterOf", { index: index + 1, total: chapters.length })}</p>
        <p className="truncate font-serif text-[15px] text-ink">{active?.title ?? t("timeline.prologue")}</p>
      </div>
      <button type="button" className={arrow} disabled={index >= chapters.length - 1} onClick={() => stepChapter(1)} aria-label={t("timeline.nextChapter")}>
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 3 5 5-5 5" /></svg>
      </button>
    </div>
  );
}

export function TimelineScrubber() {
  const campaign = useChronosStore((state) => state.campaign);
  const t = useT();

  return (
    <section data-hud-zone className="glass-panel pointer-events-auto w-full rounded-2xl px-4 pb-3 pt-3.5 sm:px-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <PlayButton />
        <YearReadout />
        <ChapterStepper />
        <LayerToggles />
      </div>

      {campaign ? <FocusTrack key={campaign.id} campaign={campaign} /> : null}

      <div className="mt-2 border-t border-hairline pt-2">
        <ScrubTrack range={OVERVIEW} label={t("timeline.overview")} height="h-3" needleClass="w-[2px] bg-ink/80">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          <ClimateBands range={OVERVIEW} periods={CLIMATE_PERIODS} />
          {campaign ? (
            <div
              className="absolute inset-y-0 rounded-sm bg-ochre/25 ring-1 ring-ochre/40"
              style={{ left: `${toFraction(campaign.startYear, OVERVIEW) * 100}%`, width: `${Math.max(0.4, (toFraction(campaign.endYear, OVERVIEW) - toFraction(campaign.startYear, OVERVIEW)) * 100)}%` }}
            />
          ) : null}
        </ScrubTrack>
        <div className="hidden sm:block">
          <TickAxis range={OVERVIEW} />
        </div>
      </div>
    </section>
  );
}
