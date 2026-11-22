import { geoCircle, geoEquirectangular, geoPath } from "d3-geo";
import type { KnownSnapshot } from "@/data/knownWorld";

export const KNOWN_WIDTH = 512;
export const KNOWN_HEIGHT = 256;

export function rasterizeKnownWorld(snapshot: KnownSnapshot): Uint8Array {
  const canvas = typeof OffscreenCanvas !== "undefined" ? new OffscreenCanvas(KNOWN_WIDTH, KNOWN_HEIGHT) : document.createElement("canvas");
  canvas.width = KNOWN_WIDTH;
  canvas.height = KNOWN_HEIGHT;
  const context = (canvas as OffscreenCanvas).getContext("2d", { willReadFrequently: true });
  const field = new Uint8Array(KNOWN_WIDTH * KNOWN_HEIGHT);
  if (!context) return field;

  const projection = geoEquirectangular()
    .scale(KNOWN_WIDTH / (2 * Math.PI))
    .translate([KNOWN_WIDTH / 2, KNOWN_HEIGHT / 2]);
  const path = geoPath(projection, context);
  context.filter = "blur(5px)";
  context.fillStyle = "#ffffff";
  for (const [lon, lat, radius] of snapshot.regions) {
    context.beginPath();
    path(geoCircle().center([lon, lat]).radius(radius).precision(3)());
    context.fill();
  }

  const pixels = context.getImageData(0, 0, KNOWN_WIDTH, KNOWN_HEIGHT).data;
  for (let y = 0; y < KNOWN_HEIGHT; y += 1) {
    const target = (KNOWN_HEIGHT - 1 - y) * KNOWN_WIDTH;
    for (let x = 0; x < KNOWN_WIDTH; x += 1) field[target + x] = pixels[(y * KNOWN_WIDTH + x) * 4] ?? 0;
  }
  return field;
}
