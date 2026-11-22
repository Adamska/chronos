import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La route de la soie et les échanges eurasiatiques",
  subtitle: "Oasis, cols et vents de mousson : les fils qui ont noué l’Eurasie",
  summary:
    "Pendant quinze siècles, la soie, les chevaux, le papier, le verre, les religions et la peste ont traversé l’Eurasie par des chemins que dictait la géographie : les oasis du Taklamakan, le corridor du Hexi, les cols du Pamir et de l’Hindou Kouch, la steppe ouverte et les routes maritimes de la mousson. Suivez ces échanges, de la mission de Zhang Qian à la chute de Constantinople.",
  keywords: [
    "route de la soie",
    "zhang qian",
    "corridor du hexi",
    "taklamakan",
    "dunhuang",
    "sogdiens",
    "samarcande",
    "xuanzang",
    "bouddhisme",
    "talas",
    "papier",
    "bagdad",
    "quanzhou",
    "mousson",
    "marco polo",
    "ibn battuta",
    "pax mongolica",
    "peste noire",
    "constantinople",
  ],
  chapters: {
    "silk-ch-opening": {
      title: "L’ouverture de l’Occident",
      caption:
        "Un envoyé des Han échappe aux Xiongnu, atteint la Bactriane et rapporte des nouvelles des chevaux, des villes et des marchés qui s’étendent au-delà du désert.",
    },
    "silk-ch-rome": {
      title: "De la soie pour Rome",
      caption:
        "La soie et le poivre gagnent la Méditerranée par l’entremise des Parthes et des Indiens, et Rome les paie en or et en argent.",
    },
    "silk-ch-buddhism": {
      title: "Le bouddhisme franchit les cols",
      caption:
        "Sous la domination kouchane, des moines du Gandhara empruntent les routes caravanières par-delà les montagnes, vers le bassin du Tarim.",
    },
    "silk-ch-pilgrim": {
      title: "La route du pèlerin",
      caption:
        "Xuanzang longe le Taklamakan, franchit le Tian Shan puis l’Hindou Kouch, et poursuit à pied jusqu’en Inde.",
    },
    "silk-ch-talas": {
      title: "Talas et le papier",
      caption:
        "Les armées tang et abbassides s’affrontent au nord du Tian Shan, et la fabrication du papier gagne l’ouest, jusqu’au monde islamique.",
    },
    "silk-ch-monsoon": {
      title: "Les mers de la mousson",
      caption:
        "Jonques et boutres suivent les vents saisonniers entre Quanzhou, le détroit de Malacca, la côte de Malabar et le Golfe.",
    },
    "silk-ch-khans": {
      title: "Les routes des khans",
      caption:
        "Alors que l’essentiel de l’Eurasie obéit aux khanats mongols, le fils d’un marchand vénitien traverse le continent jusqu’à la cour de Kubilaï.",
    },
    "silk-ch-plague": {
      title: "Les navires de la peste, de Caffa",
      caption:
        "La peste suit les mêmes routes que la soie, de la steppe à la Crimée, puis jusqu’aux ports de la Méditerranée.",
    },
    "silk-ch-straits": {
      title: "Les détroits se ferment",
      caption:
        "Les canons ottomans s’emparent de Constantinople, et la ville qui reliait la mer Noire à la Méditerranée change de maîtres.",
    },
  },
  arcs: {
    "silk-arc-hexi": { label: "Corridor du Hexi : de Chang’an à Dunhuang" },
    "silk-arc-northern-tarim": { label: "Route du nord du Taklamakan" },
    "silk-arc-southern-tarim": { label: "Route du sud du Taklamakan" },
    "silk-arc-sogdiana": { label: "Par l’Alaï vers la Sogdiane et Merv" },
    "silk-arc-khorasan": { label: "Route du Khorassan vers la Mésopotamie et Antioche" },
    "silk-arc-steppe": { label: "Route de la steppe : de la Tana à Khanbaliq" },
    "silk-arc-china-seas": { label: "De la mer de Chine méridionale au détroit de Malacca" },
    "silk-arc-indian-ocean": { label: "Route de la mousson : de Malacca à Calicut et Ormuz" },
    "silk-arc-buddhism": { label: "Le bouddhisme chemine du Gandhara à Luoyang" },
    "silk-arc-paper": { label: "La fabrication du papier gagne l’ouest" },
    "silk-arc-plague": { label: "La peste noire, du Tian Shan à la Méditerranée" },
    "silk-arc-marco-polo": { label: "Le voyage aller de Marco Polo" },
  },
  territories: {
    "silk-terr-han": { name: "Dynastie Han" },
    "silk-terr-parthia": { name: "Empire parthe" },
    "silk-terr-kushan": { name: "Empire kouchan" },
    "silk-terr-rome-east": { name: "Empire romain (provinces orientales)" },
    "silk-terr-tang": { name: "Dynastie Tang" },
    "silk-terr-abbasid": { name: "Califat abbasside" },
    "silk-terr-mongol": { name: "Empire mongol et ses khanats" },
  },
};
