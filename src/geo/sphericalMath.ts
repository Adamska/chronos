import { geoDistance, geoInterpolate } from "d3-geo";
import { Curve, CurvePath, Vector3 } from "three";
import type { LonLat } from "@/types/chronicle";

export const GLOBE_RADIUS = 1;
export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

const scratchA = new Vector3();
const scratchB = new Vector3();
const scratchAxis = new Vector3();

export function lonLatToVector3(
  lon: number,
  lat: number,
  radius: number = GLOBE_RADIUS,
  target: Vector3 = new Vector3(),
): Vector3 {
  const phi = lat * DEG2RAD;
  const lambda = lon * DEG2RAD;
  const cosPhi = Math.cos(phi);
  return target.set(
    radius * cosPhi * Math.sin(lambda),
    radius * Math.sin(phi),
    radius * cosPhi * Math.cos(lambda),
  );
}

export function vector3ToLonLat(point: Vector3): LonLat {
  const radius = point.length() || 1;
  const lat = Math.asin(Math.min(1, Math.max(-1, point.y / radius))) * RAD2DEG;
  const lon = Math.atan2(point.x, point.z) * RAD2DEG;
  return [lon, lat];
}

export function angularDistance(from: LonLat, to: LonLat): number {
  return geoDistance([from[0], from[1]], [to[0], to[1]]);
}

export function slerpUnit(from: Vector3, to: Vector3, t: number, target: Vector3): Vector3 {
  const a = scratchA.copy(from).normalize();
  const b = scratchB.copy(to).normalize();
  const dot = Math.min(1, Math.max(-1, a.dot(b)));
  const omega = Math.acos(dot);

  if (omega < 1e-6) {
    return target.copy(a).lerp(b, t).normalize();
  }

  if (Math.PI - omega < 1e-4) {
    scratchAxis.set(0, 1, 0);
    if (Math.abs(a.dot(scratchAxis)) > 0.95) scratchAxis.set(1, 0, 0);
    const orthogonal = scratchAxis.cross(a).normalize();
    const angle = Math.PI * t;
    return target.copy(a).multiplyScalar(Math.cos(angle)).addScaledVector(orthogonal, Math.sin(angle));
  }

  const sinOmega = Math.sin(omega);
  const wa = Math.sin((1 - t) * omega) / sinOmega;
  const wb = Math.sin(t * omega) / sinOmega;
  return target.copy(a).multiplyScalar(wa).addScaledVector(b, wb);
}

export function arcPeakAltitude(angle: number, scale = 1): number {
  return Math.min(0.42, 0.035 + angle * 0.16) * scale;
}

export class ElevatedGreatCircle extends Curve<Vector3> {
  private readonly start: Vector3;
  private readonly end: Vector3;
  private readonly radius: number;
  private readonly peak: number;

  constructor(from: LonLat, to: LonLat, radius: number = GLOBE_RADIUS, altitudeScale = 1) {
    super();
    this.start = lonLatToVector3(from[0], from[1], 1);
    this.end = lonLatToVector3(to[0], to[1], 1);
    this.radius = radius;
    this.peak = arcPeakAltitude(this.start.angleTo(this.end), altitudeScale);
  }

  override getPoint(t: number, target: Vector3 = new Vector3()): Vector3 {
    const lift = 4 * t * (1 - t);
    const eased = lift * lift * (3 - 2 * lift);
    slerpUnit(this.start, this.end, t, target);
    return target.multiplyScalar(this.radius * (1 + this.peak * eased));
  }
}

export function buildRouteCurve(
  path: readonly LonLat[],
  radius: number = GLOBE_RADIUS,
  altitudeScale = 1,
): CurvePath<Vector3> {
  const route = new CurvePath<Vector3>();
  for (let i = 0; i < path.length - 1; i += 1) {
    const from = path[i];
    const to = path[i + 1];
    if (from && to) route.add(new ElevatedGreatCircle(from, to, radius, altitudeScale));
  }
  return route;
}

export function sampleGreatCircle(from: LonLat, to: LonLat, segments: number): LonLat[] {
  const interpolate = geoInterpolate([from[0], from[1]], [to[0], to[1]]);
  const samples: LonLat[] = [];
  for (let i = 0; i <= segments; i += 1) {
    const [lon, lat] = interpolate(i / segments);
    samples.push([lon, lat]);
  }
  return samples;
}

export function surfaceNormalAt(lon: number, lat: number, target: Vector3 = new Vector3()): Vector3 {
  return lonLatToVector3(lon, lat, 1, target);
}

export function cameraPositionFor(
  target: LonLat,
  altitude: number,
  tiltDegrees: number,
  out: Vector3 = new Vector3(),
): Vector3 {
  const normal = surfaceNormalAt(target[0], target[1], scratchA);
  const north = scratchB.set(0, 1, 0).addScaledVector(normal, -normal.y);
  if (north.lengthSq() < 1e-6) north.set(0, 0, -1);
  north.normalize();
  const tilt = tiltDegrees * DEG2RAD;
  return out
    .copy(normal)
    .multiplyScalar(GLOBE_RADIUS + altitude * Math.cos(tilt))
    .addScaledVector(north, -altitude * Math.sin(tilt));
}

export function wrapLongitude(lon: number): number {
  return ((((lon + 180) % 360) + 360) % 360) - 180;
}
