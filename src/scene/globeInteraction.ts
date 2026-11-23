import type { ThreeEvent } from "@react-three/fiber";
import { vector3ToLonLat } from "@/geo/sphericalMath";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

let lastHover = 0;

export function formatCoordinates([lon, lat]: LonLat): string {
  return `${Math.abs(lat).toFixed(1)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lon).toFixed(1)}°${lon >= 0 ? "E" : "W"}`;
}

export function handleGlobeClick(event: ThreeEvent<MouseEvent>): void {
  event.stopPropagation();
  if (event.delta > 6) return;
  const point = vector3ToLonLat(event.point);
  const atlas = useAtlasStore.getState();
  if (useChronosStore.getState().mode !== "atlas") return;
  if (atlas.lens === "travel") {
    atlas.setTravelOrigin({ coordinates: point, label: formatCoordinates(point) });
    return;
  }
  atlas.queryPlace(point);
}

export function handleGlobeHover(event: ThreeEvent<PointerEvent>): void {
  event.stopPropagation();
  const atlas = useAtlasStore.getState();
  if (atlas.lens !== "travel") {
    if (atlas.hover) atlas.setHover(null);
    return;
  }
  const now = performance.now();
  if (now - lastHover < 60) return;
  lastHover = now;
  atlas.setHover({ coordinates: vector3ToLonLat(event.point), clientX: event.clientX, clientY: event.clientY });
}

export function handleGlobeLeave(): void {
  if (useAtlasStore.getState().hover) useAtlasStore.getState().setHover(null);
}
