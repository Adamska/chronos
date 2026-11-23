import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La Chine impériale",
  subtitle: "Du Premier Empereur à la chute des Tang",
  summary:
    "En 221 av. J.-C., le roi de Qin met fin à des siècles de guerre et se proclame Premier Empereur d’une Chine unifiée. Suivez onze siècles d’empire à travers murailles, canaux, écriture et examens, des Qin et des Han aux Trois Royaumes, des grottes bouddhiques de l’âge de la division jusqu’à la Chine brillante et cosmopolite des Tang, qui s’effondre en 907.",
  keywords: [
    "chine impériale",
    "dynastie qin",
    "dynastie han",
    "dynastie sui",
    "dynastie tang",
    "qin shi huangdi",
    "premier empereur",
    "armée de terre cuite",
    "grande muraille",
    "empereur wu",
    "xiongnu",
    "sima qian",
    "papier",
    "trois royaumes",
    "bouddhisme",
    "grand canal",
    "chang’an",
    "taizong",
    "wu zetian",
    "an lushan",
  ],
  chapters: {
    "china-ch-unification": {
      title: "Le Premier Empereur",
      caption: "Le roi de Qin avale le dernier des six royaumes rivaux et se proclame Premier Empereur d’une Chine unifiée.",
    },
    "china-ch-han": {
      title: "Les Han sur les ruines des Qin",
      caption:
        "Les Qin s’effondrent dans la révolte peu après la mort de leur fondateur, et un rebelle né paysan fonde une dynastie qui durera quatre siècles.",
    },
    "china-ch-wu": {
      title: "L’empereur Wu regarde vers l’ouest",
      caption:
        "La cavalerie Han s’empare du corridor d’oasis à l’ouest du fleuve Jaune et repousse les Xiongnu au-delà du désert de Gobi.",
    },
    "china-ch-paper": {
      title: "Le papier de Luoyang",
      caption:
        "Dans la capitale des Han orientaux, un eunuque du palais présente un support d’écriture bon marché, fait d’écorce, de chanvre, de chiffons et de filets.",
    },
    "china-ch-division": {
      title: "Les Trois Royaumes",
      caption:
        "Révoltes et seigneurs de la guerre déchirent les Han, et la Chine se brise en trois États rivaux, le long de ses grands fleuves et de ses montagnes.",
    },
    "china-ch-canal": {
      title: "Un fleuve creusé à la main",
      caption:
        "Les Sui réunifient la Chine et creusent un réseau de canaux qui relie le riz du Yangzi aux capitales du Nord.",
    },
    "china-ch-tang": {
      title: "Chang’an, ville-monde",
      caption:
        "Tracée sur un immense quadrillage, la capitale des Tang attire marchands, moines et étudiants, du Japon jusqu’à la Perse.",
    },
    "china-ch-rebellion": {
      title: "La frontière se retourne",
      caption: "Un général de la frontière lance ses armées contre les capitales, et les Tang ne retrouveront jamais toute leur puissance.",
    },
    "china-ch-fall": {
      title: "La chute des Tang",
      caption:
        "Un ancien rebelle dépose le dernier empereur Tang, et le centre du pouvoir glisse vers l’est, à Kaifeng, sur le Grand Canal.",
    },
  },
  arcs: {
    "china-arc-qin-conquest": { label: "Les armées de Qin balaient l’Est jusqu’à Qi" },
    "china-arc-lingqu": { label: "Le canal Lingqu et la conquête du Sud", cargo: ["troupes", "barges de grain"] },
    "china-arc-straight-road": {
      label: "La Route droite vers la frontière du Nord",
      cargo: ["troupes", "dépêches", "grain"],
    },
    "china-arc-chu-han": { label: "La route de Liu Bang vers l’empire" },
    "china-arc-hexi": { label: "Huo Qubing à l’ouest du fleuve Jaune" },
    "china-arc-mobei": { label: "À travers le Gobi contre les Xiongnu" },
    "china-arc-salt": { label: "Le sel du Hedong vers la capitale", cargo: ["sel", "recettes de l’État"] },
    "china-arc-buddhism": { label: "Le bouddhisme entre en Chine", cargo: ["soutras", "moines", "statues"] },
    "china-arc-southward": { label: "Les réfugiés du Nord fuient vers le sud", cargo: ["familles", "clans", "lettrés"] },
    "china-arc-wei-move": {
      label: "Les Wei du Nord transfèrent leur capitale à Luoyang",
      cargo: ["cour", "nobles xianbei", "moines"],
    },
    "china-arc-sui-chen": { label: "Les armées Sui franchissent le Yangzi" },
    "china-arc-canal-south": { label: "Grand Canal\u00a0: de Hangzhou à Luoyang", cargo: ["riz", "sel", "soie", "thé"] },
    "china-arc-canal-north": { label: "Canal Yongji\u00a0: de Luoyang à Zhuojun", cargo: ["troupes", "grain", "armes"] },
    "china-arc-japan": {
      label: "Les ambassades japonaises auprès des Tang",
      cargo: ["envoyés", "moines", "étudiants", "livres"],
    },
    "china-arc-talas": { label: "Gao Xianzhi marche vers le Talas" },
    "china-arc-an-lushan": { label: "An Lushan marche sur les capitales" },
    "china-arc-flight": { label: "Xuanzong fuit vers le Sichuan", cargo: ["empereur", "cour", "gardes"] },
  },
  territories: {
    "china-terr-qin": { name: "Empire Qin" },
    "china-terr-xiongnu": { name: "Confédération xiongnu" },
    "china-terr-early-han": { name: "Premiers Han" },
    "china-terr-han": { name: "Empire Han à son apogée" },
    "china-terr-wei": { name: "Royaume de Wei" },
    "china-terr-shu": { name: "Royaume de Shu Han" },
    "china-terr-wu": { name: "Royaume de Wu" },
    "china-terr-sui-tang": { name: "Chine des Sui et des Tang" },
    "china-terr-anxi": { name: "Protectorat Tang d’Anxi" },
  },
};
