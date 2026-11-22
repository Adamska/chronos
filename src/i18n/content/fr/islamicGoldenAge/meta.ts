import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’âge d’or islamique et la diffusion des sciences",
  subtitle: "Le papier, la traduction et un savoir qui traversa trois continents",
  summary:
    "De la révolution abbasside au sac de Bagdad par les Mongols, un califat étendu de l’Indus à la péninsule Ibérique rassembla les savoirs grecs, persans et indiens, les traduisit en arabe sur un papier bon marché et les porta plus loin. Par Tolède, la Sicile et les États latins d’Orient, ces connaissances passèrent dans l’Europe latine.",
  keywords: [
    "âge d’or islamique",
    "califat abbasside",
    "bagdad",
    "maison de la sagesse",
    "mouvement de traduction",
    "al-khwarizmi",
    "algèbre",
    "chiffres arabes",
    "papier",
    "ibn sina",
    "avicenne",
    "ibn al-haytham",
    "optique",
    "al-biruni",
    "cordoue",
    "tolède",
    "al-idrisi",
    "averroès",
    "fibonacci",
    "mongols",
  ],
  chapters: {
    "iga-ch-baghdad": {
      title: "La Cité de la paix",
      caption:
        "Al-Mansur élève une ville ronde là où le Tigre et l’Euphrate se rapprochent le plus, à la charnière des routes et des fleuves du califat.",
    },
    "iga-ch-paper": {
      title: "La révolution du papier",
      caption:
        "La fabrication du papier passe de Samarcande à Bagdad, et ce support bon marché commence à envahir les bureaux, les boutiques et les bibliothèques du califat.",
    },
    "iga-ch-wisdom": {
      title: "La Maison de la sagesse",
      caption:
        "Les œuvres grecques, persanes et indiennes affluent à Bagdad, où des traducteurs les rendent en arabe et où des savants les prolongent.",
    },
    "iga-ch-monsoon": {
      title: "Au rythme de la mousson",
      caption:
        "Des boutres font voile de Siraf à Kollam, puis jusqu’à Canton, reliant par mer les marchés abbassides à la Chine des Tang.",
    },
    "iga-ch-cordoba": {
      title: "Un califat d’Occident",
      caption:
        "Abd al-Rahman III proclame un califat à Cordoue et fait de la vallée du Guadalquivir un pôle rival de richesse et de livres.",
    },
    "iga-ch-optics": {
      title: "La lumière au Caire fatimide",
      caption:
        "Au Caire, Ibn al-Haytham fonde une nouvelle science de la vision sur l’expérience plutôt que sur l’autorité.",
    },
    "iga-ch-toledo": {
      title: "Les traducteurs de Tolède",
      caption:
        "La science arabe passe en latin à Tolède et franchit les Pyrénées jusqu’à Paris et Oxford.",
    },
    "iga-ch-pisa": {
      title: "Les chiffres gagnent l’Italie",
      caption:
        "Formé auprès des marchands arabes de Bougie, Fibonacci enseigne à l’Italie à compter avec neuf chiffres indiens et un zéro.",
    },
    "iga-ch-baghdad-falls": {
      title: "La chute de Bagdad",
      caption:
        "Les armées de Houlagou descendent la route du Khorassan et mettent Bagdad à sac, mettant fin à cinq siècles de pouvoir abbasside exercé depuis la ville.",
    },
  },
  arcs: {
    "iga-arc-greek-texts": {
      label: "Manuscrits grecs, de Byzance à Bagdad",
      cargo: ["Aristote", "Galien", "Euclide", "Ptolémée"],
    },
    "iga-arc-indian-astronomy": {
      label: "L’astronomie et les chiffres indiens gagnent Bagdad",
      cargo: ["tables de Brahmagupta", "numération de position", "zéro", "tables de sinus"],
    },
    "iga-arc-paper": {
      label: "Le papier chemine vers l’ouest depuis Samarcande",
      cargo: ["papier", "techniques papetières", "livres"],
    },
    "iga-arc-numerals": {
      label: "Les chiffres indo-arabes cheminent vers l’ouest jusqu’à Pise",
      cargo: ["chiffres décimaux", "zéro", "arithmétique marchande"],
    },
    "iga-arc-darb-zubayda": {
      label: "Darb Zubayda, la route des pèlerins vers La Mecque",
      cargo: ["pèlerins", "savants", "livres", "nouvelles"],
    },
    "iga-arc-gulf-malabar": {
      label: "Route des boutres, de Bassora à Kollam",
      cargo: ["dattes", "chevaux", "poivre", "teck"],
    },
    "iga-arc-china-sea": {
      label: "Route de la mousson, de Kollam à Canton",
      cargo: ["soie", "porcelaine", "camphre", "encens"],
    },
    "iga-arc-saharan-gold": {
      label: "Route transsaharienne de l’or",
      cargo: ["or", "sel", "cuivre", "personnes réduites en esclavage"],
    },
    "iga-arc-toledo-latin": {
      label: "Traductions latines, de Tolède aux universités",
      cargo: ["Almageste", "Canon de la médecine", "algorisme", "commentateurs d’Aristote"],
    },
    "iga-arc-sicily-latin": {
      label: "De l’Italie du Sud et de la Sicile à l’Europe latine",
      cargo: ["textes médicaux", "manuscrits grecs et arabes", "géographie"],
    },
    "iga-arc-mongol-advance": { label: "La marche de Houlagou sur Bagdad" },
  },
  territories: {
    "iga-terr-abbasid": { name: "Califat abbasside" },
    "iga-terr-cordoba": { name: "Émirat puis califat omeyyade de Cordoue" },
    "iga-terr-byzantine": { name: "Empire byzantin" },
    "iga-terr-fatimid": { name: "Califat fatimide" },
    "iga-terr-seljuk": { name: "Empire des Grands Seldjoukides" },
    "iga-terr-latin": { name: "Chrétienté latine" },
    "iga-terr-mongol": { name: "Frontière de l’Ilkhanat mongol" },
  },
};
