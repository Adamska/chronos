import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { FR_TRANSLATIONS } from "../src/i18n/content/fr";

const entries: string[] = [];
for (const [id, load] of Object.entries(FR_TRANSLATIONS)) {
  const translation = await load();
  entries.push(
    `  ${JSON.stringify(id)}: { title: ${JSON.stringify(translation.title ?? "")}, subtitle: ${JSON.stringify(translation.subtitle ?? "")}, keywords: ${JSON.stringify(translation.keywords ?? [])} },`,
  );
}
writeFileSync(
  join(process.cwd(), "src/i18n/content/fr/catalog.ts"),
  `export const FR_CATALOG: Readonly<Record<string, { readonly title: string; readonly subtitle: string; readonly keywords: readonly string[] }>> = {\n${entries.join("\n")}\n};\n`,
);
console.log(`French catalog: ${entries.length} entries.`);
