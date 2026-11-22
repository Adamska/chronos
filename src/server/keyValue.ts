import "server-only";

interface Entry {
  readonly value: string;
  readonly expires: number;
}

const shared = globalThis as typeof globalThis & { chronosMemoryStore?: Map<string, Entry> };
const memory = (shared.chronosMemoryStore ??= new Map<string, Entry>());
const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

async function command(args: readonly (string | number)[]): Promise<unknown> {
  const response = await fetch(url ?? "", {
    method: "POST",
    headers: { Authorization: `Bearer ${token ?? ""}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Key-value store responded ${response.status}`);
  const body = (await response.json()) as { result?: unknown };
  return body.result ?? null;
}

export const isPersistentStore = (): boolean => Boolean(url && token);

export async function readValue<T>(key: string): Promise<T | null> {
  if (isPersistentStore()) {
    const result = await command(["GET", key]);
    return typeof result === "string" ? (JSON.parse(result) as T) : null;
  }
  const entry = memory.get(key);
  if (!entry || entry.expires < Date.now()) return null;
  return JSON.parse(entry.value) as T;
}

export async function writeValue(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  const serialised = JSON.stringify(value);
  if (isPersistentStore()) {
    await command(["SET", key, serialised, "EX", ttlSeconds]);
    return;
  }
  memory.set(key, { value: serialised, expires: Date.now() + ttlSeconds * 1000 });
}
