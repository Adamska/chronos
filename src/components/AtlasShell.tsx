"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CampaignPalette, SearchPill } from "@/components/hud/CampaignPalette";
import { ChronicleNotice } from "@/components/hud/ChronicleNotice";
import { HudOverlay } from "@/components/hud/HudOverlay";
import { LabelOverlay } from "@/components/hud/LabelOverlay";
import { DEFAULT_CAMPAIGN } from "@/data/campaigns";
import { useChronosStore } from "@/store/useChronosStore";

const AtlasCanvas = dynamic(() => import("@/scene/AtlasCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="eyebrow animate-pulse">Triangulating the world</p>
    </div>
  ),
});

export function AtlasShell() {
  useEffect(() => {
    if (!useChronosStore.getState().campaign) useChronosStore.getState().loadCampaign(DEFAULT_CAMPAIGN);
  }, []);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-abyss">
      <AtlasCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.55)_100%)]" />
      <LabelOverlay />
      <HudOverlay search={<SearchPill />} />
      <ChronicleNotice />
      <CampaignPalette />
    </main>
  );
}
