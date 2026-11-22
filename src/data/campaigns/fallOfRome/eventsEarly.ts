import type { HistoricalEvent } from "@/types/chronicle";

export const earlyEvents: readonly HistoricalEvent[] = [
  {
    id: "rome-crisis-235",
    title: "Murder of Severus Alexander",
    year: 235,
    place: "Moguntiacum (Mainz), Rhine frontier",
    coordinates: [8.27, 50.0],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Crisis_of_the_Third_Century",
    summary:
      "Mutinous soldiers killed Emperor Severus Alexander in his camp near Mainz and acclaimed the officer Maximinus Thrax. The murder opened half a century in which more than two dozen emperors rose and fell.",
    context:
      "The new Sasanian dynasty, in power in Persia since 224, had made the eastern frontier far more dangerous just as Germanic confederations pressed on the Rhine and Danube. Usurpations, debased coinage and plague followed one another for fifty years.",
    whyHere:
      "Mainz sits opposite the mouth of the Main, the natural corridor from inner Germania to the Rhine, so armies massed there to face the Alamanni. With the Rhine and the Euphrates some 3,000 km apart, no emperor could be at both fronts at once, and the frontier armies learned to make their own.",
    keyFigures: ["Severus Alexander", "Maximinus Thrax", "Julia Mamaea"],
  },
  {
    id: "rome-edessa",
    title: "Valerian Captured at Edessa",
    year: 260,
    place: "Edessa, Osrhoene (Upper Mesopotamia)",
    coordinates: [38.79, 37.15],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Battle_of_Edessa",
    summary:
      "Shapur I of Persia defeated the Roman army near Edessa and took Emperor Valerian prisoner. Valerian died in Persian captivity, the first Roman emperor taken prisoner by a foreign enemy.",
    context:
      "Shapur had already sacked Antioch in the 250s, and the shock of Valerian's capture helped split the empire into three. Shapur celebrated the victory in rock reliefs at Naqsh-e Rostam and settled Roman captives deep in Iran.",
    whyHere:
      "Edessa and nearby Carrhae lie on the open plain of upper Mesopotamia, where no mountain or river line separates Rome from Persia. Armies could march up the Euphrates and Khabur valleys from Ctesiphon straight toward Syria, making this the empire's most exposed frontier.",
    keyFigures: ["Valerian", "Shapur I", "Gallienus"],
  },
  {
    id: "rome-palmyrene-empire",
    title: "Zenobia's Palmyrene Empire",
    year: 270,
    endYear: 273,
    place: "Palmyra, Syrian Desert",
    coordinates: [38.27, 34.55],
    layer: "borders",
    significance: 3,
    wikipediaSlug: "Palmyrene_Empire",
    summary:
      "Ruling for her young son Vaballathus, Queen Zenobia of Palmyra seized Egypt and much of Anatolia from Rome. Aurelian defeated her armies in 272, captured her, and crushed a renewed Palmyrene revolt in 273.",
    context:
      "In the west the breakaway Gallic Empire held Gaul, Britain and for a time Hispania from 260 until Tetricus I surrendered to Aurelian in 274. For a decade the Roman world was split in three, each part defending its own frontier.",
    whyHere:
      "Palmyra is an oasis midway between the Euphrates and the Mediterranean, grown rich by taxing desert caravans, and its rulers had led Rome's eastern defence against Persia. Taking Egypt meant controlling the granary on which the city of Rome depended.",
    keyFigures: ["Zenobia", "Aurelian", "Odaenathus", "Vaballathus"],
  },
  {
    id: "rome-aurelian-walls",
    title: "Rome Walls Itself Again",
    year: 271,
    endYear: 275,
    place: "Rome",
    coordinates: [12.49, 41.89],
    layer: "conflict",
    significance: 2,
    wikipediaSlug: "Aurelian_Walls",
    summary:
      "After Juthungi raiders broke into northern Italy, Aurelian began a brick circuit wall of about 19 km around Rome. By 274 he had also reunited the empire, earning the title Restorer of the World.",
    context:
      "For three centuries Rome had outgrown its old republican walls because its defence lay on distant frontiers. The new walls admitted that invaders could now reach the heart of Italy.",
    whyHere:
      "Raiders crossing the Danube could pour through the low eastern Alpine passes into the Po valley and down the peninsula. The walls enclosed the seven hills and the Campus Martius and used the Tiber as part of their line.",
    keyFigures: ["Aurelian", "Probus"],
  },
  {
    id: "rome-tetrarchy",
    title: "Diocletian's Tetrarchy",
    year: 293,
    place: "Nicomedia, Bithynia",
    coordinates: [29.92, 40.77],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Tetrarchy",
    summary:
      "Diocletian divided imperial rule between two senior emperors and two junior Caesars, each responsible for a group of frontiers. The arrangement ended the military anarchy and restored central control.",
    context:
      "Diocletian also enlarged the army, multiplied provinces, and reformed taxation. Rome remained the symbolic capital, but emperors now governed from Trier, Milan, Sirmium and Nicomedia, close to the threatened borders.",
    whyHere:
      "Nicomedia lies at the head of the Gulf of Izmit, a day's ride from the Bosporus, on the roads linking the Danube front with the Persian frontier. The tetrarchs chose capitals for their distance to the enemy, not to the Senate.",
    keyFigures: ["Diocletian", "Maximian", "Galerius", "Constantius Chlorus"],
  },
  {
    id: "rome-milvian-bridge",
    title: "Battle of the Milvian Bridge",
    year: 312,
    place: "Milvian Bridge, Rome",
    coordinates: [12.467, 41.936],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_the_Milvian_Bridge",
    summary:
      "Constantine defeated his rival Maxentius north of Rome, and Maxentius drowned in the Tiber. Constantine credited the Christian God with his victory and the next year agreed with Licinius to grant Christians freedom of worship.",
    context:
      "The collapse of the Tetrarchy had produced a new round of civil wars. Constantine's victory made him master of the West, and his patronage set Christianity on the path to becoming the empire's religion.",
    whyHere:
      "The Milvian Bridge carries the Via Flaminia, the main road from the north, across the Tiber. Maxentius fought with the river at his back, so when his line broke his army had to retreat over a narrow crossing and many drowned.",
    keyFigures: ["Constantine the Great", "Maxentius"],
    primarySource: {
      excerpt:
        "He saw with his own eyes the trophy of a cross of light in the heavens, above the sun, and bearing the inscription, Conquer by this.",
      attribution: "Eusebius of Caesarea, Life of Constantine 1.28 (c. 337–339), trans. E. C. Richardson",
    },
  },
  {
    id: "rome-constantinople",
    title: "Founding of Constantinople",
    year: 330,
    place: "Byzantium on the Bosporus",
    coordinates: [28.98, 41.01],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Constantinople",
    summary:
      "Constantine dedicated a new imperial city on the site of ancient Byzantium in May 330. From 332 the Egyptian grain fleet that had fed Rome was redirected to feed it.",
    context:
      "Constantine had become sole emperor by defeating Licinius in 324, with the decisive battle fought at Chrysopolis on the Bosporus. His city gained its own senate and became the permanent capital of the eastern empire, which survived for over a thousand years.",
    whyHere:
      "The city sits on a triangular promontory with the Golden Horn harbour on one side and the Sea of Marmara on the other, so only its short western side faces land. It commands both the crossing between Europe and Asia and the sea lane from the Black Sea to the Aegean, midway between the Danube and Euphrates fronts.",
    keyFigures: ["Constantine the Great", "Licinius"],
    schematic: {
      kind: "causal",
      steps: ["Constantine wins sole rule", "Byzantium refounded", "Egyptian grain diverted east", "Power shifts to the Bosporus"],
    },
  },
  {
    id: "rome-huns-don",
    title: "The Huns Cross the Don",
    year: 370,
    endYear: 376,
    place: "Lower Don, Pontic steppe",
    coordinates: [40.0, 47.3],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Huns",
    summary:
      "Hunnic horsemen from beyond the Volga overran the Alans and then the Greuthungi Goths north of the Black Sea. The Tervingi Goths, unable to hold the Dniester, fled to the Roman Danube.",
    context:
      "The Huns' origins remain debated, but their arrival set off a chain reaction across the steppe and the Gothic lands. By 376 tens of thousands of refugees stood on the Danube's north bank asking to enter the empire.",
    whyHere:
      "The steppe is a continuous belt of grassland running from Central Asia to the Carpathians, where mounted herders could move fast and feed their horses anywhere. Its great rivers run north to south and could be forded or crossed on winter ice, so they offered no lasting barrier to riders moving west.",
    keyFigures: ["Ermanaric", "Athanaric", "Fritigern"],
    primarySource: {
      excerpt:
        "The people of the Huns, but little known from ancient records, dwelling beyond the Maeotic Sea near the ice-bound ocean, exceed every degree of savagery.",
      attribution: "Ammianus Marcellinus, Res Gestae 31.2.1 (c. 390), trans. J. C. Rolfe",
    },
    schematic: {
      kind: "causal",
      steps: ["Huns cross Volga and Don", "Alans and Greuthungi broken", "Tervingi flee to the Danube", "Rome admits the Goths"],
    },
  },
  {
    id: "rome-adrianople",
    title: "Battle of Adrianople",
    year: 378,
    place: "Adrianople, Thrace",
    coordinates: [26.56, 41.68],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Battle_of_Adrianople",
    summary:
      "Goths who had crossed the Danube in 376 and then rebelled against Roman mistreatment destroyed an eastern Roman army. Emperor Valens was killed along with much of his force.",
    context:
      "Valens attacked without waiting for his nephew Gratian's western army. The defeat left a Gothic people permanently inside the empire, settled by treaty under Theodosius in 382 as allies with their own leaders.",
    whyHere:
      "Adrianople stands where the Tundzha joins the Maritsa, on the military highway from the Danube to Constantinople across the open Thracian plain. That road funnelled both the Goths and the imperial army toward the same point, where the Goths waited behind their circle of wagons.",
    keyFigures: ["Valens", "Fritigern", "Gratian"],
    primarySource: {
      excerpt: "Nor, except the battle of Cannae, is so destructive a slaughter recorded in our annals.",
      attribution: "Ammianus Marcellinus, Res Gestae 31.13.19 (c. 390), trans. J. C. Rolfe",
    },
  },
  {
    id: "rome-division-395",
    title: "The Empire Divides for Good",
    year: 395,
    place: "Mediolanum (Milan)",
    coordinates: [9.19, 45.46],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Theodosius_I",
    summary:
      "Theodosius I died at Milan, the last emperor to rule both halves of the empire. His sons Arcadius in Constantinople and Honorius in the West divided it, and it was never reunited under one ruler.",
    context:
      "Theodosius had made Nicene Christianity the state religion and fought two civil wars to keep the empire whole. Under his sons, rivalry between the two courts often prevented them from helping each other.",
    whyHere:
      "The dividing line ran from the middle Danube near Sirmium through the western Balkans to the Gulf of Sidra, roughly separating the Latin and Greek speaking worlds. The East kept Egypt's grain and wealthy cities behind the Bosporus, while the West held the longer Rhine and upper Danube frontiers with a poorer, more rural tax base.",
    keyFigures: ["Theodosius I", "Arcadius", "Honorius", "Stilicho"],
  },
  {
    id: "rome-rhine-crossing",
    title: "Crossing of the Rhine",
    year: 406,
    place: "Rhine near Moguntiacum (Mainz)",
    coordinates: [8.27, 50.0],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Crossing_of_the_Rhine",
    summary:
      "On the last day of 406 a coalition of Vandals, Alans and Suebi crossed the Rhine, traditionally near Mainz, and ravaged Gaul. In 409 they crossed the Pyrenees into Hispania.",
    context:
      "Stilicho had drawn troops from the frontier to defend Italy against Alaric and the invasion of Radagaisus. The crossing triggered usurpations in Britain and Gaul, and Roman Britain was left to fend for itself soon after.",
    whyHere:
      "The Main valley leads from the heart of Germania straight to the Rhine at Mainz, which made this stretch a natural crossing point. A later tradition holds that the river was frozen, but no contemporary source says so.",
    keyFigures: ["Gunderic", "Respendial", "Stilicho"],
  },
];
