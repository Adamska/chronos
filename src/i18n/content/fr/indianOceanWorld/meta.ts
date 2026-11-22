import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’océan Indien et le commerce de la mousson",
  subtitle: "Des vents alternés qui réglaient le calendrier du premier grand système de commerce maritime",
  summary:
    "Chaque été, la mousson du sud-ouest souffle vers l’Inde ; chaque hiver, la mousson du nord-est souffle en sens inverse. Ce vent alterné fit de l’océan Indien le premier grand système de commerce maritime du monde : il fixa les saisons de navigation, fit naître des ports où les navires attendaient que le vent tourne, et porta religions, langues, plantes cultivées et styles architecturaux de l’Afrique orientale à la Chine, jusqu’à l’arrivée des navires portugais à Calicut en 1498.",
  keywords: [
    "océan indien",
    "mousson",
    "boutre",
    "commerce des épices",
    "poivre",
    "hippalos",
    "périple",
    "muziris",
    "aksoum",
    "srivijaya",
    "belitung",
    "siraf",
    "chola",
    "geniza du caire",
    "kilwa",
    "swahili",
    "ibn battûta",
    "zheng he",
    "malacca",
    "majapahit",
    "calicut",
    "ibn majid",
    "vasco de gama",
  ],
  chapters: {
    "io-ch-winds": {
      title: "Lire les vents",
      caption:
        "Les pilotes apprennent à quitter la côte pour traverser d’une traite la mer d’Arabie avec la mousson d’été, puis à revenir avec le vent d’hiver.",
    },
    "io-ch-pepper": {
      title: "Du poivre pour Rome",
      caption:
        "Les navires de l’Égypte romaine gagnent le Malabar en quelques semaines et en reviennent chargés de poivre, d’ivoire et de nard du Gange.",
    },
    "io-ch-straits": {
      title: "Les maîtres des détroits",
      caption:
        "Depuis Palembang, Srivijaya surveille les détroits où les navires venus de l’Inde et de Chine attendent que les vents tournent.",
    },
    "io-ch-china-run": {
      title: "La longue route de la Chine",
      caption:
        "Les navires cousus de Siraf rallient Canton par Quilon et Kalah, un aller-retour réglé sur les moussons.",
    },
    "io-ch-chola": {
      title: "Le coup de force chola",
      caption:
        "Une flotte tamoule traverse le golfe du Bengale et met Kadaram à sac, capturant le roi qui taxait les détroits.",
    },
    "io-ch-swahili": {
      title: "L’or du Sud",
      caption:
        "Kilwa s’enrichit à la limite méridionale de la mousson, là où l’or de Sofala rencontre les navires d’Arabie et de l’Inde.",
    },
    "io-ch-malacca": {
      title: "L’essor de Malacca",
      caption:
        "Un prince en fuite fonde un port sur le détroit ; en quelques décennies, il devient le grand emporium de l’Asie du Sud-Est.",
    },
    "io-ch-treasure": {
      title: "Les flottes du Trésor",
      caption:
        "Portées par la mousson d’hiver, les flottes Ming vont du Fujian à Malacca, Calicut et Ormuz, recueillant le tribut en chemin.",
    },
    "io-ch-gama": {
      title: "Des étrangers à Calicut",
      caption:
        "Des navires portugais traversent depuis Malindi avec la mousson et mouillent devant Calicut : la mer ouverte commence à se refermer.",
    },
  },
  arcs: {
    "io-arc-summer-monsoon": {
      label: "Mousson d’été : de Bérénice à Muziris",
      cargo: ["monnaies d’or", "vin", "verre", "corail"],
    },
    "io-arc-winter-monsoon": {
      label: "Mousson d’hiver : retour de Muziris à Bérénice",
      cargo: ["poivre", "malabathrum", "ivoire", "perles"],
    },
    "io-arc-gulf-malabar": { label: "De Bassora et Siraf à Quilon" },
    "io-arc-malabar-china": { label: "De Quilon à Canton par Kalah" },
    "io-arc-srivijaya-china": { label: "De Srivijaya à Canton" },
    "io-arc-chola": { label: "Flotte chola : de Nagapattinam à Kadaram et Palembang" },
    "io-arc-swahili-india": {
      label: "De la côte swahilie à Calicut et au Gujarat",
      cargo: ["or", "ivoire", "cotonnades", "perles de verre"],
    },
    "io-arc-kilwa-aden": { label: "De Kilwa à Aden le long de la côte swahilie" },
    "io-arc-islam": { label: "L’islam sur les routes maritimes : du Gujarat à Pasai et Malacca" },
    "io-arc-zheng-he-east": { label: "Flottes du Trésor : de Liujiagang à Malacca" },
    "io-arc-zheng-he-west": { label: "Flottes du Trésor : de Malacca à Calicut et Ormuz" },
  },
  territories: {
    "io-terr-aksum": { name: "Royaume d’Aksoum" },
    "io-terr-srivijaya": { name: "Srivijaya" },
    "io-terr-chola": { name: "Empire chola" },
    "io-terr-swahili": { name: "Cités-États swahilies" },
    "io-terr-majapahit": { name: "Majapahit" },
    "io-terr-malacca": { name: "Sultanat de Malacca" },
    "io-terr-vijayanagara": { name: "Empire de Vijayanagara" },
    "io-terr-ming": { name: "Chine des Ming (provinces côtières)" },
  },
};
