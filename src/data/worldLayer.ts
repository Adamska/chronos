import type { Locale } from "@/i18n/config";
import type { GeoArc } from "@/types/chronicle";
import type { TradeRoute, WorldEvent } from "@/types/world";

export interface WorldData {
  readonly events: readonly WorldEvent[];
  readonly routes: readonly TradeRoute[];
  readonly arcs: readonly GeoArc[];
}

const cache = new Map<Locale, Promise<WorldData>>();

function routeToArc(route: TradeRoute): GeoArc {
  return {
    id: route.id,
    label: route.name,
    kind: "trade",
    layer: "trade",
    path: route.path,
    startYear: route.startYear,
    endYear: route.endYear,
    intensity: route.medium === "sea" ? 0.7 : 0.55,
    cargo: route.goods,
  };
}

async function build(locale: Locale): Promise<WorldData> {
  const [{ WORLD_EVENTS }, { TRADE_ROUTES }] = await Promise.all([import("@/data/world/events"), import("@/data/world/tradeRoutes")]);
  let events = WORLD_EVENTS;
  let routes = TRADE_ROUTES;
  if (locale === "fr") {
    const { WORLD_EVENTS_FR, TRADE_ROUTES_FR } = await import("@/i18n/content/fr/world");
    events = events.map((event) => ({ ...event, ...(WORLD_EVENTS_FR[event.id] ?? {}) }));
    routes = routes.map((route) => ({ ...route, ...(TRADE_ROUTES_FR[route.id] ?? {}) }));
  }
  return { events, routes, arcs: routes.map(routeToArc) };
}

export function loadWorldData(locale: Locale): Promise<WorldData> {
  const cached = cache.get(locale) ?? build(locale);
  cache.set(locale, cached);
  return cached;
}

export function worldWindow(year: number): number {
  if (year < -500) return 160;
  if (year < 500) return 70;
  if (year < 1500) return 45;
  if (year < 1850) return 20;
  return 7;
}

const smooth = (t: number) => {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
};

export function worldEventPresence(event: WorldEvent, year: number): number {
  const window = worldWindow(year);
  const end = event.endYear ?? event.year;
  if (year >= event.year && year <= end) return 1;
  const gap = year < event.year ? event.year - year : year - end;
  return 1 - smooth(gap / window);
}

export function routePresence(route: { readonly startYear: number; readonly endYear: number }, year: number): number {
  const fade = worldWindow(year);
  return smooth((year - route.startYear + fade) / fade) * smooth((route.endYear + fade - year) / fade);
}
