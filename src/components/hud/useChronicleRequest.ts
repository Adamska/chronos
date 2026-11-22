"use client";

import { useCallback } from "react";
import { z } from "zod";
import { CampaignPayloadSchema } from "@/ai/campaignPayload";
import { useChronosStore } from "@/store/useChronosStore";
import { useGenerationStore } from "@/store/useGenerationStore";
import type { ChronicleCampaign } from "@/types/chronicle";

const ProgressSchema = z.object({ type: z.literal("progress"), progress: z.object({ title: z.string().optional(), events: z.array(z.string()), arcs: z.number() }) });
const FinalSchema = z.object({
  type: z.literal("final"),
  campaign: CampaignPayloadSchema,
  shareId: z.string().nullable(),
  notice: z.string().nullable(),
  focusEventId: z.string().nullable(),
});
const ErrorPayloadSchema = z.object({ error: z.string() });

class RejectedQueryError extends Error {}

function settle(campaign: ChronicleCampaign, notice: string | null, focusEventId: string | null): void {
  const store = useChronosStore.getState();
  store.loadCampaign(campaign);
  if (focusEventId) store.focusEvent(focusEventId);
  store.setChronicleStatus("idle", notice);
}

async function readStream(response: Response): Promise<z.infer<typeof FinalSchema>> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error("No response stream.");
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value, { stream: !done });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines.filter(Boolean)) {
      const message: unknown = JSON.parse(line);
      const progress = ProgressSchema.safeParse(message);
      if (progress.success) useGenerationStore.getState().setProgress(progress.data.progress);
      const final = FinalSchema.safeParse(message);
      if (final.success) return final.data;
    }
    if (done) throw new Error("The chronicle stream ended early.");
  }
}

export function useChronicleRequest(): (query: string) => Promise<void> {
  return useCallback(async (query: string) => {
    useChronosStore.getState().setChronicleStatus("loading", null);
    useGenerationStore.getState().setProgress({ events: [], arcs: 0 });
    try {
      const response = await fetch("/api/chronicle/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (response.status === 400) {
        const rejected = ErrorPayloadSchema.safeParse(await response.json());
        throw new RejectedQueryError(rejected.success ? rejected.data.error : "That request could not be chronicled.");
      }
      if (!response.ok) throw new Error(`Chronicle request failed with ${response.status}.`);
      const final = await readStream(response);
      if (final.shareId) useGenerationStore.getState().rememberShare(final.campaign.id, final.shareId);
      settle(final.campaign, final.notice, final.focusEventId);
    } catch (error) {
      if (error instanceof RejectedQueryError) {
        useChronosStore.getState().setChronicleStatus("error", error.message);
        return;
      }
      const { matchEncyclopedia } = await import("@/ai/encyclopedia");
      const match = matchEncyclopedia(query);
      settle(match.campaign, `Working offline. ${match.notice}`, match.focusEventId);
    } finally {
      useGenerationStore.getState().setProgress(null);
    }
  }, []);
}
