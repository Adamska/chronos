"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import {
  AdditiveBlending,
  type BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
  ShaderMaterial,
  TubeGeometry,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { FLOW_LINES, type FlowKind, type FlowLine, type Season } from "@/data/environment";
import { lonLatToVector3, sampleGreatCircle } from "@/geo/sphericalMath";
import flowFragment from "@/shaders/flow.frag";
import flowVertex from "@/shaders/flow.vert";
import { useAtlasStore } from "@/store/useAtlasStore";
import type { LonLat } from "@/types/chronicle";

const KIND_INDEX: Record<FlowKind, number> = { "warm-current": 0, "cold-current": 1, wind: 2, monsoon: 3 };
const SURFACE = 1.0068;

function densify(path: readonly LonLat[]): LonLat[] {
  const points: LonLat[] = [];
  path.forEach((point, index) => {
    const next = path[index + 1];
    if (!next) {
      points.push(point);
      return;
    }
    points.push(...sampleGreatCircle(point, next, 8).slice(0, -1));
  });
  return points;
}

function buildFlowGeometry(lines: readonly FlowLine[]): BufferGeometry | null {
  const parts = lines.map((line) => {
    const curve = new CatmullRomCurve3(densify(line.path).map(([lon, lat]) => lonLatToVector3(lon, lat, SURFACE)), false, "centripetal");
    const length = curve.getLength();
    const radius = line.kind === "wind" || line.kind === "monsoon" ? 0.0013 : 0.0019;
    const tube = new TubeGeometry(curve, Math.max(24, Math.round(length * 90)), radius, 3, false);
    const count = tube.getAttribute("position").count;
    tube.setAttribute("aKind", new Float32BufferAttribute(new Float32Array(count).fill(KIND_INDEX[line.kind]), 1));
    tube.setAttribute("aLength", new Float32BufferAttribute(new Float32Array(count).fill(length), 1));
    return tube;
  });
  const merged = parts.length > 0 ? mergeGeometries(parts, false) : null;
  parts.forEach((part) => part.dispose());
  return merged;
}

export function visibleFlows(season: Season): FlowLine[] {
  return FLOW_LINES.filter((line) => !line.season || line.season === season);
}

export function EnvironmentLayer() {
  const visible = useAtlasStore((state) => state.showEnvironment);
  const season = useAtlasStore((state) => state.season);
  const geometry = useMemo(() => (visible ? buildFlowGeometry(visibleFlows(season)) : null), [visible, season]);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: flowVertex,
        fragmentShader: flowFragment,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uOpacity: { value: 0.9 },
          uWarm: { value: new Color("#e8915a") },
          uCold: { value: new Color("#6fb3e0") },
          uWind: { value: new Color("#d9dde0") },
          uMonsoon: { value: new Color("#7fd1b9") },
        },
      }),
    [],
  );

  useEffect(() => () => geometry?.dispose(), [geometry]);
  useEffect(() => () => material.dispose(), [material]);

  useFrame((_, delta) => {
    const time = material.uniforms.uTime;
    if (time && geometry) time.value += delta;
  });

  if (!geometry) return null;
  return <mesh geometry={geometry} material={material} renderOrder={3} frustumCulled={false} />;
}
