import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "Course à l’espace et géopolitique de la guerre froide",
  subtitle: "Comment déserts, steppes, glaces et îles ont façonné un monde bipolaire",
  summary:
    "De l’éclair de Trinity en 1945 à la fin de l’Union soviétique en 1991, deux superpuissances se disputèrent missiles, satellites et alliés sur l’ensemble du globe. La géographie décida d’où partaient les fusées, où veillaient les radars et où se traçaient les lignes de front d’un monde divisé.",
  keywords: [
    "guerre froide",
    "course à l’espace",
    "spoutnik",
    "baïkonour",
    "cap canaveral",
    "otan",
    "pacte de varsovie",
    "mur de berlin",
    "pont aérien de berlin",
    "crise des missiles de cuba",
    "youri gagarine",
    "wernher von braun",
    "apollo 11",
    "missile balistique intercontinental",
    "ligne dew",
    "rideau de fer",
    "essais nucléaires",
    "guerre de corée",
    "khrouchtchev",
    "kennedy",
  ],
  chapters: {
    "cold-chapter-trinity": {
      title: "Un éclair dans le désert",
      caption:
        "Avant l’aube du 16 juillet 1945, un engin au plutonium illumina l’étendue déserte de la Jornada del Muerto et ouvrit l’ère nucléaire.",
    },
    "cold-chapter-airlift": {
      title: "Une île dans la zone",
      caption:
        "Privé de tout accès terrestre, Berlin-Ouest survécut onze mois grâce au fret acheminé par trois étroits couloirs aériens.",
    },
    "cold-chapter-korea": {
      title: "Une péninsule divisée",
      caption: "Une ligne tracée en 1945 le long du 38e parallèle devint le premier champ de bataille de la guerre froide.",
    },
    "cold-chapter-arctic": {
      title: "Surveiller le pôle",
      caption:
        "La route la plus courte entre les deux superpuissances passait au-dessus de l’Arctique : une barrière de radars s’éleva donc le long de la toundra.",
    },
    "cold-chapter-sputnik": {
      title: "Un signal venu de la steppe",
      caption:
        "Un missile intercontinental arracha le premier satellite à la steppe kazakhe, et l’ère spatiale commença.",
    },
    "cold-chapter-cuba": {
      title: "Des missiles au large de la Floride",
      caption:
        "Les missiles soviétiques de l’ouest de Cuba menaçaient les États-Unis par le sud, en contournant les écrans radar tournés vers l’Arctique.",
    },
    "cold-chapter-apollo": {
      title: "Cap à l’est depuis la Floride",
      caption:
        "Une Saturn V s’éleva vers l’est au-dessus de l’Atlantique ; quatre jours plus tard, deux astronautes foulaient le sol de la Lune.",
    },
    "cold-chapter-wall-falls": {
      title: "Le Mur s’ouvre",
      caption:
        "Le 9 novembre 1989, la foule franchit le point de passage de la Bornholmer Straße, et le statut d’enclave de Berlin commença à se dissoudre.",
    },
    "cold-chapter-dissolution": {
      title: "Quinze nouvelles frontières",
      caption:
        "L’Union soviétique se scinda selon le tracé de ses républiques, laissant son cosmodrome et son polygone d’essais à un Kazakhstan nouvellement indépendant.",
    },
  },
  arcs: {
    "cold-arc-paperclip": {
      label: "Opération Paperclip : des V2 jusqu’à White Sands",
      cargo: ["Pièces de V2", "Ingénieurs en fusées", "Archives techniques"],
    },
    "cold-arc-airlift-frankfurt": { label: "Pont aérien de Berlin : couloir sud depuis Francfort" },
    "cold-arc-airlift-hamburg": { label: "Pont aérien de Berlin : couloir nord depuis Hambourg" },
    "cold-arc-yalu": { label: "Les Volontaires du peuple chinois franchissent le Yalou" },
    "cold-arc-dew-line": { label: "La chaîne radar de la ligne DEW le long du littoral arctique" },
    "cold-arc-polar-soviet": { label: "Corridor polaire des missiles : de Plessetsk vers le cœur des États-Unis" },
    "cold-arc-polar-american": { label: "Corridor polaire des missiles : du Montana vers Moscou" },
    "cold-arc-anadyr": {
      label: "Opération Anadyr : des ports de la mer Noire à Cuba",
      cargo: ["Missiles R-12", "Troupes", "Bombardiers Il-28"],
    },
    "cold-arc-telstar": { label: "Relais Telstar : d’Andover à Pleumeur-Bodou" },
    "cold-arc-hotline": { label: "Le « téléphone rouge » Moscou–Washington" },
    "cold-arc-apollo-soyuz": { label: "Apollo-Soyouz : liaison de contrôle de Houston à Moscou" },
    "cold-arc-mujahideen-supply": { label: "Ravitaillement des moudjahidines à travers le Pakistan" },
  },
  territories: {
    "cold-zone-nato-america": { name: "OTAN : États-Unis et Canada" },
    "cold-zone-nato-europe": { name: "OTAN : Europe occidentale" },
    "cold-zone-west-berlin": { name: "Berlin-Ouest" },
    "cold-zone-ussr": { name: "Union soviétique" },
    "cold-zone-warsaw-pact": { name: "Pays satellites du pacte de Varsovie" },
    "cold-zone-prc": { name: "République populaire de Chine" },
    "cold-zone-non-aligned-india": { name: "Mouvement des non-alignés : Inde" },
  },
};
