import type { Trail } from "@/types/atlas";
import { story } from "./stories/ibnBattutaJourney";

export const ibnBattutaJourneyTrail: Trail = {
  id: "journey-ibn-battuta",
  kind: "journey",
  title: "Ibn Battuta's Rihla",
  subtitle: "Three decades across the Dar al-Islam, from the Maghreb to China",
  summary:
    "In 1325 a young Moroccan legal scholar left Tangier for the pilgrimage to Mecca and did not settle again for nearly thirty years. Travelling along the caravan roads, monsoon sea lanes and courts of the fourteenth-century Islamic world, he reached East Africa, India, the Maldives and China, then dictated his memories to Ibn Juzayy in Fez.",
  accent: "#5fb3a8",
  keywords: [
    "ibn battuta",
    "rihla",
    "travels",
    "hajj",
    "tangier",
    "mecca",
    "kilwa",
    "delhi sultanate",
    "muhammad bin tughluq",
    "maldives",
    "quanzhou",
    "zaitun",
    "mali empire",
    "mansa sulayman",
    "ibn juzayy",
    "monsoon",
  ],
  stops: [
    {
      id: "battuta-tangier",
      year: 1325,
      place: "Tangier, Marinid Morocco",
      coordinates: [-5.81, 35.77],
      title: "Setting Out from Tangier",
      summary:
        "At twenty-one, Ibn Battuta left his home city for the hajj, riding east along the North African coast. He would not see Morocco again until 1349.",
      whyHere:
        "Tangier faces Europe across the Strait of Gibraltar at the far western end of the Islamic world. From there the only practical road to Mecca ran east along the coastal plain of the Maghreb, linking a chain of port cities to Egypt.",
      wikipediaSlug: "Tangier",
      layer: "science",
      arrivedBy: "migration",
      keyFigures: ["Ibn Battuta"],
      primarySource: {
        excerpt:
          "I set out alone, having neither fellow-traveller in whose companionship I might find cheer, nor caravan whose part I might join.",
        attribution: "Ibn Battuta, Travels in Asia and Africa 1325-1354, trans. H. A. R. Gibb (1929)",
      },
    },
    {
      id: "battuta-cairo",
      year: 1326,
      place: "Cairo, Mamluk Sultanate",
      coordinates: [31.24, 30.04],
      title: "In the Mamluk Metropolis",
      summary:
        "Cairo, capital of the Mamluk sultan al-Nasir Muhammad, was one of the greatest cities of the age. He travelled up the Nile to the Red Sea port of Aydhab, but a local revolt stopped the crossing and he turned back.",
      whyHere:
        "Cairo sits where the Nile valley opens into the Delta, controlling the river traffic of Egypt and the overland link between Africa and Asia. Red Sea spices reached the Mediterranean through its markets.",
      wikipediaSlug: "Cairo",
      layer: "trade",
      arrivedBy: "migration",
      keyFigures: ["al-Nasir Muhammad"],
    },
    {
      id: "battuta-damascus",
      year: 1326,
      place: "Damascus, Mamluk Syria",
      coordinates: [36.29, 33.51],
      title: "Joining the Syrian Hajj Caravan",
      summary:
        "Blocked on the Red Sea route, he crossed Sinai and Palestine to Damascus, where he studied with its scholars during Ramadan. He then joined the great annual pilgrim caravan south to the Hejaz.",
      whyHere:
        "Damascus lies in the Ghouta oasis on the desert edge, the natural assembly point for caravans heading south. The road to Medina followed a chain of wells and stations along the inland plateau east of the Red Sea mountains.",
      wikipediaSlug: "Damascus",
      layer: "trade",
      arrivedBy: "migration",
    },
    {
      id: "battuta-mecca",
      year: 1326,
      place: "Mecca, Hejaz",
      coordinates: [39.83, 21.42],
      title: "The First Pilgrimage Completed",
      summary:
        "He completed the hajj and, rather than going home, decided to keep travelling. In the following years he toured Iraq and Persia and spent long spells studying in Mecca.",
      whyHere:
        "Mecca, in a dry valley of the Hejaz mountains, drew pilgrims from every Muslim land each year. Its caravans and scholarly networks made it the ideal place for a learned traveller to find patrons and companions bound for anywhere.",
      wikipediaSlug: "Mecca",
      layer: "science",
      arrivedBy: "migration",
    },
    {
      id: "battuta-kilwa",
      year: 1331,
      place: "Kilwa Kisiwani, Swahili coast",
      coordinates: [39.51, -8.96],
      title: "Down the Swahili Coast to Kilwa",
      summary:
        "Sailing from Aden past Mogadishu and Mombasa, he reached Kilwa, whose sultan he praised for his generosity and piety. He found a prosperous Muslim city of stone mosques and palaces.",
      whyHere:
        "Kilwa lies near the southern limit that ships could reach and still return north in the same monsoon year. That position made it the entrepot for gold traded up the coast from Sofala.",
      wikipediaSlug: "Kilwa_Kisiwani",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "battuta-constantinople",
      year: 1332,
      place: "Constantinople, Byzantine Empire",
      coordinates: [28.98, 41.01],
      title: "A Disputed Visit to Constantinople",
      summary:
        "By his account he travelled from the Golden Horde with a Byzantine princess married to Khan Ozbeg and was received at the imperial court. Historians question the dating and details of this episode, which is hard to fit into his itinerary.",
      whyHere:
        "Constantinople commands the Bosporus, the only sea passage between the Black Sea and the Mediterranean. That position let it keep diplomatic ties with the steppe khanates even as Byzantine power shrank.",
      wikipediaSlug: "Constantinople",
      layer: "borders",
      arrivedBy: "migration",
      keyFigures: ["Ozbeg Khan", "Andronikos III Palaiologos"],
    },
    {
      id: "battuta-delhi",
      year: 1334,
      place: "Delhi, Delhi Sultanate",
      coordinates: [77.21, 28.61],
      title: "Judge for Muhammad bin Tughluq",
      summary:
        "After crossing the Hindu Kush, he served the brilliant but volatile sultan Muhammad bin Tughluq as a qadi for about eight years. In 1342 the sultan sent him as envoy to the Yuan emperor of China.",
      whyHere:
        "Delhi stands on the Yamuna where the Aravalli ridge narrows the route between the Indus and Ganges plains. Every invader and trader from Central Asia passed through this gap, so whoever held it held northern India.",
      wikipediaSlug: "Muhammad_bin_Tughluq",
      layer: "borders",
      arrivedBy: "migration",
      keyFigures: ["Muhammad bin Tughluq"],
    },
    {
      id: "battuta-maldives",
      year: 1343,
      place: "Male, Maldive Islands",
      coordinates: [73.51, 4.18],
      title: "Qadi of the Maldive Islands",
      summary:
        "After the China embassy was wrecked off Calicut, he sailed to the Maldives, married into the ruling elite and served as chief judge. His strict rulings made enemies and he left within a year or so.",
      whyHere:
        "The Maldive atolls lie across the Indian Ocean sea lanes between Arabia, India and Southeast Asia. They exported coir rope and cowrie shells, used as currency as far away as Bengal and West Africa.",
      wikipediaSlug: "Maldives",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "battuta-quanzhou",
      year: 1345,
      place: "Quanzhou (Zaitun), Yuan China",
      coordinates: [118.59, 24.91],
      title: "The Great Harbour of Zaitun",
      summary:
        "He describes Zaitun as one of the largest ports in the world, crowded with junks, and its Muslim merchant quarter. Scholars debate how far he travelled in China, as his account of the north is thin and partly confused.",
      whyHere:
        "Quanzhou's sheltered estuary on the Fujian coast lay at the northern end of the monsoon route from India. Under the Yuan it was China's chief port for foreign trade, with a large resident Muslim community.",
      wikipediaSlug: "Quanzhou",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "battuta-fez",
      year: 1349,
      place: "Fez, Marinid Morocco",
      coordinates: [-4.98, 34.06],
      title: "Home to the Marinid Court",
      summary:
        "Returning through a Middle East ravaged by the Black Death, he learned that his mother had died of plague. In Fez he entered the service of Sultan Abu Inan Faris.",
      whyHere:
        "Fez lies in a fertile valley on the corridor between the Atlantic plains and the Mediterranean east, near the Middle Atlas. As the Marinid capital it was the political centre of Morocco and its seat of learning.",
      wikipediaSlug: "Fez,_Morocco",
      layer: "borders",
      arrivedBy: "trade",
      keyFigures: ["Abu Inan Faris"],
    },
    {
      id: "battuta-taghaza",
      year: 1352,
      place: "Taghaza, western Sahara",
      coordinates: [-5.02, 23.6],
      title: "Across the Sahara by Way of Taghaza",
      summary:
        "From Sijilmasa he joined a salt caravan south and stopped at Taghaza, where he describes houses and a mosque built of slabs of salt. The crossing to Walata took about two months.",
      whyHere:
        "Taghaza's rock-salt deposits sat in waterless desert midway between the Maghreb and the Sahel. Salt was scarce south of the Sahara and prized there, so caravans braved the route to trade it for West African gold.",
      wikipediaSlug: "Taghaza",
      layer: "trade",
      arrivedBy: "trade",
    },
    {
      id: "battuta-mali",
      year: 1352,
      place: "Capital of Mali, upper Niger (site uncertain)",
      coordinates: [-8.33, 11.37],
      title: "At the Court of Mansa Sulayman",
      summary:
        "He spent about eight months at the court of Mansa Sulayman, praising its security and justice while criticizing its customs and the stinginess of its gifts. Back in Morocco by 1354, he dictated the Rihla to the scholar Ibn Juzayy, who completed it in 1355.",
      whyHere:
        "The Mali Empire grew rich on the upper Niger, close to the Bambuk and Bure goldfields, where caravan trade met river transport. The location of its capital is still debated; this point marks the Niani area.",
      wikipediaSlug: "Mali_Empire",
      layer: "borders",
      arrivedBy: "trade",
      keyFigures: ["Mansa Sulayman", "Ibn Juzayy"],
    },
  ],
  story,
};
