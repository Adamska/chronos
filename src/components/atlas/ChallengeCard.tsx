"use client";

import { useEffect, useMemo, useState } from "react";
import { frameAnswer, frameRegionHint, frameWholeCampaign, readBest, resultText, writeBest } from "@/components/atlas/challengeActions";
import { ClassSubmit } from "@/components/atlas/ClassSubmit";
import { formatKm } from "@/components/dossier/geoInsights";
import { formatYear } from "@/data/campaigns/registry";
import { continentOf } from "@/geo/continents";
import { registerGuessHandler } from "@/scene/globeInteraction";
import { useAtlasStore } from "@/store/useAtlasStore";
import { type Difficulty, useChallengeStore } from "@/store/useChallengeStore";
import { useChronosStore } from "@/store/useChronosStore";
import { LAYER_LABELS } from "@/types/chronicle";

const DIFFICULTIES: readonly Difficulty[] = ["easy", "normal", "hard"];
const button = "rounded-full bg-ochre/15 px-4 py-1.5 text-[12px] text-ochre-soft transition hover:bg-ochre/25";

export function ChallengeCard() {
  const active = useAtlasStore((state) => state.challengeActive);
  const setActive = useAtlasStore((state) => state.setChallengeActive);
  const campaign = useChronosStore((state) => state.campaign);
  const challenge = useChallengeStore();
  const [bestVersion, setBestVersion] = useState(0);
  const [copied, setCopied] = useState(false);
  const best = useMemo(() => (campaign && bestVersion >= 0 ? readBest(campaign.id, challenge.difficulty) : 0), [campaign, challenge.difficulty, bestVersion]);
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
    frameWholeCampaign(campaign);
    registerGuessHandler((point) => {
      const result = useChallengeStore.getState().guess(point);
      if (!result) return;
      useChronosStore.getState().setYear(result.event.year);
      frameAnswer(result);
    });
    return () => registerGuessHandler(null);
  }, [active, campaign]);

  useEffect(() => {
    if (challenge.phase === "question" && current) useChronosStore.getState().setYear(current.year);
  }, [challenge.phase, current]);

  if (!active || !campaign || challenge.phase === "idle") return null;

  const restart = (difficulty: Difficulty) => {
    challenge.start(campaign, difficulty);
    frameWholeCampaign(campaign);
  };
  const advance = () => {
    const finishing = challenge.round + 1 >= challenge.queue.length;
    challenge.next();
    if (finishing && total > best) {
      writeBest(campaign.id, challenge.difficulty, total);
      setBestVersion((version) => version + 1);
    } else if (!finishing) frameWholeCampaign(campaign);
  };
  const copyResult = () => {
    void navigator.clipboard?.writeText(resultText(campaign, challenge.difficulty, challenge.results)).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };
  const hint = () => {
    if (!current) return;
    if (challenge.difficulty === "easy" || challenge.hints === 1) {
      frameRegionHint(current);
      useChallengeStore.setState({ hints: 2 });
      return;
    }
    challenge.useHint();
  };
  const showYear = challenge.difficulty !== "hard";
  const showContinent = challenge.difficulty === "easy" || challenge.hints >= 1;

  return (
    <section aria-live="polite" data-hud-zone className="glass-panel pointer-events-auto w-[min(26rem,calc(100vw-1.5rem))] rounded-2xl px-5 py-4">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow">Why here? · {challenge.phase === "done" ? "Final score" : `Round ${challenge.round + 1} of ${challenge.queue.length}`}</p>
        <button type="button" onClick={() => setActive(false)} className="text-[11px] text-ink-muted hover:text-ink">
          Exit
        </button>
      </div>
      <div className="mt-2 flex gap-1 text-[11px]" role="group" aria-label="Difficulty">
        {DIFFICULTIES.map((difficulty) => (
          <button
            key={difficulty}
            type="button"
            aria-pressed={challenge.difficulty === difficulty}
            onClick={() => restart(difficulty)}
            className={`rounded-full border px-2.5 py-0.5 capitalize transition ${challenge.difficulty === difficulty ? "border-ochre/50 bg-ochre/10 text-ochre-soft" : "border-hairline text-ink-muted hover:text-ink"}`}
          >
            {difficulty}
          </button>
        ))}
      </div>

      {challenge.phase === "question" && current ? (
        <>
          <h2 className="mt-3 font-serif text-[22px] leading-tight text-ink">{current.title}</h2>
          <p className="mt-1 font-mono text-[11px] text-ink-muted">
            {showYear ? `${formatYear(current.year)} · ${LAYER_LABELS[current.layer]}` : "No date in hard mode"}
            {showContinent ? ` · ${continentOf(current.coordinates)}` : ""}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-[12.5px] text-ochre-soft">Click the globe where you think this happened.</p>
            {challenge.hints < 2 ? (
              <button type="button" onClick={hint} className="shrink-0 rounded-full border border-hairline px-2.5 py-0.5 text-[11px] text-ink-muted hover:text-ink">
                {challenge.hints === 0 && challenge.difficulty !== "easy" ? "Hint: continent" : "Hint: region"}
              </button>
            ) : null}
          </div>
        </>
      ) : null}

      {challenge.phase === "reveal" && last ? (
        <>
          <h2 className="mt-3 font-serif text-[20px] leading-tight text-ink">{last.event.place}</h2>
          <p className="mt-1 font-mono text-[11px] text-ink-muted">
            {formatKm(last.distanceKm)} away · <span className="text-ochre-soft">+{last.points} points</span>
          </p>
          <p className="mt-3 border-l-2 border-ochre pl-3 font-serif text-[14px] leading-snug text-ink/90">{last.event.whyHere}</p>
          <button type="button" onClick={advance} className={`mt-4 ${button}`}>
            {challenge.round + 1 >= challenge.queue.length ? "See your score" : "Next place"}
          </button>
        </>
      ) : null}

      {challenge.phase === "done" ? (
        <>
          <p className="mt-3 font-serif text-[30px] text-ink">{total.toLocaleString("en-US")}</p>
          <p className="font-mono text-[11px] text-ink-muted">
            out of {(challenge.queue.length * 1000).toLocaleString("en-US")} · best {Math.max(best, total).toLocaleString("en-US")}
          </p>
          <ol className="mt-3 space-y-1">
            {challenge.results.map((result) => (
              <li key={result.event.id} className="flex justify-between gap-3 text-[12px] text-ink/85">
                <span className="truncate">{result.event.title}</span>
                <span className="shrink-0 font-mono text-[10.5px] text-ink-muted">{formatKm(result.distanceKm)}</span>
              </li>
            ))}
          </ol>
          {challenge.classCode ? <ClassSubmit code={challenge.classCode} results={challenge.results} /> : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => restart(challenge.difficulty)} className={button}>
              Play again
            </button>
            <button type="button" onClick={copyResult} className="rounded-full border border-hairline px-4 py-1.5 text-[12px] text-ink-muted hover:text-ink">
              {copied ? "Result copied" : "Copy result"}
            </button>
          </div>
        </>
      ) : null}
    </section>
  );
}
