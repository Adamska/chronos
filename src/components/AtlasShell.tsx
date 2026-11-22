"use client";

import dynamic from "next/dynamic";

const AtlasCanvas = dynamic(() => import("@/scene/AtlasCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="eyebrow animate-pulse">Triangulating the world</p>
    </div>
  ),
});

export function AtlasShell() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-abyss">
      <AtlasCanvas />
    </main>
  );
}
