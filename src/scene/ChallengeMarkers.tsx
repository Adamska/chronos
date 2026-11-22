"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";
import { lonLatToVector3, sampleGreatCircle } from "@/geo/sphericalMath";
import { useChallengeStore } from "@/store/useChallengeStore";

export function ChallengeMarkers() {
  const phase = useChallengeStore((state) => state.phase);
  const results = useChallengeStore((state) => state.results);
  const last = results[results.length - 1];
  const geometry = useMemo(() => {
    if (!last) return null;
    const points = sampleGreatCircle(last.guess, last.event.coordinates, 48).map(([lon, lat]) => lonLatToVector3(lon, lat, 1.012));
    return { points, guess: lonLatToVector3(last.guess[0], last.guess[1], 1.01), answer: lonLatToVector3(last.event.coordinates[0], last.event.coordinates[1], 1.01) };
  }, [last]);

  if (phase !== "reveal" || !geometry) return null;
  return (
    <group>
      <Line points={geometry.points} color="#e8c47a" lineWidth={1.6} dashed dashSize={0.01} gapSize={0.008} transparent opacity={0.9} />
      <mesh position={geometry.guess}>
        <sphereGeometry args={[0.009, 16, 12]} />
        <meshBasicMaterial color="#e0624a" toneMapped={false} />
      </mesh>
      <mesh position={geometry.answer}>
        <sphereGeometry args={[0.011, 16, 12]} />
        <meshBasicMaterial color="#e8c47a" toneMapped={false} />
      </mesh>
    </group>
  );
}
