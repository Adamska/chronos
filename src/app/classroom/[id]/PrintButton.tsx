"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="rounded-full border border-[#1d1b17] px-3 py-1 text-[12px] hover:bg-[#1d1b17] hover:text-[#f6f2e8]">
      Print this sheet
    </button>
  );
}
