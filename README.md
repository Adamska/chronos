# Chronos

**An interactive 3D temporal and geopolitical atlas.** Chronos turns trade networks, scientific diffusion, migrations, campaigns and shifting borders into a cinematic, explorable globe — and keeps asking the question maps are best at answering: *why here?*

The entire experience is procedural. The repository ships no video, no textures and no images: the planet, its atmosphere, bathymetry, terrain barriers, routes, beacons and dossier diagrams are all generated at runtime from vector data, and archival thumbnails are fetched on demand from Wikipedia.

## Highlights

- **Procedural atmospheric globe.** Custom GLSL ocean with Rayleigh/Mie limb scattering, bathymetric contour lines derived from a runtime-rasterised continental shelf field, an anti-aliased graticule and a solar terminator whose declination follows the season of the scrubbed year.
- **Spherical vector pipeline.** Natural Earth TopoJSON is triangulated directly onto the sphere with `earcut`, Steiner grid points and crack-free conforming refinement, then extruded into landmasses, mountain barriers (Alps, Himalayas, Hindu Kush, Zagros, Andes and more) and translucent historical territories.
- **Great-circle storytelling.** Routes are SLERP great circles lifted on a smooth altitude profile. Over a thousand instanced flow particles and shader-driven light pulses travel along the active corridors of each campaign, and beacons pulse at events scaled by historical significance.
- **Choreographed camera.** Each chapter flies the camera to a tilted regional view; the director yields the moment you grab the globe and offers to resume the tour.
- **Anti-clutter labelling.** Labels are projected to screen space every frame and greedily culled by priority, zoom altitude, facing and overlap.
- **Eleven curated campaigns.** The Silk Road, the Islamic Golden Age, the Age of Sail, the Fall of Rome, the Industrial Revolution, the Space Race, the Mongol Empire, the Bantu Expansion, Polynesian navigation, the Columbian Exchange and the Indian Ocean world — each with 19–22 dated events, routes, territories, chapters, primary sources and Wikipedia references.
- **Threads and journeys.** Follow one thing across centuries (silver, zero, plague, paper, printing) or one documented traveller (Xuanzang, Ibn Battuta, Zheng He, Olaudah Equiano), stop by stop.
- **Travel-time lens.** Pick any point and year to see how many days it took to reach everywhere else by surface travel, from caravans and coastal oars to sail, steam and rail, slowed by mountains, pack ice and open ocean.
- **Edge of the known world.** Fog veils everything a given culture had not yet charted: Greco-Roman, Han and Tang, Islamic, Latin European and Polynesian perspectives across their eras.
- **Winds, currents and climate.** Ocean currents, trade winds, westerlies and a season switch for the Indian Ocean monsoon, plus climate periods (Roman Warm Period, Late Antique Little Ice Age, Medieval Climate Anomaly, Little Ice Age) on the timeline.
- **Great cities.** Forty-six cities scaled by estimated population at the scrubbed year, with the world's largest city crowned.
- **Meanwhile elsewhere.** Events from every other chronicle happening within a few decades of the current year, listed and marked on the globe.
- **Why here? challenge.** Guess where an event happened on a hint-free globe, then see the great-circle error, a score and the geographic reason.
- **Honest uncertainty.** Debated or approximate dates and places carry a visible badge and a note on what historians disagree about.
- **Narrated tours, classroom sheets and share links.** Chapter tours with optional speech synthesis, printable per-chronicle worksheets at `/classroom/<id>`, and URLs that restore the chronicle, year, selection, lens and camera.
- **AI chronicle director.** `Cmd+K` accepts any historical question. With an OpenAI key, a Zod-validated structured output generates a full campaign; without one, an offline encyclopedia assembles a chronicle from curated entries, so the deployed site never dead-ends.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The built-in campaigns work immediately with no configuration.

To enable live AI generation, copy `.env.example` to `.env.local` and set:

| Variable | Purpose | Default |
| --- | --- | --- |
| `OPENAI_API_KEY` | Enables structured chronicle generation | unset (offline encyclopedia) |
| `CHRONICLE_MODEL` | OpenAI model used for generation | `gpt-5.4-mini` |

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

### Controls

| Input | Action |
| --- | --- |
| Drag / scroll | Orbit and zoom (yields the directed camera) |
| `Space` | Play or pause chronological playback |
| `←` / `→` | Previous or next chapter |
| `[` / `]` | Previous or next event |
| `Cmd+K` / `Ctrl+K` | Open the chronicle palette |
| `Esc` | Close the palette or the dossier |
| Click a beacon, route, label or tick | Open the dossier |
| Click the globe (travel lens) | Move the travel-time origin |

## Architecture

```
src/
  app/                    Next.js App Router shell and the /api/chronicle route
  ai/                     Zod schemas, generation, normalisation and the offline encyclopedia
  app/classroom/[id]/     Static, printable classroom sheets for every chronicle
  components/
    atlas/                Tool rail, lens panels, challenge, tour, meanwhile, index, settings, ask, sharing
    hud/                  Timeline scrubber, layer filters, palette, campaign header, label overlay
    dossier/              Slide-over dossier, Wikipedia figure, procedural SVG schematics
  data/
    campaigns/            Eleven curated campaigns plus registry helpers
    trails/               Threads and journeys, converted into chronicles at load
    geography.ts          Terrain barriers and strategic chokepoints
    environment.ts        Currents, winds, monsoons and climate periods
    knownWorld.ts         Known-world snapshots for five cultural perspectives
    cities.ts             Population estimates for forty-six cities
    uncertainty.ts        Notes on debated and approximate events
  geo/                    Spherical math, ring planarisation, TopoJSON/earcut builders, shelf field
  scene/                  React Three Fiber layers: globe, territories, arcs, beacons, labels, camera
  shaders/                GLSL for the ocean, land, atmosphere, arcs, beacons and territories
  store/                  Zustand stores: chronicle and time, atlas modes, challenge
  types/                  Domain types shared by every layer
```

The page renders a client-only canvas (`ssr: false`) beneath an HTML HUD. All scene layers read the Zustand store transiently inside `useFrame` (`getState()`), so time scrubbing and playback never trigger React renders in the render loop. Playback advances the year with `requestAnimationFrame` outside the canvas; the timeline needle and year readout update through store subscriptions that write to the DOM directly.

## Geospatial pipeline

**Coordinates.** Everything is stored as `[longitude, latitude]` in degrees. The sphere mapping is `x = r·cosφ·sinλ`, `y = r·sinφ`, `z = r·cosφ·cosλ`, so the prime meridian on the equator faces the default camera.

**Land triangulation** (`src/geo/planarRings.ts`, `src/geo/topoBuilder.ts`):

1. Rings from `world-atlas` are unwrapped so longitudes stay continuous across the antimeridian; rings that encircle a pole (Antarctica) are closed through the pole, and holes are shifted by multiples of 360° to sit inside their outer ring.
2. A latitude-aware, staggered and jittered grid of interior points is inserted into `earcut` as single-vertex holes, giving well-shaped triangles instead of long slivers.
3. Triangles are refined by splitting any edge longer than 6° at a cached midpoint. Because the split decision depends only on the edge itself, neighbouring triangles always agree and the mesh stays crack-free.
4. Vertices are projected onto the sphere, caps get radial normals, and coastline walls are extruded with winding-aware outward normals.

The result is about 50,000 triangles for the whole planet, built in roughly a quarter of a second.

**Great circles** (`src/geo/sphericalMath.ts`). `ElevatedGreatCircle` is a `THREE.Curve` that SLERPs between unit vectors (with an antipodal fallback) and lifts the path with an eased `4t(1−t)` profile whose peak scales with angular distance. Multi-stop routes are `CurvePath`s of these segments. Arc-length samples are precomputed so per-frame particle motion is a table lookup.

**Bathymetry.** At startup, d3-geo rasterises the land mask into an offscreen equirectangular canvas, two separable box-blur passes produce shelf and basin fields, and the ocean shader turns that field into depth tint and contour lines. Nothing is downloaded.

**Travel time** (`src/geo/travelTime.ts`). A time-sliced Dijkstra runs over a 720×360 grid of half-degree cells derived from the land mask. Each era has land and sea speeds; mountain barriers divide land speed, pack ice slows high-latitude seas, a port delay applies between land and sea, and before 1450 open ocean more than seven degrees from any coast is effectively closed. Results are log-encoded into a single-channel texture and drawn as isochrones (one week, one month, three months, one year) by a lens shader.

**Known world** (`src/geo/knownWorld.ts`). Each perspective's snapshot is a set of spherical discs, rasterised with `d3.geoCircle` into an equirectangular mask and blurred, then rendered as hatched fog with a glowing frontier.

**Geographic insight.** The dossier measures great-circle distances to the nearest strategic chokepoint and mountain barrier, and the route view reports per-leg and total distances.

## Data model

Campaigns implement `ChronicleCampaign` (`src/types/chronicle.ts`):

- `HistoricalEvent` — date, place, `[lon, lat]`, layer, significance (1–5), Wikipedia slug, summary, geopolitical context, a geographic *why here*, key figures, optional primary source and optional exchange or causal schematic.
- `GeoArc` — a multi-waypoint route with kind, layer, active years, intensity and cargo.
- `TerritoryZone` — a simplified polity outline with active years and a cartographic colour.
- `CameraKeyframe` — a chapter: target, altitude in globe radii, tilt and caption.

Layers map to the four filters: Borders & Empires, Trade & Diffusion, Conflicts & Turning Points, and Science & Ideas.

## AI chronicle generation and follow-up questions

`POST /api/chronicle` accepts `{ "query": string }`.

1. The request is validated with `ChronicleRequestSchema`.
2. With `OPENAI_API_KEY` set, the AI SDK's `generateText` produces `ChronicleCampaignSchema` structured output. The generation schema uses nullable fields and `{ lon, lat }` objects so it is compatible with strict structured outputs.
3. `normalizeGeneratedCampaign` clamps coordinates and years, de-duplicates ids, repairs references, discards degenerate geometry and synthesises chapters when needed.
4. Without a key, or if generation fails, `matchEncyclopedia` first prefers a whole chronicle, thread or journey whose title matches the query; otherwise it expands the query with curated topic synonyms and year hints ("15th century", "130 BCE") and either assembles a focused chronicle from matching events across all campaigns or returns the closest curated campaign. The client repeats this fallback locally if the network is unavailable.

`POST /api/chronicle/ask` answers a follow-up question about the chronicle on screen. The client sends the question with a compact list of the chronicle's events; with a key, a structured output (`AskAnswerSchema`) returns a short answer, supporting event ids and a camera target, and the camera flies there. Without a key, `answerOffline` ranks the chronicle's events against the question and answers from their geographic explanations.

## Performance notes

- Adaptive quality: a starting tier is chosen from hardware hints (cores, memory, pointer type), and drei's `PerformanceMonitor` steps between high, balanced and battery tiers (pixel ratio, bloom, film grain, star count, particle budget) as the frame rate changes. The tier can also be pinned in settings.
- Heavy computation is time-sliced in 8 ms slices that yield to the browser: land triangulation, the shelf field and the travel-time solver never block input.
- Shader error checks are disabled in production so drivers can compile programs in parallel.
- No React state updates inside `useFrame`; scratch vectors and matrices are module-level and reused.
- Arc tubes are merged into a single draw call; particles and beacons are instanced, and beacon pulses animate in the vertex shader.
- Per-campaign geometries and materials are disposed when the campaign changes.

## License

MIT — see [LICENSE](LICENSE).
