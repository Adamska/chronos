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

function meanLongitude(ring: readonly Position[]): number {
  return ring.reduce((sum, [lon = 0]) => sum + lon, 0) / Math.max(1, ring.length);
}

function shiftRing(ring: Position[], offset: number): Position[] {
  return offset === 0 ? ring : ring.map(([lon = 0, lat = 0]) => [lon + offset, lat]);
}

export function planarPolygon(rings: PolygonRings): Position[][] {
  const [outerSource, ...holeSources] = rings;
  if (!outerSource) return [];
  const rawOuter = planarRing(outerSource);
  const outer = shiftRing(rawOuter, -360 * Math.round(meanLongitude(rawOuter) / 360));
  const anchor = meanLongitude(outer);
  const holes = holeSources.map((hole) => {
    const unwrapped = unwrapPath(hole);
    return shiftRing(unwrapped, 360 * Math.round((anchor - meanLongitude(unwrapped)) / 360));
  });
  return [outer, ...holes];
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

function jitter(a: number, b: number): number {
  const seed = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return seed - Math.floor(seed);
}

function clearOfEdges(rings: PolygonRings, x: number, y: number, margin: number): boolean {
  const marginSq = margin * margin;
  for (const ring of rings) {
    for (let i = 0; i < ring.length - 1; i += 1) {
      const [ax = 0, ay = 0] = ring[i] ?? [];
      const [bx = 0, by = 0] = ring[i + 1] ?? [];
      const dx = bx - ax;
      const dy = by - ay;
      const lengthSq = dx * dx + dy * dy || 1;
      const t = Math.min(1, Math.max(0, ((x - ax) * dx + (y - ay) * dy) / lengthSq));
      const px = ax + dx * t - x;
      const py = ay + dy * t - y;
      if (px * px + py * py < marginSq) return false;
    }
  }
  return true;
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
  const margin = step * 0.3;
  let row = 0;
  for (let lat = Math.ceil(minLat / step) * step + step / 2; lat < maxLat; lat += step, row += 1) {
    const lonStep = step / Math.max(0.25, Math.cos((lat * Math.PI) / 180));
    const stagger = row % 2 === 0 ? 0 : lonStep / 2;
    for (let lon = Math.ceil(minLon / lonStep) * lonStep + stagger; lon < maxLon; lon += lonStep) {
      const jitterLon = lon + (jitter(lon, lat) - 0.5) * lonStep * 0.18;
      const jitterLat = lat + (jitter(lat, lon) - 0.5) * step * 0.18;
      if (containsPoint(rings, jitterLon, jitterLat) && clearOfEdges(rings, jitterLon, jitterLat, margin)) {
        points.push([jitterLon, jitterLat]);
      }
    }
  }
  return points;
}

export function refineTriangles(coords: number[], triangles: readonly number[], maxEdge: number): number[] {
  const midpoints = new Map<number, number>();
  const stride = 1 << 21;

  const span = (p: number, q: number): number =>
    surfaceSpan(coords[p * 2] ?? 0, coords[p * 2 + 1] ?? 0, coords[q * 2] ?? 0, coords[q * 2 + 1] ?? 0);

  const midpoint = (p: number, q: number): number => {
    const key = Math.min(p, q) * stride + Math.max(p, q);
    const cached = midpoints.get(key);
    if (cached !== undefined) return cached;
    coords.push(((coords[p * 2] ?? 0) + (coords[q * 2] ?? 0)) / 2, ((coords[p * 2 + 1] ?? 0) + (coords[q * 2 + 1] ?? 0)) / 2);
    const index = coords.length / 2 - 1;
    midpoints.set(key, index);
    return index;
  };

  const output: number[] = [];
  const stack: number[] = [...triangles];

  while (stack.length > 0) {
    const c = stack.pop() ?? 0;
    const b = stack.pop() ?? 0;
    const a = stack.pop() ?? 0;
    const splitAB = span(a, b) > maxEdge;
    const splitBC = span(b, c) > maxEdge;
    const splitCA = span(c, a) > maxEdge;
    const splits = Number(splitAB) + Number(splitBC) + Number(splitCA);

    if (splits === 0) {
      output.push(a, b, c);
    } else if (splits === 3) {
      const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a);
      stack.push(a, ab, ca, ab, b, bc, ca, bc, c, ab, bc, ca);
    } else if (splits === 1) {
      if (splitAB) {
        const m = midpoint(a, b);
        stack.push(a, m, c, m, b, c);
      } else if (splitBC) {
        const m = midpoint(b, c);
        stack.push(a, b, m, a, m, c);
      } else {
        const m = midpoint(c, a);
        stack.push(a, b, m, m, b, c);
      }
    } else {
      const [p, q, r] = !splitCA ? [a, b, c] : !splitAB ? [b, c, a] : [c, a, b];
      const pq = midpoint(p, q), qr = midpoint(q, r);
      stack.push(pq, q, qr, p, pq, qr, p, qr, r);
    }
  }
  return output;
}
