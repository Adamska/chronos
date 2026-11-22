import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "pacific-austronesian-expansion",
    title: "Austronesian Expansion from Taiwan",
    year: -1500,
    place: "Taiwan and the northern Philippines",
    coordinates: [121.1, 22.8],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Austronesian_peoples",
    summary:
      "Farmers and seafarers speaking Austronesian languages crossed from Taiwan to the northern Philippines by about 2200 BCE, and by 1500 BCE their descendants were spreading through island Southeast Asia. Around this time some made an open-sea crossing of more than 2,000 kilometres to the Mariana Islands.",
    context:
      "The Austronesian family now numbers well over a thousand languages, spoken from Madagascar to Rapa Nui, and linguists trace its deepest branches to Taiwan. Outrigger canoes, red-slipped pottery, rice and later root and tree crops travelled with the migrants. The date of the Marianas crossing is still debated, with estimates from about 1500 to 1100 BCE.",
    whyHere:
      "The Luzon Strait is broken by the Batanes and Babuyan islands, so canoes from Taiwan could hop south with land almost always in sight. Beyond them, island Southeast Asia is a maze of sheltered seas where the alternating monsoons let sailors go out on one season's wind and come home on the next.",
    keyFigures: ["Peter Bellwood", "Robert Blust"],
  },
  {
    id: "pacific-lapita-bismarcks",
    title: "Lapita Culture Emerges in the Bismarck Archipelago",
    year: -1350,
    endYear: -1300,
    place: "Talepakemalai, Mussau Islands",
    coordinates: [149.65, -1.5],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Lapita_culture",
    summary:
      "Between about 1500 and 1300 BCE, with recent dating favouring the later end, a new way of life appeared on the small islands of the Bismarck Archipelago: stilt-house villages over lagoons, fine dentate-stamped pottery, outrigger fishing and long-distance exchange. Archaeologists call it Lapita, after a site in New Caledonia.",
    context:
      "New Guinea and the Bismarcks had been settled by Papuan-speaking peoples for more than 40,000 years. Lapita grew from Austronesian newcomers meeting and mixing with these older communities, and obsidian from Talasea on New Britain moved through its exchange networks over thousands of kilometres.",
    whyHere:
      "The Bismarcks form a chain of intervisible islands with reef-fringed lagoons, rich in fish and shellfish, off the coast of New Guinea. Offshore islets like Mussau kept settlers close to the sea lanes and away from the malarial coastal swamps of the larger islands.",
    keyFigures: ["Patrick Vinton Kirch", "Roger Green"],
    schematic: {
      kind: "causal",
      steps: [
        "Austronesians reach the Bismarcks",
        "Newcomers mix with Papuan peoples",
        "Lapita pottery and villages appear",
        "Outrigger fleets push east",
      ],
    },
  },
  {
    id: "pacific-remote-oceania",
    title: "Lapita Voyagers Cross into Remote Oceania",
    year: -1000,
    endYear: -900,
    place: "Teouma, Efate, Vanuatu",
    coordinates: [168.4, -17.77],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Teouma",
    summary:
      "Around 1000 BCE Lapita voyagers sailed past the end of the Solomon Islands chain into islands no human had ever reached, settling Vanuatu and, within a century or two, New Caledonia and Fiji. The Teouma cemetery on Efate holds some of the earliest burials of these first settlers.",
    context:
      "Ancient DNA from Teouma shows that the first people of Vanuatu were almost entirely of East Asian, Austronesian ancestry; Papuan ancestry arrived in later waves. The settlers brought pigs, dogs, chickens and the Pacific rat, and they hunted the region's tortoises, crocodiles and flightless birds to extinction.",
    whyHere:
      "East of the main Solomons the gaps between islands open to 350 kilometres and more, beyond the range of sight, marking the boundary between Near and Remote Oceania. Crossing it demanded deliberate open-sea navigation, but the islands beyond were empty, and malaria fades out east of Vanuatu.",
    keyFigures: ["Stuart Bedford", "Matthew Spriggs"],
  },
  {
    id: "pacific-tonga-nukuleka",
    title: "First Settlement of Tonga at Nukuleka",
    year: -888,
    place: "Nukuleka, Tongatapu",
    coordinates: [-175.08, -21.12],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Nukuleka",
    summary:
      "Uranium-thorium dating of coral files from the Lapita village at Nukuleka places the founding of Tonga at about 888 BCE, within a few years. Its excavators describe it as the first settlement in Polynesia.",
    context:
      "Settlers probably came from Fiji, a few days' sail to the west, and within a generation or two small hamlets spread along the shores of Tongatapu's lagoon. Lapita pottery here soon lost its stamped decoration, a first step toward a distinct West Polynesian culture.",
    whyHere:
      "Nukuleka sits on a sandy spit at the mouth of the Fangaʻuta lagoon, with reef flats full of shellfish on one side and a sheltered anchorage on the other. Tongatapu is a raised limestone island whose volcanic-ash soils proved some of the most fertile in the region.",
    keyFigures: ["David Burley"],
  },
  {
    id: "pacific-samoa-mulifanua",
    title: "Lapita Settlers Reach Samoa",
    year: -800,
    place: "Mulifanua, Upolu",
    coordinates: [-172.03, -13.83],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Mulifanua",
    summary:
      "Around 800 BCE Lapita settlers founded a village on the western tip of Upolu. Its remains were found in 1973 when dredging for a ferry berth brought up decorated pottery from beneath the lagoon, where the site had sunk as the island slowly subsided.",
    context:
      "Mulifanua is the only site in Samoa with dentate-stamped Lapita pottery; later Samoan sites hold only plain ware. Within a few centuries Tonga, Samoa, Futuna and ʻUvea formed a single interacting world, the cradle of Polynesian culture.",
    whyHere:
      "Samoa's high volcanic islands are the largest in West Polynesia, with permanent streams, deep soils and broad reef lagoons, and they lie only about 900 kilometres north of Tonga. The western end of Upolu faces the strait toward Savaiʻi, a natural landfall for canoes arriving from the southwest.",
    keyFigures: ["Roger Green"],
  },
  {
    id: "pacific-long-pause",
    title: "The Long Pause in West Polynesia",
    year: -750,
    endYear: 1000,
    place: "Tonga, Samoa, Futuna and ʻUvea",
    coordinates: [-172.4, -13.6],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Polynesians",
    summary:
      "After the rapid Lapita advance, colonisation stopped at Tonga and Samoa for roughly 1,800 years. During this Long Pause the settlers developed what archaeologists call Ancestral Polynesian society, along with the Proto-Polynesian language from which Tongan, Samoan, Tahitian, Hawaiian and Māori descend.",
    context:
      "Why the pause lasted so long is debated. Explanations include the much larger gaps to the east, the need for better canoes and sailing techniques, and shifts in climate that briefly made westerly winds more common. Some archaeologists suspect early sites further east still await discovery, though none has yet been securely dated.",
    whyHere:
      "West of Samoa, islands lie a few hundred kilometres apart; to the east the nearest high islands are 1,000 to 2,400 kilometres away, almost directly against the trade winds. The gap was a barrier of distance and wind as much as of open water.",
    keyFigures: ["Patrick Vinton Kirch", "Roger Green", "Atholl Anderson"],
    schematic: {
      kind: "causal",
      steps: [
        "Lapita settlers reach Tonga and Samoa",
        "Eastern gaps exceed 1,000 km",
        "Trade winds blow against voyagers",
        "Ancestral Polynesian culture forms",
        "Eastward breakout after 1000 CE",
      ],
    },
  },
  {
    id: "pacific-madagascar",
    title: "Austronesian Settlers Reach Madagascar",
    year: 500,
    endYear: 800,
    place: "Northern Madagascar",
    coordinates: [49.2, -15.0],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "History_of_Madagascar",
    summary:
      "Sometime between about 500 and 800 CE seafarers from the Indonesian archipelago settled Madagascar, more than 7,000 kilometres west of their homeland. Malagasy is an Austronesian language whose closest relative is Maʻanyan, spoken in southeastern Borneo.",
    context:
      "Malagasy also carries borrowings from Malay and Javanese, suggesting the migrants sailed within Srivijaya-era trading networks. Genetic studies show the islanders descend from both Austronesian and Bantu-speaking African ancestors, and Asian crops such as rice reached the island with the newcomers.",
    whyHere:
      "In the southern Indian Ocean the South Equatorial Current and the southeast trade winds run steadily west from Indonesia toward Madagascar; wreckage from Malaysia Airlines Flight 370 drifted the same way to Réunion and Madagascar. Voyagers may also have followed the coasts of South Asia and East Africa.",
    keyFigures: ["Otto Christian Dahl", "Alexander Adelaar"],
  },
  {
    id: "pacific-wayfinding",
    title: "Wayfinding by Star, Swell and Bird",
    year: 1000,
    place: "Manuʻa Islands, eastern Samoa",
    coordinates: [-169.47, -14.23],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Polynesian_navigation",
    summary:
      "Polynesian navigators found islands without instruments by memorising the rising and setting points of stars, reading ocean swells through the hull, watching land-based seabirds and noticing clouds piled over unseen islands. Double-hulled voyaging canoes with crab-claw sails carried families, crops and animals.",
    context:
      "Navigation was specialist knowledge passed down within families. Its power was demonstrated in 1976, when the voyaging canoe Hōkūleʻa sailed from Hawaiʻi to Tahiti guided by the Micronesian navigator Mau Piailug without instruments.",
    whyHere:
      "In the tropical Pacific the trade winds blow steadily from the east. Geoffrey Irwin argued that explorers deliberately sailed upwind, since if they found nothing they could run home safely before the wind, which explains why settlement advanced east against the prevailing wind.",
    keyFigures: ["Mau Piailug", "Ben Finney", "Geoffrey Irwin"],
    primarySource: {
      excerpt:
        "In their longer Voyages they steer in the day by the Sun and in the night by the Stars. Of these they know a very large part by their Names.",
      attribution: "Joseph Banks, Endeavour journal, 'Manners and Customs of South Sea Islands', 1769",
    },
    schematic: {
      kind: "causal",
      steps: [
        "Trade winds blow from the east",
        "Explorers sail upwind first",
        "Failure means a safe run home",
        "Found islands can be reached again",
      ],
    },
  },
  {
    id: "pacific-society-islands",
    title: "Settlement of the Society Islands",
    year: 1025,
    endYear: 1120,
    place: "Huahine, Society Islands",
    coordinates: [-151.02, -16.73],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Society_Islands",
    summary:
      "Voyagers from West Polynesia finally broke the Long Pause and settled the Society Islands, which radiocarbon dating of short-lived plant material places at about 1025 to 1120 CE. Within two or three centuries their descendants had reached every habitable island in the eastern Pacific.",
    context:
      "A 2011 study by Janet Wilmshurst and colleagues discarded older, less reliable dates and showed that East Polynesia was settled centuries later than once thought, in two quick pulses. Early sites such as Vaitoʻotia on Huahine contain adzes, fishhooks and canoe timbers.",
    whyHere:
      "The Society Islands are high volcanic islands ringed by broad lagoons, with fertile valleys, fresh water and abundant reef fish. They lie at the centre of East Polynesia, within about 1,500 kilometres of the Cook, Austral, Tuamotu and Marquesas groups.",
    keyFigures: ["Janet Wilmshurst", "Yosihiko Sinoto"],
  },
  {
    id: "pacific-marquesas",
    title: "Voyagers Settle the Marquesas",
    year: 1100,
    endYear: 1250,
    place: "Hane, Ua Huka",
    coordinates: [-139.55, -8.92],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Marquesas_Islands",
    summary:
      "Polynesians settled the Marquesas roughly between 1100 and 1250 CE. Excavations at the Hane dune site on Ua Huka and Haʻatuatua on Nuku Hiva once yielded far earlier dates, but these have not held up under modern dating.",
    context:
      "Some archaeologists still argue that the Marquesas were settled as early as the Society Islands. The islands became a springboard for later voyages, and a 2020 genetic study found the earliest trace of Native American ancestry in Polynesia on Fatu Hiva in the southern Marquesas.",
    whyHere:
      "The Marquesas are steep, young volcanic islands with almost no protective reefs, so settlers turned to deep valleys for breadfruit groves and to the open sea for fish. They lie about 1,400 kilometres northeast of Tahiti, the closest major group to Hawaiʻi and to South America.",
    keyFigures: ["Yosihiko Sinoto", "Robert Carl Suggs"],
  },
];
