"use client";

import { useEffect } from "react";
import { useChronosStore } from "@/store/useChronosStore";

const DISMISS_AFTER_MS = 7000;

export function ChronicleNotice() {
  const status = useChronosStore((state) => state.chronicleStatus);
  const message = useChronosStore((state) => state.chronicleMessage);
  const setChronicleStatus = useChronosStore((state) => state.setChronicleStatus);
  const visible = status === "idle" && Boolean(message);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => setChronicleStatus("idle", null), DISMISS_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [visible, message, setChronicleStatus]);

  if (status === "loading") {
    return (
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[2px] overflow-hidden">
        <div className="h-full w-1/3 animate-[chronicle-progress_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-ochre to-transparent" />
      </div>
    );
  }

  if (!visible) return null;

  return (
    <div role="status" className="glass-panel pointer-events-auto absolute left-1/2 top-16 z-30 flex max-w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 items-center gap-3 rounded-full px-4 py-2 text-[12px] text-ink/85">
      <span className="size-1.5 shrink-0 rounded-full bg-teal-chart" />
      <span className="truncate">{message}</span>
      <button type="button" onClick={() => setChronicleStatus("idle", null)} className="shrink-0 text-ink-faint hover:text-ink" aria-label="Dismiss">
        <svg viewBox="0 0 16 16" className="size-3" stroke="currentColor" strokeWidth="1.8"><path d="m3 3 10 10M13 3 3 13" /></svg>
      </button>
    </div>
  );
}
