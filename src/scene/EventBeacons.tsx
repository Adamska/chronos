"use client";

import { useMemo } from "react";
import { type BeaconItem, BeaconField } from "@/scene/BeaconField";
import { storyFocus } from "@/scene/storyFocus";
import { LAYER_COLORS } from "@/scene/temporal";
import { revealFactor } from "@/scene/transition";
import { useChronosStore } from "@/store/useChronosStore";

export function EventBeacons() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const items = useMemo<BeaconItem[]>(
    () => (campaign?.events ?? []).map((event) => ({ id: event.id, coordinates: event.coordinates, significance: event.significance, color: LAYER_COLORS[event.layer] })),
    [campaign],
  );
  const target = useMemo(() => (index: number) => (storyFocus().events.get(items[index]?.id ?? "") ?? 0) * revealFactor(), [items]);
  const emphasis = useMemo(
    () => (index: number) => {
      const id = items[index]?.id ?? "";
      const selection = useChronosStore.getState().selection;
      if (selection?.kind === "event" && selection.id === id) return 1.5;
      return (storyFocus().events.get(id) ?? 0) >= 1 ? 1 : 0.45;
    },
    [items],
  );
  if (items.length === 0) return null;
  return <BeaconField key={campaign?.id} items={items} target={target} emphasis={emphasis} onSelect={(id) => select({ kind: "event", id })} />;
}
