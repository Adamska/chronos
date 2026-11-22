"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { AdditiveBlending, BufferGeometry, Float32BufferAttribute, ShaderMaterial } from "three";
import { CITIES } from "@/data/cities";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { populationAt } from "@/scene/cityMetrics";
import { sunDirectionUniform } from "@/scene/solar";
import lightsFragment from "@/shaders/lights.frag";
import lightsVertex from "@/shaders/lights.vert";
import { useChronosStore } from "@/store/useChronosStore";

export function NightLights() {
  const pixelRatio = useThree((state) => state.viewport.dpr);
  const geometry = useMemo(() => {
    const positions = CITIES.flatMap((city) => lonLatToVector3(city.coordinates[0], city.coordinates[1], 1.0062).toArray());
    const buffer = new BufferGeometry();
    buffer.setAttribute("position", new Float32BufferAttribute(positions, 3));
    buffer.setAttribute("aIntensity", new Float32BufferAttribute(new Float32Array(CITIES.length), 1));
    return buffer;
  }, []);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: lightsVertex,
        fragmentShader: lightsFragment,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: { uSunDirection: sunDirectionUniform, uPixelRatio: { value: 1 } },
      }),
    [],
  );
  const state = useMemo(() => ({ year: Number.NaN }), []);

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  useFrame(() => {
    const ratio = material.uniforms.uPixelRatio;
    if (ratio) ratio.value = pixelRatio;
    const year = Math.round(useChronosStore.getState().year / 5) * 5;
    if (year === state.year) return;
    state.year = year;
    const intensity = geometry.getAttribute("aIntensity");
    CITIES.forEach((city, index) => intensity.setX(index, Math.min(1, Math.sqrt(populationAt(city, year) / 1500))));
    intensity.needsUpdate = true;
  });

  return <points geometry={geometry} material={material} renderOrder={6} frustumCulled={false} />;
}
