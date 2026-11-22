"use client";

import type { ReactNode } from "react";
import { EventDossier } from "@/components/dossier/EventDossier";
import { CameraStatus, CampaignHeader } from "@/components/hud/CampaignHeader";
import { TimelineScrubber } from "@/components/hud/TimelineScrubber";
import { useHotkeys } from "@/components/hud/useHotkeys";
import { usePlayback } from "@/components/hud/usePlayback";

export function HudOverlay({ search }: { readonly search?: ReactNode }) {
  usePlayback();
  useHotkeys();

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-4 sm:inset-x-4 sm:top-4">
        <CampaignHeader />
        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">{search}</div>
        <CameraStatus />
      </div>
      <div className="absolute inset-x-3 bottom-3 flex justify-center sm:inset-x-4 sm:bottom-4">
        <div className="w-full max-w-[1180px]">
          <TimelineScrubber />
        </div>
      </div>
      <EventDossier />
    </div>
  );
}
