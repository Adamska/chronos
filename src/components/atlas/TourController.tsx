"use client";

import { useEffect, useState } from "react";
import { formatYear } from "@/data/campaigns/registry";
import { getActiveLocale } from "@/i18n/config";
import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { CameraKeyframe } from "@/types/chronicle";

const MIN_DWELL_MS = 7000;
const MS_PER_WORD = 380;

function speak(text: string, onEnd: () => void): () => void {
  if (!("speechSynthesis" in window)) {
    onEnd();
    return () => undefined;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getActiveLocale() === "fr" ? "fr-FR" : "en-GB";
  utterance.rate = 0.98;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
  return () => window.speechSynthesis.cancel();
}

export function TourController() {
  const touring = useAtlasStore((state) => state.touring);
  const setTouring = useAtlasStore((state) => state.setTouring);
  const campaign = useChronosStore((state) => state.campaign);
  const t = useT();
  const [chapter, setChapter] = useState<{ readonly keyframe: CameraKeyframe; readonly index: number } | null>(null);

  useEffect(() => {
    if (!touring || !campaign) return;
    const chapters = campaign.chapters;
    const startIndex = Math.max(0, chapters.findIndex((entry) => entry.id === useChronosStore.getState().activeChapterId));
    let cancelled = false;
    let timer = 0;
    let stopSpeech: () => void = () => undefined;

    const play = (index: number) => {
      if (cancelled) return;
      const keyframe = chapters[index];
      if (!keyframe) {
        setTouring(false);
        return;
      }
      useChronosStore.getState().goToChapter(keyframe.id, { openDossier: false });
      setChapter({ keyframe, index });
      const dwell = Math.max(MIN_DWELL_MS, `${keyframe.title} ${keyframe.caption}`.split(/\s+/).length * MS_PER_WORD);
      const advance = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => play(index + 1), 1600);
      };
      if (useAtlasStore.getState().narration) {
        stopSpeech = speak(`${keyframe.title}. ${formatYear(keyframe.year)}. ${keyframe.caption}`, advance);
        timer = window.setTimeout(() => play(index + 1), dwell * 2.5);
      } else {
        timer = window.setTimeout(() => play(index + 1), dwell);
      }
    };

    const unsubscribe = useChronosStore.subscribe((state, previous) => {
      if (state.cameraMode === "free" && previous.cameraMode !== "free") setTouring(false);
    });
    timer = window.setTimeout(() => play(startIndex), 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      stopSpeech();
      unsubscribe();
    };
  }, [touring, campaign, setTouring]);

  if (!touring || !chapter || !campaign) return null;

  return (
    <section aria-live="polite" data-hud-zone className="glass-panel pointer-events-auto w-[min(34rem,calc(100vw-1.5rem))] rounded-2xl px-5 py-4 text-center">
      <p className="eyebrow">
        {t("tour.status", { index: chapter.index + 1, total: campaign.chapters.length, year: formatYear(chapter.keyframe.year) })}
      </p>
      <h2 className="mt-1.5 font-serif text-[22px] leading-tight text-ink">{chapter.keyframe.title}</h2>
      <p className="mt-2 font-serif text-[15px] italic leading-snug text-ink/85">{chapter.keyframe.caption}</p>
      <button type="button" onClick={() => setTouring(false)} className="mt-3 text-[11px] text-ink-muted hover:text-ink">
        {t("tour.stop")}
      </button>
    </section>
  );
}
