import type { TradeRoute } from "@/types/world";
import { routes1 } from "./tradeRoutes1";
import { routes2 } from "./tradeRoutes2";

export const TRADE_ROUTES: readonly TradeRoute[] = [...routes1, ...routes2];
