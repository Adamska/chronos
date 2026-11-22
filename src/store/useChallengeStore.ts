import { create } from "zustand";
import { angularDistance } from "@/geo/sphericalMath";
import type { ChronicleCampaign, HistoricalEvent, LonLat } from "@/types/chronicle";

export type ChallengePhase = "idle" | "question" | "reveal" | "done";
export type Difficulty = "easy" | "normal" | "hard";

export const DIFFICULTY_SCALE_KM: Record<Difficulty, number> = { easy: 2000, normal: 1200, hard: 700 };

export interface ChallengeResult {
  readonly event: HistoricalEvent;
  readonly guess: LonLat;
  readonly distanceKm: number;
  readonly points: number;
}

const ROUNDS = 5;
const EARTH_RADIUS_KM = 6371;

interface ChallengeState {
  phase: ChallengePhase;
  queue: readonly HistoricalEvent[];
  round: number;
  results: readonly ChallengeResult[];
  campaignId: string | null;
  difficulty: Difficulty;
  hints: number;
  start: (campaign: ChronicleCampaign, difficulty?: Difficulty) => void;
  useHint: () => void;
  guess: (point: LonLat) => ChallengeResult | null;
  next: () => void;
  reset: () => void;
}

function pickRounds(campaign: ChronicleCampaign): HistoricalEvent[] {
  const pool = campaign.events.filter((event) => event.significance >= 3);
  const shuffled = [...(pool.length >= ROUNDS ? pool : campaign.events)];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j] as HistoricalEvent, shuffled[i] as HistoricalEvent];
  }
  return shuffled.slice(0, ROUNDS).sort((a, b) => a.year - b.year);
}

export const useChallengeStore = create<ChallengeState>()((set, get) => ({
  phase: "idle",
  queue: [],
  round: 0,
  results: [],
  campaignId: null,
  difficulty: "normal",
  hints: 0,
  start: (campaign, difficulty) =>
    set((state) => ({ phase: "question", queue: pickRounds(campaign), round: 0, results: [], hints: 0, campaignId: campaign.id, difficulty: difficulty ?? state.difficulty })),
  useHint: () => set((state) => ({ hints: Math.min(2, state.hints + 1) })),
  guess: (point) => {
    const { phase, queue, round, results } = get();
    const event = queue[round];
    if (phase !== "question" || !event) return null;
    const distanceKm = angularDistance(point, event.coordinates) * EARTH_RADIUS_KM;
    const result = { event, guess: point, distanceKm, points: Math.round(1000 * Math.exp(-distanceKm / DIFFICULTY_SCALE_KM[get().difficulty])) };
    set({ phase: "reveal", results: [...results, result] });
    return result;
  },
  next: () => {
    const { round, queue } = get();
    set(round + 1 >= queue.length ? { phase: "done" } : { phase: "question", round: round + 1, hints: 0 });
  },
  reset: () => set({ phase: "idle", queue: [], round: 0, results: [], hints: 0, campaignId: null }),
}));

export const isConcealed = (): boolean => useChallengeStore.getState().phase === "question";
