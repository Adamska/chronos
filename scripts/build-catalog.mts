import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CAMPAIGNS } from "../src/data/campaigns";
import { TRAILS } from "../src/data/trails";

const root = process.cwd();
const campaignFolders = readdirSync(join(root, "src/data/campaigns"), { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
const trailFiles = readdirSync(join(root, "src/data/trails")).filter((file) => /(Thread|Journey)\.ts$/.test(file)).map((file) => file.replace(/\.ts$/, ""));

const quote = (value: string) => JSON.stringify(value);
const entry = (fields: Record<string, string>) => `  {\n${Object.entries(fields).map(([key, value]) => `    ${key}: ${value},`).join("\n")}\n  },`;

const campaignEntries = CAMPAIGNS.map((campaign) => {
  const folder = campaignFolders.find((name) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) === campaign.id) ?? "";
  const exportName = `${folder}Campaign`;
  return entry({
    id: quote(campaign.id),
    title: quote(campaign.title),
    subtitle: quote(campaign.subtitle),
    startYear: String(campaign.startYear),
    endYear: String(campaign.endYear),
    accent: quote(campaign.accent),
    source: quote(campaign.source),
    keywords: JSON.stringify(campaign.keywords),
    load: `() => import("@/data/campaigns/${folder}").then((module) => sortCampaignEvents(module.${exportName}))`,
  });
});

const trailEntries = TRAILS.map((trail) => {
  const file = trailFiles.find((name) => name.toLowerCase().startsWith(trail.id.split("-").slice(1).join("").toLowerCase().slice(0, 5))) ?? "";
  return entry({
    id: quote(trail.id),
    title: quote(trail.title),
    subtitle: quote(trail.subtitle),
    startYear: String(Math.min(...trail.stops.map((stop) => stop.year))),
    endYear: String(Math.max(...trail.stops.map((stop) => stop.year), Math.min(...trail.stops.map((stop) => stop.year)) + 1)),
    accent: quote(trail.accent),
    source: quote(trail.kind),
    keywords: JSON.stringify(trail.keywords),
    load: `() => import("@/data/trails/${file}").then((module) => trailToCampaign(module.${file}Trail))`,
  });
});

const header = (imports: string) => `${imports}\nimport type { CatalogEntry } from "@/data/catalog";\n\n`;
writeFileSync(
  join(root, "src/data/catalogCampaigns.ts"),
  `${header('import { sortCampaignEvents } from "@/data/campaigns/registry";')}export const CAMPAIGN_ENTRIES: readonly CatalogEntry[] = [\n${campaignEntries.join("\n")}\n];\n`,
);
writeFileSync(
  join(root, "src/data/catalogTrails.ts"),
  `${header('import { trailToCampaign } from "@/data/trails/toCampaign";')}export const TRAIL_ENTRIES: readonly CatalogEntry[] = [\n${trailEntries.join("\n")}\n];\n`,
);
console.log(`Catalog: ${campaignEntries.length} campaigns, ${trailEntries.length} trails.`);
