"use client";

import { useEffect } from "react";
import { storyOf } from "@/data/story";
import { getActiveLocale } from "@/i18n/config";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const PAUSE_AFTER_MS = 900;

export function useStoryNarration(): void {
  const enabled = useAtlasStore((state) => state.narration);
  const mode = useChronosStore((state) => state.mode);
  const stepIndex = useChronosStore((state) => state.stepIndex);
  const campaign = useChronosStore((state) => state.campaign);

  useEffect(() => {
    if (!enabled || mode !== "story" || !campaign || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const steps = storyOf(campaign).steps;
    const step = steps[stepIndex];
    if (!step) return;
    let timer = 0;
    const utterance = new SpeechSynthesisUtterance(`${step.title}. ${step.narration}`);
    utterance.lang = getActiveLocale() === "fr" ? "fr-FR" : "en-GB";
    utterance.rate = 0.98;
    utterance.onend = () => {
      timer = window.setTimeout(() => {
        const store = useChronosStore.getState();
        if (!store.isPlaying || store.stepIndex !== stepIndex) return;
        if (stepIndex >= steps.length - 1) store.setPlaying(false);
        else store.goToStep(stepIndex + 1);
      }, PAUSE_AFTER_MS);
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return () => {
      window.clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [enabled, mode, stepIndex, campaign]);
}
