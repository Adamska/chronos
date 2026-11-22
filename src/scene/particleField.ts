import { ConeGeometry, Float32BufferAttribute, Vector3 } from "three";
import type { GeoArc } from "@/types/chronicle";

const MAX_PARTICLES = 4000;
const TRAIL_STRETCH = 4.5;

export function createCometGeometry(): ConeGeometry {
  const cone = new ConeGeometry(0.55, 1, 6, 1);
  cone.rotateZ(Math.PI).translate(0, -0.5, 0);
  const positions = cone.getAttribute("position");
  const colors = new Float32Array(positions.count * 3);
  for (let i = 0; i < positions.count; i += 1) {
    const brightness = Math.max(0, 1 + positions.getY(i)) ** 1.6;
    colors.set([brightness, brightness, brightness], i * 3);
  }
  cone.setAttribute("color", new Float32BufferAttribute(colors, 3));
  return cone;
}

export function writeBasis(target: { [index: number]: number }, base: number, x: Vector3, y: Vector3, z: Vector3, origin: Vector3, scale: number): void {
  const stretch = scale * TRAIL_STRETCH;
  target[base] = x.x * scale;
  target[base + 1] = x.y * scale;
  target[base + 2] = x.z * scale;
  target[base + 3] = 0;
  target[base + 4] = y.x * stretch;
  target[base + 5] = y.y * stretch;
  target[base + 6] = y.z * stretch;
  target[base + 7] = 0;
  target[base + 8] = z.x * scale;
  target[base + 9] = z.y * scale;
  target[base + 10] = z.z * scale;
  target[base + 11] = 0;
  target[base + 12] = origin.x;
  target[base + 13] = origin.y;
  target[base + 14] = origin.z;
  target[base + 15] = 1;
}

export interface ParticleField {
  readonly count: number;
  readonly arcIndex: Uint16Array;
  readonly offset: Float32Array;
  readonly speed: Float32Array;
}

export function seedParticles(arcs: readonly GeoArc[], scale: number): ParticleField {
  const perArc = arcs.map((arc) => Math.round((28 + arc.intensity * 84) * scale));
  const budget = perArc.reduce((sum, value) => sum + value, 0);
  const fit = budget > MAX_PARTICLES ? MAX_PARTICLES / budget : 1;
  const counts = perArc.map((value) => Math.max(8, Math.floor(value * fit)));
  const count = counts.reduce((sum, value) => sum + value, 0);
  const arcIndex = new Uint16Array(count);
  const offset = new Float32Array(count);
  const speed = new Float32Array(count);
  let cursor = 0;
  counts.forEach((amount, index) => {
    for (let i = 0; i < amount; i += 1, cursor += 1) {
      arcIndex[cursor] = index;
      offset[cursor] = (i + Math.random() * 0.6) / amount;
      speed[cursor] = 0.05 + Math.random() * 0.035;
    }
  });
  return { count, arcIndex, offset, speed };
}

