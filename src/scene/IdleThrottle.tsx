"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const IDLE_AFTER_MS = 6000;
const IDLE_FPS = 30;
const WAKE_EVENTS = ["pointermove", "pointerdown", "wheel", "keydown", "touchstart"] as const;

export function IdleThrottle() {
  const setFrameloop = useThree((state) => state.setFrameloop);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    let idleTimer = 0;
    let ticker = 0;
    let idle = false;

    const sleep = () => {
      if (useChronosStore.getState().isPlaying) {
        idleTimer = window.setTimeout(sleep, IDLE_AFTER_MS);
        return;
      }
      idle = true;
      setFrameloop("demand");
      ticker = window.setInterval(() => invalidate(), 1000 / IDLE_FPS);
    };

    const wake = () => {
      if (idle) {
        idle = false;
        window.clearInterval(ticker);
        setFrameloop("always");
      }
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(sleep, IDLE_AFTER_MS);
    };

    WAKE_EVENTS.forEach((type) => window.addEventListener(type, wake, { passive: true }));
    const unsubscribeChronos = useChronosStore.subscribe((state, previous) => {
      if (state.cameraRequest !== previous.cameraRequest || state.isPlaying !== previous.isPlaying || state.campaign !== previous.campaign) wake();
    });
    const unsubscribeAtlas = useAtlasStore.subscribe(wake);
    wake();

    return () => {
      WAKE_EVENTS.forEach((type) => window.removeEventListener(type, wake));
      unsubscribeChronos();
      unsubscribeAtlas();
      window.clearTimeout(idleTimer);
      window.clearInterval(ticker);
      setFrameloop("always");
    };
  }, [setFrameloop, invalidate]);

  return null;
}
