import { create } from "zustand";
import type { PolityLabel } from "@/geo/borderRaster";

interface PolityState {
  labels: readonly PolityLabel[];
  setLabels: (labels: readonly PolityLabel[]) => void;
}

export const usePolityStore = create<PolityState>()((set) => ({
  labels: [],
  setLabels: (labels) => set({ labels }),
}));
