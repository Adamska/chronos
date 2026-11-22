import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "L’expansion bantoue et les royaumes africains",
  subtitle: "Fleuves, pluies et moussons qui ont façonné les langues et les royaumes d’un continent",
  summary:
    "En trois mille ans, des locuteurs de langues bantoues se répandirent depuis les confins du Nigeria et du Cameroun à travers la majeure partie de l’Afrique subsaharienne, portant l’agriculture, le fer et leurs langues le long des rivières de la forêt pluviale et des lisières de savane. La ceinture de la mouche tsé-tsé, les gradients de pluviosité, les Grands Lacs, le plateau du Zambèze et la côte des moussons décidèrent plus tard de l’essor des royaumes et des cités marchandes, de Mapungubwe et du Grand Zimbabwe à Kilwa et au Kongo.",
  keywords: [
    "expansion bantoue",
    "langues bantoues",
    "grassfields du cameroun",
    "nok",
    "urewe",
    "âge du fer en afrique",
    "grands lacs",
    "bananes",
    "madagascar",
    "aksoum",
    "côte swahilie",
    "zanj",
    "kilwa",
    "sofala",
    "mapungubwe",
    "grand zimbabwe",
    "royaume du kongo",
    "diogo cão",
    "vasco de gama",
    "mousson",
  ],
  chapters: {
    "bantu-ch-homeland": {
      title: "Le berceau des Grassfields",
      caption:
        "Sur les hautes terres volcaniques entre Nigeria et Cameroun, les ancêtres de quelque 500 langues commencent à essaimer vers le sud et l’est.",
    },
    "bantu-ch-sangha": {
      title: "À travers la forêt pluviale",
      caption:
        "Lorsqu’une phase plus sèche ouvre la savane le long de la Sangha, des agriculteurs suivent les rivières jusqu’au cœur du bassin du Congo.",
    },
    "bantu-ch-urewe": {
      title: "Le fer au bord des lacs",
      caption:
        "Autour du lac Victoria, les potiers et les métallurgistes d’Urewe font des Grands Lacs un second foyer de l’expansion.",
    },
    "bantu-ch-coast": {
      title: "Le courant oriental rejoint la mer",
      caption:
        "Des agriculteurs franchissent la Nyika aride jusqu’aux collines côtières arrosées par les pluies, puis descendent rapidement vers le Limpopo.",
    },
    "bantu-ch-bananas": {
      title: "Des bananes venues de l’est",
      caption:
        "Des marins austronésiens s’établissent à Madagascar, et des plantes d’Asie du Sud-Est gagnent l’intérieur, transformant l’agriculture africaine.",
    },
    "bantu-ch-mapungubwe": {
      title: "Des rois sur le Limpopo",
      caption:
        "Au confluent de la Shashe et du Limpopo, l’ivoire et l’or expédiés vers la côte font naître ce que beaucoup considèrent comme le premier État d’Afrique australe.",
    },
    "bantu-ch-zimbabwe": {
      title: "Des murs de pierre sur le plateau",
      caption:
        "Au-dessus du lowveld infesté de mouches tsé-tsé, les murailles de granit du Grand Zimbabwe s’élèvent au bord de la route de l’or vers Sofala.",
    },
    "bantu-ch-kilwa": {
      title: "L’or porté par la mousson",
      caption:
        "Kilwa, aux confins de la portée de la mousson, vend l’or du plateau aux navires en partance pour l’Arabie et l’Inde.",
    },
    "bantu-ch-kongo": {
      title: "Des navires à l’embouchure du Congo",
      caption:
        "Les caravelles portugaises atteignent l’estuaire du Congo, et le roi du Kongo jauge ces étrangers venus de la mer.",
    },
  },
  arcs: {
    "bantu-arc-sangha": { label: "Le courant occidental par le couloir de la Sangha" },
    "bantu-arc-eastern-stream": { label: "Le courant oriental contourne la forêt jusqu’aux Grands Lacs" },
    "bantu-arc-lakes-coast": { label: "Des Grands Lacs à la côte de l’océan Indien" },
    "bantu-arc-coast-south": { label: "Le long de la côte jusqu’en Afrique australe" },
    "bantu-arc-iron": { label: "La métallurgie du fer gagne le sud depuis les Grands Lacs" },
    "bantu-arc-austronesian": {
      label: "La traversée austronésienne : de Bornéo à Madagascar",
      cargo: ["bananes", "taro", "ignames asiatiques"],
    },
    "bantu-arc-banana-inland": {
      label: "La banane gagne l’intérieur jusqu’aux Grands Lacs",
      cargo: ["bananes", "bananes plantains"],
    },
    "bantu-arc-gold": {
      label: "La route de l’or : du Grand Zimbabwe à Sofala et Kilwa",
      cargo: ["or", "ivoire", "perles de verre", "étoffes"],
    },
    "bantu-arc-monsoon-aden": {
      label: "Le commerce swahili de mousson : de Kilwa à Mogadiscio et Aden",
      cargo: ["or", "ivoire", "perches de palétuvier", "étoffes"],
    },
    "bantu-arc-monsoon-gujarat": {
      label: "La traversée de mousson : de Mogadiscio au Gujarat",
      cargo: ["ivoire", "or", "étoffes de coton", "perles de verre"],
    },
    "bantu-arc-portuguese": { label: "Les voyages portugais vers l’embouchure du Congo" },
  },
  territories: {
    "bantu-terr-homeland": { name: "Berceau proto-bantou" },
    "bantu-terr-urewe": { name: "Aire de la culture d’Urewe" },
    "bantu-terr-aksum": { name: "Royaume d’Aksoum" },
    "bantu-terr-swahili": { name: "Côte swahilie" },
    "bantu-terr-mapungubwe": { name: "État de Mapungubwe" },
    "bantu-terr-great-zimbabwe": { name: "État du Grand Zimbabwe" },
    "bantu-terr-kongo": { name: "Royaume du Kongo" },
  },
};
