import { create } from "zustand";
import { storyOf } from "@/data/story";
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
export type AppMode = "story" | "atlas";

interface ChronosState {
  mode: AppMode;
  stepIndex: number;
  figureId: string | null;
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
}

interface ChronosActions {
  loadCampaign: (campaign: ChronicleCampaign) => void;
  setYear: (year: number) => void;
  setPlaying: (playing: boolean) => void;
  togglePlaying: () => void;
  toggleLayer: (layer: LayerKind) => void;
  select: (selection: Selection | null) => void;
  goToChapter: (chapterId: string, options?: ChapterOptions) => void;
  markChapter: (chapterId: string) => void;
  focusEvent: (eventId: string) => void;
  stepChapter: (direction: 1 | -1) => void;
  requestCamera: (keyframe: CameraKeyframe) => void;
  yieldCamera: () => void;
  setPaletteOpen: (open: boolean) => void;
  setMode: (mode: AppMode) => void;
  goToStep: (index: number) => void;
  stepStory: (direction: 1 | -1) => void;
  showFigure: (figureId: string | null) => void;
}

export interface ChapterOptions {
  readonly moveYear?: boolean;
  readonly openDossier?: boolean;
}

export type ChronosStore = ChronosState & ChronosActions;

const clampYear = (year: number): number => Math.min(TIMELINE_MAX_YEAR, Math.max(TIMELINE_MIN_YEAR, year));

const playbackSpeedFor = (campaign: ChronicleCampaign): number =>
  Math.max(2, (campaign.endYear - campaign.startYear) / 75);

let cameraNonce = 0;

function stepKeyframe(campaign: ChronicleCampaign, index: number): CameraKeyframe | null {
  const step = storyOf(campaign).steps[index];
  if (!step) return null;
  return { id: step.id, year: step.year, title: step.title, caption: step.narration, target: step.target, altitude: step.altitude, tilt: step.tilt };
}

export const useChronosStore = create<ChronosStore>()((set, get) => ({
  mode: "story",
  stepIndex: 0,
  figureId: null,
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

  loadCampaign: (campaign) => {
    const opening = stepKeyframe(campaign, 0) ?? campaign.chapters[0];
    cameraNonce += 1;
    set((state) => ({
      campaign,
      mode: "story",
      stepIndex: 0,
      figureId: null,
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
    const { campaign, year, mode, stepIndex } = get();
    if (playing && mode === "story" && campaign && stepIndex >= storyOf(campaign).steps.length - 1) get().goToStep(0);
    if (playing && mode === "atlas" && year >= TIMELINE_MAX_YEAR - 1) set({ year: TIMELINE_MIN_YEAR });
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
      selection: chapter.eventId && options?.openDossier !== false ? { kind: "event", id: chapter.eventId } : state.selection,
    }));
  },

  focusEvent: (eventId) => {
    const event = get().campaign?.events.find((entry) => entry.id === eventId);
    if (!event) return;
    cameraNonce += 1;
    const keyframe: CameraKeyframe = {
      id: `focus-${event.id}`,
      year: event.year,
      title: event.title,
      caption: event.summary,
      target: event.coordinates,
      altitude: 1.05,
      tilt: 24,
      eventId: event.id,
    };
    set({ year: event.year, selection: { kind: "event", id: event.id }, cameraMode: "directed", cameraRequest: { keyframe, nonce: cameraNonce } });
  },

  markChapter: (chapterId) => {
    if (get().activeChapterId !== chapterId) set({ activeChapterId: chapterId });
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

  setMode: (mode) => {
    if (get().mode === mode) return;
    set({ mode, isPlaying: false, selection: null, figureId: null, yearsPerSecond: mode === "atlas" ? 40 : get().yearsPerSecond });
    if (mode === "story") get().goToStep(get().stepIndex);
  },

  goToStep: (index) => {
    const campaign = get().campaign;
    const steps = campaign ? storyOf(campaign).steps : [];
    const clamped = Math.min(steps.length - 1, Math.max(0, index));
    const keyframe = campaign ? stepKeyframe(campaign, clamped) : null;
    if (!keyframe) return;
    cameraNonce += 1;
    set({
      mode: "story",
      stepIndex: clamped,
      selection: null,
      cameraMode: "directed",
      cameraRequest: { keyframe, nonce: cameraNonce },
    });
  },

  stepStory: (direction) => get().goToStep(get().stepIndex + direction),

  showFigure: (figureId) => set({ figureId: get().figureId === figureId ? null : figureId }),
}));
