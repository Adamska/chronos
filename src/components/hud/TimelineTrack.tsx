"use client";

import { type PointerEvent as ReactPointerEvent, type ReactNode, useEffect, useRef } from "react";
import { formatYear } from "@/data/campaigns/registry";
import { useChronosStore } from "@/store/useChronosStore";

export interface YearRange {
  readonly start: number;
  readonly end: number;
}

export const toFraction = (year: number, range: YearRange): number =>
  Math.min(1, Math.max(0, (year - range.start) / (range.end - range.start || 1)));

export function niceTicks(range: YearRange, target = 6): number[] {
  const span = range.end - range.start;
  const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
  const step = steps.find((candidate) => span / candidate <= target) ?? 1000;
  const ticks: number[] = [];
  for (let year = Math.ceil(range.start / step) * step; year <= range.end; year += step) ticks.push(year === 0 ? 1 : year);
  return ticks;
}

interface TrackProps {
  readonly range: YearRange;
  readonly label: string;
  readonly height: string;
  readonly needleClass: string;
  readonly children?: ReactNode;
}

export function ScrubTrack({ range, label, height, needleClass, children }: TrackProps) {
  const track = useRef<HTMLDivElement>(null);
  const needle = useRef<HTMLDivElement>(null);
  const resumeAfterDrag = useRef(false);

  useEffect(() => {
    const place = (year: number) => {
      if (needle.current) needle.current.style.left = `${toFraction(year, range) * 100}%`;
      track.current?.setAttribute("aria-valuenow", String(Math.round(year)));
    };
    place(useChronosStore.getState().year);
    return useChronosStore.subscribe((state) => place(state.year));
  }, [range]);

  const yearAt = (clientX: number): number => {
    const bounds = track.current?.getBoundingClientRect();
    if (!bounds) return range.start;
    const fraction = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width));
    return range.start + fraction * (range.end - range.start);
  };

  const begin = (event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("[data-track-control]")) return;
    const store = useChronosStore.getState();
    resumeAfterDrag.current = store.isPlaying;
    store.setPlaying(false);
    event.currentTarget.setPointerCapture(event.pointerId);
    store.setYear(yearAt(event.clientX));
  };

  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) useChronosStore.getState().setYear(yearAt(event.clientX));
  };

  const end = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    if (resumeAfterDrag.current) useChronosStore.getState().setPlaying(true);
  };

  return (
    <div
      ref={track}
      role="slider"
      aria-label={label}
      aria-valuemin={range.start}
      aria-valuemax={range.end}
      aria-valuenow={range.start}
      tabIndex={-1}
      className={`relative w-full cursor-ew-resize touch-none select-none ${height}`}
      onPointerDown={begin}
      onPointerMove={move}
      onPointerUp={end}
      onPointerCancel={end}
    >
      {children}
      <div ref={needle} className={`pointer-events-none absolute inset-y-0 -translate-x-1/2 ${needleClass}`} />
    </div>
  );
}

export function TickAxis({ range }: { readonly range: YearRange }) {
  return (
    <div className="pointer-events-none relative h-3 w-full">
      {niceTicks(range).map((year) => {
        const fraction = toFraction(year, range);
        const align = fraction < 0.04 ? "translate-x-0" : fraction > 0.96 ? "-translate-x-full" : "-translate-x-1/2";
        return (
          <span
            key={year}
            className={`absolute top-0 whitespace-nowrap font-mono text-[9px] tabular-nums text-ink-faint ${align}`}
            style={{ left: `${fraction * 100}%` }}
          >
            {formatYear(year)}
          </span>
        );
      })}
    </div>
  );
}

export function ClimateBands({ range, periods }: { readonly range: YearRange; readonly periods: readonly ClimateBand[] }) {
  return (
    <>
      {periods
        .filter((period) => period.endYear >= range.start && period.startYear <= range.end)
        .map((period) => {
          const left = toFraction(period.startYear, range) * 100;
          const width = Math.max(0.3, toFraction(period.endYear, range) * 100 - left);
          return (
            <div
              key={period.id}
              title={period.name}
              className="pointer-events-none absolute bottom-0 h-[3px] rounded-full"
              style={{ left: `${left}%`, width: `${width}%`, background: period.tone === "warm" ? "rgb(232 145 90 / 0.45)" : "rgb(111 179 224 / 0.45)" }}
            />
          );
        })}
    </>
  );
}

export interface ClimateBand {
  readonly id: string;
  readonly name: string;
  readonly startYear: number;
  readonly endYear: number;
  readonly tone: "warm" | "cold";
}
