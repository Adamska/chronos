"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { CircleGeometry, Color, type InstancedMesh, Matrix4, MeshBasicMaterial, Quaternion, Vector3 } from "three";
import { CITIES } from "@/data/cities";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { populationAt } from "@/scene/cityMetrics";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const SURFACE = 1.0058;
const zAxis = new Vector3(0, 0, 1);
const matrix = new Matrix4();
const scale = new Vector3();
const INK = new Color("#e9e4d8");
const CROWN = new Color("#e8c47a");

export function CityLayer() {
  const visible = useAtlasStore((state) => state.showCities);
  const mesh = useRef<InstancedMesh>(null);
  const geometry = useMemo(() => new CircleGeometry(1, 28), []);
  const material = useMemo(() => new MeshBasicMaterial({ transparent: true, opacity: 0.55, depthWrite: false, toneMapped: false }), []);
  const anchors = useMemo(
    () =>
      CITIES.map((city) => {
        const normal = lonLatToVector3(city.coordinates[0], city.coordinates[1], 1);
        return { position: normal.clone().multiplyScalar(SURFACE), orientation: new Quaternion().setFromUnitVectors(zAxis, normal) };
      }),
    [],
  );
  const state = useMemo(() => ({ lastYear: Number.NaN, leader: -1 }), []);

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  useLayoutEffect(() => {
    state.lastYear = Number.NaN;
    state.leader = -2;
  }, [visible, state]);

  useFrame(() => {
    const instances = mesh.current;
    if (!instances || !visible) return;
    const year = Math.round(useChronosStore.getState().year);
    if (year === state.lastYear) return;
    state.lastYear = year;
    let leader = -1;
    let best = 0;
    CITIES.forEach((city, index) => {
      const population = populationAt(city, year);
      if (population > best) {
        best = population;
        leader = index;
      }
      const radius = population > 0 ? 0.0028 + Math.sqrt(population) * 0.00042 : 0;
      const anchor = anchors[index];
      if (!anchor) return;
      matrix.compose(anchor.position, anchor.orientation, scale.set(radius, radius, radius));
      instances.setMatrixAt(index, matrix);
    });
    if (leader !== state.leader) {
      CITIES.forEach((_, index) => instances.setColorAt(index, index === leader ? CROWN : INK));
      if (instances.instanceColor) instances.instanceColor.needsUpdate = true;
      state.leader = leader;
    }
    instances.instanceMatrix.needsUpdate = true;
  });

  if (!visible) return null;
  return <instancedMesh ref={mesh} args={[geometry, material, CITIES.length]} renderOrder={5} frustumCulled={false} />;
}
