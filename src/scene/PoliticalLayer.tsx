"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { DataTexture, LinearFilter, LinearMipmapLinearFilter, RGBAFormat, RepeatWrapping, ShaderMaterial, SphereGeometry, UnsignedByteType } from "three";
import { renderBorders } from "@/geo/borderClient";
import { useQualityStore } from "@/scene/quality";
import { sunDirectionUniform } from "@/scene/solar";
import globeVertex from "@/shaders/globe.vert";
import politicalFragment from "@/shaders/political.frag";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import { usePolityStore } from "@/store/usePolityStore";

const DEBOUNCE_MS = 180;

export function PoliticalLayer() {
  const bordersOn = useChronosStore((state) => state.layers.borders);
  const politicalOn = useAtlasStore((state) => state.showPolitical);
  const lowTier = useQualityStore((state) => state.tier === "low");
  const visible = bordersOn && politicalOn;
  const [texture, setTexture] = useState<DataTexture | null>(null);
  const geometry = useMemo(() => new SphereGeometry(1.0058, 128, 96), []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: globeVertex,
        fragmentShader: politicalFragment,
        transparent: true,
        depthWrite: false,
        uniforms: { uBorders: { value: null }, uSunDirection: sunDirectionUniform, uOpacity: { value: 0 } },
      }),
    [],
  );

  useEffect(() => {
    if (!visible) return;
    const width = lowTier ? 1024 : 2048;
    let lastKey = "";
    let timer = 0;
    let busy = false;
    let queued = false;
    let live = true;

    const run = async () => {
      if (busy) {
        queued = true;
        return;
      }
      busy = true;
      const result = await renderBorders(Math.round(useChronosStore.getState().year), width, width / 2, lastKey);
      busy = false;
      if (live && result && result !== "unchanged") {
        lastKey = result.key;
        const next = new DataTexture(new Uint8Array(result.pixels.buffer), result.width, result.height, RGBAFormat, UnsignedByteType);
        next.wrapS = RepeatWrapping;
        next.magFilter = LinearFilter;
        next.minFilter = LinearMipmapLinearFilter;
        next.generateMipmaps = true;
        next.needsUpdate = true;
        setTexture(next);
        usePolityStore.getState().setLabels(result.labels);
      }
      if (live && queued) {
        queued = false;
        void run();
      }
    };

    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void run(), DEBOUNCE_MS);
    };
    void run();
    const unsubscribe = useChronosStore.subscribe((state, previous) => {
      if (Math.round(state.year) !== Math.round(previous.year)) schedule();
    });
    return () => {
      live = false;
      window.clearTimeout(timer);
      unsubscribe();
      usePolityStore.getState().setLabels([]);
    };
  }, [visible, lowTier]);

  useEffect(() => () => texture?.dispose(), [texture]);
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );
  useEffect(() => {
    const uniform = material.uniforms.uBorders;
    if (uniform) uniform.value = texture;
  }, [material, texture]);

  useFrame((_, delta) => {
    const opacity = material.uniforms.uOpacity;
    if (!opacity) return;
    const target = visible && texture ? 1 : 0;
    opacity.value += (target - (opacity.value as number)) * Math.min(1, delta * 5);
  });

  if (!texture) return null;
  return <mesh geometry={geometry} material={material} renderOrder={2} visible={visible} />;
}
