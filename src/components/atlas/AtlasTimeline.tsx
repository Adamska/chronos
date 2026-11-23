"use client";

import { useEffect, useRef } from "react";
import { ATLAS_TICKS, ERA_BANDS, fractionToYear, yearToFraction } from "@/components/atlas/atlasScale";
import { eraLabel, formatYear } from "@/data/campaigns/registry";
import { useT } from "@/i18n/I18nProvider";
import { useChronosStore } from "@/store/useChronosStore";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

const ERA_KEYS = { antiquity: "era.antiquity", "middle-ages": "era.middleAges", "early-modern": "era.earlyModern", modern: "era.modern" } as const;

function PlayButton() {
  const t = useT();
  const isPlaying = useChronosStore((state) => state.isPlaying);
  const togglePlaying = useChronosStore((state) => state.togglePlaying);
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

export function AtlasTimeline() {
  const t = useT();
  const track = useRef<HTMLDivElement>(null);
  const marker = useRef<HTMLDivElement>(null);
  const yearNode = useRef<HTMLSpanElement>(null);
  const eraNode = useRef<HTMLSpanElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = (year: number) => {
      const fraction = yearToFraction(year);
      if (marker.current) marker.current.style.left = `${fraction * 100}%`;
      if (yearNode.current) yearNode.current.textContent = formatYear(year);
      if (eraNode.current) eraNode.current.textContent = eraLabel(year);
      if (slider.current) {
        slider.current.setAttribute("aria-valuenow", String(Math.round(year)));
        slider.current.setAttribute("aria-valuetext", formatYear(year));
      }
    };
    render(useChronosStore.getState().year);
    return useChronosStore.subscribe((state, previous) => {
      if (state.year !== previous.year) render(state.year);
    });
  }, []);

  const scrubTo = (clientX: number) => {
    const bounds = track.current?.getBoundingClientRect();
    if (!bounds) return;
    useChronosStore.getState().setYear(Math.round(fractionToYear((clientX - bounds.left) / bounds.width)));
  };

  return (
    <div data-hud-zone className="glass-panel pointer-events-auto flex items-center gap-4 rounded-2xl px-4 py-3 sm:px-5">
      <PlayButton />
      <div className="flex min-w-[6.5rem] flex-col leading-none sm:min-w-[8rem]">
        <span ref={yearNode} className="font-mono text-[19px] font-medium tabular-nums tracking-tight text-ink sm:text-[22px]" />
        <span ref={eraNode} className="eyebrow mt-1.5" />
      </div>
      <div className="min-w-0 flex-1 pb-4">
        <div
          ref={slider}
          role="slider"
          tabIndex={0}
          aria-label={t("timeline.slider")}
          aria-valuemin={TIMELINE_MIN_YEAR}
          aria-valuemax={TIMELINE_MAX_YEAR}
          aria-valuenow={0}
          className="relative h-8 cursor-pointer touch-none select-none"
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            useChronosStore.getState().setPlaying(false);
            scrubTo(event.clientX);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) scrubTo(event.clientX);
          }}
          onKeyDown={(event) => {
            const store = useChronosStore.getState();
            const step = event.altKey ? 100 : 10;
            if (event.key === "ArrowRight" || event.key === "ArrowUp") store.setYear(Math.round(store.year) + step);
            else if (event.key === "ArrowLeft" || event.key === "ArrowDown") store.setYear(Math.round(store.year) - step);
            else if (event.key === "Home") store.setYear(TIMELINE_MIN_YEAR);
            else if (event.key === "End") store.setYear(TIMELINE_MAX_YEAR);
            else return;
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <div ref={track} className="absolute inset-x-0 top-1/2 flex h-1.5 -translate-y-1/2 overflow-hidden rounded-full">
            {ERA_BANDS.map((band) => (
              <div
                key={band.id}
                title={t(ERA_KEYS[band.id])}
                className="h-full opacity-50"
                style={{ width: `${(yearToFraction(band.end) - yearToFraction(band.start)) * 100}%`, background: band.color }}
              />
            ))}
          </div>
          <div ref={marker} className="pointer-events-none absolute top-1/2 h-6 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink shadow-[0_0_10px_2px_rgb(233_228_216/0.45)]" />
          {ATLAS_TICKS.map((year, index) => (
            <span
              key={year}
              className={`pointer-events-none absolute top-full hidden whitespace-nowrap font-mono text-[9.5px] text-ink-faint sm:block ${index === 0 ? "" : index === ATLAS_TICKS.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`}
              style={{ left: `${yearToFraction(year) * 100}%` }}
            >
              {formatYear(year)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
