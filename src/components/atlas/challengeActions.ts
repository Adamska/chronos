import { formatKm } from "@/components/dossier/geoInsights";
import { DIFFICULTY_SCALE_KM, type ChallengeResult, type Difficulty } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign, HistoricalEvent } from "@/types/chronicle";

const BEST_KEY = "chronos.challenge.best.";

export function readBest(id: string, difficulty: Difficulty): number {
  try {
    return Number(window.localStorage.getItem(`${BEST_KEY}${id}.${difficulty}`) ?? 0);
  } catch {
    return 0;
  }
}

export function writeBest(id: string, difficulty: Difficulty, score: number): void {
  try {
    window.localStorage.setItem(`${BEST_KEY}${id}.${difficulty}`, String(score));
  } catch {
    return;
  }
}

export function frameWholeCampaign(campaign: ChronicleCampaign): void {
  const lon = campaign.events.reduce((sum, event) => sum + event.coordinates[0], 0) / Math.max(1, campaign.events.length);
  const lat = campaign.events.reduce((sum, event) => sum + event.coordinates[1], 0) / Math.max(1, campaign.events.length);
  useChronosStore.getState().requestCamera({ id: "challenge-wide", year: campaign.startYear, title: "", caption: "", target: [lon, lat], altitude: 2.3, tilt: 0 });
}

export function frameRegionHint(event: HistoricalEvent): void {
  const bearing = (event.id.length * 47) % 360;
  const offsetDegrees = 6;
  const lon = event.coordinates[0] + Math.cos((bearing * Math.PI) / 180) * offsetDegrees;
  const lat = Math.max(-80, Math.min(80, event.coordinates[1] + Math.sin((bearing * Math.PI) / 180) * offsetDegrees * 0.6));
  useChronosStore.getState().requestCamera({ id: `hint-${event.id}`, year: event.year, title: "", caption: "", target: [lon, lat], altitude: 1.35, tilt: 10 });
}

export function frameAnswer(result: ChallengeResult): void {
  useChronosStore.getState().requestCamera({
    id: "challenge-answer",
    year: result.event.year,
    title: "",
    caption: "",
    target: result.event.coordinates,
    altitude: 1.2,
    tilt: 18,
  });
}

export function resultText(campaign: ChronicleCampaign, difficulty: Difficulty, results: readonly ChallengeResult[]): string {
  const total = results.reduce((sum, result) => sum + result.points, 0);
  const url = `${window.location.origin}/?c=${campaign.id}&challenge=${difficulty}`;
  const lines = results.map((result, index) => `${index + 1}. ${result.event.title}: ${formatKm(result.distanceKm)} off, ${result.points} points`);
  return [`Chronos · Why here? · ${campaign.title} (${difficulty}, ${DIFFICULTY_SCALE_KM[difficulty]} km scale)`, `${total} / ${results.length * 1000}`, ...lines, url].join("\n");
}
