"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { composePoster, downloadBlob } from "@/components/atlas/poster";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChronosStore } from "@/store/useChronosStore";

export function PosterCapture() {
  const nonce = useAtlasStore((state) => state.posterNonce);
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    if (nonce === 0) return;
    gl.render(scene, camera);
    const snapshot = gl.domElement.toDataURL("image/png");
    const { campaign, year, activeChapterId } = useChronosStore.getState();
    const caption = campaign?.chapters.find((chapter) => chapter.id === activeChapterId)?.caption ?? campaign?.subtitle ?? null;
    void composePoster(snapshot, campaign, year, caption).then((blob) => {
      if (blob) downloadBlob(blob, `chronos-${campaign?.id ?? "atlas"}-${Math.round(year)}.png`);
    });
  }, [nonce, gl, scene, camera]);

  return null;
}
