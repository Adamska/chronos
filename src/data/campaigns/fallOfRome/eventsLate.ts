import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "rome-sack-410",
    title: "Alaric Sacks Rome",
    year: 410,
    place: "Rome",
    coordinates: [12.49, 41.89],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Sack_of_Rome_(410)",
    summary:
      "Alaric's Visigoths entered Rome in August 410 and plundered it for three days. It was the first time in about 800 years that the city had fallen to a foreign enemy.",
    context:
      "Alaric had spent years demanding land, pay and a command from the western court, which refused while Emperor Honorius stayed safe in Ravenna. The sack shocked the Mediterranean world and prompted Augustine to write The City of God.",
    whyHere:
      "Rome lived on grain shipped in through Portus at the Tiber mouth, so when Alaric seized the harbour in 409 he could starve the city into submission. Honorius, behind the marshes and lagoons of Ravenna, was beyond his reach.",
    keyFigures: ["Alaric I", "Honorius", "Galla Placidia"],
    primarySource: {
      excerpt: "The City which had taken the whole world was itself taken.",
      attribution: "Jerome, Letter 127 to Principia (c. 412), trans. W. H. Fremantle",
    },
  },
  {
    id: "rome-theodosian-walls",
    title: "The Theodosian Walls",
    year: 413,
    place: "Constantinople, landward side",
    coordinates: [28.92, 41.02],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Walls_of_Constantinople",
    summary:
      "Under the regent Anthemius, Constantinople completed a massive new land wall about 6 km long, from the Sea of Marmara to the Golden Horn. After an earthquake in 447 it was rapidly rebuilt with an outer wall and moat, forming a triple barrier.",
    context:
      "The walls were raised while Theodosius II was still a child and Alaric's Goths roamed the Balkans. When Attila's Huns ravaged Thrace in the 440s, the capital itself was never taken.",
    whyHere:
      "Because the city stands on a peninsula with water on two sides, a single line of walls across its short land front could seal it off completely. Sea walls and a navy guarded the rest, and supplies kept arriving by ship even when armies controlled the countryside.",
    keyFigures: ["Theodosius II", "Anthemius"],
    schematic: { kind: "causal", steps: ["Peninsula leaves one land front", "Triple wall seals it", "Supplies arrive by sea", "Invaders turn elsewhere"] },
  },
  {
    id: "rome-carthage-439",
    title: "Vandals Take Carthage",
    year: 439,
    place: "Carthage, Africa Proconsularis",
    coordinates: [10.32, 36.85],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Vandal_Kingdom",
    summary:
      "Ten years after crossing from Spain into Africa, Gaiseric's Vandals seized Carthage in October 439. The Western Empire lost its richest provinces and the grain and taxes that fed Rome and paid its armies.",
    context:
      "Rome recognised the Vandal kingdom by treaty in 442. Carthage's dockyards gave Gaiseric a fleet that raided Sicily and Italy and sacked Rome itself in 455.",
    whyHere:
      "Carthage sits on the Gulf of Tunis beside the fertile Bagradas valley, and Cape Bon lies only about 140 km from Sicily across the narrows that divide the Mediterranean. Whoever held it controlled both Rome's breadbasket and the sea lane between the two halves of the empire.",
    keyFigures: ["Gaiseric", "Valentinian III", "Flavius Aetius"],
    schematic: { kind: "causal", steps: ["Vandals cross to Africa (429)", "Carthage falls (439)", "Grain and taxes lost", "Western army goes unpaid"] },
  },
  {
    id: "rome-catalaunian-plains",
    title: "Battle of the Catalaunian Plains",
    year: 451,
    place: "Champagne, near Châlons",
    coordinates: [4.36, 48.95],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_the_Catalaunian_Plains",
    summary:
      "A coalition of Romans under Aetius and Visigoths under Theodoric I fought Attila's army to a standstill in northern Gaul. Theodoric was killed, but Attila withdrew east across the Rhine.",
    context:
      "Attila had invaded Gaul and besieged Orléans. He invaded Italy the next year, but died in 453, and his empire broke apart after his sons were defeated at the Nedao in 454.",
    whyHere:
      "The open chalk plains of Champagne, crossed by Roman roads converging on Châlons and Troyes, offered ground where both sides could deploy cavalry. The exact site of the battle is still unknown.",
    keyFigures: ["Flavius Aetius", "Attila", "Theodoric I"],
  },
  {
    id: "rome-fall-476",
    title: "Deposition of Romulus Augustulus",
    year: 476,
    place: "Ravenna",
    coordinates: [12.2, 44.42],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Fall_of_the_Western_Roman_Empire",
    summary:
      "The Germanic general Odoacer deposed the boy emperor Romulus Augustulus and sent the imperial regalia to Constantinople. He ruled Italy as king, nominally under the eastern emperor Zeno.",
    context:
      "By 476 the Western Empire had shrunk to little more than Italy, while Vandals, Visigoths, Burgundians and Franks ruled the former provinces. The exiled emperor Julius Nepos kept a claim to the title until his death in 480.",
    whyHere:
      "Ravenna had been the western capital since 402 because its marshes and lagoons made it nearly impregnable, with the port of Classis open to the Adriatic and the East. That safety made it a refuge for weak emperors rather than a base from which to defend the provinces.",
    keyFigures: ["Odoacer", "Romulus Augustulus", "Orestes", "Zeno"],
  },
  {
    id: "rome-theodoric-ravenna",
    title: "Theodoric Takes Ravenna",
    year: 493,
    place: "Ravenna",
    coordinates: [12.2, 44.42],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Ostrogothic_Kingdom",
    summary:
      "Sent west by Emperor Zeno, Theodoric led the Ostrogoths into Italy in 489 and after a long siege took Ravenna, killing Odoacer in 493. He ruled Italy until 526, keeping its Roman administration and Senate.",
    context:
      "Zeno was glad to move a powerful Gothic army out of the Balkans. Theodoric built a web of marriage alliances with the Frankish, Visigothic, Vandal and Burgundian kings.",
    whyHere:
      "Ravenna's marshes and lagoons held off Theodoric for nearly three years, and Odoacer agreed to terms only once the port was blockaded. The Goths entered Italy by the Isonzo, the natural gateway from the Balkans through the low eastern Alps.",
    keyFigures: ["Theodoric the Great", "Odoacer", "Zeno"],
  },
  {
    id: "rome-clovis-baptism",
    title: "Baptism of Clovis",
    year: 496,
    place: "Reims, northern Gaul",
    coordinates: [4.03, 49.26],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Clovis_I",
    summary:
      "Clovis, king of the Franks, was baptised a Catholic Christian by Bishop Remigius at Reims, on a date variously placed between 496 and 508. Unlike the Arian Goths, the Franks now shared the faith of their Gallo-Roman subjects.",
    context:
      "Clovis united the Frankish groups and defeated the Visigoths at Vouillé in 507, driving them from most of Gaul. The support of Gaul's bishops helped make the Frankish kingdom the most durable of the successor states.",
    whyHere:
      "Reims was the metropolitan see of the old Roman province where the Franks had settled between the Rhine and the Seine. Expanding overland from their homelands rather than migrating far away, the Franks never lost touch with their base of manpower.",
    keyFigures: ["Clovis I", "Remigius", "Clotilde"],
  },
  {
    id: "rome-corpus-juris",
    title: "Corpus Juris Civilis",
    year: 529,
    endYear: 534,
    place: "Constantinople",
    coordinates: [28.97, 41.01],
    layer: "science",
    significance: 4,
    wikipediaSlug: "Corpus_Juris_Civilis",
    summary:
      "A commission led by Tribonian compiled the Code, the Digest and the Institutes, condensing centuries of Roman law into a coherent body. Its rediscovery in medieval Italy made it the foundation of civil law across Europe.",
    context:
      "Justinian aimed to restore the Roman world in law as well as territory. The work continued even through the Nika riots of 532, which nearly toppled him.",
    whyHere:
      "Shielded by sea and walls, Constantinople had kept the archives, libraries and trained jurists that the sacked cities of the West had lost. The commission drew on the law schools of the capital and of Berytus, the leading centres of legal learning.",
    keyFigures: ["Justinian I", "Tribonian"],
    primarySource: {
      excerpt: "Justice is the set and constant purpose which gives to every man his due.",
      attribution: "Justinian, Institutes 1.1 (533), trans. J. B. Moyle",
    },
  },
  {
    id: "rome-vandalic-war",
    title: "Belisarius Retakes Africa",
    year: 533,
    endYear: 534,
    place: "Carthage",
    coordinates: [10.25, 36.8],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Vandalic_War",
    summary:
      "Belisarius sailed from Constantinople with about 15,000 soldiers, won at Ad Decimum and Tricamarum, and entered Carthage. The Vandal king Gelimer surrendered in 534.",
    context:
      "The easy victory encouraged Justinian to attack Ostrogothic Italy in 535, beginning a war that lasted until 554 and left the peninsula devastated.",
    whyHere:
      "The fleet hugged the coasts of Greece and supplied itself in Sicily before landing at Caput Vada, several days' march south of Carthage, avoiding a sea battle. The Vandal fleet was away in Sardinia putting down a revolt, leaving the coast unguarded.",
    keyFigures: ["Belisarius", "Gelimer", "Justinian I", "Procopius"],
  },
  {
    id: "rome-hagia-sophia",
    title: "Hagia Sophia Dedicated",
    year: 537,
    place: "Constantinople",
    coordinates: [28.98, 41.008],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Hagia_Sophia",
    summary:
      "Justinian's new cathedral, designed by Anthemius of Tralles and Isidore of Miletus, was dedicated in December 537 after less than six years of building. It remained the largest church in the Christian world for nearly a thousand years.",
    context:
      "The earlier church had burned in the Nika riots of 532. The rebuilt Hagia Sophia proclaimed the wealth and Christian authority of an empire that saw itself as the one true Rome.",
    whyHere:
      "The church crowns the first hill at the tip of the peninsula, beside the Great Palace and the Hippodrome, visible to ships on the Bosporus and the Marmara. The region lies near an active fault zone, and earthquakes brought down the first dome in 558.",
    keyFigures: ["Justinian I", "Anthemius of Tralles", "Isidore of Miletus"],
    primarySource: {
      excerpt:
        "So the church has become a spectacle of marvellous beauty, overwhelming to those who see it, but to those who know it by hearsay altogether incredible.",
      attribution: "Procopius, Buildings 1.1 (c. 550s), trans. H. B. Dewing",
    },
  },
  {
    id: "rome-plague",
    title: "Plague of Justinian",
    year: 541,
    endYear: 544,
    place: "Pelusium, eastern Nile Delta",
    coordinates: [32.55, 31.04],
    layer: "trade",
    significance: 4,
    wikipediaSlug: "Plague_of_Justinian",
    summary:
      "Bubonic plague appeared at Pelusium in 541 and reached Constantinople in 542, where Procopius reported thousands of deaths a day. Ancient DNA has confirmed the cause as Yersinia pestis.",
    context:
      "Justinian himself caught the disease and survived. The plague returned in waves for two centuries, thinning the armies and taxpayers his reconquests needed; he ruled until his death in 565, leaving an empire overstretched.",
    whyHere:
      "Pelusium guarded the eastern edge of the Nile Delta, where routes from the Red Sea and Sinai met Mediterranean shipping. From Egypt the disease rode the same sea lanes that carried grain to the capital.",
    keyFigures: ["Justinian I", "Procopius"],
    primarySource: {
      excerpt:
        "During these times there was a pestilence, by which the whole human race came near to being annihilated. It started from the Egyptians who dwell in Pelusium.",
      attribution: "Procopius, History of the Wars 2.22 (c. 550), trans. H. B. Dewing",
    },
    schematic: { kind: "causal", steps: ["Plague surfaces at Pelusium", "Grain ships carry it north", "Constantinople struck (542)", "Armies and taxes thinned"] },
  },
];
