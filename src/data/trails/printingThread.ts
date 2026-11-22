import type { Trail } from "@/types/atlas";

export const printingThreadTrail: Trail = {
  id: "thread-printing",
  kind: "thread",
  title: "Printing: From Woodblock to Gutenberg's Press",
  subtitle: "Carved blocks, clay and metal type, then a press on the Rhine, 868–1500",
  summary:
    "Printing began with Buddhist woodblocks in Tang China, and movable type was tried in clay in Song China and cast in bronze in Goryeo Korea. In Mainz, Gutenberg combined metal type, oil-based ink and the screw press, and his trained workers carried the craft along the Rhine and the trade routes to Italy, France, Poland and England within a generation.",
  accent: "#c9b48a",
  keywords: [
    "printing",
    "printing press",
    "woodblock printing",
    "movable type",
    "diamond sutra",
    "bi sheng",
    "jikji",
    "goryeo",
    "gutenberg",
    "mainz",
    "incunabula",
    "venice",
    "aldus manutius",
    "caxton",
    "typography",
  ],
  stops: [
    {
      id: "printing-dunhuang",
      year: 868,
      place: "Mogao Caves, Dunhuang",
      coordinates: [94.8092, 40.042],
      title: "The Diamond Sutra, the Oldest Dated Printed Book",
      summary:
        "A scroll of the Diamond Sutra printed from carved wooden blocks carries a dedication dated 868, making it the earliest complete printed book with a date. Sealed in a cave library at Dunhuang, it was found in 1900 and acquired by Aurel Stein in 1907.",
      whyHere:
        "Dunhuang was a Buddhist oasis at the western end of the Hexi Corridor, where pilgrims and merchants stocked up for the desert crossing. Copying scripture earned religious merit, which made printing many copies cheaply worthwhile, and the dry desert air preserved the cave library.",
      wikipediaSlug: "Diamond_Sutra",
      layer: "science",
      arrivedBy: "communication",
      keyFigures: ["Wang Jie", "Aurel Stein"],
      primarySource: {
        excerpt:
          "printed on May 11, 868, by Wang Chieh, for free general distribution, in order in deep reverence to perpetuate the memory of his parents.",
        attribution:
          "Colophon of the Dunhuang Diamond Sutra (868), trans. T. F. Carter, The Invention of Printing in China and Its Spread Westward (1925)",
      },
    },
    {
      id: "printing-kaifeng",
      year: 1041,
      place: "Northern Song China (Kaifeng)",
      coordinates: [114.3074, 34.7972],
      title: "Bi Sheng Bakes Movable Type",
      summary:
        "In the 1040s a commoner named Bi Sheng made movable type from baked clay, setting characters in an iron frame on a bed of resin and wax. The scholar Shen Kuo recorded the method, though woodblocks remained the norm for Chinese printing.",
      whyHere:
        "Northern Song China, governed from Kaifeng on the canal system that tied the Yellow River to the rice lands of the south, had an examination system and book trade that created mass demand for texts. With thousands of characters, Chinese favoured carved blocks, so movable type stayed an experiment.",
      wikipediaSlug: "Bi_Sheng",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Bi Sheng", "Shen Kuo"],
      primarySource: {
        excerpt:
          "He took sticky clay and cut in it characters as thin as the edge of a cash. Each character formed as it were a single type. He baked them in the fire to make them hard.",
        attribution:
          "Shen Kuo, Dream Pool Essays (c. 1088), trans. T. F. Carter, The Invention of Printing in China (1925)",
      },
    },
    {
      id: "printing-cheongju",
      year: 1377,
      place: "Heungdeok Temple, Cheongju, Goryeo Korea",
      coordinates: [127.489, 36.6424],
      title: "Jikji and Korea's Metal Type",
      summary:
        "Monks at Heungdeok Temple printed the Buddhist anthology known as Jikji with movable metal type in 1377, the oldest surviving book printed this way. Its single extant volume is held in the National Library of France.",
      whyHere:
        "Goryeo had long experience casting bronze for coins, bells and temple fittings, and its literate elite needed many titles in small editions, the kind of work movable type suits. Monasteries in the peninsula's interior combined the patronage, skills and texts.",
      wikipediaSlug: "Jikji",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Baegun"],
    },
    {
      id: "printing-mainz",
      year: 1455,
      place: "Mainz, Holy Roman Empire",
      coordinates: [8.2473, 49.9929],
      title: "Gutenberg's Press in Mainz",
      summary:
        "By about 1455 Johannes Gutenberg's workshop had completed its great Latin Bible, set with cast metal type and printed on a screw press with oil-based ink. No link to East Asian printing has been shown, and the process appears to have been developed independently.",
      whyHere:
        "Mainz stands where the Main joins the Rhine, Europe's busiest river highway, near the Frankfurt fairs where books could be sold. The Rhineland had goldsmiths skilled in metal casting, wine presses to adapt, and access to Italian paper via the river trade.",
      wikipediaSlug: "Johannes_Gutenberg",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Johannes Gutenberg", "Johann Fust", "Peter Schöffer"],
    },
    {
      id: "printing-subiaco",
      year: 1465,
      place: "Subiaco, Papal States",
      coordinates: [13.095, 41.9255],
      title: "German Printers Cross the Alps",
      summary:
        "After the sack of Mainz in 1462 scattered its printers, Konrad Sweynheym and Arnold Pannartz set up the first press in Italy at the Benedictine monastery of Santa Scolastica, printing a dated Lactantius in 1465. Two years later they moved to Rome.",
      whyHere:
        "Subiaco's monastery in the Aniene valley housed many German-speaking monks and lay a short journey from Rome, the great market for Latin learning. A quiet abbey gave immigrant craftsmen shelter, paper and patrons before they ventured into the city.",
      wikipediaSlug: "Sweynheim_and_Pannartz",
      layer: "science",
      arrivedBy: "migration",
      keyFigures: ["Konrad Sweynheym", "Arnold Pannartz"],
    },
    {
      id: "printing-cologne",
      year: 1466,
      place: "Cologne, Holy Roman Empire",
      coordinates: [6.9603, 50.9375],
      title: "Cologne Carries Print Down the Rhine",
      summary:
        "Ulrich Zell, trained in Mainz, was printing in Cologne by 1466, making it one of the great centres of early German printing. William Caxton later learned the craft there before bringing it to England.",
      whyHere:
        "Cologne was the largest city in Germany, a university town and a Hanseatic market downstream on the Rhine. The river carried its books north to the Low Countries and the North Sea trade.",
      wikipediaSlug: "Ulrich_Zell",
      layer: "trade",
      arrivedBy: "migration",
      keyFigures: ["Ulrich Zell"],
    },
    {
      id: "printing-venice",
      year: 1469,
      place: "Venice, Republic of Venice",
      coordinates: [12.3155, 45.4408],
      title: "Venice Becomes Europe's Print Capital",
      summary:
        "Johann of Speyer received a Venetian printing privilege in 1469, and the French typecutter Nicolas Jenson soon followed. By 1500 Venice was the largest printing centre in Europe, where Aldus Manutius issued Greek classics and portable editions in italic type.",
      whyHere:
        "Venice was Europe's richest trading port, with capital, shipping and agents to send books across the Mediterranean and over the Alps. Paper mills on the nearby mainland and Greek scholars who had fled the fall of Constantinople supplied materials and expertise.",
      wikipediaSlug: "Aldus_Manutius",
      layer: "trade",
      arrivedBy: "migration",
      keyFigures: ["Johann of Speyer", "Nicolas Jenson", "Aldus Manutius"],
    },
    {
      id: "printing-paris",
      year: 1470,
      place: "Sorbonne, Paris",
      coordinates: [2.3431, 48.8488],
      title: "A Press Inside the Sorbonne",
      summary:
        "The scholars Guillaume Fichet and Johann Heynlin invited three German printers, Ulrich Gering, Martin Crantz and Michael Friburger, to set up the first press in France inside the Sorbonne in 1470.",
      whyHere:
        "Paris had the largest university in Europe and an established trade in manuscript books on the Left Bank. Masters and students needed accurate standard texts, and Heynlin's own German contacts recruited the craftsmen.",
      wikipediaSlug: "Guillaume_Fichet",
      layer: "science",
      arrivedBy: "knowledge",
      keyFigures: ["Guillaume Fichet", "Johann Heynlin", "Ulrich Gering"],
    },
    {
      id: "printing-krakow",
      year: 1473,
      place: "Kraków, Kingdom of Poland",
      coordinates: [19.945, 50.0647],
      title: "Kraków Prints for East and West",
      summary:
        "The itinerant printer Kasper Straube issued an almanac in Kraków in 1473, the first printing in Poland. In 1491 Schweipolt Fiol printed some of the first books in Cyrillic type there for Orthodox readers further east.",
      whyHere:
        "Kraków, the royal capital on the Vistula, had a flourishing university and a German merchant community tied to Nuremberg. It sat on the trade road from Central Europe to Lviv and the Black Sea, a crossroads between Latin and Orthodox Christendom.",
      wikipediaSlug: "Kasper_Straube",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Kasper Straube", "Schweipolt Fiol"],
    },
    {
      id: "printing-westminster",
      year: 1476,
      place: "Westminster, England",
      coordinates: [-0.1273, 51.4993],
      title: "Caxton Sets Up Shop at Westminster",
      summary:
        "After learning to print in Cologne and producing the first book in English at Bruges, William Caxton opened a press in the precincts of Westminster Abbey in 1476. He printed Chaucer's Canterbury Tales and helped standardise written English.",
      whyHere:
        "Caxton had spent decades as a cloth merchant in Bruges, the hub of England's wool trade with Flanders. He chose Westminster, beside the royal court and Parliament rather than the City of London, to reach the courtiers and gentry who bought books.",
      wikipediaSlug: "William_Caxton",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["William Caxton"],
      primarySource: {
        excerpt:
          "printing, gunpowder, and the compass. For these three have changed the appearance and state of the whole world: first in literature, then in warfare, and lastly in navigation",
        attribution: "Francis Bacon, Novum Organum, Book I, Aphorism 129 (1620), ed. Joseph Devey (1902)",
      },
    },
  ],
};
