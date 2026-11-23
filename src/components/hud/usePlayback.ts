"use client";

import { useEffect } from "react";
import { storyOf } from "@/data/story";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import { TIMELINE_MAX_YEAR } from "@/types/chronicle";

const GLIDE_SECONDS = 1.4;

export function atlasYearsPerSecond(year: number): number {
  if (year < -500) return 90;
  if (year < 500) return 45;
  if (year < 1500) return 30;
  if (year < 1800) return 14;
  return 6;
}

export function stepDwellSeconds(narration: string): number {
  return Math.min(22, 5 + narration.split(/\s+/).length * 0.3);
}

function useYearGlide(): void {
  useEffect(() => {
    let frame = 0;
    const glide = (target: number) => {
      cancelAnimationFrame(frame);
      const from = useChronosStore.getState().year;
      if (from === target) return;
      const instant = useAtlasStore.getState().reducedMotion;
      const start = performance.now();
      const tick = (now: number) => {
        const t = instant ? 1 : Math.min(1, (now - start) / (GLIDE_SECONDS * 1000));
        const eased = t * t * (3 - 2 * t);
        useChronosStore.getState().setYear(from + (target - from) * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const targetYear = () => {
      const { campaign, stepIndex, mode } = useChronosStore.getState();
      return mode === "story" && campaign ? storyOf(campaign).steps[stepIndex]?.year : undefined;
    };
    const initial = targetYear();
    if (initial !== undefined) glide(initial);
    const unsubscribe = useChronosStore.subscribe((state, previous) => {
      if (state.mode !== "story") return;
      if (state.stepIndex === previous.stepIndex && state.campaign === previous.campaign && state.mode === previous.mode) return;
      const target = targetYear();
      if (target !== undefined) glide(target);
    });
    return () => {
      cancelAnimationFrame(frame);
      unsubscribe();
    };
  }, []);
}

function useStoryAutoplay(): void {
  const isPlaying = useChronosStore((state) => state.isPlaying);
  const mode = useChronosStore((state) => state.mode);
  const stepIndex = useChronosStore((state) => state.stepIndex);
  const narrating = useAtlasStore((state) => state.narration);

  useEffect(() => {
    if (!isPlaying || mode !== "story" || narrating) return;
    const { campaign } = useChronosStore.getState();
    const steps = campaign ? storyOf(campaign).steps : [];
    const step = steps[stepIndex];
    if (!step) return;
    const timer = window.setTimeout(() => {
      const store = useChronosStore.getState();
      if (stepIndex >= steps.length - 1) store.setPlaying(false);
      else store.goToStep(stepIndex + 1);
    }, stepDwellSeconds(step.narration) * 1000);
    return () => window.clearTimeout(timer);
  }, [isPlaying, mode, stepIndex, narrating]);
}

function useAtlasPlayback(): void {
  const isPlaying = useChronosStore((state) => state.isPlaying);
  const mode = useChronosStore((state) => state.mode);

  useEffect(() => {
    if (!isPlaying || mode !== "atlas") return;
    let frame = 0;
    let previous = performance.now();
    const tick = (now: number) => {
      const delta = Math.min(0.1, (now - previous) / 1000);
      previous = now;
      const store = useChronosStore.getState();
      const next = Math.min(TIMELINE_MAX_YEAR, store.year + atlasYearsPerSecond(store.year) * delta);
      store.setYear(next);
      if (next >= TIMELINE_MAX_YEAR) {
        store.setPlaying(false);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, mode]);
}

export function usePlayback(): void {
  useYearGlide();
  useStoryAutoplay();
  useAtlasPlayback();
}
