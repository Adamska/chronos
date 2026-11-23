import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’Empire perse",
  subtitle: "Routes, satrapes et Roi des rois, de Cyrus à Darius III",
  summary:
    "Parti d’un petit royaume des hautes terres du sud de l’Iran, Cyrus le Grand et ses héritiers bâtirent le plus vaste empire que le monde eût encore connu, de l’Égée à l’Indus et de l’Asie centrale au Nil. Suivez les Perses achéménides, qui régnèrent par les routes, les courriers, le tribut et la tolérance, affrontèrent les Grecs et tombèrent devant Alexandre en 330 av. J.-C.",
  keywords: [
    "empire perse",
    "empire achéménide",
    "perse antique",
    "cyrus le grand",
    "darius ier",
    "xerxès",
    "darius iii",
    "persépolis",
    "pasargades",
    "suse",
    "babylone",
    "cylindre de cyrus",
    "behistun",
    "route royale",
    "satrapie",
    "zoroastrisme",
    "guerres médiques",
    "salamine",
    "gaugamèles",
    "alexandre le grand",
  ],
  chapters: {
    "persia-ch-cyrus": {
      title: "L’essor des Perses",
      caption:
        "Un roi vassal des hautes terres de la Perside renverse son suzerain mède et prend la route de l’ouest, vers l’or de la Lydie.",
    },
    "persia-ch-babylon": {
      title: "Babylone ouvre ses portes",
      caption: "Cyrus entre sans siège dans la plus grande ville de son temps et la gouverne au nom de son propre dieu.",
    },
    "persia-ch-egypt": {
      title: "Un pharaon venu de Perse",
      caption: "Cambyse traverse le Sinaï, brise l’armée égyptienne à Péluse et ceint la couronne des pharaons.",
    },
    "persia-ch-darius": {
      title: "Darius s’empare du trône",
      caption:
        "Après une année de guerre civile, un nouveau roi grave sa victoire dans une falaise dominant la route de Babylone à la Médie.",
    },
    "persia-ch-roads": {
      title: "Les routes du roi",
      caption: "Satrapies, tribut, courriers et voie royale relient vingt provinces, de l’Égée à l’Indus.",
    },
    "persia-ch-greece": {
      title: "Par-delà l’Hellespont",
      caption:
        "Xerxès franchit le détroit sur des navires et lance les armées de son empire sur la Grèce, avant de perdre sa flotte à Salamine.",
    },
    "persia-ch-kings-peace": {
      title: "L’or plutôt que les armées",
      caption: "Les dariques perses dressent les cités grecques les unes contre les autres, jusqu’à ce que le Grand Roi dicte la paix.",
    },
    "persia-ch-fall": {
      title: "Le dernier Grand Roi",
      caption: "Vaincu à Issos et à Gaugamèles, Darius III fuit vers l’est tandis qu’Alexandre prend Babylone, Suse et Persépolis.",
    },
  },
  arcs: {
    "persia-arc-cyrus-lydia": { label: "Cyrus marche sur Sardes" },
    "persia-arc-cyrus-babylon": { label: "Cyrus descend sur Babylone" },
    "persia-arc-exiles": { label: "Le retour des exilés à Jérusalem", cargo: ["vases du Temple", "familles", "bétail"] },
    "persia-arc-cyrus-east": { label: "Les campagnes de Cyrus jusqu’à l’Iaxarte" },
    "persia-arc-cambyses": { label: "Cambyse traverse le Sinaï jusqu’au Nil" },
    "persia-arc-royal-road": {
      label: "La route royale\u00a0: de Sardes à Suse",
      cargo: ["courriers royaux", "ordres scellés", "argent du tribut", "voyageurs"],
    },
    "persia-arc-susa-persepolis": {
      label: "Route royale\u00a0: de Suse à Persépolis",
      cargo: ["rations", "tablettes d’argile", "courriers"],
    },
    "persia-arc-tribute-india": { label: "La route du tribut depuis l’Indus", cargo: ["poudre d’or", "ivoire", "bois"] },
    "persia-arc-scylax": { label: "Le voyage de Scylax\u00a0: de l’Indus à la mer Rouge" },
    "persia-arc-canal": {
      label: "Le canal de Darius\u00a0: du Nil à la mer Rouge",
      cargo: ["blé", "lin", "dépêches royales"],
    },
    "persia-arc-sardis-raid": { label: "Ioniens et Athéniens incendient Sardes" },
    "persia-arc-datis": { label: "Datis et Artapherne traversent l’Égée" },
    "persia-arc-xerxes": {
      label: "Xerxès marche sur Athènes",
      cargo: ["infanterie de nombreux peuples", "cavalerie", "ingénieurs"],
    },
    "persia-arc-retreat": { label: "Xerxès regagne l’Asie" },
    "persia-arc-alexander": { label: "La marche d’Alexandre au cœur de l’empire" },
    "persia-arc-darius-flight": { label: "La fuite de Darius III vers l’est" },
  },
  territories: {
    "persia-terr-persis": { name: "La Perside, berceau des Perses" },
    "persia-terr-media": { name: "Royaume mède" },
    "persia-terr-lydia": { name: "Royaume de Lydie" },
    "persia-terr-babylonia": { name: "Empire néo-babylonien" },
    "persia-terr-egypt": { name: "L’Égypte saïte" },
    "persia-terr-cyrus": { name: "L’empire de Cyrus et de Cambyse" },
    "persia-terr-darius": { name: "L’Empire achéménide sous Darius Ier" },
    "persia-terr-late": { name: "L’Empire achéménide après Xerxès" },
  },
};
