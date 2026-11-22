import type { Topology } from "topojson-specification";
import { type BorderStyle, activeKey, activePolities, rasterizeBorders } from "@/geo/borderRaster";

interface BorderRequest {
  readonly id: number;
  readonly url: string;
  readonly year: number;
  readonly width: number;
  readonly height: number;
  readonly previousKey: string;
  readonly style: BorderStyle;
}

interface WorkerScope {
  onmessage: ((event: MessageEvent<BorderRequest>) => void) | null;
  postMessage(message: unknown, transfer?: Transferable[]): void;
}

const scope = self as unknown as WorkerScope;
const bins = new Map<string, Promise<Topology>>();

function loadBin(url: string): Promise<Topology> {
  const cached = bins.get(url) ?? fetch(url).then((response) => response.json() as Promise<Topology>);
  bins.set(url, cached);
  return cached;
}

scope.onmessage = (event) => {
  const { id, url, year, width, height, previousKey, style } = event.data;
  void loadBin(url)
    .then((topology) => {
      const polities = activePolities(topology, year);
      if (activeKey(polities) === previousKey) {
        scope.postMessage({ id, unchanged: true });
        return;
      }
      const context = new OffscreenCanvas(width, height).getContext("2d", { willReadFrequently: true });
      if (!context) throw new Error("No 2D context in worker");
      const raster = rasterizeBorders(polities, context, width, height, style);
      scope.postMessage({ id, raster }, [raster.pixels.buffer]);
    })
    .catch((error: unknown) => scope.postMessage({ id, error: String(error) }));
};
