"use client";

import { rasterizeRegions } from "@/geo/regionRaster";
import { RasterOverlay } from "@/scene/RasterOverlay";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

const REGION_WIDTH = 512;
const produceReligions = (year: number, _width: number, previousKey: string) => rasterizeRegions("religion", year, REGION_WIDTH, previousKey);
const produceLanguages = (year: number, _width: number, previousKey: string) => rasterizeRegions("language", year, REGION_WIDTH, previousKey);

export function RegionLayer() {
  const atlasMode = useChronosStore((state) => state.mode === "atlas");
  const baseMap = useAtlasStore((state) => state.baseMap);
  return (
    <>
      <RasterOverlay visible={atlasMode && baseMap === "religions"} produce={produceReligions} radius={1.0057} />
      <RasterOverlay visible={atlasMode && baseMap === "languages"} produce={produceLanguages} radius={1.0057} />
    </>
  );
}
