import { formatYear } from "@/data/campaigns/registry";
import { translate } from "@/i18n/dictionaries";
import type { ChronicleCampaign } from "@/types/chronicle";

const WIDTH = 2400;
const HEIGHT = 1500;

function fontFamily(variable: string, fallback: string): string {
  const family = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return family ? `${family}, ${fallback}` : fallback;
}

function loadImage(source: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function wrap(context: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (context.measureText(candidate).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

export async function composePoster(globe: string, campaign: ChronicleCampaign | null, year: number, caption: string | null): Promise<Blob | null> {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext("2d");
  if (!context) return null;
  const serif = fontFamily("--font-newsreader", "Georgia, serif");
  const mono = fontFamily("--font-plex-mono", "monospace");

  context.fillStyle = "#05070a";
  context.fillRect(0, 0, WIDTH, HEIGHT);
  const image = await loadImage(globe);
  const scale = Math.max(WIDTH / image.width, HEIGHT / image.height);
  context.drawImage(image, (WIDTH - image.width * scale) / 2, (HEIGHT - image.height * scale) / 2, image.width * scale, image.height * scale);

  const shade = context.createLinearGradient(0, HEIGHT * 0.45, 0, HEIGHT);
  shade.addColorStop(0, "rgba(5, 7, 10, 0)");
  shade.addColorStop(1, "rgba(5, 7, 10, 0.94)");
  context.fillStyle = shade;
  context.fillRect(0, 0, WIDTH, HEIGHT);

  const left = 120;
  context.fillStyle = "#d9a441";
  context.font = `500 30px ${mono}`;
  context.fillText(`CHRONOS  ·  ${formatYear(year).toUpperCase()}`, left, HEIGHT - 430);
  context.fillStyle = "#e9e4d8";
  context.font = `400 104px ${serif}`;
  const titleLines = wrap(context, campaign?.title ?? "Chronos", WIDTH - left * 2);
  titleLines.slice(0, 2).forEach((line, index) => context.fillText(line, left, HEIGHT - 320 + index * 112 - (titleLines.length > 1 ? 112 : 0)));
  if (caption) {
    context.font = `italic 400 44px ${serif}`;
    context.fillStyle = "rgba(233, 228, 216, 0.82)";
    wrap(context, caption, WIDTH * 0.62).slice(0, 2).forEach((line, index) => context.fillText(line, left, HEIGHT - 190 + index * 56));
  }
  context.font = `400 22px ${mono}`;
  context.fillStyle = "rgba(233, 228, 216, 0.45)";
  context.fillText(translate("poster.credit"), left, HEIGHT - 70);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}
