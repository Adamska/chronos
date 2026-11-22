export const flowNames: Readonly<Record<string, string>> = {
  "gulf-stream": "Gulf Stream",
  "north-atlantic-drift": "Dérive nord-atlantique",
  canary: "Courant des Canaries",
  "atlantic-north-equatorial": "Courant équatorial nord",
  "atlantic-south-equatorial": "Courant équatorial sud",
  brazil: "Courant du Brésil",
  benguela: "Courant de Benguela",
  agulhas: "Courant des Aiguilles",
  "circumpolar-west": "Courant circumpolaire antarctique",
  "circumpolar-east": "Courant circumpolaire antarctique",
  kuroshio: "Kuroshio",
  "north-pacific": "Courant du Pacifique Nord",
  california: "Courant de Californie",
  "pacific-north-equatorial": "Courant équatorial nord",
  humboldt: "Courant de Humboldt",
  "pacific-south-equatorial": "Courant équatorial sud",
  "east-australian": "Courant est-australien",
  "atlantic-ne-trades": "Alizés de nord-est",
  "atlantic-se-trades": "Alizés de sud-est",
  "atlantic-westerlies": "Vents d’ouest",
  "roaring-forties": "Quarantièmes rugissants",
  "pacific-ne-trades": "Alizés de nord-est",
  "pacific-se-trades": "Alizés de sud-est",
  "pacific-westerlies": "Vents d’ouest",
  "somali-jet": "Mousson du sud-ouest",
  "bay-of-bengal-summer": "Mousson du sud-ouest",
  "south-china-summer": "Mousson du sud-ouest",
  "arabian-winter": "Mousson du nord-est",
  "bay-of-bengal-winter": "Mousson du nord-est",
  "south-china-winter": "Mousson du nord-est",
};

export const climatePeriods: Readonly<Record<string, { readonly name: string; readonly note: string }>> = {
  "roman-warm-period": {
    name: "Optimum climatique romain",
    note: "Une phase relativement douce et stable en Méditerranée et en Europe ; son extension et sa chronologie varient selon les régions.",
  },
  "late-antique-little-ice-age": {
    name: "Petit âge glaciaire de l’Antiquité tardive",
    note: "Les éruptions volcaniques de 536, 540 et 547 ont refroidi l’hémisphère Nord, au moment même où sévissaient la famine et la peste de Justinien.",
  },
  "medieval-climate-anomaly": {
    name: "Anomalie climatique médiévale",
    note: "Un Atlantique Nord plus clément a favorisé les navigations scandinaves ; ailleurs, la période a apporté de graves sécheresses.",
  },
  "little-ice-age": {
    name: "Petit âge glaciaire",
    note: "Des siècles plus froids, marqués par l’avancée des glaciers, les fleuves pris par les glaces et les mauvaises récoltes, avec un paroxysme au XVIIe siècle.",
  },
};

export const flowKindLabels: Readonly<Record<string, string>> = {
  "warm-current": "Courant chaud",
  "cold-current": "Courant froid",
  wind: "Vent dominant",
  monsoon: "Mousson",
};
