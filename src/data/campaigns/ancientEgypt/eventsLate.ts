import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "egypt-megiddo",
    title: "Thutmose III at Megiddo",
    year: -1457,
    place: "Megiddo, Jezreel Valley",
    coordinates: [35.18, 32.585],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Megiddo_(15th_century_BC)",
    summary:
      "Soon after Hatshepsut's death, Thutmose III marched against a coalition of Canaanite princes led by the king of Kadesh. Overruling his officers, he took his army through the narrow Aruna pass, surprised the enemy and captured Megiddo after a seven-month siege.",
    context:
      "It is the first battle recorded in reliable detail, in annals carved on the walls of Karnak. Over some seventeen campaigns Thutmose built an empire reaching the Euphrates, and the sons of vassal princes were raised at the Egyptian court as hostages.",
    whyHere:
      "Megiddo commands the point where the coastal road from Egypt to Mesopotamia crosses the Carmel ridge into the Jezreel Valley. Of the three routes over the ridge, the Aruna pass was the shortest and most dangerous, and Thutmose gambled correctly that it would be left unguarded.",
    keyFigures: ["Thutmose III", "Tjaneni"],
  },
  {
    id: "egypt-amarna",
    title: "Akhenaten Founds Amarna",
    year: -1346,
    place: "Akhetaten (Amarna), Middle Egypt",
    coordinates: [30.9, 27.645],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Amarna",
    summary:
      "Akhenaten set aside the traditional gods for the Aten, the disc of the sun, and built a new capital, Akhetaten, 'Horizon of the Aten', on empty ground halfway between Thebes and Memphis. Its temples were open to the sky, and its art showed the royal family in strikingly intimate scenes.",
    context:
      "With his queen Nefertiti at his side, Akhenaten starved the temples of Amun, the powerful god of Thebes. Clay tablets found at Amarna, the Amarna letters, preserve the court's correspondence in Akkadian with Babylon, Mitanni, Hatti and Canaanite vassals, whose kings begged for Nubian gold.",
    whyHere:
      "Akhenaten chose a crescent of empty desert on the east bank, enclosed by cliffs and claimed by no other god, and fixed its limits with carved boundary stelae. A gap in the eastern cliffs, where the sun rose, may have recalled the hieroglyph for horizon.",
    keyFigures: ["Akhenaten", "Nefertiti"],
    primarySource: {
      excerpt:
        "How many are your deeds, though hidden from sight, O Sole God beside whom there is none! You made the earth as you wished, you alone.",
      attribution: "Great Hymn to the Aten, tomb of Ay at Amarna, c. 1340 BCE, trans. Miriam Lichtheim",
    },
  },
  {
    id: "egypt-tutankhamun",
    title: "Tutankhamun Restores the Old Gods",
    year: -1332,
    place: "Thebes and the Valley of the Kings",
    coordinates: [32.6014, 25.7402],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Tutankhamun",
    summary:
      "Crowned as a boy of about nine, Tutankhaten changed his name to Tutankhamun, left Amarna and restored the cult of Amun and the other gods. He died at about nineteen and was buried in a small tomb in the Valley of the Kings, found almost intact by Howard Carter in 1922.",
    context:
      "His Restoration Stela describes temples fallen into ruin and gods who had turned away from Egypt. Advisers such as Ay and the general Horemheb governed in his name, and later kings struck the Amarna pharaohs from the official king lists.",
    whyHere:
      "The Valley of the Kings is a dry gorge in the Theban hills on the west bank, overlooked by a pyramid-shaped peak, el-Qurn. Tombs cut deep into its limestone were meant to hide royal burials from robbers, and Tutankhamun's lay forgotten under debris from a later tomb.",
    keyFigures: ["Tutankhamun", "Ay", "Horemheb", "Howard Carter"],
  },
  {
    id: "egypt-kadesh",
    title: "The Battle of Kadesh",
    year: -1274,
    place: "Kadesh, on the Orontes",
    coordinates: [36.52, 34.56],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Kadesh",
    summary:
      "In his fifth year Ramesses II marched into Syria to take Kadesh from the Hittites. Misled by captured spies, his divisions were caught strung out and his camp was overrun by Hittite chariots, but a counter-attack and the arrival of reinforcements saved him.",
    context:
      "Probably the largest chariot battle ever fought, it ended in stalemate, though Ramesses proclaimed victory on temple walls across Egypt. Around 1259 BCE he and the Hittite king Hattusili III concluded one of the earliest surviving peace treaties, later sealed by a royal marriage.",
    whyHere:
      "Kadesh stood where the Orontes valley opens between the Lebanon and Anti-Lebanon ranges, the gateway from the Beqaa into inner Syria. Whoever held it controlled the roads between the Egyptian and Hittite spheres, which is why the two empires collided there.",
    keyFigures: ["Ramesses II", "Muwatalli II", "Hattusili III"],
    schematic: {
      kind: "causal",
      steps: ["Egypt and Hatti covet Syria", "Hittite ambush at Kadesh", "Stalemate on the Orontes", "Peace treaty around 1259 BCE"],
    },
  },
  {
    id: "egypt-abu-simbel",
    title: "The Temples of Abu Simbel",
    year: -1264,
    endYear: -1244,
    place: "Abu Simbel, Lower Nubia",
    coordinates: [31.6258, 22.3372],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Abu_Simbel",
    summary:
      "Ramesses II had two temples carved into a sandstone cliff above the Nile in Nubia, the larger fronted by four seated colossi of himself about 20 metres high, the smaller dedicated to Hathor and his queen Nefertari. Inside, reliefs retell his version of Kadesh.",
    context:
      "By the New Kingdom, Nubia as far as the Fourth Cataract was an Egyptian province run by a viceroy, the King's Son of Kush, and its gold funded the empire. In the 1960s the temples were cut into blocks and rebuilt 65 metres higher to escape the lake of the Aswan High Dam.",
    whyHere:
      "Abu Simbel faced every boat travelling north from Kush into Egypt. Colossal kings cut into the living rock of the riverbank told Nubian chiefs, traders and tribute-bearers whose land they were entering, and twice a year the rising sun reached the statues deep inside.",
    keyFigures: ["Ramesses II", "Nefertari"],
  },
  {
    id: "egypt-sea-peoples",
    title: "Ramesses III Repels the Sea Peoples",
    year: -1177,
    place: "Mouths of the Nile Delta",
    coordinates: [31.5, 31.3],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Sea_Peoples",
    summary:
      "In the eighth year of Ramesses III, a coalition of seafaring raiders and migrants, among them the Peleset and the Denyen, attacked Egypt by land and sea. The pharaoh claimed to have trapped their fleet in the Nile mouths, and his temple at Medinet Habu depicts the battle.",
    context:
      "Around 1200 BCE the interconnected Bronze Age world collapsed: the Hittite Empire fell, Ugarit was destroyed and Mycenaean palaces burned. Drought, earthquakes, broken trade and migration all played a part. Egypt survived but lost its Asian empire, and the Peleset settled in Canaan as the Philistines.",
    whyHere:
      "The Delta's shifting branches, marshes and lagoons were hard for strangers to navigate, and gave Egyptian archers on the banks the advantage over ships caught in narrow channels. It was also the richest prize at the end of every sea lane from the Aegean and the Levant.",
    keyFigures: ["Ramesses III", "Merneptah"],
    primarySource: {
      excerpt:
        "The foreign countries made a conspiracy in their islands. All at once the lands were removed and scattered in the fray. No land could stand before their arms.",
      attribution: "Inscription of Ramesses III, Medinet Habu, c. 1177 BCE, trans. John A. Wilson",
    },
    schematic: {
      kind: "causal",
      steps: ["Drought and failing harvests", "Palaces and trade networks fall", "Migrants take to the sea", "Egypt loses its empire"],
    },
  },
  {
    id: "egypt-piye",
    title: "Piye and the Kushite Pharaohs",
    year: -728,
    place: "Napata (Jebel Barkal), Kush",
    coordinates: [31.83, 18.54],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Piye",
    summary:
      "Piye, king of Kush, sailed north from Napata, defeated the Delta prince Tefnakht and took Memphis, recording his campaign on a great stela at Jebel Barkal. His successors of the Twenty-fifth Dynasty, such as Shabaka and Taharqa, ruled Egypt and Kush together.",
    context:
      "After the New Kingdom, Egypt had fragmented among Libyan dynasties in the Delta and the priests of Amun at Thebes. The Kushites saw themselves as champions of Amun and restorers of tradition, and revived pyramid building in Nubia. Assyrian invasions drove them south, and Ashurbanipal sacked Thebes in 663 BCE.",
    whyHere:
      "Napata lay below the sacred mountain of Jebel Barkal near the Fourth Cataract, where desert roads cut across the great bend of the Nile. Kush grew rich on the gold, ivory and trade that Egypt had long taken from it, and the river carried its armies north.",
    keyFigures: ["Piye", "Tefnakht", "Taharqa"],
  },
  {
    id: "egypt-persia",
    title: "Cambyses Conquers Egypt",
    year: -525,
    place: "Pelusium, eastern Delta",
    coordinates: [32.57, 31.04],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Pelusium_(525_BC)",
    summary:
      "The Persian king Cambyses II defeated Psamtik III at Pelusium and took Memphis, making Egypt a province of the Achaemenid Empire. Darius I later completed a canal from the Nile to the Red Sea, linking Egypt to the rest of the empire by water.",
    context:
      "The Saite kings of the Twenty-sixth Dynasty had revived Egypt with Greek mercenaries and traders. Persian rule lasted until 404 BCE and returned in 343 BCE, and Greek visitors such as Herodotus described the country under Persian governors.",
    whyHere:
      "Pelusium guarded the eastern edge of the Delta, where the coastal road from Gaza arrives after some 200 kilometres of waterless sand. Herodotus says Cambyses crossed that desert with water supplied by Arab allies, and every invader from Asia had to pass this gate.",
    keyFigures: ["Cambyses II", "Psamtik III", "Darius I"],
  },
  {
    id: "egypt-alexandria",
    title: "Alexander Founds Alexandria",
    year: -331,
    place: "Alexandria, western Delta coast",
    coordinates: [29.92, 31.2],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Alexandria",
    summary:
      "Welcomed as a liberator from the Persians, Alexander the Great founded a new city on the Mediterranean coast and crossed the desert to the oracle of Amun at Siwa, which hailed him as the god's son. Alexandria remained Egypt's capital for nearly a thousand years.",
    context:
      "When Alexander died in 323 BCE his general Ptolemy took Egypt, seized the conqueror's body for burial in his own realm, and in 305 BCE proclaimed himself king. His dynasty, Greek-speaking but crowned as pharaohs, ruled until Cleopatra.",
    whyHere:
      "The city rose on a limestone ridge between the sea and Lake Mareotis, west of the Nile mouths, so that eastward currents carried the river's silt away from its harbours. A causeway joined the island of Pharos to the shore, creating two sheltered ports, while canals linked the lake to the Nile.",
    keyFigures: ["Alexander the Great", "Dinocrates", "Ptolemy I Soter"],
  },
  {
    id: "egypt-library",
    title: "The Library and the Pharos",
    year: -285,
    endYear: -246,
    place: "Alexandria",
    coordinates: [29.885, 31.214],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Library_of_Alexandria",
    summary:
      "Under Ptolemy I and Ptolemy II, Alexandria gained the Museum, a royal research institute whose Library tried to collect every book written in Greek, and the Pharos, a lighthouse over 100 metres tall counted among the Seven Wonders.",
    context:
      "The kings paid scholars and had ships searched for books to copy. Eratosthenes, the Library's chief, estimated Earth's circumference from the sun's shadow at Alexandria and at Syene near Aswan, and the priest Manetho wrote a Greek history of Egypt that gave us its numbered dynasties.",
    whyHere:
      "Alexandria was the hinge between the Nile and the Mediterranean, where Egyptian grain and papyrus went out and Greek ships and scholars came in. The coast nearby is flat, low and fringed with reefs, so a towering light on Pharos was needed to guide ships into harbour.",
    keyFigures: ["Ptolemy II Philadelphus", "Euclid", "Eratosthenes", "Sostratus of Cnidus"],
  },
  {
    id: "egypt-cleopatra",
    title: "Cleopatra and the End of Pharaonic Egypt",
    year: -31,
    endYear: -30,
    place: "Alexandria",
    coordinates: [29.93, 31.195],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Cleopatra",
    summary:
      "Cleopatra VII, the last active ruler of the Ptolemaic dynasty, allied with Julius Caesar and then Mark Antony to keep Egypt independent of Rome. After Octavian defeated their fleet at Actium in 31 BCE, Antony and Cleopatra took their own lives in Alexandria, and Egypt became a Roman province.",
    context:
      "Plutarch says Cleopatra was the first of her line to learn Egyptian, and she presented herself as the goddess Isis. Her son by Caesar, Caesarion, was killed on Octavian's orders. Egypt's grain now fed Rome, and three thousand years of pharaohs came to an end.",
    whyHere:
      "The Nile harvest made Egypt the richest granary of the Mediterranean, the prize every Roman warlord needed. Augustus kept it under his personal control and barred senators from even visiting without his permission.",
    keyFigures: ["Cleopatra", "Julius Caesar", "Mark Antony", "Augustus"],
    primarySource: {
      excerpt:
        "For her beauty, as we are told, was in itself not altogether incomparable, nor such as to strike those who saw her; but converse with her had an irresistible charm.",
      attribution: "Plutarch, Life of Antony 27, c. 100 CE, trans. Bernadotte Perrin",
    },
  },
];
