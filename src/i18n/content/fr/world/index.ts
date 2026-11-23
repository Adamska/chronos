import { eventsFr1 } from "./events1";
import { eventsFr2 } from "./events2";
import { eventsFr3 } from "./events3";
import { eventsFr4 } from "./events4";
import { eventsFr5 } from "./events5";
import { routesFr } from "./routes";

export const WORLD_EVENTS_FR: Readonly<
  Record<string, { readonly title: string; readonly place: string; readonly summary: string }>
> = {
  ...eventsFr1,
  ...eventsFr2,
  ...eventsFr3,
  ...eventsFr4,
  ...eventsFr5,
};

export const TRADE_ROUTES_FR: Readonly<
  Record<string, { readonly name: string; readonly goods: readonly string[]; readonly summary: string }>
> = routesFr;
