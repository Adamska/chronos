import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "pacific-sweet-potato",
    title: "Sweet Potato and Contact with South America",
    year: 1150,
    endYear: 1230,
    place: "Fatu Hiva, southern Marquesas",
    coordinates: [-138.65, -10.47],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Sweet_potato",
    summary:
      "The sweet potato, domesticated in tropical America, was growing in East Polynesia centuries before Europeans entered the Pacific. A 2020 genetic study found Native American ancestry in several eastern Polynesian populations, with the earliest contact dated to about 1150 to 1230 CE on Fatu Hiva.",
    context:
      "The Native American component most closely matches Indigenous peoples of present-day Colombia, though whether Polynesians sailed east or South Americans drifted west is unknown. A 2018 study argued the plant could have crossed the ocean naturally, but most specialists still favour human transport.",
    whyHere:
      "The South Equatorial Current and the southeast trades flow from the coast of South America toward the Marquesas and Tuamotus, the route the Kon-Tiki raft drifted in 1947. For Polynesians sailing upwind, the American coast was a target too large to miss.",
    keyFigures: ["Alexander Ioannidis", "Andrés Moreno-Estrada"],
    schematic: {
      kind: "causal",
      steps: [
        "Contact with northern South America",
        "Sweet potato reaches East Polynesia",
        "Kūmara spreads to Hawaiʻi and Rapa Nui",
        "Staple crop of temperate Aotearoa",
      ],
    },
  },
  {
    id: "pacific-tui-tonga",
    title: "The Tuʻi Tonga Maritime Chiefdom",
    year: 1200,
    endYear: 1500,
    place: "Lapaha (Muʻa), Tongatapu",
    coordinates: [-175.11, -21.18],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Tuʻi_Tonga_Empire",
    summary:
      "From a royal centre at Lapaha on Tongatapu, the sacred Tuʻi Tonga line built a maritime chiefdom whose influence reached Samoa, ʻUvea, Futuna and parts of Fiji. Tradition credits Tuʻitātui with raising the Haʻamonga ʻa Maui trilithon around 1200.",
    context:
      "Stone adzes excavated at the royal centre were made from rock quarried in Samoa, Fiji and other islands, showing how far tribute and gifts travelled. Fine mats, red feathers, bark cloth and canoes moved between chiefly families bound by marriage and obligation.",
    whyHere:
      "Tonga, Fiji and Samoa lie within a few days' sail of one another, close enough for regular two-way voyaging in any season. Tongatapu's large, fertile and flat land could feed a dense population, and its lagoon gave chiefs a protected harbour for big double canoes.",
    keyFigures: ["Tuʻitātui", "Geoffrey Clark"],
  },
  {
    id: "pacific-rapa-nui",
    title: "Polynesians Settle Rapa Nui",
    year: 1200,
    endYear: 1250,
    place: "Anakena, Rapa Nui",
    coordinates: [-109.32, -27.07],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Easter_Island",
    summary:
      "Polynesian voyagers reached Rapa Nui, the most remote inhabited island on Earth, around 1200 CE. Over the following centuries they carved and moved hundreds of monumental moai statues.",
    context:
      "Older estimates put settlement as early as 400 to 800 CE, but radiocarbon work led by Terry Hunt and Carl Lipo favoured about 1200. How the island's palm forest disappeared, and whether it caused a social collapse, is fiercely debated; Pacific rats eating palm seeds played a part.",
    whyHere:
      "Rapa Nui lies more than 2,000 kilometres from Pitcairn and over 3,500 from South America. At 27 degrees south it is cooler, drier and windier than the tropical islands, so breadfruit and coconut struggled and sweet potato became the staple.",
    keyFigures: ["Terry Hunt", "Carl Lipo"],
    primarySource: {
      excerpt:
        "It is extraordinary that the same Nation should have spread themselves over all the isles in this vast Ocean from New Zealand to this island which is almost a fourth part of the circumference of the globe.",
      attribution: "James Cook, journal of the Resolution voyage, at Easter Island, March 1774, ed. J. C. Beaglehole",
    },
  },
  {
    id: "pacific-mangareva-exchange",
    title: "The Mangareva–Pitcairn–Henderson Exchange",
    year: 1200,
    endYear: 1450,
    place: "Mangareva, Gambier Islands",
    coordinates: [-134.97, -23.12],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Henderson_Island_(Pitcairn_Islands)",
    summary:
      "Geochemical sourcing of stone tools shows that Mangareva, Pitcairn and Henderson were tied together by regular canoe voyages, trading adze basalt, volcanic glass and pearl shell. By about 1500 the network had broken down, and Pitcairn and Henderson were later abandoned.",
    context:
      "Archaeologist Marshall Weisler traced Henderson's basalt to quarries on Pitcairn and Mangareva. Deforestation on Mangareva, which reduced the timber for large canoes, is often blamed for the collapse, though its causes remain debated.",
    whyHere:
      "None of the three islands had everything: Mangareva had a vast lagoon rich in black-lip pearl shell, tiny Pitcairn had fine basalt and volcanic glass, and Henderson, a raised coral island, had turtles and seabirds but no stone. Pitcairn lies about 540 kilometres from Mangareva and 200 from Henderson.",
    keyFigures: ["Marshall Weisler"],
    schematic: {
      kind: "exchange",
      westLabel: "Mangareva",
      eastLabel: "Pitcairn and Henderson",
      eastbound: ["Pearl shell", "Mangarevan basalt"],
      westbound: ["Pitcairn adze basalt", "Volcanic glass"],
    },
  },
  {
    id: "pacific-hawaii",
    title: "Voyagers Reach Hawaiʻi",
    year: 1200,
    place: "Ka Lae (South Point), Hawaiʻi Island",
    coordinates: [-155.66, 18.95],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "History_of_Hawaii",
    summary:
      "Polynesians from the Society Islands or the Marquesas crossed the equator to settle Hawaiʻi around 1200 CE, after a voyage of some 4,000 kilometres. Hawaiian tradition remembers continued voyaging to and from Kahiki, the lands to the south, for several generations.",
    context:
      "Wilmshurst's 2011 study placed Hawaiian settlement between about 1190 and 1290, while other Hawaiian studies argue for a slightly earlier arrival. The islands later became home to some of the largest and most stratified chiefdoms in Polynesia.",
    whyHere:
      "The route from Tahiti to Hawaiʻi runs nearly north and south, across the northeast and southeast trade winds, so canoes could sail with the wind on the beam in both directions. Heading north, navigators crossed the doldrums and watched the North Star climb higher each night.",
    keyFigures: ["Kenneth Emory", "Yosihiko Sinoto"],
    primarySource: {
      excerpt: "How shall we account for this Nation spreading it self so far over this Vast ocean?",
      attribution: "James Cook, journal of the third voyage, on the Hawaiian Islands, 1778",
    },
  },
  {
    id: "pacific-aotearoa",
    title: "Polynesian Settlement of Aotearoa",
    year: 1250,
    endYear: 1300,
    place: "Wairau Bar, Marlborough",
    coordinates: [174.04, -41.49],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Māori_history",
    summary:
      "East Polynesian voyagers reached Aotearoa New Zealand around 1250 to 1300 CE, the last major land mass on Earth to be settled. Early villages such as Wairau Bar, with its moa-hunting camps and burials, show the first settlers adapting to a temperate world.",
    context:
      "Seeds gnawed by the Pacific rat, which arrived with people, date to about 1280, and almost no human traces lie beneath ash from the Kaharoa eruption of about 1314. The giant moa were hunted to extinction within roughly two centuries.",
    whyHere:
      "Aotearoa is larger than all other Polynesian islands combined and reaches far into cold southern latitudes, some 3,000 kilometres southwest of the Cook Islands. Most tropical crops failed, so settlers relied on hunting, fishing and kūmara stored through winter in pits.",
    keyFigures: ["Janet Wilmshurst", "Roger Duff", "Jim Eyles"],
    schematic: {
      kind: "causal",
      steps: [
        "Voyagers sail southwest beyond the tropics",
        "Tropical crops fail in the cold",
        "Moa and seals feed first generations",
        "Kūmara stored through winter in pits",
      ],
    },
  },
  {
    id: "pacific-taputapuatea",
    title: "Taputapuātea Becomes a Voyaging Centre",
    year: 1300,
    endYear: 1769,
    place: "Taputapuātea, Opoa, Raʻiātea",
    coordinates: [-151.36, -16.84],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Taputapuatea_marae",
    summary:
      "The marae of Taputapuātea on Raʻiātea grew into the most sacred ceremonial centre of East Polynesia, where chiefs and priests from many islands gathered. Stones from it were carried away to found new marae on other islands.",
    context:
      "Raʻiātea's ancient name, Havaiʻi, echoes the ancestral homeland of Polynesian tradition, known as Hawaiki in Aotearoa. The site was inscribed on the UNESCO World Heritage List in 2017, and the priest-navigator Tupaia was trained in its traditions.",
    whyHere:
      "Raʻiātea lies at the heart of the Society Islands, and the marae stands on a point facing Te Ava Moʻa, a sacred pass through the reef by which canoes entered and left the lagoon.",
    keyFigures: ["Tupaia"],
  },
  {
    id: "pacific-chatham-moriori",
    title: "Moriori Settle the Chatham Islands",
    year: 1500,
    place: "Rēkohu (Chatham Island)",
    coordinates: [-176.5, -43.9],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Moriori",
    summary:
      "Around 1500, Polynesians from mainland New Zealand settled the Chatham Islands, 800 kilometres to the east, and became the Moriori. Under a code attributed to the ancestor Nunuku-whenua, they renounced killing in war.",
    context:
      "Isolated from the mainland, the Moriori developed their own dialect and customs. Their pacifism left them defenceless when Māori from Taranaki, carried by a European ship, invaded in 1835 and killed or enslaved many of them.",
    whyHere:
      "At 44 degrees south the Chathams are too cold for kūmara or any other Polynesian crop, so the Moriori lived by fishing, sealing, birding and gathering. With no big timber, they built small craft from flax stalks rather than large voyaging canoes.",
    keyFigures: ["Nunuku-whenua"],
  },
  {
    id: "pacific-tupaia-cook",
    title: "Tupaia Charts the Pacific for Cook",
    year: 1769,
    place: "Matavai Bay, Tahiti",
    coordinates: [-149.48, -17.5],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Tupaia_(navigator)",
    summary:
      "In July 1769 the Raʻiātean priest and navigator Tupaia joined James Cook's Endeavour at Tahiti. He guided the ship through the Society Islands to Rurutu and drew a chart of some 74 islands spread across the central Pacific.",
    context:
      "In New Zealand Tupaia could talk with Māori, whose language was close to his own, and served as the expedition's interpreter. He died at Batavia in 1770, but his chart survives in copies as a unique record of Polynesian geographical knowledge at the moment of contact.",
    whyHere:
      "Tahiti's Matavai Bay was the favoured anchorage for European ships, and Tupaia had fled there from Raʻiātea after warriors from Bora Bora conquered his home island. Recent scholars argue his chart placed islands by sailing bearings from a navigator's point of view rather than by latitude and longitude, which long baffled European readers.",
    keyFigures: ["Tupaia", "James Cook", "Joseph Banks"],
    primarySource: {
      excerpt:
        "What makes him more than any thing else desireable is his experience in the navigation of these people and knowledge of the Islands in these seas; he has told us the names of above 70.",
      attribution: "Joseph Banks, Endeavour journal, 12 July 1769",
    },
  },
];
