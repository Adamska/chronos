import { createOpenAI } from "@ai-sdk/openai";
import { Output, generateText } from "ai";
import { NextResponse } from "next/server";
import { answerOffline } from "@/ai/askOffline";
import { AskAnswerSchema, AskRequestSchema, type AskResponse } from "@/ai/askSchema";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM = `You answer follow-up questions about a historical chronicle shown on a 3D globe.
Ground every answer in the listed events and in physical geography: terrain, rivers, winds, currents, straits, distances.
Be concise and factual, in crisp natural English without emojis. If the events do not support an answer, say so briefly.`;

export async function POST(request: Request): Promise<NextResponse> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = AskRequestSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid request." }, { status: 400 });
  const { question, campaignTitle, events, locale } = parsed.data;

  if (process.env.OPENAI_API_KEY) {
    try {
      const provider = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const { output } = await generateText({
        model: provider(process.env.CHRONICLE_MODEL ?? "gpt-5.4-mini"),
        system: locale === "fr" ? `${SYSTEM}\nAnswer in idiomatic French with French typography.` : SYSTEM,
        prompt: `Chronicle: ${campaignTitle}\nEvents:\n${events
          .map((event) => `- [${event.id}] ${event.year}: ${event.title} at ${event.place} (${event.coordinates.join(", ")}). ${event.whyHere}`)
          .join("\n")}\n\nQuestion: ${question}`,
        output: Output.object({ schema: AskAnswerSchema, name: "chronicle_answer" }),
        abortSignal: AbortSignal.timeout(25_000),
      });
      const known = new Set(events.map((event) => event.id));
      return NextResponse.json<AskResponse>({ ...output, eventIds: output.eventIds.filter((id) => known.has(id)).slice(0, 3), mode: "generated" });
    } catch (error) {
      console.error("Follow-up generation failed, answering offline.", error);
    }
  }
  return NextResponse.json<AskResponse>(answerOffline(question, events, locale));
}
