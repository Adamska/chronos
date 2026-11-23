import type { KeyFigure } from "@/types/story";

export const figures: readonly KeyFigure[] = [
  {
    id: "pacific-fig-tupaia",
    name: "Tupaia",
    role: "Raʻiātean priest and navigator who charted the Pacific for Cook",
    born: 1725,
    died: 1770,
    wikipediaSlug: "Tupaia",
    places: [
      { year: 1725, place: "Raʻiātea, Society Islands", coordinates: [-151.36, -16.84], note: "Born on Raʻiātea, home of the great marae of Taputapuātea, he trained as a priest of the god ʻOro and a navigator." },
      { year: 1760, place: "Tahiti", coordinates: [-149.55, -17.75], note: "Fled to Tahiti after warriors from Bora Bora conquered Raʻiātea, and became adviser to the chiefess Purea." },
      { year: 1767, place: "Matavai Bay, Tahiti", coordinates: [-149.48, -17.5], note: "Met the first British visitors when Samuel Wallis's Dolphin anchored in the bay." },
      { year: 1769, place: "Matavai Bay, Tahiti", coordinates: [-149.48, -17.5], note: "Joined James Cook's Endeavour as pilot, and began a chart of some 74 islands." },
      { year: 1769, place: "Rurutu, Austral Islands", coordinates: [-151.35, -22.45], note: "Guided the ship south from the Society Islands to an island he knew by name." },
      { year: 1769, place: "Tūranganui-a-Kiwa, Aotearoa", coordinates: [178.02, -38.67], note: "Spoke with Māori in a language close to his own and served as the expedition's interpreter." },
      { year: 1770, place: "Batavia, Java", coordinates: [106.81, -6.13], note: "Died of fever while the Endeavour was being repaired in the Dutch port." },
    ],
  },
  {
    id: "pacific-fig-cook",
    name: "James Cook",
    role: "British navigator who explored the Pacific on three voyages",
    born: 1728,
    died: 1779,
    wikipediaSlug: "James_Cook",
    places: [
      { year: 1728, place: "Marton, Yorkshire", coordinates: [-1.2, 54.55], note: "Born the son of a farm labourer, he learned seamanship on North Sea colliers." },
      { year: 1769, place: "Matavai Bay, Tahiti", coordinates: [-149.48, -17.5], note: "Observed the transit of Venus, then took Tupaia aboard before sailing south." },
      { year: 1769, place: "Tūranganui-a-Kiwa, Aotearoa", coordinates: [178.02, -38.67], note: "Made his first landfall in New Zealand, which he then charted in six months." },
      { year: 1770, place: "Botany Bay, Australia", coordinates: [151.2, -34.0], note: "Landed on the east coast of Australia and claimed it for Britain." },
      { year: 1774, place: "Rapa Nui", coordinates: [-109.35, -27.12], note: "Called at the island on his second voyage and noted its great moai, many already toppled." },
      { year: 1778, place: "Waimea, Kauaʻi", coordinates: [-159.67, 21.96], note: "Became the first European known to reach Hawaiʻi, where he found people speaking a language like Tahitian." },
      { year: 1779, place: "Kealakekua Bay, Hawaiʻi", coordinates: [-155.92, 19.48], note: "Killed on the shore in a clash with Hawaiians over a stolen boat." },
    ],
  },
];
