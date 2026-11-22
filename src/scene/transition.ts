import { useChronosStore } from "@/store/useChronosStore";

const REVEAL_MS = 1100;
let trackedNonce = -1;
let revealStart = 0;

export function revealFactor(now: number = performance.now()): number {
  const nonce = useChronosStore.getState().campaignNonce;
  if (nonce !== trackedNonce) {
    trackedNonce = nonce;
    revealStart = now;
  }
  const t = Math.min(1, (now - revealStart) / REVEAL_MS);
  return t * t * (3 - 2 * t);
}
