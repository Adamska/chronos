import { create } from "zustand";
import { type WorldData, loadWorldData } from "@/data/worldLayer";
import type { Locale } from "@/i18n/config";

interface WorldState {
  data: WorldData | null;
  locale: Locale | null;
  ensure: (locale: Locale) => void;
}

export const useWorldStore = create<WorldState>()((set, get) => ({
  data: null,
  locale: null,
  ensure: (locale) => {
    if (get().locale === locale) return;
    set({ locale });
    void loadWorldData(locale).then((data) => {
      if (get().locale === locale) set({ data });
    });
  },
}));
