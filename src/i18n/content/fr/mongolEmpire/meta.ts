import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’Empire mongol et le corridor des steppes",
  subtitle: "Une autoroute herbeuse de la Mandchourie à la Hongrie, et les lieux où elle prenait fin",
  summary:
    "La steppe eurasienne permit à une confédération nomade, forte de chevaux remarquables, de relais de poste et d’ingénieurs recrutés parmi les peuples vaincus, de bâtir le plus vaste empire terrestre d’un seul tenant de l’histoire. Suivez les Mongols de l’Onon au Danube, à Bagdad et à la mer de Chine, et découvrez pourquoi ils s’arrêtèrent là où l’herbe cédait la place aux forêts, aux déserts, aux montagnes et aux mers.",
  keywords: [
    "empire mongol",
    "gengis khan",
    "temüdjin",
    "ögödei",
    "kubilaï khan",
    "batu",
    "subötaï",
    "houlagou",
    "karakorum",
    "khanbaliq",
    "yam",
    "steppe",
    "horde d’or",
    "ilkhanat",
    "dynastie yuan",
    "aïn djalout",
    "mohi",
    "kamikaze",
    "pax mongolica",
    "otrar",
  ],
  chapters: {
    "mongol-ch-onon": {
      title: "Un khan sur l’Onon",
      caption:
        "Les tribus de la steppe acclament Temüdjin sous le nom de Gengis Khan, et une armée organisée selon le système décimal prend forme à la lisière des forêts du Khentii.",
    },
    "mongol-ch-khwarazm": {
      title: "À travers le Kyzylkoum",
      caption:
        "Une caravane massacrée à Otrar attire les Mongols vers l’ouest, et Boukhara et Samarcande tombent, derrière le désert.",
    },
    "mongol-ch-caspian": {
      title: "Autour de la Caspienne",
      caption:
        "Djebé et Subötaï chevauchent à travers l’Iran et le Caucase, puis mettent en déroute les Rus’ et les Coumans sur la Kalka.",
    },
    "mongol-ch-hungary": {
      title: "Là où finit l’herbe",
      caption:
        "Batu écrase la Hongrie à Mohi, puis rebrousse chemin devant une plaine trop exiguë et trop humide pour nourrir ses troupeaux.",
    },
    "mongol-ch-ain-jalut": {
      title: "Arrêtés en Galilée",
      caption:
        "Deux ans après la chute de Bagdad, une armée mamelouke défait à Aïn Djalout la force mongole laissée en Syrie.",
    },
    "mongol-ch-yuan": {
      title: "Le Grand Yuan de Kubilaï",
      caption:
        "L’empire se divise en khanats, et Kubilaï gouverne la Chine depuis Dadu, à la fois grand khan et empereur.",
    },
    "mongol-ch-japan": {
      title: "Les vents divins",
      caption:
        "Deux flottes traversent le détroit de Corée jusqu’à la baie de Hakata, et un typhon met fin à la seconde invasion.",
    },
    "mongol-ch-java": {
      title: "Au-delà de la mousson",
      caption:
        "Une flotte Yuan cingle vers Java, gagne une guerre pour le compte d’un allié, puis se voit repoussée jusqu’à ses navires.",
    },
    "mongol-ch-ming": {
      title: "Retour à la steppe",
      caption:
        "Les armées Ming marchent sur Dadu, et le dernier empereur Yuan se replie au nord, vers les prairies que ses ancêtres avaient quittées.",
    },
  },
  arcs: {
    "mongol-arc-khwarazm": { label: "La campagne occidentale de Gengis Khan" },
    "mongol-arc-caspian": { label: "La chevauchée de Djebé et Subötaï autour de la Caspienne" },
    "mongol-arc-batu": { label: "L’invasion de la Rus’ et de la Hongrie par Batu" },
    "mongol-arc-hulagu": { label: "La marche de Houlagou sur Bagdad" },
    "mongol-arc-yam": { label: "Axe principal du yam : de Karakorum à Saraï" },
    "mongol-arc-steppe-trade": {
      label: "La route de la steppe : de Tana à Khanbaliq",
      cargo: ["soie", "fourrures", "argent", "esclaves"],
    },
    "mongol-arc-song": { label: "Par la Han et le Yangzi jusqu’à Lin’an" },
    "mongol-arc-japan": { label: "Les flottes de Kubilaï : de la Corée à Hakata" },
    "mongol-arc-sea-grain": { label: "La route maritime du grain vers Dadu" },
    "mongol-arc-bar-sauma": { label: "Rabban Bar Sauma : de Khanbaliq à Paris" },
    "mongol-arc-java": { label: "La flotte Yuan vers Java" },
  },
  territories: {
    "mongol-terr-genghis": { name: "L’Empire mongol sous Gengis Khan" },
    "mongol-terr-united": { name: "L’Empire mongol unifié" },
    "mongol-terr-golden-horde": { name: "Horde d’Or" },
    "mongol-terr-ilkhanate": { name: "Ilkhanat" },
    "mongol-terr-chagatai": { name: "Khanat de Djaghataï" },
    "mongol-terr-yuan": { name: "Dynastie Yuan" },
    "mongol-terr-song": { name: "Dynastie des Song du Sud" },
    "mongol-terr-mamluk": { name: "Sultanat mamelouk" },
  },
};
