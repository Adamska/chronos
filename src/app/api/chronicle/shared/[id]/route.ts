import { readValue } from "@/server/keyValue";
import type { ChronicleCampaign } from "@/types/chronicle";

export const runtime = "nodejs";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
  const { id } = await params;
  if (!/^[A-Za-z0-9_-]{6,24}$/.test(id)) return Response.json({ error: "Unknown chronicle." }, { status: 404 });
  const campaign = await readValue<ChronicleCampaign>(`chronicle:${id}`).catch(() => null);
  return campaign ? Response.json({ campaign }) : Response.json({ error: "This shared chronicle has expired." }, { status: 404 });
}
