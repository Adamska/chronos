"use client";

import { useEffect } from "react";
import { useChronosStore } from "@/store/useChronosStore";

export function usePlayback(): void {
  const isPlaying = useChronosStore((state) => state.isPlaying);

  useEffect(() => {
    if (!isPlaying) return;
    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(0.1, (now - previous) / 1000);
      previous = now;
      const store = useChronosStore.getState();
      const { campaign, year, yearsPerSecond, cameraMode, activeChapterId } = store;
      if (!campaign) return;

      const next = Math.min(campaign.endYear, year + yearsPerSecond * delta);
      store.setYear(next);

      const reached = campaign.chapters.filter((chapter) => chapter.year <= next).at(-1);
      if (reached && reached.id !== activeChapterId) {
        if (cameraMode === "directed") store.goToChapter(reached.id, { moveYear: false, openDossier: false });
        else store.markChapter(reached.id);
      }

      if (next >= campaign.endYear) {
        store.setPlaying(false);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying]);
}
