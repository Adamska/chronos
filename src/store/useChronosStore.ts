import { create } from "zustand";
import type { CameraKeyframe, ChronicleCampaign, LayerKind } from "@/types/chronicle";
import { TIMELINE_MAX_YEAR, TIMELINE_MIN_YEAR } from "@/types/chronicle";

export type Selection =
  | { readonly kind: "event"; readonly id: string }
  | { readonly kind: "arc"; readonly id: string };

export interface CameraRequest {
  readonly keyframe: CameraKeyframe;
  readonly nonce: number;
}

export type CameraMode = "directed" | "free";
export type ChronicleStatus = "idle" | "loading" | "error";

interface ChronosState {
  campaign: ChronicleCampaign | null;
  campaignNonce: number;
  year: number;
  isPlaying: boolean;
  yearsPerSecond: number;
  layers: Record<LayerKind, boolean>;
  selection: Selection | null;
  activeChapterId: string | null;
  cameraRequest: CameraRequest | null;
  cameraMode: CameraMode;
  paletteOpen: boolean;
  chronicleStatus: ChronicleStatus;
  chronicleMessage: string | null;
}

interface ChronosActions {
  loadCampaign: (campaign: ChronicleCampaign) => void;
  setYear: (year: number) => void;
  setPlaying: (playing: boolean) => void;
  togglePlaying: () => void;
  toggleLayer: (layer: LayerKind) => void;
  select: (selection: Selection | null) => void;
  goToChapter: (chapterId: string, options?: { readonly moveYear?: boolean }) => void;
  stepChapter: (direction: 1 | -1) => void;
  requestCamera: (keyframe: CameraKeyframe) => void;
  yieldCamera: () => void;
  setPaletteOpen: (open: boolean) => void;
  setChronicleStatus: (status: ChronicleStatus, message?: string | null) => void;
}

export type ChronosStore = ChronosState & ChronosActions;

const clampYear = (year: number): number => Math.min(TIMELINE_MAX_YEAR, Math.max(TIMELINE_MIN_YEAR, year));

const playbackSpeedFor = (campaign: ChronicleCampaign): number =>
  Math.max(2, (campaign.endYear - campaign.startYear) / 75);

let cameraNonce = 0;

export const useChronosStore = create<ChronosStore>()((set, get) => ({
  campaign: null,
  campaignNonce: 0,
  year: 1000,
  isPlaying: false,
  yearsPerSecond: 12,
  layers: { borders: true, trade: true, conflict: true, science: true },
  selection: null,
  activeChapterId: null,
  cameraRequest: null,
  cameraMode: "directed",
  paletteOpen: false,
  chronicleStatus: "idle",
  chronicleMessage: null,

  loadCampaign: (campaign) => {
    const opening = campaign.chapters[0];
    cameraNonce += 1;
    set((state) => ({
      campaign,
      campaignNonce: state.campaignNonce + 1,
      year: opening?.year ?? campaign.startYear,
      isPlaying: false,
      yearsPerSecond: playbackSpeedFor(campaign),
      selection: null,
      activeChapterId: opening?.id ?? null,
      cameraMode: "directed",
      cameraRequest: opening ? { keyframe: opening, nonce: cameraNonce } : null,
      paletteOpen: false,
    }));
  },

  setYear: (year) => set({ year: clampYear(year) }),

  setPlaying: (playing) => {
    const { campaign, year } = get();
    if (playing && campaign && year >= campaign.endYear) {
      set({ year: campaign.startYear, isPlaying: true, cameraMode: "directed" });
      return;
    }
    set(playing ? { isPlaying: true, cameraMode: "directed" } : { isPlaying: false });
  },

  togglePlaying: () => get().setPlaying(!get().isPlaying),

  toggleLayer: (layer) => set((state) => ({ layers: { ...state.layers, [layer]: !state.layers[layer] } })),

  select: (selection) => set({ selection }),

  goToChapter: (chapterId, options) => {
    const chapter = get().campaign?.chapters.find((entry) => entry.id === chapterId);
    if (!chapter) return;
    cameraNonce += 1;
    set((state) => ({
      activeChapterId: chapter.id,
      year: options?.moveYear === false ? state.year : chapter.year,
      cameraMode: "directed",
      cameraRequest: { keyframe: chapter, nonce: cameraNonce },
      selection: chapter.eventId ? { kind: "event", id: chapter.eventId } : state.selection,
    }));
  },

  stepChapter: (direction) => {
    const { campaign, activeChapterId } = get();
    if (!campaign || campaign.chapters.length === 0) return;
    const index = campaign.chapters.findIndex((chapter) => chapter.id === activeChapterId);
    const next = campaign.chapters[Math.min(campaign.chapters.length - 1, Math.max(0, index + direction))];
    if (next) get().goToChapter(next.id);
  },

  requestCamera: (keyframe) => {
    cameraNonce += 1;
    set({ cameraMode: "directed", cameraRequest: { keyframe, nonce: cameraNonce } });
  },

  yieldCamera: () => {
    if (get().cameraMode !== "free") set({ cameraMode: "free" });
  },

  setPaletteOpen: (open) => set({ paletteOpen: open }),

  setChronicleStatus: (status, message = null) => set({ chronicleStatus: status, chronicleMessage: message }),
}));
