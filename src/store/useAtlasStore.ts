import { create } from "zustand";
import type { Season } from "@/data/environment";
import { useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

export type Lens = "none" | "travel" | "known";
export type Panel = "none" | "meanwhile" | "index" | "settings" | "ask" | "teacher";

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
  showPolitical: boolean;
  season: Season;
  hover: HoverPoint | null;
  reducedMotion: boolean;
  narration: boolean;
  touring: boolean;
  challengeActive: boolean;
  contextLost: boolean;
  landingOpen: boolean;
  compareYear: number | null;
  posterNonce: number;
  ambientSound: boolean;
  setLens: (lens: Lens) => void;
  togglePanel: (panel: Panel) => void;
  setTravelOrigin: (origin: TravelOrigin | null) => void;
  setKnownPerspective: (id: string) => void;
  toggleEnvironment: () => void;
  toggleCities: () => void;
  togglePolitical: () => void;
  setSeason: (season: Season) => void;
  setHover: (hover: HoverPoint | null) => void;
  setReducedMotion: (value: boolean) => void;
  setNarration: (value: boolean) => void;
  setTouring: (value: boolean) => void;
  setChallengeActive: (value: boolean) => void;
  setContextLost: (value: boolean) => void;
  setLandingOpen: (value: boolean) => void;
  toggleCompare: () => void;
  setCompareYear: (year: number | null) => void;
  requestPoster: () => void;
  setAmbientSound: (value: boolean) => void;
}

export const useAtlasStore = create<AtlasState>()((set, get) => ({
  lens: "none",
  panel: "none",
  travelOrigin: null,
  knownPerspective: "latin-europe",
  showEnvironment: false,
  showCities: false,
  showPolitical: true,
  season: "summer",
  hover: null,
  reducedMotion: prefersReducedMotion(),
  narration: false,
  touring: false,
  challengeActive: false,
  contextLost: false,
  landingOpen: false,
  compareYear: null,
  posterNonce: 0,
  ambientSound: false,
  setLens: (lens) => set({ lens: get().lens === lens ? "none" : lens }),
  togglePanel: (panel) => set({ panel: get().panel === panel ? "none" : panel }),
  setTravelOrigin: (travelOrigin) => set({ travelOrigin }),
  setKnownPerspective: (knownPerspective) => set({ knownPerspective }),
  toggleEnvironment: () => set({ showEnvironment: !get().showEnvironment }),
  toggleCities: () => set({ showCities: !get().showCities }),
  togglePolitical: () => set({ showPolitical: !get().showPolitical }),
  setSeason: (season) => set({ season }),
  setHover: (hover) => set({ hover }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setNarration: (narration) => set({ narration }),
  setTouring: (touring) => set({ touring }),
  setChallengeActive: (challengeActive) => set({ challengeActive, lens: "none" }),
  setContextLost: (contextLost) => set({ contextLost }),
  setLandingOpen: (landingOpen) => set({ landingOpen }),
  toggleCompare: () => {
    if (get().compareYear !== null) {
      set({ compareYear: null });
      return;
    }
    const { year, campaign } = useChronosStore.getState();
    const span = campaign ? campaign.endYear - campaign.startYear : 400;
    set({ compareYear: Math.round(year - Math.max(50, span * 0.25)) });
  },
  setCompareYear: (compareYear) => set({ compareYear }),
  requestPoster: () => set({ posterNonce: get().posterNonce + 1 }),
  setAmbientSound: (ambientSound) => set({ ambientSound }),
}));
