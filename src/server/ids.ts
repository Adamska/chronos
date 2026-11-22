import "server-only";
import { createHash, randomInt } from "node:crypto";

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function queryId(query: string): string {
  const normalised = query.trim().toLowerCase().replace(/\s+/g, " ");
  return createHash("sha256").update(normalised).digest("base64url").slice(0, 12);
}

export function classCode(): string {
  return Array.from({ length: 6 }, () => CODE_ALPHABET[randomInt(CODE_ALPHABET.length)]).join("");
}
