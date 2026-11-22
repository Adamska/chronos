import { NextResponse } from "next/server";
import { type ChronicleResponse, ChronicleRequestSchema } from "@/ai/chronicleSchema";
import { matchEncyclopedia } from "@/ai/encyclopedia";
import { generateChronicle, isGenerationAvailable } from "@/ai/generateChronicle";
import { translate } from "@/i18n/dictionaries";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request): Promise<NextResponse> {
  const body: unknown = await request.json().catch(() => null);
  if (body === null) return NextResponse.json({ error: "Send a JSON body with a query." }, { status: 400 });
  const parsed = ChronicleRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid request." }, { status: 400 });
  }

  const { query, locale } = parsed.data;

  if (isGenerationAvailable()) {
    try {
      const campaign = await generateChronicle(query, locale);
      return NextResponse.json<ChronicleResponse>({ campaign, mode: "generated", notice: null, focusEventId: null });
    } catch (error) {
      console.error("Chronicle generation failed, falling back to the encyclopedia.", error);
      const fallback = matchEncyclopedia(query, locale);
      return NextResponse.json<ChronicleResponse>({
        campaign: fallback.campaign,
        mode: "encyclopedia",
        notice: translate("request.unavailable", { notice: fallback.notice }, locale),
        focusEventId: fallback.focusEventId,
      });
    }
  }

  const match = matchEncyclopedia(query, locale);
  return NextResponse.json<ChronicleResponse>({
    campaign: match.campaign,
    mode: "encyclopedia",
    notice: match.notice,
    focusEventId: match.focusEventId,
  });
}
