"use client";

import { RailIcon } from "@/components/atlas/RailIcon";
import { useShareLink } from "@/components/atlas/useShareLink";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

interface RailItem {
  readonly id: string;
  readonly label: string;
  readonly active: boolean;
  readonly onSelect: () => void;
}

function chooseTravelOrigin() {
  const { campaign, selection, activeChapterId } = useChronosStore.getState();
  const event = selection?.kind === "event" ? campaign?.events.find((entry) => entry.id === selection.id) : undefined;
  if (event) return { coordinates: event.coordinates, label: event.place };
  const chapter = campaign?.chapters.find((entry) => entry.id === activeChapterId) ?? campaign?.chapters[0];
  const chapterEvent = campaign?.events.find((entry) => entry.id === chapter?.eventId);
  if (chapterEvent) return { coordinates: chapterEvent.coordinates, label: chapterEvent.place.split(",")[0] ?? chapterEvent.place };
  return chapter ? { coordinates: chapter.target, label: chapter.title } : null;
}

export function ToolRail() {
  const atlas = useAtlasStore();
  const campaignId = useChronosStore((state) => state.campaign?.id);
  const share = useShareLink();

  const groups: readonly (readonly RailItem[])[] = [
    [
      {
        id: "travel",
        label: "Travel time",
        active: atlas.lens === "travel",
        onSelect: () => {
          if (atlas.lens !== "travel" && !atlas.travelOrigin) atlas.setTravelOrigin(chooseTravelOrigin());
          atlas.setLens("travel");
        },
      },
      { id: "known", label: "Edge of the known world", active: atlas.lens === "known", onSelect: () => atlas.setLens("known") },
      { id: "environment", label: "Winds, currents and climate", active: atlas.showEnvironment, onSelect: atlas.toggleEnvironment },
      { id: "cities", label: "Great cities", active: atlas.showCities, onSelect: atlas.toggleCities },
    ],
    [
      { id: "meanwhile", label: "Meanwhile elsewhere", active: atlas.panel === "meanwhile", onSelect: () => atlas.togglePanel("meanwhile") },
      { id: "challenge", label: "Why here? challenge", active: atlas.challengeActive, onSelect: () => atlas.setChallengeActive(!atlas.challengeActive) },
      { id: "tour", label: "Narrated tour", active: atlas.touring, onSelect: () => atlas.setTouring(!atlas.touring) },
      { id: "ask", label: "Ask about this map", active: atlas.panel === "ask", onSelect: () => atlas.togglePanel("ask") },
    ],
    [
      { id: "index", label: "Event index", active: atlas.panel === "index", onSelect: () => atlas.togglePanel("index") },
      { id: "share", label: share.copied ? "Link copied" : "Copy a link to this view", active: share.copied, onSelect: share.copy },
      {
        id: "classroom",
        label: "Printable classroom sheet",
        active: false,
        onSelect: () => campaignId && window.open(`/classroom/${campaignId}`, "_blank", "noopener"),
      },
      { id: "settings", label: "Display and accessibility", active: atlas.panel === "settings", onSelect: () => atlas.togglePanel("settings") },
    ],
  ];

  return (
    <nav
      aria-label="Atlas tools"
      data-hud-zone
      className="glass-panel pointer-events-auto flex items-center gap-1 overflow-x-auto rounded-2xl p-1 md:flex-col md:overflow-visible"
    >
      {groups.map((group, index) => (
        <div key={index} className={`flex gap-1 md:flex-col ${index > 0 ? "border-hairline md:border-t md:pt-1" : ""}`}>
          {group.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.active}
              aria-label={item.label}
              title={item.label}
              onClick={item.onSelect}
              className={`group relative flex size-8 shrink-0 items-center justify-center rounded-xl transition ${
                item.active ? "bg-ochre/15 text-ochre-soft" : "text-ink-muted hover:bg-white/[0.06] hover:text-ink"
              }`}
            >
              <RailIcon name={item.id} />
              <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md bg-abyss/90 px-2 py-1 text-[11px] text-ink opacity-0 transition group-hover:opacity-100 md:block">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
