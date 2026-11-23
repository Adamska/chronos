"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial, Quaternion, TubeGeometry, Vector3 } from "three";
import { formatYear } from "@/data/campaigns/registry";
import { storyOf } from "@/data/story";
import { buildRouteCurve, lonLatToVector3 } from "@/geo/sphericalMath";
import { easeToward } from "@/scene/temporal";
import { useChronosStore } from "@/store/useChronosStore";
import type { KeyFigure } from "@/types/story";

const SURFACE = 1.0068;
const zAxis = new Vector3(0, 0, 1);
const toCamera = new Vector3();

function FigureTrail({ figure, accent }: { readonly figure: KeyFigure; readonly accent: string }) {
  const tube = useRef<Mesh>(null);
  const labels = useRef<(HTMLDivElement | null)[]>([]);
  const anchors = useMemo(
    () =>
      figure.places.map((place) => {
        const normal = lonLatToVector3(place.coordinates[0], place.coordinates[1], 1);
        return { position: normal.clone().multiplyScalar(SURFACE), orientation: new Quaternion().setFromUnitVectors(zAxis, normal), normal };
      }),
    [figure],
  );
  const geometry = useMemo(() => {
    const path = figure.places.map((place) => place.coordinates);
    if (path.length < 2) return null;
    const curve = buildRouteCurve(path, SURFACE, 0.6);
    return new TubeGeometry(curve, Math.min(400, 40 * path.length), 0.0016, 5, false);
  }, [figure]);
  const material = useMemo(() => new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }), [accent]);
  const markerGeometry = useMemo(() => new CircleGeometry(0.006, 24), []);
  const markerMaterial = useMemo(() => new MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.95, side: DoubleSide, depthWrite: false, toneMapped: false }), [accent]);

  useEffect(
    () => () => {
      geometry?.dispose();
      material.dispose();
      markerGeometry.dispose();
      markerMaterial.dispose();
    },
    [geometry, material, markerGeometry, markerMaterial],
  );

  useFrame(({ camera }, delta) => {
    material.opacity = easeToward(material.opacity, 0.9, delta, 3);
    toCamera.copy(camera.position).normalize();
    anchors.forEach((anchor, index) => {
      const node = labels.current[index];
      if (node) node.style.opacity = anchor.normal.dot(toCamera) > 0.25 ? "1" : "0";
    });
  });

  return (
    <group>
      {geometry ? <mesh ref={tube} geometry={geometry} material={material} renderOrder={8} /> : null}
      {anchors.map((anchor, index) => {
        const place = figure.places[index];
        if (!place) return null;
        return (
          <group key={`${place.year}-${index}`} position={anchor.position} quaternion={anchor.orientation}>
            <mesh geometry={markerGeometry} material={markerMaterial} renderOrder={9} />
            <Html zIndexRange={[4, 0]} style={{ pointerEvents: "none" }}>
              <div
                ref={(node) => {
                  labels.current[index] = node;
                }}
                className="-translate-y-1/2 whitespace-nowrap pl-3 font-mono text-[10px] text-ochre-soft transition-opacity duration-300 [text-shadow:0_1px_6px_rgb(0_0_0/0.95)]"
              >
                {index + 1}. {formatYear(place.year)} · {place.place.split(",")[0]}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function FigurePath() {
  const campaign = useChronosStore((state) => state.campaign);
  const figureId = useChronosStore((state) => state.figureId);
  const mode = useChronosStore((state) => state.mode);
  const figure = campaign && figureId && mode === "story" ? storyOf(campaign).figures.find((entry) => entry.id === figureId) : undefined;
  if (!figure || !campaign) return null;
  return <FigureTrail key={figure.id} figure={figure} accent={campaign.accent} />;
}
