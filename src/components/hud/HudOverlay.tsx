"use client";

import { type ReactNode, useRef } from "react";
import { AtlasPanel } from "@/components/atlas/AtlasPanel";
import { AtlasTimeline } from "@/components/atlas/AtlasTimeline";
import { PlaceCard } from "@/components/atlas/PlaceCard";
import { SettingsPanel } from "@/components/atlas/SettingsPanel";
import { TravelReadout } from "@/components/atlas/TravelReadout";
import { useOutsideClick } from "@/components/atlas/useOutsideClick";
import { EventDossier } from "@/components/dossier/EventDossier";
import { TopBar } from "@/components/hud/TopBar";
import { useHotkeys } from "@/components/hud/useHotkeys";
import { usePlayback } from "@/components/hud/usePlayback";
import { FigureCard } from "@/components/story/FigureCard";
import { StoryPanel } from "@/components/story/StoryPanel";
import { StoryTimeline } from "@/components/story/StoryTimeline";
import { useStoryNarration } from "@/components/story/useStoryNarration";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const closePanel = () => useAtlasStore.setState({ panel: "none" });

function Settings() {
  const open = useAtlasStore((state) => state.panel === "settings");
  const root = useRef<HTMLDivElement>(null);
  useOutsideClick(root, closePanel, open);
  if (!open) return null;
  return (
    <div ref={root} data-hud-zone className="pointer-events-auto absolute right-3 top-14 z-30 w-[min(20rem,calc(100vw-1.5rem))] sm:right-4">
      <SettingsPanel />
    </div>
  );
}

function StoryLayout() {
  return (
    <>
      <div className="absolute inset-x-3 bottom-[6.25rem] flex max-h-[44vh] flex-col md:inset-x-auto md:bottom-24 md:left-4 md:top-16 md:max-h-none md:w-[24rem]">
        <StoryPanel />
      </div>
      <div className="absolute right-3 top-16 hidden max-h-[calc(100%-11rem)] w-[20rem] flex-col md:flex">
        <FigureCard />
      </div>
      <div className="absolute inset-x-3 bottom-3 flex justify-center sm:inset-x-4 sm:bottom-4">
        <div className="w-full max-w-[1180px]">
          <StoryTimeline />
        </div>
      </div>
    </>
  );
}

function AtlasLayout() {
  return (
    <>
      <div className="absolute inset-x-3 bottom-[6.25rem] flex max-h-[40vh] flex-col md:inset-x-auto md:bottom-28 md:left-4 md:top-16 md:max-h-none md:w-[18.5rem]">
        <AtlasPanel />
      </div>
      <div className="absolute right-3 top-16 flex max-h-[calc(100%-12rem)] w-[min(21rem,calc(100vw-1.5rem))] flex-col sm:right-4">
        <PlaceCard />
      </div>
      <div className="absolute inset-x-3 bottom-3 flex justify-center sm:inset-x-4 sm:bottom-4">
        <div className="w-full max-w-[1180px]">
          <AtlasTimeline />
        </div>
      </div>
      <TravelReadout />
    </>
  );
}

export function HudOverlay({ search }: { readonly search?: ReactNode }) {
  usePlayback();
  useHotkeys();
  useStoryNarration();
  const landingOpen = useAtlasStore((state) => state.landingOpen);
  const mode = useChronosStore((state) => state.mode);
  if (landingOpen) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <TopBar search={search} />
      {mode === "story" ? <StoryLayout /> : <AtlasLayout />}
      <Settings />
      <EventDossier />
    </div>
  );
}
