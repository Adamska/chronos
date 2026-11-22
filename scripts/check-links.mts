import { LIBRARY } from "../src/data/library";

const ENDPOINT = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function check(slug: string): Promise<string | null> {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(`${ENDPOINT}${encodeURIComponent(slug)}?redirect=false`, {
      headers: { "User-Agent": "chronos-link-check/1.0" },
      redirect: "manual",
    });
    if (response.status === 429) {
      await pause(2000 * (attempt + 1));
      continue;
    }
    if (response.status === 404) return "not found";
    if (response.status >= 300 && response.status < 400) return `redirects to ${response.headers.get("location") ?? "?"}`;
    if (response.status !== 200) return `status ${response.status}`;
    const body = (await response.json()) as { type?: string };
    return body.type === "disambiguation" ? "disambiguation page" : null;
  }
  return "rate limited";
}

const slugs = new Map<string, string[]>();
for (const campaign of LIBRARY) {
  for (const event of campaign.events) slugs.set(event.wikipediaSlug, [...(slugs.get(event.wikipediaSlug) ?? []), `${campaign.id}/${event.id}`]);
}

const problems: string[] = [];
for (const [slug, owners] of slugs) {
  const problem = await check(slug);
  if (problem) problems.push(`${slug}: ${problem} (${owners.join(", ")})`);
  await pause(250);
}

console.log(`Checked ${slugs.size} Wikipedia articles.`);
if (problems.length > 0) {
  console.log(problems.join("\n"));
  process.exit(1);
}
