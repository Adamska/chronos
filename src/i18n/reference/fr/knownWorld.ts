export const perspectives: Readonly<Record<string, { readonly label: string; readonly vantage: string }>> = {
  "greco-roman": { label: "Géographes gréco-romains", vantage: "Alexandrie et Rome" },
  chinese: { label: "Géographes chinois des Han et des Tang", vantage: "Chang’an" },
  islamic: { label: "Géographes du monde islamique", vantage: "Bagdad et Palerme" },
  "latin-europe": { label: "Europe latine", vantage: "Lisbonne, Séville et Amsterdam" },
  polynesian: { label: "Navigateurs polynésiens", vantage: "Raiatea" },
};

export const snapshotNotes: Readonly<Record<string, string>> = {
  "greco-roman:-500": "Hécatée de Milet : un disque de terres ceint par l’Océan.",
  "greco-roman:150": "La Géographie de Ptolémée : des îles Fortunées jusqu’au pays des Sines.",
  "chinese:-100": "Après Zhang Qian : les Contrées occidentales jusqu’à la Bactriane et la Parthie.",
  "chinese:750": "Les itinéraires des Tang atteignent la Perse, l’Inde et le califat arabe.",
  "islamic:950": "Al-Mas’udi : d’al-Andalus aux côtes de la Chine et au pays des Zanj.",
  "islamic:1154": "La Tabula Rogeriana d’al-Idrisi, dressée pour Roger II de Sicile.",
  "latin-europe:1000": "La chrétienté, la Méditerranée et l’Atlantique Nord des Scandinaves.",
  "latin-europe:1400": "Les portulans, les Canaries et le Cathay décrit par Marco Polo.",
  "latin-europe:1500": "L’Afrique contournée, l’Inde atteinte par la mer, les Caraïbes cartographiées.",
  "latin-europe:1550": "Après Magellan : deux océans traversés et les îles aux Épices atteintes.",
  "latin-europe:1700": "Les côtes de tous les continents habités sont cartographiées ; l’intérieur des terres reste en grande partie une page blanche.",
  "polynesian:1300": "Le triangle polynésien : Hawaï, Rapa Nui et Aotearoa.",
};
