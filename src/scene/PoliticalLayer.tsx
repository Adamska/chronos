"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { DataTexture, LinearFilter, LinearMipmapLinearFilter, RGBAFormat, RepeatWrapping, ShaderMaterial, SphereGeometry, UnsignedByteType } from "three";
import { renderBorders } from "@/geo/borderClient";
import { useQualityStore } from "@/scene/quality";
import { sunDirectionUniform } from "@/scene/solar";
import { easeToward } from "@/scene/temporal";
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
  const [ready, setReady] = useState(false);
  const textures = useMemo<{ current: DataTexture | null; previous: DataTexture | null }>(() => ({ current: null, previous: null }), []);
  const geometry = useMemo(() => new SphereGeometry(1.0058, 128, 96), []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: globeVertex,
        fragmentShader: politicalFragment,
        transparent: true,
        depthWrite: false,
        uniforms: { uBorders: { value: null }, uPrevious: { value: null }, uMix: { value: 1 }, uSunDirection: sunDirectionUniform, uOpacity: { value: 0 } },
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
        textures.previous?.dispose();
        textures.previous = textures.current;
        textures.current = next;
        const { uBorders, uPrevious, uMix } = material.uniforms;
        if (uBorders) uBorders.value = next;
        if (uPrevious) uPrevious.value = textures.previous ?? next;
        if (uMix) uMix.value = textures.previous ? 0 : 1;
        setReady(true);
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
  }, [visible, lowTier, material, textures]);

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
      textures.current?.dispose();
      textures.previous?.dispose();
    },
    [geometry, material, textures],
  );

  useFrame((_, delta) => {
    const { uOpacity, uMix } = material.uniforms;
    if (uMix) uMix.value = Math.min(1, (uMix.value as number) + delta * 1.6);
    if (uOpacity) uOpacity.value = easeToward(uOpacity.value as number, visible && ready ? 1 : 0, delta);
  });

  if (!ready) return null;
  return <mesh geometry={geometry} material={material} renderOrder={2} visible={visible} />;
}
