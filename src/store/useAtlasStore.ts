import { create } from "zustand";
import type { Season } from "@/data/environment";
import type { LonLat } from "@/types/chronicle";

export type Lens = "none" | "travel" | "known";
export type Panel = "none" | "meanwhile" | "index" | "settings" | "ask";

export interface TravelOrigin {
  readonly coordinates: LonLat;
  readonly label: string;
}

export interface HoverPoint {
  readonly coordinates: LonLat;
  readonly clientX: number;
  readonly clientY: number;
}

const prefersReducedMotion = (): boolean =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

interface AtlasState {
  lens: Lens;
  panel: Panel;
  travelOrigin: TravelOrigin | null;
  knownPerspective: string;
  showEnvironment: boolean;
  showCities: boolean;
  season: Season;
  hover: HoverPoint | null;
  reducedMotion: boolean;
  narration: boolean;
  touring: boolean;
  challengeActive: boolean;
  setLens: (lens: Lens) => void;
  togglePanel: (panel: Panel) => void;
  setTravelOrigin: (origin: TravelOrigin | null) => void;
  setKnownPerspective: (id: string) => void;
  toggleEnvironment: () => void;
  toggleCities: () => void;
  setSeason: (season: Season) => void;
  setHover: (hover: HoverPoint | null) => void;
  setReducedMotion: (value: boolean) => void;
  setNarration: (value: boolean) => void;
  setTouring: (value: boolean) => void;
  setChallengeActive: (value: boolean) => void;
}

export const useAtlasStore = create<AtlasState>()((set, get) => ({
  lens: "none",
  panel: "none",
  travelOrigin: null,
  knownPerspective: "latin-europe",
  showEnvironment: false,
  showCities: false,
  season: "summer",
  hover: null,
  reducedMotion: prefersReducedMotion(),
  narration: false,
  touring: false,
  challengeActive: false,
  setLens: (lens) => set({ lens: get().lens === lens ? "none" : lens }),
  togglePanel: (panel) => set({ panel: get().panel === panel ? "none" : panel }),
  setTravelOrigin: (travelOrigin) => set({ travelOrigin }),
  setKnownPerspective: (knownPerspective) => set({ knownPerspective }),
  toggleEnvironment: () => set({ showEnvironment: !get().showEnvironment }),
  toggleCities: () => set({ showCities: !get().showCities }),
  setSeason: (season) => set({ season }),
  setHover: (hover) => set({ hover }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setNarration: (narration) => set({ narration }),
  setTouring: (touring) => set({ touring }),
  setChallengeActive: (challengeActive) => set({ challengeActive, lens: "none" }),
}));
