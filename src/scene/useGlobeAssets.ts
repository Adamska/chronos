"use client";

import { useEffect, useState } from "react";
import type { BufferGeometry, Texture } from "three";
import { createShelfTexture } from "@/geo/bathymetry";
import { loadLandPayload } from "@/geo/landClient";
import { createReliefTexture, loadReliefGrid } from "@/geo/relief";

export interface LandLayers {
  readonly land: readonly BufferGeometry[];
  readonly coastline: BufferGeometry;
  readonly barriers: readonly BufferGeometry[];
  readonly shelf: Texture;
}

export function useLandLayers(): LandLayers | null {
  const [layers, setLayers] = useState<LandLayers | null>(null);

  useEffect(() => {
    let cancelled = false;
    let built: LandLayers | null = null;

    void loadLandPayload().then((payload) => {
      if (cancelled) return;
      built = {
        land: payload.land,
        barriers: payload.barriers,
        coastline: payload.coastline,
        shelf: createShelfTexture(payload.shelf),
      };
      setLayers(built);
    });

    return () => {
      cancelled = true;
      if (built) {
        built.land.forEach((geometry) => geometry.dispose());
        built.coastline.dispose();
        built.barriers.forEach((geometry) => geometry.dispose());
        built.shelf.dispose();
      }
    };
  }, []);

  return layers;
}

export function useReliefTexture(): Texture | null {
  const [texture, setTexture] = useState<Texture | null>(null);
  useEffect(() => {
    let created: Texture | null = null;
    let live = true;
    void loadReliefGrid().then((grid) => {
      if (!live || !grid) return;
      created = createReliefTexture(grid);
      setTexture(created);
    });
    return () => {
      live = false;
      created?.dispose();
    };
  }, []);
  return texture;
}

