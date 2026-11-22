"use client";

import { PerformanceMonitor, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, lazy } from "react";
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
import { IdleThrottle } from "@/scene/IdleThrottle";
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
      <PerformanceMonitor bounds={() => [42, 58]} flipflops={4} onDecline={() => step(-1)} onIncline={() => step(1)} />
      <color attach="background" args={["#05070a"]} />
      <Stars key={quality.stars} radius={60} depth={40} count={quality.stars} factor={2.4} saturation={0} fade speed={0.25} />
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
      <IdleThrottle />
      <PosterCapture />
      <Suspense fallback={null}>
        <Effects />
      </Suspense>
    </Canvas>
  );
}
