"use client";

import { useCallback } from "react";
import { z } from "zod";
import { ChronicleResponsePayloadSchema } from "@/ai/campaignPayload";
import { useChronosStore } from "@/store/useChronosStore";
import type { ChronicleCampaign } from "@/types/chronicle";

const ErrorPayloadSchema = z.object({ error: z.string() });

class RejectedQueryError extends Error {}

function settle(campaign: ChronicleCampaign, notice: string | null, focusEventId: string | null): void {
  const store = useChronosStore.getState();
  store.loadCampaign(campaign);
  if (focusEventId) store.focusEvent(focusEventId);
  store.setChronicleStatus("idle", notice);
}

export function useChronicleRequest(): (query: string) => Promise<void> {
  return useCallback(async (query: string) => {
    const store = useChronosStore.getState();
    store.setChronicleStatus("loading", null);
    try {
      const response = await fetch("/api/chronicle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const payload: unknown = await response.json();
      if (response.status === 400) {
        const rejected = ErrorPayloadSchema.safeParse(payload);
        throw new RejectedQueryError(rejected.success ? rejected.data.error : "That request could not be chronicled.");
      }
      const parsed = ChronicleResponsePayloadSchema.safeParse(payload);
      if (!response.ok || !parsed.success) throw new Error("The chronicle response was malformed.");
      settle(parsed.data.campaign, parsed.data.notice, parsed.data.focusEventId);
    } catch (error) {
      if (error instanceof RejectedQueryError) {
        useChronosStore.getState().setChronicleStatus("error", error.message);
        return;
      }
      const { matchEncyclopedia } = await import("@/ai/encyclopedia");
      const match = matchEncyclopedia(query);
      settle(match.campaign, `Working offline. ${match.notice}`, match.focusEventId);
    }
  }, []);
}
