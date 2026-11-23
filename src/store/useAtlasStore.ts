import { create } from "zustand";
import type { Season } from "@/data/environment";
import { type AppMode, useChronosStore } from "@/store/useChronosStore";
import type { LonLat } from "@/types/chronicle";

export type Lens = "none" | "travel" | "known";
export type Panel = "none" | "settings";
export type BaseMap = "countries" | "religions" | "languages" | "population" | "none";
export type Overlay = "events" | "trade" | "cities" | "physical";

export const BASE_MAPS: readonly BaseMap[] = ["countries", "religions", "languages", "population", "none"];
export const OVERLAYS: readonly Overlay[] = ["events", "trade", "cities", "physical"];

export interface TravelOrigin {
  readonly coordinates: LonLat;
  readonly label: string;
}

export interface HoverPoint {
  readonly coordinates: LonLat;
  readonly clientX: number;
  readonly clientY: number;
}

export interface PlaceQuery {
  readonly coordinates: LonLat;
  readonly nonce: number;
}

const prefersReducedMotion = (): boolean =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

interface AtlasState {
  baseMap: BaseMap;
  overlays: Record<Overlay, boolean>;
  storyBorders: boolean;
  lens: Lens;
  panel: Panel;
  place: PlaceQuery | null;
  worldEventId: string | null;
  travelOrigin: TravelOrigin | null;
  knownPerspective: string;
  season: Season;
  hover: HoverPoint | null;
  reducedMotion: boolean;
  narration: boolean;
  contextLost: boolean;
  landingOpen: boolean;
  compareYear: number | null;
  posterNonce: number;
  ambientSound: boolean;
  setBaseMap: (baseMap: BaseMap) => void;
  toggleOverlay: (overlay: Overlay) => void;
  toggleStoryBorders: () => void;
  setLens: (lens: Lens) => void;
  togglePanel: (panel: Panel) => void;
  queryPlace: (coordinates: LonLat | null) => void;
  showWorldEvent: (id: string | null) => void;
  setTravelOrigin: (origin: TravelOrigin | null) => void;
  setKnownPerspective: (id: string) => void;
  setSeason: (season: Season) => void;
  setHover: (hover: HoverPoint | null) => void;
  setReducedMotion: (value: boolean) => void;
  setNarration: (value: boolean) => void;
  setContextLost: (value: boolean) => void;
  setLandingOpen: (value: boolean) => void;
  toggleCompare: () => void;
  setCompareYear: (year: number | null) => void;
  requestPoster: () => void;
  setAmbientSound: (value: boolean) => void;
}

let placeNonce = 0;

export const useAtlasStore = create<AtlasState>()((set, get) => ({
  baseMap: "countries",
  overlays: { events: true, trade: false, cities: false, physical: false },
  storyBorders: false,
  lens: "none",
  panel: "none",
  place: null,
  worldEventId: null,
  travelOrigin: null,
  knownPerspective: "latin-europe",
  season: "summer",
  hover: null,
  reducedMotion: prefersReducedMotion(),
  narration: false,
  contextLost: false,
  landingOpen: false,
  compareYear: null,
  posterNonce: 0,
  ambientSound: false,
  setBaseMap: (baseMap) => set({ baseMap }),
  toggleOverlay: (overlay) => set({ overlays: { ...get().overlays, [overlay]: !get().overlays[overlay] } }),
  toggleStoryBorders: () => set({ storyBorders: !get().storyBorders }),
  setLens: (lens) => set({ lens: get().lens === lens ? "none" : lens }),
  togglePanel: (panel) => set({ panel: get().panel === panel ? "none" : panel }),
  queryPlace: (coordinates) => {
    placeNonce += 1;
    set({ place: coordinates ? { coordinates, nonce: placeNonce } : null, worldEventId: null });
  },
  showWorldEvent: (worldEventId) => set({ worldEventId, place: null }),
  setTravelOrigin: (travelOrigin) => set({ travelOrigin }),
  setKnownPerspective: (knownPerspective) => set({ knownPerspective }),
  setSeason: (season) => set({ season }),
  setHover: (hover) => set({ hover }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
  setNarration: (narration) => set({ narration }),
  setContextLost: (contextLost) => set({ contextLost }),
  setLandingOpen: (landingOpen) => set({ landingOpen }),
  toggleCompare: () => {
    if (get().compareYear !== null) {
      set({ compareYear: null });
      return;
    }
    set({ compareYear: Math.round(useChronosStore.getState().year - 200) });
  },
  setCompareYear: (compareYear) => set({ compareYear }),
  requestPoster: () => set({ posterNonce: get().posterNonce + 1 }),
  setAmbientSound: (ambientSound) => set({ ambientSound }),
}));

export function politicalVisible(mode: AppMode, state: Pick<AtlasState, "baseMap" | "storyBorders"> = useAtlasStore.getState()): boolean {
  return mode === "atlas" ? state.baseMap === "countries" : state.storyBorders;
}

export function overlayVisible(overlay: Overlay): boolean {
  return useChronosStore.getState().mode === "atlas" && useAtlasStore.getState().overlays[overlay];
}
