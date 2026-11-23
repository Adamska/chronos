"use client";

import { useEffect, useMemo } from "react";
import { routePresence, worldEventPresence } from "@/data/worldLayer";
import { getActiveLocale } from "@/i18n/config";
import { ArcField } from "@/scene/ArcField";
import { type BeaconItem, BeaconField } from "@/scene/BeaconField";
import { overlayVisible, useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import { useWorldStore } from "@/store/useWorldStore";
import type { WorldEventCategory } from "@/types/world";

export const CATEGORY_COLORS: Record<WorldEventCategory, string> = {
  war: "#e0624a",
  politics: "#d9a441",
  religion: "#b48fd6",
  science: "#7cc7b8",
  culture: "#e8a0b0",
  exploration: "#8fb8e8",
  economy: "#c8b26a",
};

function useWorldData(active: boolean) {
  const ensure = useWorldStore((state) => state.ensure);
  const data = useWorldStore((state) => state.data);
  useEffect(() => {
    if (active) ensure(getActiveLocale());
  }, [active, ensure]);
  return data;
}

export function WorldLayers() {
  const atlasMode = useChronosStore((state) => state.mode === "atlas");
  const eventsOn = useAtlasStore((state) => state.overlays.events);
  const tradeOn = useAtlasStore((state) => state.overlays.trade);
  const showWorldEvent = useAtlasStore((state) => state.showWorldEvent);
  const data = useWorldData(atlasMode && (eventsOn || tradeOn));
  const events = useMemo(() => data?.events ?? [], [data]);
  const arcs = useMemo(() => data?.arcs ?? [], [data]);
  const items = useMemo<BeaconItem[]>(
    () => events.map((event) => ({ id: event.id, coordinates: event.coordinates, significance: event.significance, color: CATEGORY_COLORS[event.category] })),
    [events],
  );
  const eventTarget = useMemo(
    () => (index: number) => {
      const event = events[index];
      return event && overlayVisible("events") ? worldEventPresence(event, useChronosStore.getState().year) : 0;
    },
    [events],
  );
  const emphasis = useMemo(
    () => (index: number) => {
      const event = events[index];
      if (!event) return 0;
      return useAtlasStore.getState().worldEventId === event.id ? 1.5 : 0.35 + (event.significance - 3) * 0.3;
    },
    [events],
  );
  const routeTarget = useMemo(
    () => (index: number) => {
      const arc = arcs[index];
      return arc && overlayVisible("trade") ? routePresence(arc, useChronosStore.getState().year) * 0.85 : 0;
    },
    [arcs],
  );
  const selectedRoute = useMemo(() => () => arcs.findIndex((arc) => arc.id === useAtlasStore.getState().worldEventId), [arcs]);
  if (!data) return null;
  return (
    <>
      {items.length > 0 ? <BeaconField items={items} target={eventTarget} emphasis={emphasis} onSelect={showWorldEvent} /> : null}
      {arcs.length > 0 ? <ArcField arcs={arcs} target={routeTarget} selectedIndex={selectedRoute} onSelect={showWorldEvent} /> : null}
    </>
  );
}
