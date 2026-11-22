"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import {
  AdditiveBlending,
  BackSide,
  DoubleSide,
  Color,
  LineBasicMaterial,
  ShaderMaterial,
  SphereGeometry,
} from "three";
import { LAND_BASE, LAND_TOP } from "@/geo/landBuild";
import { useLandLayers, useReliefTexture } from "@/scene/useGlobeAssets";
import { handleGlobeClick, handleGlobeHover, handleGlobeLeave } from "@/scene/globeInteraction";
import { advanceSun, sunDirectionUniform } from "@/scene/solar";
import atmosphereFragment from "@/shaders/atmosphere.frag";
import atmosphereVertex from "@/shaders/atmosphere.vert";
import globeFragment from "@/shaders/globe.frag";
import globeVertex from "@/shaders/globe.vert";
import landFragment from "@/shaders/land.frag";
import landVertex from "@/shaders/land.vert";
import noiseChunk from "@/shaders/noise.glsl";
import { useChronosStore } from "@/store/useChronosStore";

const BARRIER_TOP = LAND_TOP + 0.02;
const SHELL_RADIUS = 1.16;

function createLandMaterial(base: string, highlight: string, top: number, opacity = 1): ShaderMaterial {
  return new ShaderMaterial({
    vertexShader: landVertex,
    fragmentShader: `${noiseChunk}\n${landFragment}`,
    transparent: opacity < 1,
    side: DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 2,
    uniforms: {
      uSunDirection: sunDirectionUniform,
      uBaseColor: { value: new Color(base) },
      uHighlightColor: { value: new Color(highlight) },
      uRimColor: { value: new Color("#7fa6c9") },
      uBaseRadius: { value: LAND_BASE },
      uTopRadius: { value: top },
      uOpacity: { value: opacity },
      uRelief: { value: null },
      uHasRelief: { value: 0 },
    },
  });
}

export function EarthGlobe() {
  const layers = useLandLayers();
  const relief = useReliefTexture();

  const oceanGeometry = useMemo(() => new SphereGeometry(1, 160, 120), []);
  const shellGeometry = useMemo(() => new SphereGeometry(SHELL_RADIUS, 128, 96), []);
  const occluderGeometry = useMemo(() => new SphereGeometry(1.002, 48, 32), []);

  const oceanMaterial = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: globeVertex,
        fragmentShader: `${noiseChunk}\n${globeFragment}`,
        uniforms: {
          uSunDirection: sunDirectionUniform,
          uShelf: { value: null },
          uRelief: { value: null },
          uHasRelief: { value: 0 },
          uOceanDeep: { value: new Color("#05090f") },
          uOceanShallow: { value: new Color("#173040") },
          uGraticule: { value: new Color("#b9c4cc") },
          uRayleigh: { value: new Color("#4f86c6") },
          uAccent: { value: new Color("#d9a441") },
          uTime: { value: 0 },
        },
      }),
    [],
  );

  const atmosphereMaterial = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        side: BackSide,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: {
          uSunDirection: sunDirectionUniform,
          uRayleigh: { value: new Color("#5d9be0") },
          uMie: { value: new Color("#f3d9b0") },
          uIntensity: { value: 1.25 },
          uShellRadius: { value: SHELL_RADIUS },
          uScaleHeight: { value: 0.045 },
        },
      }),
    [],
  );

  const landMaterial = useMemo(() => createLandMaterial("#14171a", "#383832", LAND_TOP), []);
  const barrierMaterial = useMemo(() => createLandMaterial("#1e1d1a", "#5e5646", BARRIER_TOP), []);
  const coastlineMaterial = useMemo(
    () => new LineBasicMaterial({ color: "#d8d0bb", transparent: true, opacity: 0.32, depthWrite: false }),
    [],
  );

  useEffect(() => {
    for (const material of [oceanMaterial, landMaterial, barrierMaterial]) {
      const { uRelief, uHasRelief } = material.uniforms;
      if (uRelief) uRelief.value = relief;
      if (uHasRelief) uHasRelief.value = relief ? 1 : 0;
    }
  }, [relief, oceanMaterial, landMaterial, barrierMaterial]);

  useEffect(() => {
    const shelf = oceanMaterial.uniforms.uShelf;
    if (shelf) shelf.value = layers?.shelf ?? null;
  }, [layers, oceanMaterial]);

  useEffect(
    () => () => {
      oceanGeometry.dispose();
      shellGeometry.dispose();
      occluderGeometry.dispose();
      oceanMaterial.dispose();
      atmosphereMaterial.dispose();
      landMaterial.dispose();
      barrierMaterial.dispose();
      coastlineMaterial.dispose();
    },
    [oceanGeometry, shellGeometry, occluderGeometry, oceanMaterial, atmosphereMaterial, landMaterial, barrierMaterial, coastlineMaterial],
  );

  useFrame(({ camera }, delta) => {
    advanceSun(camera.position, useChronosStore.getState().year, delta);
    const time = oceanMaterial.uniforms.uTime;
    if (time) time.value += delta;
  });

  return (
    <group>
      <mesh geometry={oceanGeometry} material={oceanMaterial} renderOrder={0} />
      {layers ? (
        <>
          {layers.land.map((geometry) => (
            <mesh key={geometry.uuid} geometry={geometry} material={landMaterial} renderOrder={1} />
          ))}
          {(relief ? [] : layers.barriers).map((geometry) => (
            <mesh key={geometry.uuid} geometry={geometry} material={barrierMaterial} renderOrder={1} />
          ))}
          <lineSegments geometry={layers.coastline} material={coastlineMaterial} renderOrder={2} />
        </>
      ) : null}
      <mesh geometry={shellGeometry} material={atmosphereMaterial} renderOrder={10} />
      <mesh
        geometry={occluderGeometry}
        onClick={handleGlobeClick}
        onPointerMove={handleGlobeHover}
        onPointerOut={handleGlobeLeave}
      >
        <meshBasicMaterial colorWrite={false} depthWrite={false} />
      </mesh>
    </group>
  );
}
