import "server-only";
import { type ClassChallenge, type ClassResult, ClassChallengeSchema, ClassResultSchema } from "@/classroom/schema";
import { readValue, writeValue } from "@/server/keyValue";

const TTL_SECONDS = 60 * 60 * 24 * 90;
const MAX_RESULTS = 200;

export async function readChallenge(code: string): Promise<ClassChallenge | null> {
  if (!/^[A-Z0-9]{6}$/.test(code)) return null;
  const parsed = ClassChallengeSchema.safeParse(await readValue(`class:${code}`));
  return parsed.success ? parsed.data : null;
}

export async function saveChallenge(challenge: ClassChallenge): Promise<void> {
  await writeValue(`class:${challenge.code}`, challenge, TTL_SECONDS);
}

export async function readResults(code: string): Promise<ClassResult[]> {
  const value = await readValue<unknown[]>(`class:${code}:results`);
  return (value ?? []).flatMap((entry) => {
    const parsed = ClassResultSchema.safeParse(entry);
    return parsed.success ? [parsed.data] : [];
  });
}

export async function appendResult(code: string, result: ClassResult): Promise<void> {
  const results = await readResults(code);
  await writeValue(`class:${code}:results`, [...results, result].slice(-MAX_RESULTS), TTL_SECONDS);
}
