import type { CausalSchematic, DossierSchematic, ExchangeSchematic } from "@/types/chronicle";

const INK = "rgb(233 228 216 / 0.85)";
const MUTED = "rgb(233 228 216 / 0.45)";
const OCHRE = "#d9a441";
const TEAL = "#5fb3a8";

function ExchangeDiagram({ schematic }: { readonly schematic: ExchangeSchematic }) {
  const east = schematic.eastbound.slice(0, 5);
  const west = schematic.westbound.slice(0, 5);
  const laneHeight = 15;
  const top = 34;
  const middle = top + east.length * laneHeight + 14;
  const height = middle + 14 + west.length * laneHeight + 22;

  return (
    <svg viewBox={`0 0 360 ${height}`} className="w-full" role="img" aria-label={`Exchange between ${schematic.westLabel} and ${schematic.eastLabel}`}>
      {[{ x: 8, label: schematic.westLabel }, { x: 272, label: schematic.eastLabel }].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={middle - 22} width="80" height="44" rx="8" fill="#0b1016" stroke="rgb(233 228 216 / 0.16)" />
          <text x={node.x + 40} y={middle + 4} textAnchor="middle" fontSize="10.5" fill={INK} fontFamily="var(--font-inter)">
            {node.label.length > 13 ? `${node.label.slice(0, 12)}…` : node.label}
          </text>
        </g>
      ))}
      <path d={`M 88 ${middle - 10} C 150 ${top - 18}, 210 ${top - 18}, 272 ${middle - 10}`} fill="none" stroke={OCHRE} strokeWidth="1.4" className="flow-dash" />
      <path d={`M 272 ${middle + 10} C 210 ${height - 14}, 150 ${height - 14}, 88 ${middle + 10}`} fill="none" stroke={TEAL} strokeWidth="1.4" className="flow-dash" />
      <path d={`M 266 ${middle - 16} l 6 6 l -8 2`} fill="none" stroke={OCHRE} strokeWidth="1.4" />
      <path d={`M 94 ${middle + 16} l -6 -6 l 8 -2`} fill="none" stroke={TEAL} strokeWidth="1.4" />
      <text x="180" y={top - 12} textAnchor="middle" fontSize="8.5" letterSpacing="1.6" fill={OCHRE} fontFamily="var(--font-plex-mono)">EASTBOUND</text>
      {east.map((item, index) => (
        <text key={item} x="180" y={top + 6 + index * laneHeight} textAnchor="middle" fontSize="10.5" fill={INK} fontFamily="var(--font-inter)">{item}</text>
      ))}
      {west.map((item, index) => (
        <text key={item} x="180" y={middle + 26 + index * laneHeight} textAnchor="middle" fontSize="10.5" fill={INK} fontFamily="var(--font-inter)">{item}</text>
      ))}
      <text x="180" y={height - 4} textAnchor="middle" fontSize="8.5" letterSpacing="1.6" fill={TEAL} fontFamily="var(--font-plex-mono)">WESTBOUND</text>
    </svg>
  );
}

function CausalChain({ schematic }: { readonly schematic: CausalSchematic }) {
  const steps = schematic.steps.slice(0, 6);
  const rowHeight = 44;
  const height = steps.length * rowHeight - 12;
  return (
    <svg viewBox={`0 0 360 ${height}`} className="w-full" role="img" aria-label="Causal impact chain">
      {steps.map((step, index) => {
        const y = index * rowHeight;
        const last = index === steps.length - 1;
        return (
          <g key={step}>
            <rect x="36" y={y} width="316" height="32" rx="7" fill={last ? "rgb(217 164 65 / 0.12)" : "#0b1016"} stroke={last ? "rgb(217 164 65 / 0.5)" : "rgb(233 228 216 / 0.14)"} />
            <circle cx="16" cy={y + 16} r="10" fill="none" stroke={last ? OCHRE : MUTED} />
            <text x="16" y={y + 19.5} textAnchor="middle" fontSize="10" fill={last ? OCHRE : MUTED} fontFamily="var(--font-plex-mono)">{index + 1}</text>
            <text x="48" y={y + 20} fontSize="11" fill={INK} fontFamily="var(--font-inter)">{step.length > 52 ? `${step.slice(0, 51)}…` : step}</text>
            {last ? null : <path d={`M 16 ${y + 27} v 16 M 12 ${y + 39} l 4 4 l 4 -4`} fill="none" stroke={MUTED} className="flow-dash" />}
          </g>
        );
      })}
    </svg>
  );
}

export function FlowSchematic({ schematic }: { readonly schematic: DossierSchematic }) {
  return schematic.kind === "exchange" ? <ExchangeDiagram schematic={schematic} /> : <CausalChain schematic={schematic} />;
}
