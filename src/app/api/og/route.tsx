import { ImageResponse } from "next/og";
import { findCatalogEntry } from "@/data/catalog";
import { formatSpan, formatYear } from "@/data/campaigns/registry";

export const runtime = "nodejs";

export function GET(request: Request): ImageResponse {
  const params = new URL(request.url).searchParams;
  const entry = findCatalogEntry(params.get("c") ?? "");
  const year = Number(params.get("y"));
  const accent = entry?.accent ?? "#d9a441";
  const meridians = [-60, -30, 0, 30, 60];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#05070a", color: "#e9e4d8", fontFamily: "serif", position: "relative" }}>
        <svg width="760" height="760" viewBox="0 0 760 760" style={{ position: "absolute", right: -120, top: -65 }}>
          <defs>
            <radialGradient id="ocean" cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#1d3442" />
              <stop offset="100%" stopColor="#05090f" />
            </radialGradient>
          </defs>
          <circle cx="380" cy="380" r="330" fill="url(#ocean)" stroke="#4f86c6" strokeOpacity="0.55" strokeWidth="10" />
          {meridians.map((offset) => (
            <ellipse key={offset} cx="380" cy="380" rx={Math.abs(Math.cos((offset * Math.PI) / 180)) * 330} ry="330" fill="none" stroke="#b9c4cc" strokeOpacity="0.12" />
          ))}
          {[-50, -25, 0, 25, 50].map((lat) => (
            <line key={lat} x1="60" x2="700" y1={380 + lat * 5.5} y2={380 + lat * 5.5} stroke="#b9c4cc" strokeOpacity="0.1" />
          ))}
          <path d="M210 300 C 300 200, 470 220, 560 330" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
          <circle cx="210" cy="300" r="12" fill={accent} />
          <circle cx="560" cy="330" r="12" fill={accent} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "70px 80px", width: "100%", background: "linear-gradient(90deg, #05070a 45%, rgba(5,7,10,0.2))" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: accent, fontFamily: "monospace" }}>
            {`CHRONOS${Number.isFinite(year) && params.has("y") ? ` · ${formatYear(year).toUpperCase()}` : ""}`}
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.05, marginTop: 18, maxWidth: 720 }}>{entry?.title ?? "A temporal and geopolitical atlas"}</div>
          <div style={{ display: "flex", fontSize: 28, color: "rgba(233,228,216,0.75)", marginTop: 18, maxWidth: 680 }}>
            {entry ? `${entry.subtitle} · ${formatSpan(entry.startYear, entry.endYear)}` : "Why history happened where it did."}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
