"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { DataTexture, LinearFilter, LinearMipmapLinearFilter, RGBAFormat, RepeatWrapping, ShaderMaterial, SphereGeometry, UnsignedByteType } from "three";
import { renderBorders } from "@/geo/borderClient";
import { sunDirectionUniform } from "@/scene/solar";
import globeVertex from "@/shaders/globe.vert";
import politicalFragment from "@/shaders/political.frag";
import { useAtlasStore } from "@/store/useAtlasStore";

export function CompareLayer() {
  const compareYear = useAtlasStore((state) => state.compareYear);
  const [texture, setTexture] = useState<DataTexture | null>(null);
  const geometry = useMemo(() => new SphereGeometry(1.0062, 128, 96), []);
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
    if (compareYear === null) return;
    let live = true;
    const timer = window.setTimeout(() => {
      void renderBorders(compareYear, 2048, 1024, "", "outline").then((result) => {
        if (!live || !result || result === "unchanged") return;
        const next = new DataTexture(new Uint8Array(result.pixels.buffer), result.width, result.height, RGBAFormat, UnsignedByteType);
        next.wrapS = RepeatWrapping;
        next.magFilter = LinearFilter;
        next.minFilter = LinearMipmapLinearFilter;
        next.generateMipmaps = true;
        next.needsUpdate = true;
        setTexture(next);
      });
    }, 150);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
  }, [compareYear]);

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
    const target = compareYear !== null && texture ? 1.15 : 0;
    opacity.value += (target - (opacity.value as number)) * Math.min(1, delta * 5);
  });

  if (!texture) return null;
  return <mesh geometry={geometry} material={material} renderOrder={3} visible={compareYear !== null} />;
}
