"use client";

import { formatSpan } from "@/data/campaigns/registry";
import { useChronosStore } from "@/store/useChronosStore";
import type { CampaignSource } from "@/types/chronicle";

const SOURCE_LABEL: Record<CampaignSource, string> = {
  curated: "Curated campaign",
  generated: "AI chronicle",
  encyclopedia: "Encyclopedia match",
  thread: "Thread through time",
  journey: "A traveller's journey",
};

export function CampaignHeader() {
  const campaign = useChronosStore((state) => state.campaign);
  const activeChapterId = useChronosStore((state) => state.activeChapterId);
  const chapter = campaign?.chapters.find((entry) => entry.id === activeChapterId);

  return (
    <div data-hud-zone className="pointer-events-auto max-w-[min(26rem,calc(100vw-2rem))]">
      <div className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-ochre shadow-[0_0_10px_2px_rgb(217_164_65/0.6)]" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.42em] text-ink">Chronos</span>
      </div>
      {campaign ? (
        <div className="mt-4">
          <p className="eyebrow">
            {SOURCE_LABEL[campaign.source]} · {formatSpan(campaign.startYear, campaign.endYear)}
          </p>
          <h1 className="mt-1.5 font-serif text-[19px] leading-[1.1] sm:text-[24px] text-ink [text-shadow:0_2px_20px_rgb(0_0_0/0.8)]">{campaign.title}</h1>
          <p className="mt-1 hidden text-[12.5px] text-ink-muted sm:block">{campaign.subtitle}</p>
          {chapter ? (
            <p key={chapter.id} className="mt-3 border-l border-ochre/50 pl-3 font-serif text-[13px] italic sm:text-[14px] leading-snug text-ink/80 [text-shadow:0_1px_12px_rgb(0_0_0/0.9)]">
              {chapter.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function CameraStatus() {
  const cameraMode = useChronosStore((state) => state.cameraMode);
  const activeChapterId = useChronosStore((state) => state.activeChapterId);
  const goToChapter = useChronosStore((state) => state.goToChapter);
  const free = cameraMode === "free";

  return (
    <button
      type="button"
      disabled={!free || !activeChapterId}
      onClick={() => activeChapterId && goToChapter(activeChapterId, { moveYear: false, openDossier: false })}
      data-hud-zone
      className="glass-panel pointer-events-auto flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] text-ink-muted transition enabled:hover:text-ink"
    >
      <span className={`size-1.5 rounded-full ${free ? "bg-ink-faint" : "bg-teal-chart shadow-[0_0_8px_1px_rgb(95_179_168/0.7)]"}`} />
      <span className={free ? "" : "hidden sm:inline"}>{free ? "Resume tour" : "Directed camera"}</span>
    </button>
  );
}
