import type { WorldEvent } from "@/types/world";
import { events1 } from "./events1";
import { events2 } from "./events2";
import { events3 } from "./events3";
import { events4 } from "./events4";
import { events5 } from "./events5";
import { events6 } from "./events6";
import { events7 } from "./events7";
import { events8 } from "./events8";
import { events9 } from "./events9";
import { events10 } from "./events10";

export const WORLD_EVENTS: readonly WorldEvent[] = [
  ...events1,
  ...events2,
  ...events3,
  ...events4,
  ...events5,
  ...events6,
  ...events7,
  ...events8,
  ...events9,
  ...events10,
].sort((a, b) => a.year - b.year);
