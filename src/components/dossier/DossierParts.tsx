import type { ReactNode } from "react";

export function Section({ label, children }: { readonly label: string; readonly children: ReactNode }) {
  return (
    <section className="border-t border-hairline px-5 py-4">
      <h3 className="eyebrow mb-2.5">{label}</h3>
      {children}
    </section>
  );
}

export function Badge({ children, color }: { readonly children: ReactNode; readonly color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted"
      style={color ? { borderColor: `${color}55`, color } : undefined}
    >
      {color ? <span className="size-1.5 rounded-full" style={{ background: color }} /> : null}
      {children}
    </span>
  );
}

export function ActionButton({ onClick, children }: { readonly onClick: () => void; readonly children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-ochre/35 bg-ochre/10 px-3 py-1.5 text-[12px] text-ochre-soft transition hover:bg-ochre/20"
    >
      {children}
    </button>
  );
}
