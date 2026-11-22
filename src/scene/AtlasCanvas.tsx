"use client";

import { PerformanceMonitor, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy, useState } from "react";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { CameraDirector } from "@/scene/CameraDirector";
import { ChallengeMarkers } from "@/scene/ChallengeMarkers";
import { ChronicleArcs } from "@/scene/ChronicleArcs";
import { CompareLayer } from "@/scene/CompareLayer";
import { CityLayer } from "@/scene/CityLayer";
import { EarthGlobe } from "@/scene/EarthGlobe";
import { EnvironmentLayer } from "@/scene/EnvironmentLayer";
import { EventBeacons } from "@/scene/EventBeacons";
import { LensOverlay } from "@/scene/LensOverlay";
import { PoliticalLayer } from "@/scene/PoliticalLayer";
import { PosterCapture } from "@/scene/PosterCapture";
import { MeanwhileMarkers } from "@/scene/MeanwhileMarkers";
import { NightLights } from "@/scene/NightLights";
import { DepthRange } from "@/scene/DepthRange";
import { IdleThrottle, isMeasuringFrames } from "@/scene/IdleThrottle";
import { useQuality, useQualityStore } from "@/scene/quality";
import { useAtlasStore } from "@/store/useAtlasStore";
import { SmartLabels } from "@/scene/SmartLabels";
import { TerritoryLayer } from "@/scene/TerritoryLayer";

const Effects = lazy(() => import("@/scene/Effects"));

function watchContext(canvas: HTMLCanvasElement): void {
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    useAtlasStore.getState().setContextLost(true);
  });
  canvas.addEventListener("webglcontextrestored", () => useAtlasStore.getState().setContextLost(false));
}

export default function AtlasCanvas() {
  const quality = useQuality();
  const step = useQualityStore((state) => state.step);
  const [starCount] = useState(quality.stars);

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[quality.dpr[0], quality.dpr[1]]}
      camera={{ position: [0.4, 1.1, 3.4], fov: 36, near: 0.01, far: 200 }}
      gl={{ antialias: true, toneMapping: ACESFilmicToneMapping, outputColorSpace: SRGBColorSpace, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.debug.checkShaderErrors = process.env.NODE_ENV !== "production";
        watchContext(gl.domElement);
      }}
    >
      <PerformanceMonitor
        bounds={(refreshRate) => (refreshRate > 90 ? [50, refreshRate - 12] : [40, refreshRate - 4])}
        flipflops={2}
        onDecline={() => isMeasuringFrames() && step(-1)}
        onIncline={() => isMeasuringFrames() && step(1)}
      />
      <color attach="background" args={["#05070a"]} />
      <Stars radius={60} depth={40} count={starCount} factor={2.4} saturation={0} fade speed={0.25} />
      <EarthGlobe />
      <PoliticalLayer />
      <CompareLayer />
      <TerritoryLayer />
      <LensOverlay />
      <EnvironmentLayer />
      <CityLayer />
      <NightLights />
      <ChronicleArcs />
      <EventBeacons />
      <MeanwhileMarkers />
      <ChallengeMarkers />
      <SmartLabels />
      <CameraDirector />
      <DepthRange />
      <IdleThrottle />
      <PosterCapture />
      <Suspense fallback={null}>
        <Effects />
      </Suspense>
    </Canvas>
  );
}
