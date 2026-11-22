"use client";

import { useRef, useState } from "react";
import { useFocusTrap } from "@/components/useFocusTrap";
import { CATALOG, type CatalogEntry, loadChronicle } from "@/data/catalog";
import { formatSpan } from "@/data/campaigns/registry";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const SEEN_KEY = "chronos.landing.seen";

export function hasSeenLanding(): boolean {
  try {
    return window.localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberLanding(): void {
  try {
    window.localStorage.setItem(SEEN_KEY, "1");
  } catch {
    return;
  }
}

const KIND_LABEL: Record<string, string> = { curated: "Campaign", thread: "Thread", journey: "Journey" };

function ChronicleCard({ entry, onOpen }: { readonly entry: CatalogEntry; readonly onOpen: (entry: CatalogEntry) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(entry)}
      className="group flex flex-col gap-2 rounded-xl border border-hairline bg-white/[0.03] p-3.5 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
    >
      <span className="flex items-center justify-between gap-2">
        <span className="h-1 w-8 rounded-full" style={{ background: entry.accent }} />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">{KIND_LABEL[entry.source] ?? entry.source}</span>
      </span>
      <span className="font-serif text-[16px] leading-snug text-ink group-hover:text-ochre-soft">{entry.title}</span>
      <span className="line-clamp-2 text-[12px] leading-snug text-ink-muted">{entry.subtitle}</span>
      <span className="mt-auto font-mono text-[10px] text-ink-faint">{formatSpan(entry.startYear, entry.endYear)}</span>
    </button>
  );
}

export function Landing() {
  const open = useAtlasStore((state) => state.landingOpen);
  const setLandingOpen = useAtlasStore((state) => state.setLandingOpen);
  const [filter, setFilter] = useState<"all" | "curated" | "thread" | "journey">("all");
  const dialog = useRef<HTMLDivElement>(null);
  useFocusTrap(dialog, open);
  if (!open) return null;

  const close = () => {
    rememberLanding();
    setLandingOpen(false);
  };
  const openEntry = (entry: CatalogEntry) => {
    void loadChronicle(entry.id).then((campaign) => {
      if (campaign) useChronosStore.getState().loadCampaign(campaign);
      close();
    });
  };
  const doors = [
    { title: "Explore the atlas", body: "Scrub five thousand years, open dossiers and switch on lenses.", act: close },
    { title: "Play “Why here?”", body: "Place events on a blank globe and learn the geography behind them.", act: () => (close(), useAtlasStore.getState().setChallengeActive(true)) },
    { title: "Watch a guided tour", body: "Sit back while the camera narrates the current chronicle.", act: () => (close(), useAtlasStore.getState().setTouring(true)) },
  ];
  const entries = CATALOG.filter((entry) => filter === "all" || entry.source === filter);

  return (
    <div ref={dialog} role="dialog" aria-modal="true" aria-label="Welcome to Chronos" className="pointer-events-auto absolute inset-0 z-40 overflow-y-auto bg-gradient-to-b from-abyss/70 via-abyss/85 to-abyss">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col px-5 py-10 sm:px-8 sm:py-14">
        <p className="eyebrow">A temporal and geopolitical atlas</p>
        <h1 className="mt-3 font-serif text-[52px] leading-none text-ink sm:text-[76px]">Chronos</h1>
        <p className="mt-4 max-w-2xl font-serif text-[19px] leading-snug text-ink/85 sm:text-[22px]">
          History happened somewhere. Follow trade winds, mountain passes and narrow straits to see why empires rose where they did.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {doors.map((door, index) => (
            <button
              key={door.title}
              type="button"
              onClick={door.act}
              autoFocus={index === 0}
              className="glass-panel rounded-2xl px-5 py-4 text-left transition hover:border-ochre/40"
            >
              <span className="block font-serif text-[19px] text-ink">{door.title}</span>
              <span className="mt-1 block text-[12.5px] leading-snug text-ink-muted">{door.body}</span>
            </button>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <h2 className="eyebrow">Chronicles</h2>
          <div className="flex gap-1 rounded-full bg-white/[0.04] p-0.5 text-[11.5px]" role="group" aria-label="Filter chronicles">
            {(["all", "curated", "thread", "journey"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`rounded-full px-3 py-1 transition ${filter === value ? "bg-white/10 text-ink" : "text-ink-muted hover:text-ink"}`}
              >
                {value === "all" ? "All" : `${KIND_LABEL[value]}s`}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((entry) => (
            <ChronicleCard key={entry.id} entry={entry} onOpen={openEntry} />
          ))}
        </div>
        <button type="button" onClick={close} className="mx-auto mt-10 text-[12px] text-ink-muted underline-offset-4 hover:text-ink hover:underline">
          Skip to the globe
        </button>
      </div>
    </div>
  );
}
