"use client";

export function Fact({ label, children }: { readonly label: string; readonly children: React.ReactNode }) {
  return (
    <div className="border-t border-hairline py-2.5">
      <p className="eyebrow mb-1">{label}</p>
      <div className="text-[13px] leading-snug text-ink">{children}</div>
    </div>
  );
}
