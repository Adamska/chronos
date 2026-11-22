"use client";

import { travelDaysAt, travelReady } from "@/scene/lensField";
import { useAtlasStore } from "@/store/useAtlasStore";

function describe(days: number): string {
  if (days < 1) return "under a day";
  if (days < 14) return `about ${Math.round(days)} days`;
  if (days < 60) return `about ${Math.round(days / 7)} weeks`;
  if (days < 540) return `about ${Math.round(days / 30)} months`;
  return "more than a year and a half";
}

export function TravelReadout() {
  const hover = useAtlasStore((state) => state.hover);
  const origin = useAtlasStore((state) => state.travelOrigin);
  if (!hover || !origin) return null;
  const ready = travelReady(origin.coordinates);
  const days = ready ? travelDaysAt(hover.coordinates) : null;
  return (
    <div
      role="status"
      className="glass-panel pointer-events-none fixed z-30 rounded-lg px-2.5 py-1.5 text-[11.5px] text-ink"
      style={{ left: hover.clientX + 14, top: hover.clientY + 14 }}
    >
      {!ready ? "Calculating travel times…" : days === null ? "Unreachable by surface travel" : `${describe(days)} from ${origin.label}`}
    </div>
  );
}
