"use client";

import type { ReactNode } from "react";
import { AskPanel } from "@/components/atlas/AskPanel";
import { ChallengeCard } from "@/components/atlas/ChallengeCard";
import { IndexPanel } from "@/components/atlas/IndexPanel";
import { LensPanel } from "@/components/atlas/LensPanel";
import { MeanwhilePanel } from "@/components/atlas/MeanwhilePanel";
import { SettingsPanel } from "@/components/atlas/SettingsPanel";
import { ToolRail } from "@/components/atlas/ToolRail";
import { TeacherPanel } from "@/components/atlas/TeacherPanel";
import { TourController } from "@/components/atlas/TourController";
import { TravelReadout } from "@/components/atlas/TravelReadout";
import { EventDossier } from "@/components/dossier/EventDossier";
import { CameraStatus, CampaignHeader } from "@/components/hud/CampaignHeader";
import { ChapterAnnouncer } from "@/components/hud/ChapterAnnouncer";
import { TimelineScrubber } from "@/components/hud/TimelineScrubber";
import { useHotkeys } from "@/components/hud/useHotkeys";
import { usePlayback } from "@/components/hud/usePlayback";
import { useAtlasStore } from "@/store/useAtlasStore";

function ActivePanel() {
  const panel = useAtlasStore((state) => state.panel);
  if (panel === "none") return null;
  return (
    <div data-hud-zone className="w-[min(20rem,calc(100vw-1.5rem))]">
      {panel === "meanwhile" ? <MeanwhilePanel /> : null}
      {panel === "index" ? <IndexPanel /> : null}
      {panel === "settings" ? <SettingsPanel /> : null}
      {panel === "ask" ? <AskPanel /> : null}
      {panel === "teacher" ? <TeacherPanel /> : null}
    </div>
  );
}

export function HudOverlay({ search }: { readonly search?: ReactNode }) {
  usePlayback();
  useHotkeys();
  const landingOpen = useAtlasStore((state) => state.landingOpen);
  if (landingOpen) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-4 sm:inset-x-4 sm:top-4">
        <CampaignHeader />
        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">{search}</div>
        <CameraStatus />
      </div>

      <div className="absolute bottom-[13.5rem] left-4 top-[14.5rem] hidden items-start gap-2 md:flex">
        <ToolRail />
        <div className="scrollbar-quiet pointer-events-auto flex max-h-full flex-col gap-2 overflow-y-auto pr-1">
          <ActivePanel />
          <LensPanel />
        </div>
      </div>

      <div className="absolute inset-x-3 bottom-[10.75rem] flex flex-col gap-2 md:hidden">
        <div className="scrollbar-quiet pointer-events-auto flex max-h-[38vh] flex-col gap-2 overflow-y-auto">
          <ActivePanel />
          <LensPanel />
        </div>
        <ToolRail />
      </div>

      <div className="absolute bottom-[13.5rem] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <ChallengeCard />
        <TourController />
      </div>

      <div className="absolute inset-x-3 bottom-3 flex justify-center sm:inset-x-4 sm:bottom-4">
        <div className="w-full max-w-[1180px]">
          <TimelineScrubber />
        </div>
      </div>
      <EventDossier />
      <TravelReadout />
      <ChapterAnnouncer />
    </div>
  );
}
