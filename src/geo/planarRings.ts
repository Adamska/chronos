import type { Position } from "geojson";

export type PolygonRings = readonly (readonly Position[])[];

export function surfaceSpan(ax: number, ay: number, bx: number, by: number): number {
  const latitudeScale = Math.cos(((ay + by) * Math.PI) / 360);
  return Math.hypot((bx - ax) * latitudeScale, by - ay);
}

export function densifyPath(points: readonly Position[], maxStep: number, keepLast: boolean): Position[] {
  const dense: Position[] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const [ax = 0, ay = 0] = points[i] ?? [];
    const [bx = 0, by = 0] = points[i + 1] ?? [];
    const steps = Math.max(1, Math.ceil(surfaceSpan(ax, ay, bx, by) / maxStep));
    for (let s = 0; s < steps; s += 1) {
      const t = s / steps;
      dense.push([ax + (bx - ax) * t, ay + (by - ay) * t]);
    }
  }
  const last = points[points.length - 1];
  if (keepLast && last) dense.push(last);
  return dense;
}

export function unwrapPath(points: readonly Position[]): Position[] {
  const unwrapped: Position[] = [];
  let offset = 0;
  let previous: number | undefined;
  for (const [lon = 0, lat = 0] of points) {
    if (previous !== undefined) {
      const delta = lon - previous;
      if (delta > 180) offset -= 360;
      else if (delta < -180) offset += 360;
    }
    previous = lon;
    unwrapped.push([lon + offset, lat]);
  }
  return unwrapped;
}

export function planarRing(ring: readonly Position[]): Position[] {
  const unwrapped = unwrapPath(ring);
  const [firstLon = 0, firstLat = 0] = unwrapped[0] ?? [];
  const [lastLon = 0] = unwrapped[unwrapped.length - 1] ?? [];
  if (Math.abs(lastLon - firstLon) > 180) {
    const meanLat = unwrapped.reduce((sum, [, lat = 0]) => sum + lat, 0) / unwrapped.length;
    const pole = meanLat < 0 ? -90 : 90;
    unwrapped.push([lastLon, pole], [firstLon, pole], [firstLon, firstLat]);
  }
  return unwrapped;
}

export function signedArea(ring: readonly Position[]): number {
  let area = 0;
  for (let i = 0; i < ring.length; i += 1) {
    const [ax = 0, ay = 0] = ring[i] ?? [];
    const [bx = 0, by = 0] = ring[(i + 1) % ring.length] ?? [];
    area += ax * by - bx * ay;
  }
  return area / 2;
}

function containsPoint(rings: PolygonRings, x: number, y: number): boolean {
  let inside = false;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
      const [xi = 0, yi = 0] = ring[i] ?? [];
      const [xj = 0, yj = 0] = ring[j] ?? [];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
  }
  return inside;
}

export function interiorGrid(rings: PolygonRings, step: number): [number, number][] {
  const outer = rings[0] ?? [];
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
  for (const [lon = 0, lat = 0] of outer) {
    minLon = Math.min(minLon, lon);
    maxLon = Math.max(maxLon, lon);
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
  }
  const points: [number, number][] = [];
  for (let lat = Math.ceil(minLat / step) * step + step / 2; lat < maxLat; lat += step) {
    const lonStep = step / Math.max(0.25, Math.cos((lat * Math.PI) / 180));
    for (let lon = Math.ceil(minLon / lonStep) * lonStep; lon < maxLon; lon += lonStep) {
      if (containsPoint(rings, lon, lat)) points.push([lon, lat]);
    }
  }
  return points;
}

export function subdivideTriangle(
  coords: number[],
  a: number,
  b: number,
  c: number,
  maxEdge: number,
  out: number[],
  depth: number,
): void {
  const ax = coords[a * 2] ?? 0, ay = coords[a * 2 + 1] ?? 0;
  const bx = coords[b * 2] ?? 0, by = coords[b * 2 + 1] ?? 0;
  const cx = coords[c * 2] ?? 0, cy = coords[c * 2 + 1] ?? 0;
  const ab = surfaceSpan(ax, ay, bx, by);
  const bc = surfaceSpan(bx, by, cx, cy);
  const ca = surfaceSpan(cx, cy, ax, ay);
  const longest = Math.max(ab, bc, ca);

  if (longest <= maxEdge || depth > 4) {
    out.push(a, b, c);
    return;
  }

  const midpoint = (p: number, q: number): number => {
    coords.push(((coords[p * 2] ?? 0) + (coords[q * 2] ?? 0)) / 2, ((coords[p * 2 + 1] ?? 0) + (coords[q * 2 + 1] ?? 0)) / 2);
    return coords.length / 2 - 1;
  };

  if (longest === ab) {
    const m = midpoint(a, b);
    subdivideTriangle(coords, a, m, c, maxEdge, out, depth + 1);
    subdivideTriangle(coords, m, b, c, maxEdge, out, depth + 1);
  } else if (longest === bc) {
    const m = midpoint(b, c);
    subdivideTriangle(coords, a, b, m, maxEdge, out, depth + 1);
    subdivideTriangle(coords, a, m, c, maxEdge, out, depth + 1);
  } else {
    const m = midpoint(c, a);
    subdivideTriangle(coords, a, b, m, maxEdge, out, depth + 1);
    subdivideTriangle(coords, m, b, c, maxEdge, out, depth + 1);
  }
}
