"use client";

import { useEffect } from "react";
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
        if (store.paletteOpen) store.setPaletteOpen(false);
        else if (store.selection) store.select(null);
        return;
      }
      if (isTypingTarget(event.target) || store.paletteOpen) return;
      if (event.key === " ") {
        event.preventDefault();
        store.togglePlaying();
      } else if (event.key === "ArrowRight") {
        store.stepChapter(1);
      } else if (event.key === "ArrowLeft") {
        store.stepChapter(-1);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
}
