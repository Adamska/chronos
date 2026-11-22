"use client";

import { useEffect, useMemo, useRef } from "react";
import { LayerToggles } from "@/components/hud/LayerToggles";
import { ScrubTrack, TickAxis, toFraction, type YearRange } from "@/components/hud/TimelineTrack";
import { eraLabel, formatYear } from "@/data/campaigns/registry";
import { LAYER_COLORS } from "@/scene/temporal";
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
  return (
    <button
      type="button"
      onClick={togglePlaying}
      aria-label={isPlaying ? "Pause chronology" : "Play chronology"}
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
  const chapters = campaign?.chapters ?? [];
  const index = chapters.findIndex((chapter) => chapter.id === activeChapterId);
  const active = chapters[index];
  const arrow = "flex size-7 items-center justify-center rounded-full text-ink-muted transition hover:bg-white/5 hover:text-ink disabled:opacity-30";
  return (
    <div className="hidden min-w-0 flex-1 items-center gap-2 md:flex">
      <button type="button" className={arrow} disabled={index <= 0} onClick={() => stepChapter(-1)} aria-label="Previous chapter">
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 3 5 8l5 5" /></svg>
      </button>
      <div className="min-w-0">
        <p className="eyebrow">Chapter {index + 1} of {chapters.length}</p>
        <p className="truncate font-serif text-[15px] text-ink">{active?.title ?? "Prologue"}</p>
      </div>
      <button type="button" className={arrow} disabled={index >= chapters.length - 1} onClick={() => stepChapter(1)} aria-label="Next chapter">
        <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 3 5 5-5 5" /></svg>
      </button>
    </div>
  );
}

export function TimelineScrubber() {
  const campaign = useChronosStore((state) => state.campaign);
  const layers = useChronosStore((state) => state.layers);
  const activeChapterId = useChronosStore((state) => state.activeChapterId);
  const goToChapter = useChronosStore((state) => state.goToChapter);
  const select = useChronosStore((state) => state.select);
  const setYear = useChronosStore((state) => state.setYear);

  const focus = useMemo<YearRange>(() => {
    if (!campaign) return OVERVIEW;
    const pad = Math.max(2, (campaign.endYear - campaign.startYear) * 0.02);
    return { start: campaign.startYear - pad, end: campaign.endYear + pad };
  }, [campaign]);

  return (
    <section data-hud-zone className="glass-panel pointer-events-auto w-full rounded-2xl px-4 pb-3 pt-3.5 sm:px-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <PlayButton />
        <YearReadout />
        <ChapterStepper />
        <LayerToggles />
      </div>

      <div className="mt-3">
        <ScrubTrack range={focus} label="Campaign timeline" height="h-11" needleClass="w-px bg-ochre shadow-[0_0_12px_2px_rgb(217_164_65/0.55)]">
          <div className="absolute inset-x-0 top-[26px] h-px bg-white/10" />
          {campaign?.events.map((event) => (
            <button
              key={event.id}
              type="button"
              data-track-control
              title={`${formatYear(event.year)} · ${event.title}`}
              onClick={() => {
                setYear(event.year);
                select({ kind: "event", id: event.id });
              }}
              className="absolute bottom-[17px] w-[3px] -translate-x-1/2 rounded-full transition-[opacity,height] hover:!opacity-100"
              style={{
                left: `${toFraction(event.year, focus) * 100}%`,
                height: `${4 + event.significance * 2.4}px`,
                background: LAYER_COLORS[event.layer],
                opacity: layers[event.layer] ? 0.85 : 0.15,
              }}
            />
          ))}
          {campaign?.chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              type="button"
              data-track-control
              title={chapter.title}
              onClick={() => goToChapter(chapter.id)}
              className={`absolute top-0 flex size-[17px] -translate-x-1/2 items-center justify-center rounded-[5px] border font-mono text-[9px] transition ${
                chapter.id === activeChapterId
                  ? "border-ochre bg-ochre text-abyss"
                  : "border-white/15 bg-slate-deep text-ink-muted hover:border-ochre/60 hover:text-ink"
              }`}
              style={{ left: `${toFraction(chapter.year, focus) * 100}%` }}
            >
              {index + 1}
            </button>
          ))}
        </ScrubTrack>
        <TickAxis range={focus} />
      </div>

      <div className="mt-2 border-t border-hairline pt-2">
        <ScrubTrack range={OVERVIEW} label="Five thousand year overview" height="h-3" needleClass="w-[2px] bg-ink/80">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
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
