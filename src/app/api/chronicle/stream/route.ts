import { ChronicleRequestSchema } from "@/ai/chronicleSchema";
import { matchEncyclopedia } from "@/ai/encyclopedia";
import { isGenerationAvailable, streamChronicle } from "@/ai/generateChronicle";
import { queryId } from "@/server/ids";
import { readValue, writeValue } from "@/server/keyValue";
import type { ChronicleCampaign } from "@/types/chronicle";

export const runtime = "nodejs";
export const maxDuration = 60;

const CACHE_TTL_SECONDS = 60 * 60 * 24 * 30;

export async function POST(request: Request): Promise<Response> {
  const parsed = ChronicleRequestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid request." }, { status: 400 });
  const { query } = parsed.data;
  const id = queryId(query);
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (message: unknown) => controller.enqueue(encoder.encode(`${JSON.stringify(message)}\n`));
      try {
        const cached = await readValue<ChronicleCampaign>(`chronicle:${id}`).catch(() => null);
        if (cached) {
          send({ type: "final", mode: "generated", campaign: cached, shareId: id, notice: "Loaded from the chronicle cache.", focusEventId: null });
        } else if (isGenerationAvailable()) {
          const campaign = await streamChronicle(query, (progress) => send({ type: "progress", progress }));
          await writeValue(`chronicle:${id}`, campaign, CACHE_TTL_SECONDS).catch(() => undefined);
          send({ type: "final", mode: "generated", campaign, shareId: id, notice: null, focusEventId: null });
        } else {
          const match = matchEncyclopedia(query);
          send({ type: "final", mode: "encyclopedia", campaign: match.campaign, shareId: null, notice: match.notice, focusEventId: match.focusEventId });
        }
      } catch (error) {
        console.error("Streaming chronicle failed, falling back to the encyclopedia.", error);
        const match = matchEncyclopedia(query);
        send({ type: "final", mode: "encyclopedia", campaign: match.campaign, shareId: null, notice: `The live generator was unavailable. ${match.notice}`, focusEventId: match.focusEventId });
      }
      controller.close();
    },
  });

  return new Response(stream, { headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" } });
}
