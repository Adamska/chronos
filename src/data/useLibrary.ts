"use client";

import { useEffect, useState } from "react";
import { loadLibrary } from "@/data/catalog";
import type { ChronicleCampaign } from "@/types/chronicle";

export function useLibrary(enabled = true): readonly ChronicleCampaign[] | null {
  const [library, setLibrary] = useState<readonly ChronicleCampaign[] | null>(null);
  useEffect(() => {
    if (!enabled) return;
    let live = true;
    void loadLibrary().then((loaded) => {
      if (live) setLibrary(loaded);
    });
    return () => {
      live = false;
    };
  }, [enabled]);
  return library;
}
