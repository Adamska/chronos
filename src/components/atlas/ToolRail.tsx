"use client";

import { useEffect, useRef, useState } from "react";
import { RailIcon } from "@/components/atlas/RailIcon";
import { useShareLink } from "@/components/atlas/useShareLink";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

interface MenuItem {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly hint: string;
  readonly active: boolean;
  readonly onSelect: () => void;
}

interface MenuGroup {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly items: readonly MenuItem[];
}

function chooseTravelOrigin() {
  const { campaign, selection, activeChapterId } = useChronosStore.getState();
  const event = selection?.kind === "event" ? campaign?.events.find((entry) => entry.id === selection.id) : undefined;
  if (event) return { coordinates: event.coordinates, label: event.place.split(",")[0] ?? event.place };
  const chapter = campaign?.chapters.find((entry) => entry.id === activeChapterId) ?? campaign?.chapters[0];
  const chapterEvent = campaign?.events.find((entry) => entry.id === chapter?.eventId);
  if (chapterEvent) return { coordinates: chapterEvent.coordinates, label: chapterEvent.place.split(",")[0] ?? chapterEvent.place };
  return chapter ? { coordinates: chapter.target, label: chapter.title } : null;
}

function useMenuGroups(): MenuGroup[] {
  const atlas = useAtlasStore();
  const campaignId = useChronosStore((state) => state.campaign?.id);
  const share = useShareLink();
  return [
    {
      id: "lenses",
      icon: "travel",
      label: "Lenses",
      items: [
        {
          id: "travel",
          icon: "travel",
          label: "Travel time",
          hint: "Days needed to reach anywhere from one point",
          active: atlas.lens === "travel",
          onSelect: () => {
            if (atlas.lens !== "travel" && !atlas.travelOrigin) atlas.setTravelOrigin(chooseTravelOrigin());
            atlas.setLens("travel");
          },
        },
        { id: "known", icon: "known", label: "Edge of the known world", hint: "What each culture had charted", active: atlas.lens === "known", onSelect: () => atlas.setLens("known") },
      ],
    },
    {
      id: "layers",
      icon: "environment",
      label: "Layers",
      items: [
        { id: "political", icon: "political", label: "Political map", hint: "Historical borders from Cliopatria", active: atlas.showPolitical, onSelect: atlas.togglePolitical },
        { id: "environment", icon: "environment", label: "Winds, currents and climate", hint: "Ocean currents, trade winds, monsoons", active: atlas.showEnvironment, onSelect: atlas.toggleEnvironment },
        { id: "cities", icon: "cities", label: "Great cities", hint: "Population estimates through time", active: atlas.showCities, onSelect: atlas.toggleCities },
      ],
    },
    {
      id: "modes",
      icon: "challenge",
      label: "Modes",
      items: [
        { id: "challenge", icon: "challenge", label: "Why here? challenge", hint: "Place events on a blank globe", active: atlas.challengeActive, onSelect: () => atlas.setChallengeActive(!atlas.challengeActive) },
        { id: "tour", icon: "tour", label: "Narrated tour", hint: "Let the camera tell the story", active: atlas.touring, onSelect: () => atlas.setTouring(!atlas.touring) },
        { id: "meanwhile", icon: "meanwhile", label: "Meanwhile elsewhere", hint: "Contemporary events in other chronicles", active: atlas.panel === "meanwhile", onSelect: () => atlas.togglePanel("meanwhile") },
        { id: "compare", icon: "compare", label: "Compare two years", hint: "Overlay the borders of another year", active: atlas.compareYear !== null, onSelect: atlas.toggleCompare },
        { id: "ask", icon: "ask", label: "Ask about this map", hint: "Questions answered with the camera", active: atlas.panel === "ask", onSelect: () => atlas.togglePanel("ask") },
      ],
    },
    {
      id: "tools",
      icon: "settings",
      label: "Tools",
      items: [
        { id: "index", icon: "index", label: "Event index", hint: "Every event, keyboard friendly", active: atlas.panel === "index", onSelect: () => atlas.togglePanel("index") },
        { id: "share", icon: "share", label: share.copied ? "Link copied" : "Copy a link to this view", hint: "Chronicle, year, lens and camera", active: share.copied, onSelect: share.copy },
        { id: "poster", icon: "poster", label: "Save a poster", hint: "A PNG of this view with its title", active: false, onSelect: () => atlas.requestPoster() },
        {
          id: "classroom",
          icon: "classroom",
          label: "Printable classroom sheet",
          hint: "Chapters, questions and a map exercise",
          active: false,
          onSelect: () => campaignId && window.open(`/classroom/${campaignId}`, "_blank", "noopener"),
        },
        { id: "settings", icon: "settings", label: "Display and accessibility", hint: "Quality, motion, narration, sound", active: atlas.panel === "settings", onSelect: () => atlas.togglePanel("settings") },
      ],
    },
  ];
}

export function ToolRail() {
  const groups = useMenuGroups();
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent ? event.key === "Escape" : !root.current?.contains(event.target as Node)) setOpen(null);
    };
    window.addEventListener("pointerdown", close);
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("pointerdown", close);
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <nav ref={root} aria-label="Atlas tools" data-hud-zone className="glass-panel pointer-events-auto relative flex gap-1 rounded-2xl p-1 md:flex-col">
      {groups.map((group) => {
        const anyActive = group.items.some((item) => item.active);
        return (
          <div key={group.id} className="relative">
            <button
              type="button"
              aria-expanded={open === group.id}
              aria-haspopup="menu"
              onClick={() => setOpen(open === group.id ? null : group.id)}
              className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-[12px] transition ${
                open === group.id || anyActive ? "bg-ochre/12 text-ochre-soft" : "text-ink-muted hover:bg-white/[0.06] hover:text-ink"
              }`}
            >
              <RailIcon name={group.icon} />
              <span className="hidden md:inline">{group.label}</span>
              {anyActive ? <span className="ml-auto hidden size-1.5 rounded-full bg-ochre md:block" /> : null}
            </button>
            {open === group.id ? (
              <div role="menu" aria-label={group.label} className="glass-panel absolute bottom-full left-0 z-30 mb-2 w-72 rounded-2xl p-1.5 md:bottom-auto md:left-full md:top-0 md:mb-0 md:ml-2">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitemcheckbox"
                    aria-checked={item.active}
                    aria-label={item.label}
                    onClick={() => {
                      item.onSelect();
                      setOpen(null);
                    }}
                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-white/[0.06] ${item.active ? "text-ochre-soft" : "text-ink"}`}
                  >
                    <span className="mt-0.5">
                      <RailIcon name={item.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[12.5px]">{item.label}</span>
                      <span className="block text-[11px] text-ink-muted">{item.hint}</span>
                    </span>
                    {item.active ? <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ochre" /> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
