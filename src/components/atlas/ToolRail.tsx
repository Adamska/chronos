"use client";

import { useEffect, useRef, useState } from "react";
import { RailIcon } from "@/components/atlas/RailIcon";
import { useShareLink } from "@/components/atlas/useShareLink";
import { useLocale, useT } from "@/i18n/I18nProvider";
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
  const t = useT();
  const locale = useLocale();
  return [
    {
      id: "lenses",
      icon: "travel",
      label: t("rail.lenses"),
      items: [
        {
          id: "travel",
          icon: "travel",
          label: t("rail.travel.label"),
          hint: t("rail.travel.hint"),
          active: atlas.lens === "travel",
          onSelect: () => {
            if (atlas.lens !== "travel" && !atlas.travelOrigin) atlas.setTravelOrigin(chooseTravelOrigin());
            atlas.setLens("travel");
          },
        },
        { id: "known", icon: "known", label: t("rail.known.label"), hint: t("rail.known.hint"), active: atlas.lens === "known", onSelect: () => atlas.setLens("known") },
      ],
    },
    {
      id: "layers",
      icon: "environment",
      label: t("rail.layers"),
      items: [
        { id: "political", icon: "political", label: t("rail.political.label"), hint: t("rail.political.hint"), active: atlas.showPolitical, onSelect: atlas.togglePolitical },
        { id: "environment", icon: "environment", label: t("rail.environment.label"), hint: t("rail.environment.hint"), active: atlas.showEnvironment, onSelect: atlas.toggleEnvironment },
        { id: "cities", icon: "cities", label: t("rail.cities.label"), hint: t("rail.cities.hint"), active: atlas.showCities, onSelect: atlas.toggleCities },
      ],
    },
    {
      id: "modes",
      icon: "challenge",
      label: t("rail.modes"),
      items: [
        { id: "challenge", icon: "challenge", label: t("rail.challenge.label"), hint: t("rail.challenge.hint"), active: atlas.challengeActive, onSelect: () => atlas.setChallengeActive(!atlas.challengeActive) },
        { id: "tour", icon: "tour", label: t("rail.tour.label"), hint: t("rail.tour.hint"), active: atlas.touring, onSelect: () => atlas.setTouring(!atlas.touring) },
        { id: "meanwhile", icon: "meanwhile", label: t("rail.meanwhile.label"), hint: t("rail.meanwhile.hint"), active: atlas.panel === "meanwhile", onSelect: () => atlas.togglePanel("meanwhile") },
        { id: "compare", icon: "compare", label: t("rail.compare.label"), hint: t("rail.compare.hint"), active: atlas.compareYear !== null, onSelect: atlas.toggleCompare },
        { id: "ask", icon: "ask", label: t("rail.ask.label"), hint: t("rail.ask.hint"), active: atlas.panel === "ask", onSelect: () => atlas.togglePanel("ask") },
      ],
    },
    {
      id: "tools",
      icon: "settings",
      label: t("rail.tools"),
      items: [
        { id: "teacher", icon: "classroom", label: t("rail.teacher.label"), hint: t("rail.teacher.hint"), active: atlas.panel === "teacher", onSelect: () => atlas.togglePanel("teacher") },
        { id: "index", icon: "index", label: t("rail.index.label"), hint: t("rail.index.hint"), active: atlas.panel === "index", onSelect: () => atlas.togglePanel("index") },
        { id: "share", icon: "share", label: share.copied ? t("rail.share.copied") : t("rail.share.label"), hint: t("rail.share.hint"), active: share.copied, onSelect: share.copy },
        { id: "poster", icon: "poster", label: t("rail.poster.label"), hint: t("rail.poster.hint"), active: false, onSelect: () => atlas.requestPoster() },
        {
          id: "classroom",
          icon: "classroom",
          label: t("rail.classroom.label"),
          hint: t("rail.classroom.hint"),
          active: false,
          onSelect: () => campaignId && window.open(`/${locale}/classroom/${campaignId}`, "_blank", "noopener"),
        },
        { id: "settings", icon: "settings", label: t("rail.settings.label"), hint: t("rail.settings.hint"), active: atlas.panel === "settings", onSelect: () => atlas.togglePanel("settings") },
      ],
    },
  ];
}

export function ToolRail() {
  const groups = useMenuGroups();
  const t = useT();
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
    <nav ref={root} data-outside-ignore aria-label={t("rail.nav")} data-hud-zone className="glass-panel pointer-events-auto relative z-20 flex gap-1 rounded-2xl p-1 md:flex-col">
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
