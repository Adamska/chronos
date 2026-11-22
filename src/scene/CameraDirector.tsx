"use client";

import { CameraControls, type CameraControlsImpl } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { registerCamera } from "@/scene/cameraRef";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { DEG2RAD, GLOBE_RADIUS, cameraPositionFor, lonLatToVector3 } from "@/geo/sphericalMath";
import { useChronosStore } from "@/store/useChronosStore";

const FLIGHT_SMOOTH_TIME = 1.15;
const USER_SMOOTH_TIME = 0.32;
const position = new Vector3();
const focus = new Vector3();

export function CameraDirector() {
  const controls = useRef<CameraControlsImpl>(null);
  const request = useChronosStore((state) => state.cameraRequest);
  const yieldCamera = useChronosStore((state) => state.yieldCamera);
  const aspect = useThree((state) => state.size.width / Math.max(1, state.size.height));
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    registerCamera(camera);
    return () => registerCamera(null);
  }, [camera]);

  useEffect(() => {
    const rig = controls.current;
    if (!rig || !request) return;
    const { target, altitude, tilt } = request.keyframe;
    const framing = aspect < 1 ? Math.pow(1 / aspect, 0.75) : 1;
    cameraPositionFor(target, altitude * framing + (framing - 1) * 0.4, tilt, position);
    lonLatToVector3(target[0], target[1], GLOBE_RADIUS * Math.sin(tilt * DEG2RAD) * 0.9, focus);

    let cancelled = false;
    rig.smoothTime = FLIGHT_SMOOTH_TIME;
    const animate = !useAtlasStore.getState().reducedMotion;
    void rig.setLookAt(position.x, position.y, position.z, focus.x, focus.y, focus.z, animate).then(() => {
      if (!cancelled) rig.smoothTime = USER_SMOOTH_TIME;
    });
    return () => {
      cancelled = true;
    };
  }, [request, aspect]);

  useFrame((_, delta) => {
    const rig = controls.current;
    if (rig && useAtlasStore.getState().landingOpen && !useAtlasStore.getState().reducedMotion) rig.rotate(delta * 0.05, 0, false);
  });

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;
      const rig = controls.current;
      if (!rig) return;
      const step = 0.18;
      const moves: Record<string, () => void> = {
        ArrowLeft: () => void rig.rotate(-step, 0, true),
        ArrowRight: () => void rig.rotate(step, 0, true),
        ArrowUp: () => void rig.rotate(0, -step, true),
        ArrowDown: () => void rig.rotate(0, step, true),
      };
      const move = event.shiftKey ? moves[event.key] : undefined;
      if (move) {
        event.preventDefault();
        yieldCamera();
        move();
      } else if (event.key === "+" || event.key === "=") {
        yieldCamera();
        void rig.dolly(0.35, true);
      } else if (event.key === "-" || event.key === "_") {
        yieldCamera();
        void rig.dolly(-0.35, true);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [yieldCamera]);

  const handleControl = () => {
    const rig = controls.current;
    if (!rig || useChronosStore.getState().cameraMode === "free") return;
    rig.stop();
    rig.smoothTime = USER_SMOOTH_TIME;
    yieldCamera();
  };

  return (
    <CameraControls
      ref={controls}
      makeDefault
      minDistance={1.05}
      maxDistance={7}
      smoothTime={USER_SMOOTH_TIME}
      draggingSmoothTime={0.12}
      dollySpeed={0.6}
      azimuthRotateSpeed={0.55}
      polarRotateSpeed={0.55}
      onControl={handleControl}
    />
  );
}
