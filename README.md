# Chronos

**[Live demo](https://chronos-orpin-seven.vercel.app)**

**An interactive 3D history atlas, in English and French.** Chronos has two ways in. **Stories** tell a chapter of history as a guided journey across the globe, one step at a time, with the people who made it. **Atlas** lets you pick any year from 3500 BCE to today and choose what to see: states and empires, dominant religions, language families, population density, trade routes and great events.

The experience is procedural. The repository ships no video, no photographs and no map tiles: the planet, atmosphere, relief, bathymetry, borders, routes and beacons are generated at runtime from compact vector and grid data, and portraits and thumbnails are fetched on demand from Wikipedia.

## Stories

Each story is a sequence of 10 to 16 steps. A step flies the camera somewhere, shows a short narration and only the one to three things that matter at that moment: an event, a route, the extent of an empire. Earlier steps stay on the globe as faint markers, so the story leaves a trail.

- **36 stories:** Mesopotamia, Egypt of the Pharaohs, the Persian Empire, Ancient Greece and Alexander, the Roman Empire and its fall, Imperial China, the Silk Road, the Bantu Expansion, Polynesian voyaging, the Vikings, the Islamic Golden Age, the Crusades, the empires of West Africa, the Mongol Empire, the Indian Ocean world, seven centuries of French and English rivalry, the Aztecs and the Incas, the Ottoman Empire, the Age of Sail, the Columbian Exchange, the French Revolution and Napoleon, the Industrial Revolution, the First and Second World Wars, decolonisation, the Space Race, the threads of silver, zero, plague, paper and printing, and the journeys of Xuanzang, Ibn Battuta, Zheng He and Olaudah Equiano.
- **Key figures:** each story introduces two to six people. Opening one shows their portrait, dates and role, and draws their life on the globe, place by place.
- **Play, read aloud, or step through:** autoplay paces each step by its length, optional speech synthesis reads the narration, and arrow keys move between steps. "Learn more" opens a dossier with context, the geographic reason the event happened where it did, a primary source when one is genuine, and Wikipedia.
- **Borders of the time:** an optional switch shows the historical political map behind any step.

## Atlas

The atlas has a single background map and a few overlays, each with its own legend, so the globe never shows everything at once.

| Background map | Source |
| --- | --- |
| States and empires | Cliopatria polity borders, rasterised in a Web Worker, crossfading as the year changes |
| Dominant religions | Curated timelines of the majority religion of each modern country's population (approximate, drawn as soft zones) |
| Language families | Curated timelines of the majority language family of each modern country (approximate) |
| Population density | HYDE 3.2 grids at 28 dates, interpolated on the GPU |

Overlays: about 150 major world events across every region and era, 25 great trade routes, the great cities of each period, and winds, currents and climate. Advanced tools add travel times by era, the edge of the known world for five cultures, and an outline comparison with another year.

**What was here?** Clicking anywhere answers for the current year: the state that ruled the place, its dominant religion and language, the population density, the nearest great city and nearby world events.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000; the proxy redirects to `/en` or `/fr` from the browser language (a cookie remembers an explicit choice). Everything works offline and without configuration. `NEXT_PUBLIC_SITE_URL` sets the absolute base URL used in Open Graph images.

| Script | Purpose |
| --- | --- |
| `npm run dev` / `build` / `start` | Development, production build, production server (both regenerate the land mesh first) |
| `npm run lint`, `npm run typecheck` | ESLint (Next.js rules) and TypeScript |
| `npm test` | Vitest unit and data-integrity suites |
| `npm run test:e2e` | Playwright end-to-end tests (set `PLAYWRIGHT_CHANNEL=chrome` to use an installed Chrome) |
| `npm run check:links` | Checks every Wikipedia slug (also run weekly in CI) |
| `npm run data:borders`, `data:elevation`, `data:population` | Rebuild the Cliopatria, ETOPO and HYDE derivatives from their sources |

### Controls

| Input | Action |
| --- | --- |
| Drag / scroll | Orbit and zoom (yields the directed camera) |
| `Shift` + arrows, `+` / `-` | Orbit and zoom from the keyboard |
| `←` / `→` | Previous or next step in a story; ten years back or forward in the atlas (`Alt` for a century) |
| `Space` | Play or pause |
| `Cmd+K` / `Ctrl+K` | Search stories, people, events, or type a year such as `1789` or `52 BC` |
| `Esc` | Close the open card |

## Architecture

```
src/
  app/[lang]/        Localised page with metadata; app/api/og renders share images
  components/story/  Story panel, step timeline, figure card, narration
  components/atlas/  Layer panel, legends, atlas timeline, place card, world event card
  components/hud/    Top bar and mode switch, search palette, labels, playback and hotkeys
  data/              Stories (campaigns and trails), catalog, world events, trade routes, region timelines
  geo/               Spherical math, triangulation, relief, borders, regions, population, travel solver
  i18n/              Locale config, dictionaries, French translations of every story and dataset
  scene/             React Three Fiber layers
  shaders/           GLSL for ocean, land, atmosphere, raster overlays, population, arcs, beacons, lights
  store/             Zustand stores (time and mode, atlas layers, world data, polities)
  workers/           Travel-time and border rasterisation workers
scripts/             Land caps, catalogs, borders, elevation, population, link checks
```

Scene layers read the stores transiently inside `useFrame`, so playback never triggers React renders in the render loop. Every layer eases in and out over time instead of popping, raster overlays crossfade between dates, and stories load on demand from a lightweight catalog.

## Data model

A story is a chronicle (events, routes, territories) plus a story layer: an era, ordered steps that each reference the events, routes, territories and figures they show, and key figures with dated places. French translations mirror every field and are merged at load time. Validators in `.claude/scratch` check ids, dates, coordinates, Wikipedia titles, French coverage and typography.

## Quality and performance

- **Tests:** Vitest covers spherical math, crack-free triangulation, the travel solver, the land-cap format, the catalog, the integrity of every story and translation, the atlas time scale, region timelines and population decoding. Playwright covers stories, figures, search, shared links, atlas layers, place lookups and the French locale. GitHub Actions runs lint, typecheck, unit tests, build and end-to-end tests on every push, plus a weekly Wikipedia link check.
- **Stable rendering:** a depth range that follows the camera, polygon offsets between land and coastlines, SMAA under the bloom pass, label hysteresis and labels that stop being GPU layers when hidden prevent flicker while moving.
- **Quality tiers:** the tier (pixel ratio, bloom, grain, particle budgets) is chosen once from hardware hints and can be changed in settings; it never switches mid-session, because reallocating the drawing buffer can flash black frames.
- **Off the main thread and lazy:** travel times and border rasterisation run in Web Workers, land caps are precomputed at build time, the frame rate drops to 30 fps when idle, and stories, world data and post-processing load on demand.

## Data sources and credits

- Historical borders: **Cliopatria**, Seshat Global History Databank (Bennett et al. 2025, *Scientific Data* 12, 247), CC BY 4.0. See `public/data/borders/ATTRIBUTION.md`.
- Population: **HYDE 3.2.1** (Klein Goldewijk et al., PBL Netherlands Environmental Assessment Agency), CC BY 3.0, aggregated to one degree. See `public/data/population/ATTRIBUTION.md`.
- Relief and bathymetry: **NOAA NCEI ETOPO 2022** (public domain). See `public/data/ELEVATION_ATTRIBUTION.md`.
- Land and country outlines: **Natural Earth** via `world-atlas` (public domain).
- Religion and language timelines, stories, world events and trade routes: written for Chronos from standard references; the religion and language maps are explicit approximations.
- Portraits, thumbnails and summaries: **Wikipedia** REST API, fetched at runtime.

## License

MIT — see [LICENSE](LICENSE). Third-party data keeps its own license as listed above.
