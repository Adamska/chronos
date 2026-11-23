"use client";

import { useFrame } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { easeToward } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";

const DESKTOP_MIN_WIDTH = 768;
const STORY_PANEL_PX = 400;
const ATLAS_PANEL_PX = 300;
const offset = { current: 0 };

export function ViewOffset() {
  useFrame(({ camera, size }, delta) => {
    const perspective = camera as PerspectiveCamera;
    const mode = useChronosStore.getState().mode;
    const target = size.width < DESKTOP_MIN_WIDTH ? 0 : -(mode === "story" ? STORY_PANEL_PX : ATLAS_PANEL_PX) / 2;
    const next = easeToward(offset.current, target, delta, 4);
    if (Math.abs(next - offset.current) < 0.05 && perspective.view?.offsetX === Math.round(next * 10) / 10) return;
    offset.current = Math.abs(next - target) < 0.05 ? target : next;
    perspective.setViewOffset(size.width, size.height, Math.round(offset.current * 10) / 10, 0, size.width, size.height);
  });
  return null;
}
