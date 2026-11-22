"use client";

import { useT } from "@/i18n/I18nProvider";

export function PrintButton() {
  const t = useT();
  return (
    <button type="button" onClick={() => window.print()} className="rounded-full border border-[#1d1b17] px-3 py-1 text-[12px] hover:bg-[#1d1b17] hover:text-[#f6f2e8]">
      {t("classroom.print")}
    </button>
  );
}
