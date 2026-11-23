"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { DataTexture, LinearFilter, RedFormat, RepeatWrapping, ShaderMaterial, SphereGeometry, UnsignedByteType } from "three";
import { POPULATION_HEIGHT, POPULATION_WIDTH, type PopulationIndex, loadPopulationIndex, loadPopulationSlice, populationBracket } from "@/geo/population";
import { sunDirectionUniform } from "@/scene/solar";
import { easeToward } from "@/scene/temporal";
import globeVertex from "@/shaders/globe.vert";
import populationFragment from "@/shaders/population.frag";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const textures = new Map<number, DataTexture>();

function textureFor(year: number, grid: Uint8Array): DataTexture {
  const cached = textures.get(year);
  if (cached) return cached;
  const texture = new DataTexture(grid, POPULATION_WIDTH, POPULATION_HEIGHT, RedFormat, UnsignedByteType);
  texture.wrapS = RepeatWrapping;
  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;
  texture.needsUpdate = true;
  textures.set(year, texture);
  return texture;
}

export function PopulationLayer() {
  const atlasMode = useChronosStore((state) => state.mode === "atlas");
  const selected = useAtlasStore((state) => state.baseMap === "population");
  const visible = atlasMode && selected;
  const [index, setIndex] = useState<PopulationIndex | null>(null);
  const geometry = useMemo(() => new SphereGeometry(1.0057, 128, 96), []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: globeVertex,
        fragmentShader: populationFragment,
        transparent: true,
        depthWrite: false,
        uniforms: { uFrom: { value: null }, uTo: { value: null }, uWeight: { value: 0 }, uOpacity: { value: 0 }, uSunDirection: sunDirectionUniform },
      }),
    [],
  );

  useEffect(() => {
    if (!visible || index) return;
    let live = true;
    void loadPopulationIndex().then((loaded) => {
      if (live) setIndex(loaded);
    });
    return () => {
      live = false;
    };
  }, [visible, index]);

  useEffect(() => {
    if (!visible || !index) return;
    let live = true;
    let pending = "";
    const update = (year: number) => {
      const bracket = populationBracket(year, index.years);
      if (!bracket) return;
      const key = `${bracket.from}:${bracket.to}`;
      const { uFrom, uTo, uWeight } = material.uniforms;
      if (uWeight) uWeight.value = bracket.weight;
      if (key === pending) return;
      pending = key;
      void Promise.all([loadPopulationSlice(bracket.from), loadPopulationSlice(bracket.to)]).then(([from, to]) => {
        if (!live || !from || !to || key !== pending) return;
        if (uFrom) uFrom.value = textureFor(bracket.from, from);
        if (uTo) uTo.value = textureFor(bracket.to, to);
      });
    };
    update(useChronosStore.getState().year);
    const unsubscribe = useChronosStore.subscribe((state, previous) => {
      if (state.year !== previous.year) update(state.year);
    });
    return () => {
      live = false;
      unsubscribe();
    };
  }, [visible, index, material]);

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  useFrame((_, delta) => {
    const { uOpacity, uFrom } = material.uniforms;
    if (uOpacity) uOpacity.value = easeToward(uOpacity.value as number, visible && uFrom?.value ? 1 : 0, delta);
  });

  if (!index) return null;
  return <mesh geometry={geometry} material={material} renderOrder={2} visible={visible || (material.uniforms.uOpacity?.value as number) > 0.01} />;
}
