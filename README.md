# Chronos

**An interactive 3D temporal and geopolitical atlas, in English and French.** Chronos turns trade networks, scientific diffusion, migrations, campaigns and shifting borders into a cinematic, explorable globe, and keeps asking the question maps are best at answering: *why here?*

The experience is procedural. The repository ships no video, no photographs and no map tiles: the planet, atmosphere, relief, bathymetry, borders, routes, beacons, diagrams, posters and even the ambient sound are generated at runtime from compact vector and grid data, and archival thumbnails are fetched on demand from Wikipedia.

## Highlights

**The globe**
- **Real relief and bathymetry.** A 0.5° grid derived from NOAA ETOPO 2022 drives hillshading, a terrain tint by altitude and latitude, and true ocean-depth contours, all in GLSL.
- **Historical political map.** Polity borders for any year from 3400 BCE to 2024, from the Cliopatria database (Seshat, CC BY 4.0), rasterised in a Web Worker and labelled with the largest states of the moment.
- **Atmosphere and light.** Rayleigh/Mie limb scattering, a solar terminator that follows the season of the scrubbed year, and night-side city lights scaled by population.
- **Great-circle storytelling.** SLERP routes with shader-driven pulses and instanced comet particles that trace the active corridors of each chronicle.

**Content**
- **Eleven curated campaigns:** the Silk Road, the Islamic Golden Age, the Age of Sail, the Fall of Rome, the Industrial Revolution, the Space Race, the Mongol Empire, the Bantu Expansion, Polynesian navigation, the Columbian Exchange and the Indian Ocean world.
- **Nine threads and journeys:** silver, zero, plague, paper and printing; Xuanzang, Ibn Battuta, Zheng He and Olaudah Equiano.
- **Fully bilingual.** Every chronicle, reference dataset and interface string exists in English and French (`/en`, `/fr`), and AI chronicles are generated in the reader's language.
- **Honest uncertainty.** Debated or approximate events carry a badge and a note on what historians disagree about.

**Lenses and layers**
- **Travel time:** days needed to reach anywhere by surface travel in a given era, solved by Dijkstra in a Web Worker.
- **Edge of the known world:** what Greco-Roman, Chinese, Islamic, Latin European and Polynesian geographers had charted.
- **Winds, currents and climate:** ocean currents, trade winds, a monsoon season switch and climate periods on the timeline.
- **Great cities**, **Meanwhile elsewhere** (contemporary events in other chronicles) and **Compare two years** (an outline overlay of another year's borders).

**Modes and tools**
- **Landing gallery** with three entry points: explore, play, or watch a tour.
- **Why here? challenge** with three difficulty levels, free hints (continent, then region) and a shareable result.
- **Teacher mode:** pick places, share a class code, and read a results page with each student's score and the class's average error per place.
- **Narrated tours** (system speech synthesis), **share links** that restore the exact view, **printable classroom sheets**, **poster export** and **synthesised ambient sound**.
- **AI chronicle director:** `Cmd+K` accepts any historical question. With an OpenAI key the campaign streams in progressively, is cached and gets a share link; without one, an offline encyclopedia answers from curated entries.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000; the proxy redirects to `/en` or `/fr` from the browser language (a cookie remembers an explicit choice). Everything works without configuration.

| Variable | Purpose |
| --- | --- |
| `OPENAI_API_KEY` | Enables structured, streamed chronicle generation and AI follow-up answers |
| `CHRONICLE_MODEL` | OpenAI model (default `gpt-5.4-mini`) |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Persistent storage for generated chronicles and class challenges (otherwise kept in server memory) |
| `NEXT_PUBLIC_SITE_URL` | Absolute base URL for Open Graph images |

| Script | Purpose |
| --- | --- |
| `npm run dev` / `build` / `start` | Development, production build, production server (both regenerate the land mesh first) |
| `npm run lint`, `npm run typecheck` | ESLint (Next.js rules) and TypeScript |
| `npm test` | Vitest unit and data-integrity suites |
| `npm run test:e2e` | Playwright end-to-end tests (set `PLAYWRIGHT_CHANNEL=chrome` to use an installed Chrome) |
| `npm run check:links` | Checks every Wikipedia slug (also run weekly in CI) |
| `npm run data:borders`, `npm run data:elevation` | Rebuild the Cliopatria and ETOPO derivatives from their sources |

### Controls

| Input | Action |
| --- | --- |
| Drag / scroll | Orbit and zoom (yields the directed camera) |
| `Shift` + arrows, `+` / `-` | Orbit and zoom from the keyboard |
| `Space` | Play or pause chronological playback |
| `←` / `→` and `[` / `]` | Previous or next chapter, previous or next event |
| `Cmd+K` / `Ctrl+K` | Open the palette: chronicles, full-text event search, AI generation |
| Wheel on the timeline | Zoom the focus track (double-click to reset) |

## Architecture

```
src/
  app/[lang]/             Localised pages: atlas, classroom sheets, class results
  app/api/                chronicle (JSON and NDJSON stream), shared chronicles, follow-up questions,
                          class challenges, Open Graph images
  ai/                     Zod schemas, generation, normalisation, offline encyclopedia and answers
  audio/                  Web Audio ambience
  classroom/              Class challenge schemas
  components/             HUD, tool menus, lenses, dossier, landing, palette
  data/                   Campaigns, trails, catalog (lazy loaders), geography, environment, cities, uncertainty
  geo/                    Spherical math, triangulation, relief, borders, travel solver
  i18n/                   Locale config, dictionaries, French content and reference translations
  scene/                  React Three Fiber layers
  server/                 Key-value storage (Upstash or memory), ids, class storage
  shaders/                GLSL for ocean, land, atmosphere, political map, arcs, beacons, lenses, lights
  store/                  Zustand stores (chronicle and time, atlas modes, challenge, generation, polities)
  workers/                Travel-time and border rasterisation workers
scripts/                  Land caps, catalog, French catalog, borders, elevation, link checks
```

All scene layers read the stores transiently inside `useFrame`, so scrubbing and playback never trigger React renders in the render loop. Chronicles load on demand from a lightweight catalog; the full library is fetched only for search, comparison panels and offline fallbacks.

## Geospatial pipeline

**Coordinates.** Everything is `[longitude, latitude]` in degrees; `x = r·cosφ·sinλ`, `y = r·sinφ`, `z = r·cosφ·cosλ`.

**Land.** Natural Earth rings are unwrapped across the antimeridian, closed through the pole where needed, filled with jittered Steiner points for `earcut`, refined with conforming edge splits (no T-junction cracks) and oriented outward with a 3D test that falls back to planar orientation for slivers. The caps are triangulated once at build time (`scripts/build-land.mts`) into a quantised binary; the browser only adds walls and coastlines.

**Relief.** `scripts/build-elevation.mts` averages ETOPO 2022 into a 720 × 360 byte grid (square-root encoding for depth and altitude). Shaders compute slopes in a local east/north frame for hillshading and read depth for bathymetric contours.

**Borders.** `scripts/build-borders.mts` simplifies, quantises and splits Cliopatria into century bins of TopoJSON. At runtime a worker picks the polities active in the scrubbed year, rasterises them with d3-geo into an equirectangular texture and returns the largest polities as labels; the comparison overlay uses the same path in outline mode.

**Travel time.** A half-degree grid Dijkstra with era-specific land and sea speeds, mountain penalties, pack ice, port delays and an open-ocean barrier before 1450, run in a self-contained worker and drawn as isochrones.

## AI

`POST /api/chronicle/stream` validates the query with Zod, checks the cache, then streams `progress` lines (title, events and routes as they are written) and a `final` line with the normalised campaign and its share id. `generateText`/`streamText` with `Output.object` produce `ChronicleCampaignSchema`, which uses nullable fields and `{ lon, lat }` objects for strict structured outputs. Without a key, or on failure, `matchEncyclopedia` prefers a whole chronicle whose title matches, otherwise assembles one from matching events. `POST /api/chronicle/ask` answers follow-up questions with a camera target, online or offline.

## Quality and performance

- **Tests:** about 110 Vitest cases (spherical math, crack-free triangulation, travel solver, land-cap format, encyclopedia, builders, catalog, data integrity for every chronicle, French coverage) and Playwright end-to-end tests for the atlas, palette, challenge, classroom, APIs and French locale. GitHub Actions runs lint, typecheck, unit tests, build and end-to-end tests on every push, plus a weekly Wikipedia link check.
- **Adaptive quality:** a starting tier from hardware hints, then `PerformanceMonitor` steps pixel ratio, bloom, grain, stars and particle budgets; the tier can be pinned in settings.
- **Off the main thread:** travel times and border rasterisation in Web Workers, land caps precomputed at build time, remaining work time-sliced into 8 ms slices.
- **Idle and lazy:** 30 fps after a few seconds without interaction or playback; chronicles, post-processing and the full library load on demand; WebGL context loss is caught with a recovery prompt.

## Data sources and credits

- Historical borders: **Cliopatria**, Seshat Global History Databank (Bennett et al. 2025, *Scientific Data* 12, 247), CC BY 4.0, simplified and binned by Chronos. See `public/data/borders/ATTRIBUTION.md`.
- Relief and bathymetry: **NOAA NCEI ETOPO 2022** (public domain). See `public/data/ELEVATION_ATTRIBUTION.md`.
- Land outlines: **Natural Earth** via `world-atlas` (public domain).
- Archival thumbnails and summaries: **Wikipedia** REST API, fetched at runtime.

## License

MIT — see [LICENSE](LICENSE). Third-party data keeps its own license as listed above.
