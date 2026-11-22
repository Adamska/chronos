"use client";

import { useEffect, useState } from "react";
import { formatKm } from "@/components/dossier/geoInsights";
import { formatYear } from "@/data/campaigns/registry";
import { registerGuessHandler } from "@/scene/globeInteraction";
import { useAtlasStore } from "@/store/useAtlasStore";
import { useChallengeStore } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign } from "@/types/chronicle";
import { LAYER_LABELS } from "@/types/chronicle";

const BEST_KEY = "chronos.challenge.best.";

function readBest(id: string): number {
  try {
    return Number(window.localStorage.getItem(BEST_KEY + id) ?? 0);
  } catch {
    return 0;
  }
}

function writeBest(id: string, score: number): void {
  try {
    window.localStorage.setItem(BEST_KEY + id, String(score));
  } catch {
    return;
  }
}

function wideView(campaign: ChronicleCampaign) {
  const lon = campaign.events.reduce((sum, event) => sum + event.coordinates[0], 0) / Math.max(1, campaign.events.length);
  const lat = campaign.events.reduce((sum, event) => sum + event.coordinates[1], 0) / Math.max(1, campaign.events.length);
  useChronosStore.getState().requestCamera({ id: "challenge-wide", year: campaign.startYear, title: "", caption: "", target: [lon, lat], altitude: 2.3, tilt: 0 });
}

export function ChallengeCard() {
  const active = useAtlasStore((state) => state.challengeActive);
  const setActive = useAtlasStore((state) => state.setChallengeActive);
  const campaign = useChronosStore((state) => state.campaign);
  const challenge = useChallengeStore();
  const [best, setBest] = useState(0);
  const current = challenge.queue[challenge.round];
  const last = challenge.results[challenge.results.length - 1];
  const total = challenge.results.reduce((sum, result) => sum + result.points, 0);

  useEffect(() => {
    if (!active || !campaign) {
      useChallengeStore.getState().reset();
      registerGuessHandler(null);
      return;
    }
    useChronosStore.getState().select(null);
    useChallengeStore.getState().start(campaign);
    setBest(readBest(campaign.id));
    wideView(campaign);
    registerGuessHandler((point) => {
      const result = useChallengeStore.getState().guess(point);
      if (!result) return;
      const store = useChronosStore.getState();
      store.setYear(result.event.year);
      store.requestCamera({ id: "challenge-answer", year: result.event.year, title: "", caption: "", target: result.event.coordinates, altitude: 1.2, tilt: 18 });
    });
    return () => registerGuessHandler(null);
  }, [active, campaign]);

  useEffect(() => {
    if (challenge.phase === "question" && current) useChronosStore.getState().setYear(current.year);
    if (challenge.phase === "done" && campaign && total > best) {
      writeBest(campaign.id, total);
      setBest(total);
    }
  }, [challenge.phase, current, campaign, total, best]);

  if (!active || !campaign || challenge.phase === "idle") return null;

  return (
    <section aria-live="polite" data-hud-zone className="glass-panel pointer-events-auto w-[min(26rem,calc(100vw-1.5rem))] rounded-2xl px-5 py-4">
      <div className="flex items-center justify-between">
        <p className="eyebrow">
          Why here? · {challenge.phase === "done" ? "Final score" : `Round ${challenge.round + 1} of ${challenge.queue.length}`}
        </p>
        <button type="button" onClick={() => setActive(false)} className="text-[11px] text-ink-muted hover:text-ink">
          Exit
        </button>
      </div>

      {challenge.phase === "question" && current ? (
        <>
          <h2 className="mt-2 font-serif text-[22px] leading-tight text-ink">{current.title}</h2>
          <p className="mt-1 font-mono text-[11px] text-ink-muted">
            {formatYear(current.year)} · {LAYER_LABELS[current.layer]}
          </p>
          <p className="mt-3 text-[12.5px] text-ochre-soft">Click the globe where you think this happened.</p>
        </>
      ) : null}

      {challenge.phase === "reveal" && last ? (
        <>
          <h2 className="mt-2 font-serif text-[20px] leading-tight text-ink">{last.event.place}</h2>
          <p className="mt-1 font-mono text-[11px] text-ink-muted">
            {formatKm(last.distanceKm)} away · <span className="text-ochre-soft">+{last.points} points</span>
          </p>
          <p className="mt-3 border-l-2 border-ochre pl-3 font-serif text-[14px] leading-snug text-ink/90">{last.event.whyHere}</p>
          <button type="button" onClick={() => challenge.next()} className="mt-4 rounded-full bg-ochre/15 px-4 py-1.5 text-[12px] text-ochre-soft hover:bg-ochre/25">
            {challenge.round + 1 >= challenge.queue.length ? "See your score" : "Next place"}
          </button>
        </>
      ) : null}

      {challenge.phase === "done" ? (
        <>
          <p className="mt-2 font-serif text-[30px] text-ink">{total.toLocaleString("en-US")}</p>
          <p className="font-mono text-[11px] text-ink-muted">out of {(challenge.queue.length * 1000).toLocaleString("en-US")} · best {Math.max(best, total).toLocaleString("en-US")}</p>
          <ol className="mt-3 space-y-1">
            {challenge.results.map((result) => (
              <li key={result.event.id} className="flex justify-between gap-3 text-[12px] text-ink/85">
                <span className="truncate">{result.event.title}</span>
                <span className="shrink-0 font-mono text-[10.5px] text-ink-muted">{formatKm(result.distanceKm)}</span>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => {
              challenge.start(campaign);
              wideView(campaign);
            }}
            className="mt-4 rounded-full bg-ochre/15 px-4 py-1.5 text-[12px] text-ochre-soft hover:bg-ochre/25"
          >
            Play again
          </button>
        </>
      ) : null}
    </section>
  );
}
