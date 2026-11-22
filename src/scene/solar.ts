import { Vector3 } from "three";
import { lonLatToVector3, vector3ToLonLat } from "@/geo/sphericalMath";

export interface SharedUniform<T> {
  value: T;
}

export const sunDirectionUniform: SharedUniform<Vector3> = { value: new Vector3(0.6, 0.35, 0.72).normalize() };

const AXIAL_TILT = 23.44;
const LEADING_OFFSET = 38;
const target = new Vector3();

export function solarDeclination(year: number): number {
  const season = year - Math.floor(year);
  return AXIAL_TILT * Math.sin(2 * Math.PI * (season - 0.22));
}

export function eraDrift(year: number): number {
  return Math.sin(year * 0.0041) * 14;
}

export function advanceSun(cameraPosition: Vector3, year: number, delta: number): Vector3 {
  const [cameraLon, cameraLat] = vector3ToLonLat(cameraPosition);
  const subsolarLon = cameraLon + LEADING_OFFSET + eraDrift(year);
  const subsolarLat = solarDeclination(year) * 0.6 + cameraLat * 0.25;
  lonLatToVector3(subsolarLon, subsolarLat, 1, target);
  const smoothing = 1 - Math.exp(-delta * 1.6);
  return sunDirectionUniform.value.lerp(target, smoothing).normalize();
}

