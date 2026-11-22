"use client";

import { useT } from "@/i18n/I18nProvider";
import { useAtlasStore } from "@/store/useAtlasStore";

export function GraphicsNotice() {
  const lost = useAtlasStore((state) => state.contextLost);
  const t = useT();
  if (!lost) return null;
  return (
    <div role="alert" className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-abyss/80 backdrop-blur-sm">
      <div className="glass-panel max-w-sm rounded-2xl px-6 py-5 text-center">
        <p className="eyebrow">{t("graphics.title")}</p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink/85">
          {t("graphics.body")}
        </p>
        <button type="button" onClick={() => window.location.reload()} className="mt-4 rounded-full bg-ochre/15 px-4 py-1.5 text-[12.5px] text-ochre-soft hover:bg-ochre/25">
          {t("graphics.reload")}
        </button>
      </div>
    </div>
  );
}
