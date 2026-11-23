"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { AmbientSound } from "@/components/atlas/AmbientSound";
import { GraphicsNotice } from "@/components/atlas/GraphicsNotice";
import { restoreSharedView, syncUrl } from "@/components/atlas/shareState";
import { CampaignPalette, SearchPill } from "@/components/hud/CampaignPalette";
import { HudOverlay } from "@/components/hud/HudOverlay";
import { LabelOverlay } from "@/components/hud/LabelOverlay";
import { Landing, hasSeenLanding } from "@/components/landing/Landing";
import { pushRecent } from "@/components/hud/recent";
import { DEFAULT_CHRONICLE_ID, findCatalogEntry, loadChronicle } from "@/data/catalog";
import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

function LoadingGlobe() {
  const t = useT();
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="eyebrow animate-pulse">{t("shell.loading")}</p>
    </div>
  );
}

const AtlasCanvas = dynamic(() => import("@/scene/AtlasCanvas"), { ssr: false, loading: () => <LoadingGlobe /> });

export function AtlasShell() {
  useEffect(() => {
    if (!useChronosStore.getState().campaign) {
      void restoreSharedView().then(async (restored) => {
        if (restored) return;
        if (!hasSeenLanding()) useAtlasStore.getState().setLandingOpen(true);
        const fallback = await loadChronicle(DEFAULT_CHRONICLE_ID);
        if (fallback && !useChronosStore.getState().campaign) useChronosStore.getState().loadCampaign(fallback);
      });
    }
    let timer = 0;
    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(syncUrl, 600);
    };
    const unsubscribeChronos = useChronosStore.subscribe((state, previous) => {
      if (state.campaign && state.campaign !== previous.campaign && findCatalogEntry(state.campaign.id)) pushRecent(state.campaign.id);
      schedule();
    });
    const unsubscribeAtlas = useAtlasStore.subscribe(schedule);
    return () => {
      window.clearTimeout(timer);
      unsubscribeChronos();
      unsubscribeAtlas();
    };
  }, []);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-abyss">
      <AtlasCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.55)_100%)]" />
      <LabelOverlay />
      <HudOverlay search={<SearchPill />} />
      <CampaignPalette />
      <Landing />
      <GraphicsNotice />
      <AmbientSound />
    </main>
  );
}
