"use client";

import { type ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  Color,
  CylinderGeometry,
  DoubleSide,
  IcosahedronGeometry,
  InstancedBufferAttribute,
  type InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  Quaternion,
  RingGeometry,
  ShaderMaterial,
  Vector3,
} from "three";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { LAYER_COLORS, campaignFade, easeToward, eventPresence, eventSpotlight } from "@/scene/temporal";
import beaconFragment from "@/shaders/beacon.frag";
import beaconVertex from "@/shaders/beacon.vert";
import { revealFactor } from "@/scene/transition";
import { isConcealed } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { HistoricalEvent } from "@/types/chronicle";

const SURFACE = 1.0062;
const RINGS_PER_EVENT = 2;
const zAxis = new Vector3(0, 0, 1);
const scratchMatrix = new Matrix4();
const scratchScale = new Vector3();

interface Anchor {
  readonly position: Vector3;
  readonly orientation: Quaternion;
}

function computeAnchors(events: readonly HistoricalEvent[]): Anchor[] {
  return events.map((event) => {
    const normal = lonLatToVector3(event.coordinates[0], event.coordinates[1], 1);
    return { position: normal.clone().multiplyScalar(SURFACE), orientation: new Quaternion().setFromUnitVectors(zAxis, normal) };
  });
}

function createBeaconGeometries() {
  const pillar = new CylinderGeometry(0.06, 0.2, 1, 10, 1, true).rotateX(Math.PI / 2).translate(0, 0, 0.5);
  return { ring: new RingGeometry(0.78, 1, 56), pillar, core: new IcosahedronGeometry(1, 1), pick: new IcosahedronGeometry(1, 0) };
}

function createBeaconMaterial(mode: number): ShaderMaterial {
  return new ShaderMaterial({
    vertexShader: beaconVertex,
    fragmentShader: beaconFragment,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    blending: AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uMode: { value: mode } },
  });
}

function placeInstances(mesh: InstancedMesh, anchors: readonly Anchor[], copies: number, sizes: readonly number[]): void {
  anchors.forEach((anchor, index) => {
    const size = sizes[index] ?? 0;
    scratchMatrix.compose(anchor.position, anchor.orientation, scratchScale.set(size, size, size));
    for (let copy = 0; copy < copies; copy += 1) mesh.setMatrixAt(index * copies + copy, scratchMatrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
}

function buildAttributes(events: readonly HistoricalEvent[], copies: number) {
  const count = events.length * copies;
  const phase = new Float32Array(count);
  const color = new Float32Array(count * 3);
  const tint = new Color();
  events.forEach((event, index) => {
    tint.set(LAYER_COLORS[event.layer]);
    for (let copy = 0; copy < copies; copy += 1) {
      const slot = index * copies + copy;
      phase[slot] = (index * 0.137) % 1 + copy / copies;
      color.set([tint.r, tint.g, tint.b], slot * 3);
    }
  });
  return {
    phase: new InstancedBufferAttribute(phase, 1),
    color: new InstancedBufferAttribute(color, 3),
    presence: new InstancedBufferAttribute(new Float32Array(count), 1),
  };
}

export function EventBeacons() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const events = useMemo(() => campaign?.events ?? [], [campaign]);
  const rings = useRef<InstancedMesh>(null);
  const pillars = useRef<InstancedMesh>(null);
  const cores = useRef<InstancedMesh>(null);
  const picks = useRef<InstancedMesh>(null);
  const presence = useMemo(() => new Float32Array(events.length), [events]);
  const coreScales = useMemo(() => new Float32Array(events.length), [events]);
  const anchors = useMemo(() => computeAnchors(events), [events]);

  const geometries = useMemo(() => createBeaconGeometries(), []);
  const materials = useMemo(
    () => ({
      ring: createBeaconMaterial(0),
      pillar: createBeaconMaterial(1),
      core: new MeshBasicMaterial({ color: "#f4ead2", toneMapped: false, transparent: true }),
      pick: new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }),
    }),
    [],
  );
  const ringAttributes = useMemo(() => buildAttributes(events, RINGS_PER_EVENT), [events]);
  const pillarAttributes = useMemo(() => buildAttributes(events, 1), [events]);

  useEffect(() => () => Object.values(geometries).forEach((geometry) => geometry.dispose()), [geometries]);
  useEffect(() => () => Object.values(materials).forEach((material) => material.dispose()), [materials]);

  useLayoutEffect(() => {
    const ringMesh = rings.current;
    const pillarMesh = pillars.current;
    if (ringMesh) {
      ringMesh.geometry.dispose();
      ringMesh.geometry.setAttribute("aPhase", ringAttributes.phase);
      ringMesh.geometry.setAttribute("aColor", ringAttributes.color);
      ringMesh.geometry.setAttribute("aPresence", ringAttributes.presence);
      placeInstances(ringMesh, anchors, RINGS_PER_EVENT, events.map((e) => 0.012 + e.significance * 0.0065));
    }
    if (pillarMesh) {
      pillarMesh.geometry.dispose();
      pillarMesh.geometry.setAttribute("aPhase", pillarAttributes.phase);
      pillarMesh.geometry.setAttribute("aColor", pillarAttributes.color);
      pillarMesh.geometry.setAttribute("aPresence", pillarAttributes.presence);
      placeInstances(pillarMesh, anchors, 1, events.map((e) => 0.03 + e.significance * 0.014));
    }
    if (cores.current) placeInstances(cores.current, anchors, 1, events.map(() => 0));
    if (picks.current) placeInstances(picks.current, anchors, 1, events.map((e) => 0.014 + e.significance * 0.002));
  }, [events, anchors, ringAttributes, pillarAttributes]);

  useFrame((_, delta) => {
    if (!campaign) return;
    const { year, layers, selection } = useChronosStore.getState();
    const fade = campaignFade(campaign);
    const selectedId = selection?.kind === "event" ? selection.id : null;
    const concealed = isConcealed();
    const reveal = revealFactor();
    const ringPresence = ringAttributes.presence.array as Float32Array;
    const pillarPresence = pillarAttributes.presence.array as Float32Array;

    events.forEach((event, index) => {
      const base = easeToward(presence[index] ?? 0, concealed ? 0 : eventPresence(event, year, fade, layers) * reveal, delta);
      const focus = event.id === selectedId ? 1.5 : 0.55 + 0.6 * eventSpotlight(event, year, fade);
      presence[index] = base;
      for (let copy = 0; copy < RINGS_PER_EVENT; copy += 1) ringPresence[index * RINGS_PER_EVENT + copy] = base * focus;
      pillarPresence[index] = base * focus;
    });
    ringAttributes.presence.needsUpdate = true;
    pillarAttributes.presence.needsUpdate = true;

    for (const material of [materials.ring, materials.pillar]) {
      const time = material.uniforms.uTime;
      if (time) time.value += delta;
    }

    const coreMesh = cores.current;
    if (coreMesh) {
      const easing = Math.min(1, delta * 8);
      anchors.forEach((anchor, index) => {
        const target = (presence[index] ?? 0) * (events[index]?.id === selectedId ? 0.0075 : 0.0042);
        const current = coreScales[index] ?? 0;
        const next = current + (target - current) * easing;
        coreScales[index] = next;
        scratchMatrix.compose(anchor.position, anchor.orientation, scratchScale.set(next, next, next));
        coreMesh.setMatrixAt(index, scratchMatrix);
      });
      coreMesh.instanceMatrix.needsUpdate = true;
    }
  });

  const resolveEvent = (event: ThreeEvent<PointerEvent | MouseEvent>): HistoricalEvent | null => {
    const index = event.instanceId;
    if (index === undefined || (presence[index] ?? 0) < 0.15) return null;
    return events[index] ?? null;
  };

  if (events.length === 0) return null;

  return (
    <group key={campaign?.id}>
      <instancedMesh ref={rings} args={[geometries.ring, materials.ring, events.length * RINGS_PER_EVENT]} renderOrder={6} frustumCulled={false} />
      <instancedMesh ref={pillars} args={[geometries.pillar, materials.pillar, events.length]} renderOrder={6} frustumCulled={false} />
      <instancedMesh ref={cores} args={[geometries.core, materials.core, events.length]} renderOrder={7} frustumCulled={false} />
      <instancedMesh
        ref={picks}
        args={[geometries.pick, materials.pick, events.length]}
        onPointerMove={(event) => {
          if (!resolveEvent(event)) return;
          event.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => (document.body.style.cursor = "auto")}
        onClick={(event) => {
          const target = resolveEvent(event);
          if (!target) return;
          event.stopPropagation();
          select({ kind: "event", id: target.id });
        }}
      />
    </group>
  );
}
