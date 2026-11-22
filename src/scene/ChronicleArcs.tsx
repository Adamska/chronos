"use client";

import { type ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  Color,
  DynamicDrawUsage,

  type InstancedMesh,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector3,
} from "three";
import { ARC_SAMPLES, MAX_ARCS, buildArcBundle } from "@/scene/arcGeometry";
import { createCometGeometry, seedParticles, writeBasis } from "@/scene/particleField";
import { useQuality } from "@/scene/quality";
import { arcPresence, campaignFade, easeToward } from "@/scene/temporal";
import arcFragment from "@/shaders/arc.frag";
import arcVertex from "@/shaders/arc.vert";
import { revealFactor } from "@/scene/transition";
import { isConcealed } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { GeoArc } from "@/types/chronicle";

const head = new Vector3();
const tangent = new Vector3();
const radial = new Vector3();
const side = new Vector3();
const PARTICLE_SIZE = 0.0034;

function setCursor(cursor: "pointer" | "auto"): void {
  document.body.style.cursor = cursor;
}

export function ChronicleArcs() {
  const campaign = useChronosStore((state) => state.campaign);
  const select = useChronosStore((state) => state.select);
  const arcs = useMemo(() => (campaign?.arcs ?? []).slice(0, MAX_ARCS), [campaign]);
  const bundle = useMemo(() => buildArcBundle(arcs), [arcs]);
  const { particleScale } = useQuality();
  const particles = useMemo(() => seedParticles(arcs, particleScale), [arcs, particleScale]);
  const presence = useMemo(() => new Float32Array(MAX_ARCS), []);
  const particleMesh = useRef<InstancedMesh>(null);

  const tubeMaterial = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: arcVertex,
        fragmentShader: arcFragment,
        transparent: true,
        depthWrite: false,
        blending: AdditiveBlending,
        uniforms: { uPresence: { value: presence }, uSelected: { value: -1 }, uTime: { value: 0 } },
      }),
    [presence],
  );
  const particleGeometry = useMemo(() => createCometGeometry(), []);
  const particleMaterial = useMemo(
    () => new MeshBasicMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, toneMapped: false, vertexColors: true }),
    [],
  );

  useEffect(() => () => bundle?.tubes.dispose(), [bundle]);
  useEffect(() => () => bundle?.pick.dispose(), [bundle]);
  useEffect(
    () => () => {
      tubeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    },
    [tubeMaterial, particleGeometry, particleMaterial],
  );

  useEffect(() => {
    const mesh = particleMesh.current;
    if (!mesh || !bundle) return;
    mesh.instanceMatrix.setUsage(DynamicDrawUsage);
    const tint = new Color();
    for (let i = 0; i < particles.count; i += 1) {
      const color = bundle.colors[particles.arcIndex[i] ?? 0];
      if (color) mesh.setColorAt(i, tint.copy(color).multiplyScalar(1.8));
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [bundle, particles]);

  useFrame(({ camera }, delta) => {
    const mesh = particleMesh.current;
    if (!campaign || !bundle || !mesh) return;
    const { year, layers, selection } = useChronosStore.getState();
    const fade = campaignFade(campaign);
    const concealed = isConcealed();
    const reveal = revealFactor();
    arcs.forEach((arc, index) => {
      presence[index] = easeToward(presence[index] ?? 0, concealed ? 0 : arcPresence(arc, year, fade, layers) * reveal, delta);
    });

    const uniforms = tubeMaterial.uniforms;
    if (uniforms.uTime) uniforms.uTime.value += delta;
    if (uniforms.uSelected) {
      uniforms.uSelected.value = selection?.kind === "arc" ? arcs.findIndex((arc) => arc.id === selection.id) : -1;
    }

    const time = uniforms.uTime?.value as number;
    const zoom = Math.min(1.3, Math.max(0.5, camera.position.length() / 2.8));
    const matrices = mesh.instanceMatrix.array;
    for (let i = 0; i < particles.count; i += 1) {
      const arc = particles.arcIndex[i] ?? 0;
      const visibility = presence[arc] ?? 0;
      const base = i * 16;
      if (visibility < 0.01) {
        matrices[base] = matrices[base + 5] = matrices[base + 10] = 0;
        continue;
      }
      const table = bundle.samples[arc];
      const length = bundle.lengths[arc] ?? 1;
      if (!table) continue;
      const travel = ((particles.offset[i] ?? 0) + (time * (particles.speed[i] ?? 0.06)) / length) % 1;
      const position = travel * (ARC_SAMPLES - 1);
      const lower = Math.floor(position);
      const blend = position - lower;
      const a = lower * 3;
      const b = Math.min(ARC_SAMPLES - 1, lower + 1) * 3;
      const taper = Math.min(1, travel * 12, (1 - travel) * 12);
      const scale = PARTICLE_SIZE * visibility * (0.45 + 0.55 * taper) * zoom;
      head.set((table[a] ?? 0) + ((table[b] ?? 0) - (table[a] ?? 0)) * blend, (table[a + 1] ?? 0) + ((table[b + 1] ?? 0) - (table[a + 1] ?? 0)) * blend, (table[a + 2] ?? 0) + ((table[b + 2] ?? 0) - (table[a + 2] ?? 0)) * blend);
      tangent.set((table[b] ?? 0) - (table[a] ?? 0), (table[b + 1] ?? 0) - (table[a + 1] ?? 0), (table[b + 2] ?? 0) - (table[a + 2] ?? 0)).normalize();
      radial.copy(head).normalize();
      side.crossVectors(tangent, radial).normalize();
      writeBasis(matrices, base, side, tangent, radial, head, scale);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const resolveArc = (event: ThreeEvent<PointerEvent | MouseEvent>): GeoArc | null => {
    const vertex = event.face?.a;
    const attribute = bundle?.pick.getAttribute("aArc");
    if (vertex === undefined || !attribute) return null;
    const index = Math.round(attribute.getX(vertex));
    return (presence[index] ?? 0) > 0.2 ? (arcs[index] ?? null) : null;
  };

  if (!bundle) return null;

  return (
    <group>
      <mesh geometry={bundle.tubes} material={tubeMaterial} renderOrder={4} frustumCulled={false} />
      <instancedMesh
        key={`${campaign?.id}-${particles.count}`}
        ref={particleMesh}
        args={[particleGeometry, particleMaterial, particles.count]}
        renderOrder={5}
        frustumCulled={false}
      />
      <mesh
        geometry={bundle.pick}
        onPointerMove={(event) => {
          if (resolveArc(event)) {
            event.stopPropagation();
            setCursor("pointer");
          } else setCursor("auto");
        }}
        onPointerOut={() => setCursor("auto")}
        onClick={(event) => {
          const arc = resolveArc(event);
          if (!arc) return;
          event.stopPropagation();
          select({ kind: "arc", id: arc.id });
        }}
      >
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </mesh>
    </group>
  );
}
