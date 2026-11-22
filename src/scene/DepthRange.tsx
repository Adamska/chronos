"use client";

import { useFrame } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { GLOBE_RADIUS } from "@/geo/sphericalMath";

const MIN_NEAR = 0.004;
const MAX_NEAR = 1;

export function DepthRange() {
  useFrame(({ camera }) => {
    const perspective = camera as PerspectiveCamera;
    const clearance = camera.position.length() - GLOBE_RADIUS * 1.03;
    const near = Math.min(MAX_NEAR, Math.max(MIN_NEAR, clearance * 0.5));
    if (Math.abs(near - perspective.near) / perspective.near < 0.05) return;
    perspective.near = near;
    perspective.updateProjectionMatrix();
  });
  return null;
}
