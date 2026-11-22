import { ClassResultInputSchema } from "@/classroom/schema";
import { appendResult, readChallenge, readResults } from "@/server/classroomStore";

export const runtime = "nodejs";

type Context = { params: Promise<{ code: string }> };

export async function GET(_: Request, { params }: Context): Promise<Response> {
  const code = (await params).code.toUpperCase();
  if (!(await readChallenge(code))) return Response.json({ error: "No class challenge uses this code." }, { status: 404 });
  return Response.json({ results: await readResults(code) });
}

export async function POST(request: Request, { params }: Context): Promise<Response> {
  const code = (await params).code.toUpperCase();
  if (!(await readChallenge(code))) return Response.json({ error: "No class challenge uses this code." }, { status: 404 });
  const parsed = ClassResultInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid result." }, { status: 400 });
  await appendResult(code, { ...parsed.data, submittedAt: new Date().toISOString() });
  return Response.json({ ok: true });
}
