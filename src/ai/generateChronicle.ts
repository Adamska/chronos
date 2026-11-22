import { createOpenAI } from "@ai-sdk/openai";
import { Output, generateText, streamText } from "ai";
import { ChronicleCampaignSchema, type GeneratedCampaign } from "@/ai/chronicleSchema";
import { normalizeGeneratedCampaign } from "@/ai/normalizeCampaign";
import type { ChronicleCampaign } from "@/types/chronicle";

const DEFAULT_MODEL = "gpt-5.4-mini";
const GENERATION_TIMEOUT_MS = 55_000;

const SYSTEM_PROMPT = `You are the chronicle director of Chronos, a 3D atlas that explains why history happened where it did.
Given a historical topic, produce a complete, factually careful temporal campaign:
- Events must be real, dated accurately, located with precise [longitude, latitude] coordinates, and chronological.
- Every "whyHere" must name concrete geography: rivers, passes, straits, monsoon winds, coastlines, oases, distances, resources.
- Arcs follow historically attested routes through real waypoints; maritime legs should stay over water where practical.
- Territories are simplified but recognisable outlines of the polities involved at the time.
- Chapters choreograph a camera tour: regional close-ups (altitude 0.9-1.2) for decisive moments, wider shots (1.6-2.2) for spread and diffusion.
- Use exact English Wikipedia article titles. Only include a primary source excerpt when you are certain it is genuine; otherwise null.
- Write in crisp, natural English with no emojis.`;

export function isGenerationAvailable(): boolean {
  return Boolean(process.env.OPENAI_API_KEY);
}

export async function generateChronicle(query: string): Promise<ChronicleCampaign> {
  const provider = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { output } = await generateText({
    model: provider(process.env.CHRONICLE_MODEL ?? DEFAULT_MODEL),
    system: SYSTEM_PROMPT,
    prompt: `Topic: ${query}`,
    output: Output.object({
      schema: ChronicleCampaignSchema,
      name: "chronicle_campaign",
      description: "A complete geospatial history campaign for the Chronos atlas.",
    }),
    abortSignal: AbortSignal.timeout(GENERATION_TIMEOUT_MS),
  });

  const campaign = normalizeGeneratedCampaign(output, query);
  if (campaign.events.length < 3) throw new Error("The generated chronicle contained too few events.");
  return campaign;
}

export interface ChronicleProgress {
  readonly title?: string;
  readonly events: readonly string[];
  readonly arcs: number;
}

export function progressFrom(partial: Partial<GeneratedCampaign> | undefined): ChronicleProgress {
  const events = (partial?.events ?? []).map((event) => event?.title).filter((title): title is string => typeof title === "string" && title.length > 0);
  return { title: partial?.title, events, arcs: partial?.arcs?.length ?? 0 };
}

export async function streamChronicle(query: string, onProgress: (progress: ChronicleProgress) => void): Promise<ChronicleCampaign> {
  const provider = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const result = streamText({
    model: provider(process.env.CHRONICLE_MODEL ?? DEFAULT_MODEL),
    system: SYSTEM_PROMPT,
    prompt: `Topic: ${query}`,
    output: Output.object({ schema: ChronicleCampaignSchema, name: "chronicle_campaign" }),
    abortSignal: AbortSignal.timeout(GENERATION_TIMEOUT_MS),
  });
  let lastEvents = -1;
  let lastArcs = -1;
  for await (const partial of result.partialOutputStream) {
    const progress = progressFrom(partial as Partial<GeneratedCampaign>);
    if (progress.events.length !== lastEvents || progress.arcs !== lastArcs) {
      lastEvents = progress.events.length;
      lastArcs = progress.arcs;
      onProgress(progress);
    }
  }
  const campaign = normalizeGeneratedCampaign(await result.output, query);
  if (campaign.events.length < 3) throw new Error("The generated chronicle contained too few events.");
  return campaign;
}
