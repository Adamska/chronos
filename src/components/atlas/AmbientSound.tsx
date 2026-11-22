"use client";

import { useEffect } from "react";
import { Ambience, type AmbienceMix } from "@/audio/ambience";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

function currentMix(): AmbienceMix {
  const atlas = useAtlasStore.getState();
  const chronos = useChronosStore.getState();
  const tradeVisible = chronos.layers.trade && (chronos.campaign?.arcs.some((arc) => arc.layer === "trade") ?? false);
  return {
    wind: atlas.showEnvironment ? 0.38 : 0.16,
    sea: atlas.showEnvironment ? 0.3 : 0.14,
    bells: tradeVisible ? (chronos.isPlaying || atlas.touring ? 0.85 : 0.45) : 0.08,
  };
}

export function AmbientSound() {
  const enabled = useAtlasStore((state) => state.ambientSound);

  useEffect(() => {
    if (!enabled || typeof AudioContext === "undefined") return;
    const ambience = new Ambience();
    void ambience.resume();
    ambience.setMix(currentMix());
    const update = () => ambience.setMix(currentMix());
    const unsubscribeAtlas = useAtlasStore.subscribe(update);
    const unsubscribeChronos = useChronosStore.subscribe((state, previous) => {
      if (state.layers !== previous.layers || state.isPlaying !== previous.isPlaying || state.campaign !== previous.campaign) update();
    });
    return () => {
      unsubscribeAtlas();
      unsubscribeChronos();
      ambience.dispose();
    };
  }, [enabled]);

  return null;
}
