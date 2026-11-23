"use client";

import { useEffect } from "react";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const isTypingTarget = (target: EventTarget | null): boolean =>
  target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

export function useHotkeys(): void {
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      const store = useChronosStore.getState();
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        store.setPaletteOpen(!store.paletteOpen);
        return;
      }
      if (event.key === "Escape") {
        const atlas = useAtlasStore.getState();
        if (store.paletteOpen) store.setPaletteOpen(false);
        else if (store.figureId) store.showFigure(null);
        else if (atlas.place || atlas.worldEventId) atlas.queryPlace(null);
        else if (store.selection) store.select(null);
        return;
      }
      if (isTypingTarget(event.target) || store.paletteOpen || event.shiftKey) return;
      if (event.key === " ") {
        event.preventDefault();
        store.togglePlaying();
        return;
      }
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      const direction = event.key === "ArrowRight" ? 1 : -1;
      if (store.mode === "story") store.stepStory(direction);
      else store.setYear(Math.round(store.year) + direction * (event.altKey ? 100 : 10));
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
}
