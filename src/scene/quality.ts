import { create } from "zustand";

export type QualityTier = "high" | "balanced" | "low";

export interface QualitySettings {
  readonly dpr: readonly [number, number];
  readonly bloom: boolean;
  readonly grain: boolean;
  readonly stars: number;
  readonly particleScale: number;
  readonly smaa: boolean;
}

export const QUALITY_SETTINGS: Record<QualityTier, QualitySettings> = {
  high: { dpr: [1, 2], bloom: true, grain: true, stars: 2600, particleScale: 1, smaa: true },
  balanced: { dpr: [1, 1.5], bloom: true, grain: false, stars: 1500, particleScale: 0.75, smaa: true },
  low: { dpr: [0.85, 1], bloom: false, grain: false, stars: 700, particleScale: 0.45, smaa: false },
};

function detectInitialTier(): QualityTier {
  if (typeof navigator === "undefined") return "balanced";
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const coarsePointer = typeof matchMedia !== "undefined" && matchMedia("(pointer: coarse)").matches;
  if (coarsePointer || cores <= 4 || memory <= 4) return "balanced";
  return "high";
}

interface QualityState {
  tier: QualityTier;
  pinned: boolean;
  pin: (tier: QualityTier | null) => void;
}

export const useQualityStore = create<QualityState>()((set) => ({
  tier: detectInitialTier(),
  pinned: false,
  pin: (tier) => set(tier ? { tier, pinned: true } : { tier: detectInitialTier(), pinned: false }),
}));

export const useQuality = (): QualitySettings => QUALITY_SETTINGS[useQualityStore((state) => state.tier)];
