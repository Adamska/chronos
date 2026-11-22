export const barrierNames: Readonly<Record<string, string>> = {
  "tibetan-plateau": "Plateau tibétain",
  himalayas: "Himalaya",
  "hindu-kush": "Hindou Kouch et Pamir",
  "tian-shan": "Tian Shan",
  alps: "Alpes",
  pyrenees: "Pyrénées",
  caucasus: "Caucase",
  zagros: "Zagros",
  taurus: "Taurus",
  atlas: "Atlas",
  urals: "Oural",
  andes: "Andes",
};

export const chokepoints: Readonly<Record<string, { readonly name: string; readonly note: string }>> = {
  malacca: {
    name: "Détroit de Malacca",
    note: "Porte des moussons entre l’océan Indien et la mer de Chine méridionale.",
  },
  bosporus: {
    name: "Bosphore",
    note: "Seul passage maritime entre la mer Noire et la Méditerranée.",
  },
  gibraltar: {
    name: "Détroit de Gibraltar",
    note: "Quatorze kilomètres séparent l’Europe de l’Afrique.",
  },
  hormuz: {
    name: "Détroit d’Ormuz",
    note: "Embouchure du golfe Persique.",
  },
  "bab-el-mandeb": {
    name: "Bab el-Mandeb",
    note: "Porte méridionale de la mer Rouge.",
  },
  suez: {
    name: "Isthme de Suez",
    note: "Pont terrestre entre l’Afrique et l’Asie.",
  },
  khyber: {
    name: "Passe de Khyber",
    note: "Route d’invasion historique vers le sous-continent indien.",
  },
  hexi: {
    name: "Corridor du Hexi",
    note: "Chapelet d’oasis entre les monts Qilian et le désert de Gobi.",
  },
  "dzungarian-gate": {
    name: "Porte de Dzoungarie",
    note: "Trouée de steppe balayée par les vents à travers la barrière du Tian Shan.",
  },
  panama: {
    name: "Isthme de Panama",
    note: "La plus étroite bande de terre entre deux océans.",
  },
  "good-hope": {
    name: "Cap de Bonne-Espérance",
    note: "Point de bascule de la route maritime des Indes.",
  },
  dover: {
    name: "Pas de Calais",
    note: "Étroit bras de mer entre la Grande-Bretagne et le continent.",
  },
  oresund: {
    name: "Øresund",
    note: "Barrière de péage du commerce balte.",
  },
  sunda: {
    name: "Détroit de la Sonde",
    note: "Autre passage vers la mer de Java.",
  },
};
