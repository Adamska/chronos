"use client";

import { CameraControls, type CameraControlsImpl } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
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

  useEffect(() => {
    const rig = controls.current;
    if (!rig || !request) return;
    const { target, altitude, tilt } = request.keyframe;
    const framing = aspect < 1 ? Math.pow(1 / aspect, 0.75) : 1;
    cameraPositionFor(target, altitude * framing + (framing - 1) * 0.4, tilt, position);
    lonLatToVector3(target[0], target[1], GLOBE_RADIUS * Math.sin(tilt * DEG2RAD) * 0.9, focus);

    let cancelled = false;
    rig.smoothTime = FLIGHT_SMOOTH_TIME;
    void rig.setLookAt(position.x, position.y, position.z, focus.x, focus.y, focus.z, true).then(() => {
      if (!cancelled) rig.smoothTime = USER_SMOOTH_TIME;
    });
    return () => {
      cancelled = true;
    };
  }, [request, aspect]);

  const handleControlStart = () => {
    const rig = controls.current;
    if (rig) {
      rig.stop();
      rig.smoothTime = USER_SMOOTH_TIME;
    }
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
      onControlStart={handleControlStart}
    />
  );
}
