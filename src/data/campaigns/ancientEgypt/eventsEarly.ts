import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "egypt-naqada",
    title: "Naqada Chiefdoms of the Nile Valley",
    year: -3200,
    place: "Naqada and Abydos, Upper Egypt",
    coordinates: [32.72, 25.9],
    layer: "trade",
    significance: 3,
    wikipediaSlug: "Naqada_culture",
    summary:
      "By about 3200 BCE the farming villages of Upper Egypt had grown into rival chiefdoms centred on Naqada, Hierakonpolis and Abydos. Their elites were buried with fine pottery, stone vessels and imported goods, and bone labels from a royal tomb at Abydos carry some of the earliest known hieroglyphs.",
    context:
      "As the Sahara dried out after about 5000 BCE, herders and farmers crowded into the Nile valley. Naqada culture spread from the south down to the Delta with a shared style of pottery, burial and kingship, while traders brought in lapis lazuli from Afghanistan and ideas from Mesopotamia.",
    whyHere:
      "Every summer the Nile flood laid fresh black silt on a strip of land only a few kilometres wide, walled in by desert cliffs. Food was abundant but farmland was narrow and easy to claim, so the river towns grew rich and competed, and Naqada, ancient Nubt or 'Gold Town', guarded a route to the gold of the Eastern Desert.",
    keyFigures: ["Scorpion I"],
    primarySource: {
      excerpt: "The Egypt to which the Greeks go in their ships is an acquired country, the gift of the river.",
      attribution: "Herodotus, Histories 2.5, c. 430 BCE, trans. George Rawlinson",
    },
  },
  {
    id: "egypt-narmer",
    title: "Narmer Unites the Two Lands",
    year: -3100,
    place: "Hierakonpolis (Nekhen), Upper Egypt",
    coordinates: [32.78, 25.1],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Narmer_Palette",
    summary:
      "Around 3100 BCE a king of Upper Egypt named Narmer brought the Delta under his rule. A ceremonial palette found at Hierakonpolis shows him wearing the white crown of the south on one face and the red crown of the north on the other.",
    context:
      "Unification was probably the end of a long process of conquest and alliance rather than a single battle. Later tradition credited a founder called Menes, often identified with Narmer. The new kings governed from Memphis and were buried at Abydos, and writing, taxation and royal ideology took shape together.",
    whyHere:
      "The Nile is a single highway: boats drift north with the current and sail south on the prevailing north wind. Whoever controlled the river could move troops and grain along the whole valley, and the deserts on either side left rivals few places to hide.",
    keyFigures: ["Narmer", "Hor-Aha"],
    schematic: {
      kind: "causal",
      steps: ["Chiefdoms compete along the Nile", "Upper Egypt absorbs the Delta", "One king wears two crowns", "Memphis guards the Delta apex"],
    },
  },
  {
    id: "egypt-djoser",
    title: "Djoser's Step Pyramid",
    year: -2670,
    endYear: -2650,
    place: "Saqqara, near Memphis",
    coordinates: [31.2165, 29.8713],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Pyramid_of_Djoser",
    summary:
      "For King Djoser, his official Imhotep stacked six stone platforms of shrinking size into a stepped tower about 62 metres high. It is the oldest large building made entirely of cut stone, set inside a walled precinct of shrines for the king's eternal jubilee.",
    context:
      "Earlier kings lay under flat-topped mud-brick tombs called mastabas. Imhotep translated shapes once made of wood, reed and brick into limestone, and later Egyptians revered him as a sage, then as a god of healing.",
    whyHere:
      "Saqqara sits on the desert edge just above the floodplain west of Memphis: high enough to stay dry, close enough to the capital, and facing the western horizon where the sun, and the dead, were believed to set. The plateau is itself limestone, so building stone could be quarried on site.",
    keyFigures: ["Djoser", "Imhotep"],
  },
  {
    id: "egypt-giza",
    title: "The Great Pyramid of Khufu",
    year: -2580,
    endYear: -2560,
    place: "Giza plateau",
    coordinates: [31.1342, 29.9792],
    layer: "science",
    significance: 5,
    wikipediaSlug: "Great_Pyramid_of_Giza",
    summary:
      "Khufu, second king of the Fourth Dynasty, raised a pyramid about 146 metres high from some 2.3 million blocks. It remained the tallest human-made structure on Earth for nearly four thousand years, and his successors Khafre and Menkaure built their own beside it.",
    context:
      "The pyramid was built by organised, fed and housed crews, not by slaves, and their town has been excavated south of the plateau. Papyri found at the Red Sea harbour of Wadi al-Jarf include the logbook of an inspector named Merer, whose team shipped white limestone from the Tura quarries to Giza.",
    whyHere:
      "Giza is a solid limestone shelf on the desert edge, firm enough to bear the weight and visible from Memphis. At flood time the water came almost to its foot, so canals and a harbour let boats bring casing stone from Tura and granite from Aswan close to the building site.",
    keyFigures: ["Khufu", "Hemiunu", "Merer"],
  },
  {
    id: "egypt-first-intermediate",
    title: "The Old Kingdom Falls Apart",
    year: -2180,
    endYear: -2055,
    place: "Mo'alla and the southern provinces",
    coordinates: [32.52, 25.47],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "First_Intermediate_Period_of_Egypt",
    summary:
      "After the very long reign of Pepi II, royal power in Memphis faded and Egypt split among provincial governors. Rival dynasties at Herakleopolis in the north and Thebes in the south fought for a century until Mentuhotep II of Thebes reunified the country around 2055 BCE.",
    context:
      "Tomb inscriptions of governors such as Ankhtifi of Mo'alla boast of feeding their people in years of famine. Later Egyptian literature remembered the age as chaos, though many provinces also gained their own art, wealth and self-confidence.",
    whyHere:
      "Egypt's harvest depended entirely on the height of the summer flood. A run of low floods around 2200 BCE, which many researchers link to a wider drought across the Near East, emptied royal granaries, and the long, thin valley made it easy for each district to fend for itself.",
    keyFigures: ["Pepi II", "Ankhtifi", "Mentuhotep II"],
    schematic: {
      kind: "causal",
      steps: ["Low Nile floods", "Harvests and granaries fail", "Governors rule their provinces", "Thebes reunites Egypt"],
    },
  },
  {
    id: "egypt-semna",
    title: "Fortresses at the Second Cataract",
    year: -1870,
    place: "Semna, Second Cataract",
    coordinates: [30.95, 21.49],
    layer: "trade",
    significance: 2,
    wikipediaSlug: "Senusret_III",
    summary:
      "Senusret III pushed Egypt's frontier to Semna, at the southern end of the Second Cataract, and set up stelae forbidding Nubians to pass north except to trade or on official business. A chain of mud-brick fortresses such as Buhen, Mirgissa and Semna guarded the rapids.",
    context:
      "After Mentuhotep II reunified Egypt, the kings of the Middle Kingdom reorganised the country and turned south. Beyond the cataracts lay Kerma, the first great kingdom of Kush, which controlled the gold, ivory, ebony and cattle that Egypt wanted.",
    whyHere:
      "At the Second Cataract the Nile threads through a long belt of granite rapids where boats had to be hauled or unloaded. That bottleneck was the ideal place to control who and what moved along the river, and at Semna the gorge was narrow enough to be closed by forts on both banks.",
    keyFigures: ["Senusret III"],
    schematic: {
      kind: "exchange",
      westLabel: "Egypt",
      eastLabel: "Nubia",
      eastbound: ["grain", "linen", "oils", "faience"],
      westbound: ["gold", "ivory", "ebony", "cattle"],
    },
  },
  {
    id: "egypt-serabit",
    title: "An Alphabet in the Turquoise Mines",
    year: -1850,
    place: "Serabit el-Khadim, Sinai",
    coordinates: [33.46, 29.04],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Proto-Sinaitic_script",
    summary:
      "At the turquoise mines of Serabit el-Khadim, Semitic-speaking workers scratched short inscriptions with a few dozen signs borrowed from hieroglyphs, each standing for a single sound. This Proto-Sinaitic script is the earliest known ancestor of the Phoenician, Greek, Latin and Arabic alphabets.",
    context:
      "Egyptian expeditions had mined turquoise and copper in southern Sinai since the Old Kingdom and built a temple to Hathor, Lady of Turquoise, at Serabit. Many of the workers came from Canaan. The dating is debated, but most scholars place the inscriptions in the Middle Kingdom or soon after.",
    whyHere:
      "Sinai's mountains hold the copper and turquoise that the Nile valley lacks, and the peninsula is the land bridge between Egypt and Canaan. Here Egyptian scribes and Canaanite miners worked side by side, and a handful of sound-signs proved far easier to learn than hundreds of hieroglyphs.",
    keyFigures: ["Flinders Petrie", "Alan Gardiner"],
  },
  {
    id: "egypt-hyksos",
    title: "The Hyksos Rule from Avaris",
    year: -1650,
    endYear: -1550,
    place: "Avaris (Tell el-Dab'a), eastern Delta",
    coordinates: [31.82, 30.79],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Hyksos",
    summary:
      "As the Middle Kingdom weakened, people of Canaanite origin settled in the eastern Delta took power and founded the Fifteenth Dynasty at Avaris. Egyptians called their kings heqau khasut, 'rulers of foreign lands', which Greek writers turned into Hyksos.",
    context:
      "Excavations at Tell el-Dab'a reveal a large city with Levantine-style houses, tombs and donkey burials. The Hyksos ruled northern Egypt, took tribute from local princes and allied with Kerma in Nubia, while a rival dynasty held Thebes. They spread the horse-drawn chariot and the composite bow in Egypt.",
    whyHere:
      "Avaris lay on the Pelusiac branch of the Nile at the Delta's eastern edge, the first fertile land travellers reached after the coastal road from Canaan. It was a natural landing for migrants and traders from the Levant, and its harbour opened onto the Mediterranean.",
    keyFigures: ["Khyan", "Apepi"],
    schematic: {
      kind: "causal",
      steps: ["Canaanites settle in the Delta", "Middle Kingdom fragments", "Hyksos kings rule from Avaris", "Chariots reach the Nile"],
    },
  },
  {
    id: "egypt-ahmose",
    title: "Ahmose Takes Avaris",
    year: -1550,
    place: "Avaris, eastern Delta",
    coordinates: [31.83, 30.78],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Ahmose_I",
    summary:
      "Continuing the war begun by Seqenenre Tao and Kamose, the Theban king Ahmose captured Avaris, drove the Hyksos out of Egypt and besieged their stronghold of Sharuhen in southern Canaan. Reunified Egypt entered the New Kingdom, its most powerful age.",
    context:
      "Seqenenre's mummy shows fatal head wounds, probably received in battle. The Thebans learned from their enemy and adopted chariots and new bronze weapons, and the soldier Ahmose, son of Ebana, recorded the sieges in his tomb at Elkab. Egypt would no longer rely on its deserts alone for defence.",
    whyHere:
      "Avaris could be reached by river from Thebes, so the war was fought with fleets on the Nile as much as with armies on land. Beyond it, the road across northern Sinai led straight into Canaan, which is why the victors pushed on to Sharuhen to shut that door.",
    keyFigures: ["Ahmose I", "Kamose", "Seqenenre Tao", "Ahmose, son of Ebana"],
  },
  {
    id: "egypt-punt",
    title: "Hatshepsut's Expedition to Punt",
    year: -1470,
    place: "Punt, on the southern Red Sea coast",
    coordinates: [39.4, 15.6],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Land_of_Punt",
    summary:
      "Around the ninth year of her reign, Hatshepsut sent a fleet down the Red Sea to Punt. It returned with living myrrh trees, incense, ebony, ivory, gold, baboons and leopard skins, and the voyage was carved in detail on her temple at Deir el-Bahari.",
    context:
      "Egypt had traded with Punt since at least the Fifth Dynasty, but contact had lapsed. Hatshepsut, who ruled first as regent for Thutmose III and then as pharaoh in her own right, used the expedition to proclaim her legitimacy. The reliefs show Punt's ruler Parahu, his wife Ati and houses raised on stilts.",
    whyHere:
      "Incense trees grow in the dry hills of the southern Red Sea and the Horn of Africa, not in Egypt. Expeditions crossed the Eastern Desert to the coast, sailed south with the steady north wind of the northern Red Sea, and timed their return to the seasonal winds of the south.",
    keyFigures: ["Hatshepsut", "Nehsi", "Senenmut"],
    primarySource: {
      excerpt:
        "The loading of the ships very heavily with marvels of the country of Punt; all goodly fragrant woods of God's-Land, heaps of myrrh-resin, with fresh myrrh trees, with ebony and pure ivory.",
      attribution: "Punt reliefs, Deir el-Bahari, c. 1470 BCE, trans. James Henry Breasted, Ancient Records of Egypt",
    },
    schematic: {
      kind: "exchange",
      westLabel: "Egypt",
      eastLabel: "Punt",
      eastbound: ["beads", "axes", "daggers", "jewellery"],
      westbound: ["myrrh", "incense", "ebony", "gold", "baboons"],
    },
  },
];
