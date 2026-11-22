const PATHS: Record<string, string> = {
  travel: "M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 3v3.5l2.5 1.5",
  known: "M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8Zm6-1.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z",
  environment: "M1.5 6c2-1.6 3.5-1.6 5.5 0s3.5 1.6 7.5-1M1.5 10.5c2-1.6 3.5-1.6 5.5 0s3.5 1.6 7.5-1",
  cities: "M2 14V7l3-2v9M5 14V3.5l4 2V14m0-6 4-1.5V14M1 14h14",
  meanwhile: "M2 4h12M2 8h12M2 12h12M5 2.5v3M11 6.5v3M7 10.5v3",
  challenge: "M8 14.5s-4.5-4.2-4.5-7.7a4.5 4.5 0 1 1 9 0c0 3.5-4.5 7.7-4.5 7.7Zm0-9.6a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z",
  tour: "M3 2.5v11l9-5.5-9-5.5Z",
  index: "M2 3.5h2m3 0h7M2 8h2m3 0h7M2 12.5h2m3 0h7",
  share: "M10.5 2.5h3v3M13.5 2.5 8 8M12 9v4.5H2.5V4H7",
  classroom: "M1.5 5.5 8 2.5l6.5 3L8 8.5l-6.5-3Zm2.5 1.3V11c2.5 2 5.5 2 8 0V6.8",
  ask: "M2.5 3h11v7.5H7l-3 2.5v-2.5H2.5V3Zm3 3.5h.01m2.5 0h.01m2.5 0h.01",
  settings: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.5 2.5-1.6.6.3 1.7-1.5.9-1.2-1.2-1.5.6-.4 1.6H6.4L6 10.7l-1.5-.6-1.2 1.2-1.5-.9.3-1.7L.5 8",
};

export function RailIcon({ name }: { readonly name: string }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={PATHS[name] ?? ""} />
    </svg>
  );
}
