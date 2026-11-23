import type { Trail } from "@/types/atlas";
import { story } from "./stories/plagueThread";

export const plagueThreadTrail: Trail = {
  id: "thread-plague",
  kind: "thread",
  title: "Plague: The Black Death's Road West",
  subtitle: "From a Tian Shan valley to the ports and rivers of Europe, 1338–1353",
  summary:
    "Plague bacteria that killed a Christian community in Central Asia in 1338 travelled the caravan roads of the Mongol world to the Black Sea, where Genoese galleys carried them into the Mediterranean. Following shipping lanes, rivers and roads, the Black Death killed perhaps a third or more of Europe's people before circling back east to Moscow.",
  accent: "#c76a5a",
  keywords: [
    "black death",
    "plague",
    "yersinia pestis",
    "pandemic",
    "pestilence",
    "issyk-kul",
    "golden horde",
    "caffa",
    "genoa",
    "messina",
    "boccaccio",
    "florence",
    "melcombe",
    "bergen",
    "moscow",
  ],
  stops: [
    {
      id: "plague-chuy-valley",
      year: 1338,
      place: "Chüy Valley, near Issyk-Kul (Kyrgyzstan)",
      coordinates: [75.0, 42.8],
      title: "Gravestones That Name a Pestilence",
      summary:
        "Syriac-inscribed gravestones of a Church of the East community record a surge of deaths from pestilence in 1338–1339. In 2022 an ancient-DNA study recovered Yersinia pestis from people buried there, a strain close to the ancestor of the Black Death lineages.",
      whyHere:
        "The Chüy valley is a fertile corridor between ranges of the Tian Shan, on the caravan route from China and Mongolia toward Transoxiana and the steppe. Wild rodents of the surrounding mountains are a natural reservoir of plague, and the trade road gave the disease a highway out.",
      wikipediaSlug: "Chüy_Valley",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "plague-sarai",
      year: 1346,
      place: "Lower Volga, Golden Horde",
      coordinates: [47.1, 47.0],
      title: "Death Among the Golden Horde",
      summary:
        "By 1346 the plague was devastating the Mongol khanate of the Golden Horde, whose capital Sarai lay on the lower Volga. Italian merchants heard of whole provinces emptied among the Tatars and the peoples of the east.",
      whyHere:
        "Sarai sat where caravans from Khwarazm and Central Asia met the Volga, the steppe's great north-south river. The Mongol peace and relay-post roads had made the grasslands a single zone of movement for traders, herds and armies.",
      wikipediaSlug: "Golden_Horde",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Jani Beg"],
    },
    {
      id: "plague-caffa",
      year: 1346,
      place: "Caffa (Feodosia), Crimea",
      coordinates: [35.3833, 45.0333],
      title: "Plague at the Siege of Caffa",
      summary:
        "Khan Jani Beg's army besieged the Genoese port of Caffa and was struck by plague. Gabriele de' Mussis, who was not present, later wrote that the besiegers hurled corpses into the town; whether or not that happened, ships leaving Caffa and nearby ports carried the disease west.",
      whyHere:
        "Caffa was the Genoese gateway between the steppe and the sea, where grain, furs and slaves from the Golden Horde were loaded for Constantinople and Italy. Walled on land, it depended on supply by sea, so the galleys that kept it alive also offered the plague an exit.",
      wikipediaSlug: "Siege_of_Caffa",
      layer: "conflict",
      arrivedBy: "military",
      keyFigures: ["Jani Beg", "Gabriele de' Mussis"],
      primarySource: {
        excerpt:
          "Completely encircled by this vast army of enemies, the inhabitants were hardly able to obtain the necessaries of life, and their only hope lay in the fleet which brought them provisions.",
        attribution:
          "Gabriele de' Mussis, Historia de Morbo (c. 1348), trans. F. A. Gasquet, The Great Pestilence (1893)",
      },
    },
    {
      id: "plague-constantinople",
      year: 1347,
      place: "Constantinople, Byzantine Empire",
      coordinates: [28.9784, 41.0082],
      title: "The Bosporus Lets the Plague Through",
      summary:
        "Plague reached Constantinople in 1347 and killed, among many others, the young son of Emperor John VI Kantakouzenos. The emperor's own account traced the epidemic from northern Scythia along almost every coast of the known world.",
      whyHere:
        "Every ship between the Black Sea and the Mediterranean had to pass the narrow Bosporus beneath the city's walls, and the Genoese colony of Pera faced Constantinople across the Golden Horn. The capital was the funnel through which the Black Sea trade, and its rats and fleas, poured south.",
      wikipediaSlug: "John_VI_Kantakouzenos",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["John VI Kantakouzenos"],
    },
    {
      id: "plague-messina",
      year: 1347,
      place: "Messina, Sicily",
      coordinates: [15.5542, 38.1938],
      title: "Twelve Galleys Reach Messina",
      summary:
        "In early October 1347 a squadron of Genoese galleys put into Messina carrying the sickness. The townspeople drove the ships out, but the plague had already landed and fled with refugees to Catania and across Sicily.",
      whyHere:
        "Messina's sickle-shaped natural harbour commands the strait between Sicily and the Italian mainland, a standard stopover for ships sailing from the Aegean toward Genoa, Pisa and the western Mediterranean.",
      wikipediaSlug: "Messina",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Michele da Piazza"],
      primarySource: {
        excerpt:
          "in the month of October, in the year of our Lord, 1347, about the beginning of the month, twelve Genoese ships, flying from the divine vengeance which our Lord for their sins had sent upon them, put into the port of Messina",
        attribution:
          "Michele da Piazza, Sicilian chronicle (14th century), trans. F. A. Gasquet, The Great Pestilence (1893)",
      },
    },
    {
      id: "plague-marseille",
      year: 1347,
      place: "Marseille, Provence",
      coordinates: [5.3698, 43.2965],
      title: "Marseille Opens the Rhône Road",
      summary:
        "Infected ships reached Marseille in November 1347. Within weeks the plague had moved inland to Avignon, seat of the papacy, where the physician Guy de Chauliac watched it kill a large part of the city.",
      whyHere:
        "Marseille was the main port near the mouth of the Rhône, whose valley is the great corridor from the Mediterranean into the heart of France and on to Burgundy and the Rhineland. Barges and roads along the river carried the disease north.",
      wikipediaSlug: "Marseille",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Pope Clement VI", "Guy de Chauliac"],
    },
    {
      id: "plague-florence",
      year: 1348,
      place: "Florence, Italy",
      coordinates: [11.2558, 43.7696],
      title: "Florence and Boccaccio's Witness",
      summary:
        "Arriving in spring 1348, the plague may have killed half or more of Florence's people, including the chronicler Giovanni Villani. Giovanni Boccaccio opened the Decameron with an unflinching account of the city's collapse.",
      whyHere:
        "Florence lay on the Arno upstream of Pisa, whose port had received infected ships early in 1348. Crowded with wool workers and tied to merchants across Europe, it was among the largest and densest cities in the West.",
      wikipediaSlug: "The_Decameron",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Giovanni Boccaccio", "Giovanni Villani"],
      primarySource: {
        excerpt:
          "when into the notable city of Florence, fair over every other of Italy, there came the death-dealing pestilence, which ... had some years before appeared in the parts of the East",
        attribution:
          "Giovanni Boccaccio, The Decameron, Introduction to the First Day (c. 1353), trans. John Payne (1886)",
      },
    },
    {
      id: "plague-paris",
      year: 1348,
      place: "Paris, France",
      coordinates: [2.3522, 48.8566],
      title: "Paris Seeks a Cause in the Stars",
      summary:
        "The plague reached Paris in the summer of 1348. That October the university's medical faculty, asked by King Philip VI to explain it, blamed a conjunction of Saturn, Jupiter and Mars in 1345 and the corrupted air that followed.",
      whyHere:
        "Paris, the largest city north of the Alps, sat at the hub of roads and rivers converging on the Seine basin from the Rhône corridor and the Channel ports, so the disease could reach it from several directions at once.",
      wikipediaSlug: "Black_Death_in_France",
      layer: "science",
      arrivedBy: "trade",
      keyFigures: ["Philip VI of France"],
    },
    {
      id: "plague-melcombe",
      year: 1348,
      place: "Melcombe Regis (Weymouth), Dorset",
      coordinates: [-2.457, 50.6144],
      title: "A Ship Brings Plague to Melcombe",
      summary:
        "In the summer of 1348 plague arrived by ship at Melcombe on the Dorset coast. It spread through the West Country to Bristol and reached London by the autumn.",
      whyHere:
        "Melcombe was a busy Channel port that had sent twenty ships to the siege of Calais in 1347, with close links to Gascony and the French coast. Its harbour faced the very ports the plague had already reached.",
      wikipediaSlug: "Black_Death_in_England",
      layer: "trade",
      arrivedBy: "trade",
      primarySource: {
        excerpt:
          "the cruel pestilence, terrible to all future ages, came from parts over the sea to the south coast of England, into a port called Melcombe, in Dorsetshire.",
        attribution:
          "Eulogium Historiarum (Malmesbury, 14th century), trans. F. A. Gasquet, The Great Pestilence (1893)",
      },
    },
    {
      id: "plague-bergen",
      year: 1349,
      place: "Bergen, Norway",
      coordinates: [5.3221, 60.3913],
      title: "An English Ship at Bergen",
      summary:
        "In 1349 a ship from England brought plague to Bergen, Norway's chief port. From there it spread along the fjords and coast, devastating a thinly settled kingdom where many farms lay abandoned for generations.",
      whyHere:
        "Bergen was the North Sea emporium where Norwegian stockfish was traded for English and German grain and cloth. Its harbour faced England across open water, and coastal shipping linked it to the rest of the kingdom.",
      wikipediaSlug: "Black_Death_in_Norway",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "plague-moscow",
      year: 1353,
      place: "Moscow, Grand Principality of Moscow",
      coordinates: [37.6173, 55.7558],
      title: "The Circle Closes at Moscow",
      summary:
        "Having crossed the Baltic to Pskov and Novgorod in 1352, the plague reached Moscow, where in 1353 it killed Grand Prince Simeon the Proud, his young sons and Metropolitan Theognostus. The pandemic had looped around the steppe it first crossed.",
      whyHere:
        "Novgorod and Pskov were the Hanseatic trade's eastern outposts, connected by Baltic shipping to the infected ports of Germany and Scandinavia. Rivers and portages then carried merchants and the disease inland to the Muscovite heartland.",
      wikipediaSlug: "Simeon_of_Moscow",
      layer: "borders",
      arrivedBy: "trade",
      keyFigures: ["Simeon the Proud", "Theognostus"],
    },
  ],
  story,
};
