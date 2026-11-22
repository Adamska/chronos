import { Vector3 } from "three";
import { describe, expect, it } from "vitest";
import {
  ElevatedGreatCircle,
  angularDistance,
  cameraPositionFor,
  lonLatToVector3,
  slerpUnit,
  vector3ToLonLat,
} from "@/geo/sphericalMath";

describe("spherical math", () => {
  it("round-trips longitude and latitude through Cartesian space", () => {
    for (const [lon, lat] of [[0, 0], [-73.9, 40.7], [139.7, 35.7], [-179.5, -60], [100, 89]] as const) {
      const [backLon, backLat] = vector3ToLonLat(lonLatToVector3(lon, lat));
      expect(backLon).toBeCloseTo(lon, 6);
      expect(backLat).toBeCloseTo(lat, 6);
    }
  });

  it("places the prime meridian on the equator in front of the default camera", () => {
    const point = lonLatToVector3(0, 0);
    expect(point.z).toBeCloseTo(1);
    expect(point.x).toBeCloseTo(0);
  });

  it("measures great-circle distances in radians", () => {
    expect(angularDistance([0, 0], [180, 0])).toBeCloseTo(Math.PI);
    expect(angularDistance([0, 0], [0, 90])).toBeCloseTo(Math.PI / 2);
  });

  it("interpolates along the sphere and survives antipodal endpoints", () => {
    const a = lonLatToVector3(0, 0);
    const b = lonLatToVector3(180, 0);
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const point = slerpUnit(a, b, t, new Vector3());
      expect(point.length()).toBeCloseTo(1, 5);
    }
  });

  it("lifts arcs above the surface while anchoring both endpoints on it", () => {
    const arc = new ElevatedGreatCircle([116.4, 39.9], [-0.1, 51.5]);
    expect(arc.getPoint(0).length()).toBeCloseTo(1, 6);
    expect(arc.getPoint(1).length()).toBeCloseTo(1, 6);
    expect(arc.getPoint(0.5).length()).toBeGreaterThan(1.1);
  });

  it("frames a target from the requested altitude", () => {
    const position = cameraPositionFor([30, 10], 1.5, 0);
    expect(position.length()).toBeCloseTo(2.5, 5);
    const tilted = cameraPositionFor([30, 10], 1.5, 30);
    expect(tilted.distanceTo(lonLatToVector3(30, 10))).toBeCloseTo(1.5, 5);
  });
});
