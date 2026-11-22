"use client";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import { CameraDirector } from "@/scene/CameraDirector";
import { ChronicleArcs } from "@/scene/ChronicleArcs";
import { EarthGlobe } from "@/scene/EarthGlobe";
import { EventBeacons } from "@/scene/EventBeacons";
import { SmartLabels } from "@/scene/SmartLabels";
import { TerritoryLayer } from "@/scene/TerritoryLayer";

export default function AtlasCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      camera={{ position: [0.4, 1.1, 3.4], fov: 36, near: 0.01, far: 200 }}
      gl={{ antialias: true, toneMapping: ACESFilmicToneMapping, outputColorSpace: SRGBColorSpace, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#05070a"]} />
      <Stars radius={60} depth={40} count={2600} factor={2.4} saturation={0} fade speed={0.25} />
      <EarthGlobe />
      <TerritoryLayer />
      <ChronicleArcs />
      <EventBeacons />
      <SmartLabels />
      <CameraDirector />
      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.2} />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.18} darkness={0.72} />
      </EffectComposer>
    </Canvas>
  );
}
