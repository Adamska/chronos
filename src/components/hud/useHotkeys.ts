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
      } else if (event.key === "]" || event.key === "[") {
        const events = store.campaign?.events ?? [];
        const current = events.findIndex((entry) => store.selection?.kind === "event" && entry.id === store.selection.id);
        const fallback = event.key === "]" ? events.findIndex((entry) => entry.year >= store.year) : events.findLastIndex((entry) => entry.year <= store.year);
        const index = current >= 0 ? current + (event.key === "]" ? 1 : -1) : fallback;
        const target = events[Math.min(events.length - 1, Math.max(0, index))];
        if (target) store.focusEvent(target.id);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);
}
