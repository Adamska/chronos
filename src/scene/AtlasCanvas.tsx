"use client";

import { PerformanceMonitor, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { CameraDirector } from "@/scene/CameraDirector";
import { ChronicleArcs } from "@/scene/ChronicleArcs";
import { EarthGlobe } from "@/scene/EarthGlobe";
import { EventBeacons } from "@/scene/EventBeacons";
import { useQuality, useQualityStore } from "@/scene/quality";
import { SmartLabels } from "@/scene/SmartLabels";
import { TerritoryLayer } from "@/scene/TerritoryLayer";

function Effects() {
  const { bloom, grain } = useQuality();
  if (!bloom) return null;
  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.2} />
      <Noise opacity={grain ? 0.025 : 0} />
    </EffectComposer>
  );
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
      }}
    >
      <PerformanceMonitor bounds={() => [42, 58]} flipflops={4} onDecline={() => step(-1)} onIncline={() => step(1)} />
      <color attach="background" args={["#05070a"]} />
      <Stars key={quality.stars} radius={60} depth={40} count={quality.stars} factor={2.4} saturation={0} fade speed={0.25} />
      <EarthGlobe />
      <TerritoryLayer />
      <ChronicleArcs />
      <EventBeacons />
      <SmartLabels />
      <CameraDirector />
      <Effects />
    </Canvas>
  );
}
