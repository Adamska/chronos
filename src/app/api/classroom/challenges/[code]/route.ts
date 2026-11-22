import { readChallenge } from "@/server/classroomStore";

export const runtime = "nodejs";

export async function GET(_: Request, { params }: { params: Promise<{ code: string }> }): Promise<Response> {
  const challenge = await readChallenge((await params).code.toUpperCase());
  return challenge ? Response.json({ challenge }) : Response.json({ error: "No class challenge uses this code." }, { status: 404 });
}
