"use client";

import { useMemo } from "react";
import { ArcField } from "@/scene/ArcField";
import { storyFocus } from "@/scene/storyFocus";
import { revealFactor } from "@/scene/transition";
import { useChronosStore } from "@/store/useChronosStore";

export function ChronicleArcs() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const arcs = useMemo(() => campaign?.arcs ?? [], [campaign]);
  const target = useMemo(() => (index: number) => (storyFocus().arcs.has(arcs[index]?.id ?? "") ? revealFactor() : 0), [arcs]);
  const selectedIndex = useMemo(
    () => () => {
      const selection = useChronosStore.getState().selection;
      return selection?.kind === "arc" ? arcs.findIndex((arc) => arc.id === selection.id) : -1;
    },
    [arcs],
  );
  if (arcs.length === 0) return null;
  return <ArcField key={campaign?.id} arcs={arcs} target={target} selectedIndex={selectedIndex} onSelect={(id) => select({ kind: "arc", id })} />;
}
