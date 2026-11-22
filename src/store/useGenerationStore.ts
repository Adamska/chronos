import { create } from "zustand";

export interface GenerationProgress {
  readonly title?: string;
  readonly events: readonly string[];
  readonly arcs: number;
}

interface GenerationState {
  progress: GenerationProgress | null;
  shares: Readonly<Record<string, string>>;
  setProgress: (progress: GenerationProgress | null) => void;
  rememberShare: (campaignId: string, shareId: string) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  progress: null,
  shares: {},
  setProgress: (progress) => set({ progress }),
  rememberShare: (campaignId, shareId) => set((state) => ({ shares: { ...state.shares, [campaignId]: shareId } })),
}));
