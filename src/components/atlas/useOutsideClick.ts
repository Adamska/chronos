"use client";

import { type RefObject, useEffect } from "react";

const DRAG_TOLERANCE = 6;
const IGNORE_SELECTOR = "[data-outside-ignore]";

export function useOutsideClick(ref: RefObject<HTMLElement | null>, onOutside: () => void, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    let start: { x: number; y: number; outside: boolean } | null = null;
    const down = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const inside = Boolean(ref.current?.contains(target)) || Boolean(target?.closest?.(IGNORE_SELECTOR));
      start = { x: event.clientX, y: event.clientY, outside: !inside };
    };
    const up = (event: PointerEvent) => {
      if (start?.outside && Math.hypot(event.clientX - start.x, event.clientY - start.y) < DRAG_TOLERANCE) onOutside();
      start = null;
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOutside();
    };
    window.addEventListener("pointerdown", down, true);
    window.addEventListener("pointerup", up, true);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("pointerdown", down, true);
      window.removeEventListener("pointerup", up, true);
      window.removeEventListener("keydown", key);
    };
  }, [ref, onOutside, enabled]);
}
