import { BufferGeometry, Color, Float32BufferAttribute, TubeGeometry } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { buildRouteCurve } from "@/geo/sphericalMath";
import { ARC_KIND_COLORS } from "@/scene/temporal";
import type { GeoArc } from "@/types/chronicle";

export const MAX_ARCS = 64;
export const ARC_SAMPLES = 192;
export const ARC_SURFACE_RADIUS = 1.0055;

export interface ArcBundle {
  readonly tubes: BufferGeometry;
  readonly pick: BufferGeometry;
  readonly samples: readonly Float32Array[];
  readonly lengths: readonly number[];
  readonly colors: readonly Color[];
}

function tagGeometry(geometry: BufferGeometry, index: number, color: Color, length: number): BufferGeometry {
  const count = geometry.getAttribute("position").count;
  const arcIndex = new Float32Array(count).fill(index);
  const arcLength = new Float32Array(count).fill(length);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  geometry.setAttribute("aArc", new Float32BufferAttribute(arcIndex, 1));
  geometry.setAttribute("aLength", new Float32BufferAttribute(arcLength, 1));
  geometry.setAttribute("aColor", new Float32BufferAttribute(colors, 3));
  return geometry;
}

export function buildArcBundle(arcs: readonly GeoArc[]): ArcBundle | null {
  const usable = arcs.slice(0, MAX_ARCS).filter((arc) => arc.path.length >= 2);
  if (usable.length === 0) return null;

  const tubeParts: BufferGeometry[] = [];
  const pickParts: BufferGeometry[] = [];
  const samples: Float32Array[] = [];
  const lengths: number[] = [];
  const colors: Color[] = [];

  usable.forEach((arc, index) => {
    const curve = buildRouteCurve(arc.path, ARC_SURFACE_RADIUS, 0.75 + arc.intensity * 0.35);
    const length = curve.getLength();
    const color = new Color(ARC_KIND_COLORS[arc.kind]);
    const segments = Math.round(Math.min(260, Math.max(48, length * 110)));
    const radius = 0.0011 + arc.intensity * 0.0011;

    tubeParts.push(tagGeometry(new TubeGeometry(curve, segments, radius, 5, false), index, color, length));
    pickParts.push(tagGeometry(new TubeGeometry(curve, Math.max(24, Math.round(segments / 4)), 0.011, 4, false), index, color, length));

    const table = new Float32Array(ARC_SAMPLES * 3);
    curve.getSpacedPoints(ARC_SAMPLES - 1).forEach((point, sample) => {
      table[sample * 3] = point.x;
      table[sample * 3 + 1] = point.y;
      table[sample * 3 + 2] = point.z;
    });
    samples.push(table);
    lengths.push(length);
    colors.push(color);
  });

  const tubes = mergeGeometries(tubeParts, false);
  const pick = mergeGeometries(pickParts, false);
  tubeParts.forEach((part) => part.dispose());
  pickParts.forEach((part) => part.dispose());
  if (!tubes || !pick) return null;
  return { tubes, pick, samples, lengths, colors };
}
