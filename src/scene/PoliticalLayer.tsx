"use client";

import { renderBorders } from "@/geo/borderClient";
import type { BorderRaster } from "@/geo/borderRaster";
import { type RasterFrame, RasterOverlay } from "@/scene/RasterOverlay";
import { politicalVisible, useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";
import { usePolityStore } from "@/store/usePolityStore";

const produceBorders = (year: number, width: number, previousKey: string) => renderBorders(year, width, width / 2, previousKey);
const showLabels = (frame: RasterFrame) => usePolityStore.getState().setLabels((frame as BorderRaster).labels ?? []);
const clearLabels = () => usePolityStore.getState().setLabels([]);

export function PoliticalLayer() {
  const mode = useChronosStore((state) => state.mode);
  const visible = useAtlasStore((state) => politicalVisible(mode, state));
  return <RasterOverlay visible={visible} produce={produceBorders} onFrame={showLabels} onHide={clearLabels} />;
}
