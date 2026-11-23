"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { CircleGeometry, Color, type InstancedMesh, Matrix4, MeshBasicMaterial, Quaternion, Vector3 } from "three";
import { CITIES } from "@/data/cities";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { populationAt } from "@/scene/cityMetrics";
import { easeToward } from "@/scene/temporal";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const SURFACE = 1.0058;
const zAxis = new Vector3(0, 0, 1);
const matrix = new Matrix4();
const scale = new Vector3();
const INK = new Color("#e9e4d8");
const CROWN = new Color("#e8c47a");

export function CityLayer() {
  const citiesOn = useAtlasStore((state) => state.overlays.cities);
  const atlasMode = useChronosStore((state) => state.mode === "atlas");
  const visible = citiesOn && atlasMode;
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
  const state = useMemo(() => ({ lastYear: Number.NaN, leader: -1, settled: false }), []);
  const radii = useMemo(() => ({ target: new Float32Array(CITIES.length), current: new Float32Array(CITIES.length) }), []);

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
    radii.current.fill(0);
  }, [visible, state, radii]);

  useFrame((_, delta) => {
    const instances = mesh.current;
    if (!instances || !visible) return;
    const year = Math.round(useChronosStore.getState().year);
    if (year !== state.lastYear) {
      state.lastYear = year;
      state.settled = false;
      let leader = -1;
      let best = 0;
      CITIES.forEach((city, index) => {
        const population = populationAt(city, year);
        if (population > best) {
          best = population;
          leader = index;
        }
        radii.target[index] = population > 0 ? 0.0028 + Math.sqrt(population) * 0.00042 : 0;
      });
      if (leader !== state.leader) {
        CITIES.forEach((_, index) => instances.setColorAt(index, index === leader ? CROWN : INK));
        if (instances.instanceColor) instances.instanceColor.needsUpdate = true;
        state.leader = leader;
      }
    }
    if (state.settled) return;
    let moving = false;
    anchors.forEach((anchor, index) => {
      const target = radii.target[index] ?? 0;
      const radius = easeToward(radii.current[index] ?? 0, target, delta, 6);
      const settledRadius = Math.abs(radius - target) < 1e-5 ? target : radius;
      if (settledRadius !== target) moving = true;
      radii.current[index] = settledRadius;
      matrix.compose(anchor.position, anchor.orientation, scale.set(settledRadius, settledRadius, settledRadius));
      instances.setMatrixAt(index, matrix);
    });
    state.settled = !moving;
    instances.instanceMatrix.needsUpdate = true;
  });

  if (!visible) return null;
  return <instancedMesh ref={mesh} args={[geometry, material, CITIES.length]} renderOrder={5} frustumCulled={false} />;
}
