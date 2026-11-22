"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  BufferGeometry,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  type Group,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  ShaderMaterial,
} from "three";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { buildExtrudedGeometry, polygonFromLonLat } from "@/geo/topoBuilder";
import { sunDirectionUniform } from "@/scene/solar";
import { campaignFade, territoryPresence } from "@/scene/temporal";
import { revealFactor } from "@/scene/transition";
import landVertex from "@/shaders/land.vert";
import territoryFragment from "@/shaders/territory.frag";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat, TerritoryZone } from "@/types/chronicle";

const BASE_RADIUS = 1.003;
const TOP_RADIUS = 1.0085;
const LAYER_STEP = 0.0011;

interface TerritoryVisual {
  readonly zone: TerritoryZone;
  readonly mesh: Mesh<BufferGeometry, ShaderMaterial>;
  readonly outline: LineLoop<BufferGeometry, LineBasicMaterial>;
}

function outlineGeometry(polygon: readonly LonLat[], radius: number): BufferGeometry {
  const positions: number[] = [];
  const point = lonLatToVector3(0, 0, radius);
  polygon.forEach((current, index) => {
    const next = polygon[(index + 1) % polygon.length] ?? current;
    const steps = Math.max(1, Math.ceil(Math.hypot(next[0] - current[0], next[1] - current[1]) / 1.2));
    for (let s = 0; s < steps; s += 1) {
      const t = s / steps;
      lonLatToVector3(current[0] + (next[0] - current[0]) * t, current[1] + (next[1] - current[1]) * t, radius, point);
      positions.push(point.x, point.y, point.z);
    }
  });
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  return geometry;
}

function buildVisual(zone: TerritoryZone, index: number): TerritoryVisual {
  const top = TOP_RADIUS + index * LAYER_STEP;
  const color = new Color(zone.color);
  const geometry = buildExtrudedGeometry([polygonFromLonLat(zone.polygon)], {
    baseRadius: BASE_RADIUS,
    topRadius: top,
    maxEdgeDegrees: 2,
  });
  const material = new ShaderMaterial({
    vertexShader: landVertex,
    fragmentShader: territoryFragment,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    uniforms: {
      uSunDirection: sunDirectionUniform,
      uColor: { value: color },
      uOpacity: { value: 0 },
      uBaseRadius: { value: BASE_RADIUS },
      uTopRadius: { value: top },
    },
  });
  const mesh = new Mesh(geometry, material);
  mesh.renderOrder = 3;
  const outline = new LineLoop(
    outlineGeometry(zone.polygon, top + 0.0003),
    new LineBasicMaterial({ color: color.clone().lerp(new Color("#f3ead6"), 0.35), transparent: true, opacity: 0, depthWrite: false }),
  );
  outline.renderOrder = 3;
  return { zone, mesh, outline };
}

export function TerritoryLayer() {
  const campaign = useChronosStore((state) => state.campaign);
  const group = useRef<Group>(null);
  const visuals = useMemo(() => (campaign?.territories ?? []).map(buildVisual), [campaign]);

  useEffect(() => {
    const root = group.current;
    if (!root) return;
    visuals.forEach(({ mesh, outline }) => root.add(mesh, outline));
    return () => {
      visuals.forEach(({ mesh, outline }) => {
        root.remove(mesh, outline);
        mesh.geometry.dispose();
        mesh.material.dispose();
        outline.geometry.dispose();
        outline.material.dispose();
      });
    };
  }, [visuals]);

  useFrame(() => {
    if (!campaign) return;
    const { year, layers } = useChronosStore.getState();
    const fade = campaignFade(campaign) * 1.5;
    const fill = useAtlasStore.getState().showPolitical ? 0.3 : 1;
    for (const { zone, mesh, outline } of visuals) {
      const presence = territoryPresence(zone, year, fade, layers) * revealFactor();
      const opacity = mesh.material.uniforms.uOpacity;
      if (opacity) opacity.value = presence * fill;
      outline.material.opacity = presence * 0.55;
      mesh.visible = presence > 0.004;
      outline.visible = mesh.visible;
    }
  });

  return <group ref={group} />;
}
