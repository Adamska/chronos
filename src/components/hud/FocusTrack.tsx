"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ClimateBands, ScrubTrack, TickAxis, toFraction, type YearRange } from "@/components/hud/TimelineTrack";
import { formatYear } from "@/data/campaigns/registry";
import { CLIMATE_PERIODS } from "@/data/environment";
import { useT } from "@/i18n/I18nProvider";
import { LAYER_COLORS } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign, HistoricalEvent } from "@/types/chronicle";

const MIN_SPAN = 10;
const DENSITY_BINS = 64;

function campaignRange(campaign: ChronicleCampaign): YearRange {
  const pad = Math.max(2, (campaign.endYear - campaign.startYear) * 0.02);
  return { start: campaign.startYear - pad, end: campaign.endYear + pad };
}

function densityPath(events: readonly HistoricalEvent[], range: YearRange): string {
  const bins = new Array<number>(DENSITY_BINS).fill(0);
  for (const event of events) {
    const bin = Math.floor(toFraction(event.year, range) * (DENSITY_BINS - 1));
    if (event.year >= range.start && event.year <= range.end) bins[bin] = (bins[bin] ?? 0) + event.significance;
  }
  const peak = Math.max(1, ...bins);
  const points = bins.map((value, index) => `${(index / (DENSITY_BINS - 1)) * 100},${10 - (value / peak) * 9}`);
  return `M0,10 L${points.join(" L")} L100,10 Z`;
}

export function FocusTrack({ campaign }: { readonly campaign: ChronicleCampaign }) {
  const layers = useChronosStore((state) => state.layers);
  const activeChapterId = useChronosStore((state) => state.activeChapterId);
  const goToChapter = useChronosStore((state) => state.goToChapter);
  const select = useChronosStore((state) => state.select);
  const setYear = useChronosStore((state) => state.setYear);
  const t = useT();
  const full = useMemo(() => campaignRange(campaign), [campaign]);
  const [range, setRange] = useState<YearRange>(full);
  const [hovered, setHovered] = useState<HistoricalEvent | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const handle = (event: WheelEvent) => {
      event.preventDefault();
      const bounds = element.getBoundingClientRect();
      const anchor = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
      setRange((current) => {
        const span = current.end - current.start;
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          const shift = (event.deltaX / bounds.width) * span;
          const start = Math.min(full.end - span, Math.max(full.start, current.start + shift));
          return { start, end: start + span };
        }
        const nextSpan = Math.min(full.end - full.start, Math.max(MIN_SPAN, span * Math.exp(event.deltaY * 0.0025)));
        const focusYear = current.start + anchor * span;
        const start = Math.min(full.end - nextSpan, Math.max(full.start, focusYear - anchor * nextSpan));
        return { start, end: start + nextSpan };
      });
    };
    element.addEventListener("wheel", handle, { passive: false });
    return () => element.removeEventListener("wheel", handle);
  }, [full]);

  const zoomed = range.end - range.start < full.end - full.start - 1;
  const visible = campaign.events.filter((event) => event.year >= range.start && event.year <= range.end);

  return (
    <div ref={wrapper} className="relative mt-3" onDoubleClick={() => setRange(full)}>
      {hovered ? (
        <div
          role="tooltip"
          className="glass-panel pointer-events-none absolute bottom-full z-10 mb-2 w-56 -translate-x-1/2 rounded-xl px-3 py-2"
          style={{ left: `${Math.min(92, Math.max(8, toFraction(hovered.year, range) * 100))}%` }}
        >
          <p className="font-mono text-[10px] text-ochre-soft">{formatYear(hovered.year)}</p>
          <p className="mt-0.5 font-serif text-[14px] leading-snug text-ink">{hovered.title}</p>
          <p className="mt-0.5 truncate text-[11px] text-ink-muted">{hovered.place}</p>
        </div>
      ) : null}
      <ScrubTrack range={range} label={t("timeline.campaign")} height="h-11" needleClass="w-px bg-ochre shadow-[0_0_12px_2px_rgb(217_164_65/0.55)]">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-[18px] h-[10px] w-full" aria-hidden>
          <path d={densityPath(campaign.events, range)} fill="rgb(217 164 65 / 0.14)" />
        </svg>
        <div className="absolute inset-x-0 top-[26px] h-px bg-white/10" />
        <ClimateBands range={range} periods={CLIMATE_PERIODS} />
        {visible.map((event) => (
          <button
            key={event.id}
            type="button"
            data-track-control
            aria-label={t("timeline.eventMarker", { year: formatYear(event.year), title: event.title })}
            onMouseEnter={() => setHovered(event)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(event)}
            onBlur={() => setHovered(null)}
            onClick={() => {
              setYear(event.year);
              select({ kind: "event", id: event.id });
            }}
            className="absolute bottom-[17px] w-[3px] -translate-x-1/2 rounded-full transition-[opacity,height] hover:!opacity-100"
            style={{ left: `${toFraction(event.year, range) * 100}%`, height: `${4 + event.significance * 2.4}px`, background: LAYER_COLORS[event.layer], opacity: layers[event.layer] ? 0.85 : 0.15 }}
          />
        ))}
        {campaign.chapters.map((chapter, index) =>
          chapter.year < range.start || chapter.year > range.end ? null : (
            <button
              key={chapter.id}
              type="button"
              data-track-control
              aria-label={t("timeline.chapterMarker", { index: index + 1, title: chapter.title })}
              onClick={() => goToChapter(chapter.id)}
              className={`absolute top-0 flex size-[17px] -translate-x-1/2 items-center justify-center rounded-[5px] border font-mono text-[9px] transition ${
                chapter.id === activeChapterId ? "border-ochre bg-ochre text-abyss" : "border-white/15 bg-slate-deep text-ink-muted hover:border-ochre/60 hover:text-ink"
              }`}
              style={{ left: `${toFraction(chapter.year, range) * 100}%` }}
            >
              {index + 1}
            </button>
          ),
        )}
      </ScrubTrack>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <TickAxis range={range} />
        </div>
        {zoomed ? (
          <button type="button" onClick={() => setRange(full)} className="shrink-0 font-mono text-[9.5px] text-ochre-soft hover:underline">
            {t("timeline.resetZoom")}
          </button>
        ) : null}
      </div>
    </div>
  );
}
