"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { IcosahedronGeometry, type InstancedMesh, Matrix4, MeshBasicMaterial, Quaternion, Vector3 } from "three";
import { contemporaryEvents, meanwhileWindow } from "@/data/contemporaries";
import { lonLatToVector3 } from "@/geo/sphericalMath";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const geometry = new IcosahedronGeometry(1, 1);
const material = new MeshBasicMaterial({ color: "#9fb4c4", transparent: true, opacity: 0.7, toneMapped: false });
const matrix = new Matrix4();
const identity = new Quaternion();
const scale = new Vector3();
const position = new Vector3();

export function MeanwhileMarkers() {
  const open = useAtlasStore((state) => state.panel === "meanwhile");
  const campaign = useChronosStore((state) => state.campaign);
  const year = useChronosStore((state) => Math.round(state.year / 5) * 5);
  const entries = useMemo(() => (open ? contemporaryEvents(year, campaign?.id, meanwhileWindow(campaign)) : []), [open, year, campaign]);
  const mesh = useRef<InstancedMesh>(null);

  useLayoutEffect(() => {
    const instances = mesh.current;
    if (!instances) return;
    entries.forEach(({ event }, index) => {
      lonLatToVector3(event.coordinates[0], event.coordinates[1], 1.008, position);
      const size = 0.004 + event.significance * 0.0008;
      matrix.compose(position, identity, scale.set(size, size, size));
      instances.setMatrixAt(index, matrix);
    });
    instances.count = entries.length;
    instances.instanceMatrix.needsUpdate = true;
  }, [entries]);

  if (!open) return null;
  return <instancedMesh ref={mesh} args={[geometry, material, 12]} renderOrder={7} frustumCulled={false} />;
}
