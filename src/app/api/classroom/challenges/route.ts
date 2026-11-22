import { ClassChallengeInputSchema } from "@/classroom/schema";
import { classCode } from "@/server/ids";
import { readChallenge, saveChallenge } from "@/server/classroomStore";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const parsed = ClassChallengeInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid challenge." }, { status: 400 });
  let code = classCode();
  for (let attempt = 0; attempt < 4 && (await readChallenge(code)); attempt += 1) code = classCode();
  await saveChallenge({ ...parsed.data, code, createdAt: new Date().toISOString() });
  return Response.json({ code });
}
