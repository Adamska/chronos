"use client";

import { Bloom, EffectComposer, Noise, SMAA } from "@react-three/postprocessing";
import { useQuality } from "@/scene/quality";

export default function Effects() {
  const { bloom, grain, smaa } = useQuality();
  if (!bloom) return null;
  return (
    <EffectComposer multisampling={0}>
      <Bloom mipmapBlur intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.2} />
      <Noise opacity={grain ? 0.025 : 0} />
      {smaa ? <SMAA /> : <></>}
    </EffectComposer>
  );
}
