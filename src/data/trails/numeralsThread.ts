import type { Trail } from "@/types/atlas";
import { story } from "./stories/numeralsThread";

export const numeralsThreadTrail: Trail = {
  id: "thread-numerals",
  kind: "thread",
  title: "Zero: Numerals From India to Pisa",
  subtitle: "Nine signs and a circle cross the Islamic world, c. 500–1202",
  summary:
    "Decimal place-value numerals and the zero took shape in India, were adopted and taught in Baghdad, and travelled west through Syria, North Africa and al-Andalus. By the time Leonardo of Pisa published the Liber Abaci in 1202, Mediterranean merchants had a tool that would outcompete the Roman numerals and the counting board.",
  accent: "#7cc7b8",
  keywords: [
    "zero",
    "numerals",
    "hindu-arabic numerals",
    "place value",
    "brahmagupta",
    "aryabhata",
    "al-khwarizmi",
    "algorism",
    "ghubar",
    "gerbert of aurillac",
    "codex vigilanus",
    "fibonacci",
    "liber abaci",
    "mathematics",
  ],
  stops: [
    {
      id: "numerals-pataliputra",
      year: 499,
      place: "Kusumapura (Pataliputra), India",
      coordinates: [85.1376, 25.5941],
      title: "Place Value in the Gupta Heartland",
      summary:
        "Writing in 499, the astronomer Aryabhata encoded numbers in verse with a scheme that presupposes decimal place value. The digit shapes descend from Brahmi numerals, which Gupta-era scribes still wrote with separate signs for tens and hundreds.",
      whyHere:
        "Pataliputra stood near the meeting of the Ganges with the Son and Gandak rivers, the old imperial capital of the eastern Gangetic plain. Its wealth and courts sustained the astronomers whose long calendar calculations made a compact notation for large numbers valuable.",
      wikipediaSlug: "Aryabhata",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Aryabhata"],
    },
    {
      id: "numerals-bhinmal",
      year: 628,
      place: "Bhillamala (Bhinmal), Rajasthan, India",
      coordinates: [72.27, 25.0],
      title: "Brahmagupta Gives Zero Its Rules",
      summary:
        "In the Brahmasphutasiddhanta of 628, Brahmagupta treated zero as a number in its own right, with explicit rules for adding, subtracting and multiplying it alongside positive and negative quantities.",
      whyHere:
        "Bhillamala was the capital of a Gurjara kingdom on the routes linking the ports of Gujarat with the interior of northern India. Astronomy there drew on the tradition centred on nearby Ujjain, the reference meridian of Indian astronomers.",
      wikipediaSlug: "Brahmagupta",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Brahmagupta"],
      primarySource: {
        excerpt:
          "The sum of cipher and negative is negative; of affirmative and nought is positive; of two ciphers is cipher. ... The product of cipher and negative, or of cipher and affirmative, is nought; of two ciphers, is cipher.",
        attribution: "Brahmagupta, Brahmasphutasiddhanta (628), trans. H. T. Colebrooke (1817)",
      },
    },
    {
      id: "numerals-qenneshre",
      year: 662,
      place: "Qenneshre, on the Euphrates, Syria",
      coordinates: [38.03, 36.82],
      title: "A Syriac Bishop Praises Nine Signs",
      summary:
        "Severus Sebokht, a scholar-bishop at the monastery of Qenneshre, wrote in 662 that Indian methods of calculation surpassed description and used just nine signs. It is the earliest known mention of Indian numerals outside India.",
      whyHere:
        "Qenneshre overlooked a crossing of the Euphrates, the river road between Syria and Mesopotamia, where Syriac monks had long translated Greek learning. Contacts with Persia, which traded across the Gulf and the Arabian Sea with India, carried word of Indian astronomy westward.",
      wikipediaSlug: "Severus_Sebokht",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Severus Sebokht"],
    },
    {
      id: "numerals-baghdad",
      year: 825,
      place: "Baghdad, Abbasid Caliphate",
      coordinates: [44.3661, 33.3152],
      title: "Al-Khwarizmi Teaches Indian Reckoning",
      summary:
        "Under the caliph al-Ma'mun, Muhammad ibn Musa al-Khwarizmi wrote a treatise on calculating with Indian numerals that later survived in Latin as Algoritmi de numero Indorum. His name became the word algorithm, and his methods spread through the caliphate's offices and markets.",
      whyHere:
        "Baghdad, set where the Tigris and Euphrates run closest together, governed an empire stretching to the Indus. An Indian astronomer had brought Sanskrit tables to al-Mansur's court in the 770s, and a capital of tax registers and long-distance trade needed fast arithmetic.",
      wikipediaSlug: "Al-Khwarizmi",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Al-Khwarizmi", "Al-Ma'mun"],
      primarySource: {
        excerpt:
          "what is easiest and most useful in arithmetic, such as men constantly require in cases of inheritance, legacies, partition, law-suits, and trade, and in all their dealings with one another, or where the measuring of lands, the digging of canals",
        attribution:
          "Al-Khwarizmi, The Compendious Book on Calculation by Completion and Balancing (c. 820), trans. F. Rosen (1831)",
      },
    },
    {
      id: "numerals-gwalior",
      year: 876,
      place: "Gwalior, Central India",
      coordinates: [78.1691, 26.2307],
      title: "A Zero Carved in Stone at Gwalior",
      summary:
        "An inscription of 876 in a small temple on Gwalior's fortress hill records numbers such as 270 and 50 with a small circle for zero. It has long been cited as the earliest undoubted zero in India, and it can still be read in place.",
      whyHere:
        "Gwalior's flat-topped sandstone ridge rises sheer above the plain, a natural fortress guarding the route between the Ganges valley and the plateau of Malwa. Land grants and temple endowments recorded on stone there preserved everyday numerals that perished elsewhere on palm leaf.",
      wikipediaSlug: "Chaturbhuj_Temple,_Gwalior",
      layer: "science",
      arrivedBy: "knowledge",
    },
    {
      id: "numerals-cordoba",
      year: 950,
      place: "Córdoba, al-Andalus",
      coordinates: [-4.7794, 37.8882],
      title: "Dust Numerals in al-Andalus",
      summary:
        "In the western Islamic world, Indian digits took distinctive ghubar or dust forms, named for the sand-covered boards on which calculations were traced. By the tenth century they were in use from Kairouan to Córdoba, and they are the ancestors of the digits Europe adopted.",
      whyHere:
        "Córdoba, capital of the Umayyad state on the navigable Guadalquivir, drew books and scholars from Kairouan, Cairo and Baghdad along Mediterranean sea lanes. It sat on Islam's frontier with Latin Christendom, where ideas could cross into Europe.",
      wikipediaSlug: "Caliphate_of_Córdoba",
      layer: "science",
      arrivedBy: "knowledge",
    },
    {
      id: "numerals-vic",
      year: 967,
      place: "Vic, Catalonia",
      coordinates: [2.2546, 41.9301],
      title: "Gerbert Studies on the Spanish March",
      summary:
        "The young monk Gerbert of Aurillac spent about three years in Catalonia under Bishop Atto of Vic, studying mathematics and astronomy. He later taught with an abacus whose counters bore the nine digit forms, and became Pope Sylvester II in 999.",
      whyHere:
        "Catalonia was a Christian borderland adjoining al-Andalus, and its monasteries, Ripoll above all, held Latin versions of Arabic works on the astrolabe and arithmetic. It was the nearest place a scholar from Francia could reach Arabic learning in Latin.",
      wikipediaSlug: "Pope_Sylvester_II",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Gerbert of Aurillac", "Atto of Vic"],
    },
    {
      id: "numerals-albelda",
      year: 976,
      place: "Albelda de Iregua, La Rioja, Spain",
      coordinates: [-2.48, 42.358],
      title: "The Codex Vigilanus Records Nine Digits",
      summary:
        "A monk named Vigila, copying a vast manuscript at the monastery of San Martín de Albelda, added the nine Indian digits to a passage on Roman numerals. Dated 976, it is the oldest known European manuscript to show them, still without a zero.",
      whyHere:
        "Albelda lay in the upper Ebro valley on the frontier between the Christian kingdom of Pamplona and al-Andalus. Christians who had lived under Muslim rule brought Arabic learning into such northern monasteries.",
      wikipediaSlug: "Codex_Vigilanus",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Vigila"],
    },
    {
      id: "numerals-bugia",
      year: 1192,
      place: "Bugia (Béjaïa), North Africa",
      coordinates: [5.0567, 36.7509],
      title: "A Pisan Boy Learns to Count in Bugia",
      summary:
        "Leonardo of Pisa, later called Fibonacci, was brought as a boy to Bugia, where his father served the Pisan merchants at the customs house. There he was taught the Indian numerals, and he went on to study them on journeys to Egypt, Syria, Byzantium, Sicily and Provence.",
      whyHere:
        "Bugia had one of the best harbours on the Barbary coast, sheltered by Mount Gouraya, and was a former capital of the Hammadid dynasty. Italian merchants came for its beeswax, so prized that French still calls a candle a bougie, and needed agents who could reckon in the local system.",
      wikipediaSlug: "Fibonacci",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Leonardo of Pisa (Fibonacci)", "Guglielmo Bonacci"],
    },
    {
      id: "numerals-pisa",
      year: 1202,
      place: "Pisa, Italy",
      coordinates: [10.4017, 43.7228],
      title: "Liber Abaci Brings Zero to Italian Merchants",
      summary:
        "Back in Pisa, Leonardo published the Liber Abaci, presenting the nine Indian figures and the sign 0 with worked problems on prices, currency exchange, partnerships and interest. Its practical method fed the abacus schools of Italian cities, though Roman numerals lingered in accounts for centuries.",
      whyHere:
        "Pisa was a maritime republic at the mouth of the Arno with trading posts from North Africa to the Levant. Its merchants juggled dozens of currencies and units of weight, exactly the problems a positional system with zero made easy.",
      wikipediaSlug: "Liber_Abaci",
      layer: "science",
      arrivedBy: "trade",
      keyFigures: ["Leonardo of Pisa (Fibonacci)"],
    },
  ],
  story,
};
