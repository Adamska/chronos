"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { DataTexture, LinearFilter, RedFormat, RepeatWrapping, ShaderMaterial, SphereGeometry, UnsignedByteType } from "three";
import { perspectiveFor, snapshotFor } from "@/data/knownWorld";
import { KNOWN_HEIGHT, KNOWN_WIDTH, rasterizeKnownWorld } from "@/geo/knownWorld";
import { MASK_HEIGHT, MASK_WIDTH } from "@/geo/landBuild";
import { onLandMask } from "@/geo/landClient";
import { solveTravelTimes } from "@/geo/travelClient";
import { travelModelFor } from "@/geo/travelModels";
import { encodeTravelField, publishTravel } from "@/scene/lensField";
import globeVertex from "@/shaders/globe.vert";
import lensFragment from "@/shaders/lens.frag";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

function makeTexture(data: Uint8Array, width: number, height: number): DataTexture {
  const texture = new DataTexture(data, width, height, RedFormat, UnsignedByteType);
  texture.wrapS = RepeatWrapping;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function useLandMask(): Uint8Array | null {
  const [mask, setMask] = useState<Uint8Array | null>(null);
  useEffect(() => onLandMask(setMask), []);
  return mask;
}

export function LensOverlay() {
  const lens = useAtlasStore((state) => state.lens);
  const origin = useAtlasStore((state) => state.travelOrigin);
  const perspectiveId = useAtlasStore((state) => state.knownPerspective);
  const modelId = useChronosStore((state) => travelModelFor(state.year).id);
  const perspective = perspectiveFor(perspectiveId);
  const snapshotYear = useChronosStore((state) => snapshotFor(perspective, state.year)?.year ?? 0);
  const mask = useLandMask();
  const geometry = useMemo(() => new SphereGeometry(1.026, 128, 96), []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: globeVertex,
        fragmentShader: lensFragment,
        transparent: true,
        depthWrite: false,
        uniforms: { uTravel: { value: null }, uKnown: { value: null }, uMode: { value: 1 }, uOpacity: { value: 0 }, uTime: { value: 0 } },
      }),
    [],
  );
  const [travelTexture, setTravelTexture] = useState<DataTexture | null>(null);
  const knownTexture = useMemo(() => {
    if (lens !== "known") return null;
    const snapshot = perspective.snapshots.find((entry) => entry.year === snapshotYear);
    return snapshot ? makeTexture(rasterizeKnownWorld(snapshot), KNOWN_WIDTH, KNOWN_HEIGHT) : null;
  }, [lens, perspective, snapshotYear]);

  useEffect(() => {
    if (lens !== "travel" || !mask || !origin) {
      publishTravel(null);
      return;
    }
    let stale = false;
    const model = travelModelFor(useChronosStore.getState().year);
    void solveTravelTimes(mask, origin.coordinates, model, () => stale).then((days) => {
      if (stale || !days) return;
      publishTravel({ days, origin: origin.coordinates, modelLabel: model.label });
      setTravelTexture(makeTexture(encodeTravelField(days), MASK_WIDTH, MASK_HEIGHT));
    });
    return () => {
      stale = true;
    };
  }, [lens, mask, origin, modelId]);

  useEffect(() => () => travelTexture?.dispose(), [travelTexture]);
  useEffect(() => () => knownTexture?.dispose(), [knownTexture]);
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  useEffect(() => {
    const { uTravel, uKnown, uMode } = material.uniforms;
    if (uTravel) uTravel.value = travelTexture;
    if (uKnown) uKnown.value = knownTexture;
    if (uMode) uMode.value = lens === "known" ? 2 : 1;
  }, [material, travelTexture, knownTexture, lens]);

  const active = (lens === "travel" && travelTexture !== null) || (lens === "known" && knownTexture !== null);

  useFrame((_, delta) => {
    const opacity = material.uniforms.uOpacity;
    if (!opacity) return;
    const target = active ? 1 : 0;
    opacity.value += (target - (opacity.value as number)) * Math.min(1, delta * 4);
  });

  if (lens === "none" && !active) return null;
  return <mesh geometry={geometry} material={material} renderOrder={2} />;
}
