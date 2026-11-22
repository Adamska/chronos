import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "La révolution industrielle et les réseaux télégraphiques",
  subtitle: "Le charbon, la vapeur et le fil de cuivre rétrécissent le monde",
  summary:
    "L’industrialisation commença en Grande-Bretagne, là où gisements de charbon, rivières rapides et ports navigables se côtoyaient. Canaux, chemins de fer et navires à vapeur abolirent ensuite les distances, et les câbles télégraphiques sous-marins firent de la planète un réseau d’information unique, centré sur Londres.",
  keywords: [
    "révolution industrielle",
    "machine à vapeur",
    "james watt",
    "richard arkwright",
    "coton",
    "manchester",
    "cottonopolis",
    "chemins de fer",
    "george stephenson",
    "télégraphe",
    "câble sous-marin",
    "great eastern",
    "all red line",
    "canal de suez",
    "chemin de fer transcontinental",
    "krupp",
    "bessemer",
    "japon de meiji",
    "transsibérien",
    "canal de panama",
  ],
  chapters: {
    "ind-ch-canals": {
      title: "Le charbon rencontre l’eau",
      caption:
        "Un canal partant des mines du duc de Bridgewater, à Worsley, divise par deux le prix du charbon à Manchester et ouvre l’ère des canaux en Grande-Bretagne.",
    },
    "ind-ch-steam": {
      title: "La machine de Watt",
      caption:
        "À Glasgow, le condenseur séparé de James Watt rend la vapeur assez bon marché pour actionner les filatures de Grande-Bretagne.",
    },
    "ind-ch-cotton": {
      title: "Le roi Coton",
      caption:
        "L’égreneuse à coton lie le travail des esclaves du Sud américain aux filatures du Lancashire, de l’autre côté de l’Atlantique.",
    },
    "ind-ch-railways": {
      title: "L’âge du chemin de fer",
      caption:
        "Les locomotives à vapeur relient le port de Liverpool aux filatures de Manchester, et une fièvre ferroviaire s’ensuit.",
    },
    "ind-ch-atlantic": {
      title: "L’Atlantique câblé",
      caption:
        "Le Great Eastern déroule un câble de l’Irlande à Terre-Neuve, et les nouvelles traversent l’océan en quelques minutes.",
    },
    "ind-ch-suez": {
      title: "Le raccourci vers l’Orient",
      caption:
        "Le canal de Suez ouvre un passage à niveau entre la Méditerranée et la mer Rouge, et les navires à vapeur prennent la route des Indes.",
    },
    "ind-ch-imperial-wire": {
      title: "Le système nerveux de l’Empire",
      caption:
        "Des câbles partis de Cornouailles par Gibraltar, Malte, l’Égypte et Aden placent Londres et Bombay à quelques heures l’une de l’autre.",
    },
    "ind-ch-japan": {
      title: "Le Japon s’industrialise",
      caption:
        "Le Japon de Meiji importe des machines françaises à Tomioka et étudie les usines occidentales pour bâtir son propre État industriel.",
    },
    "ind-ch-panama": {
      title: "Les océans réunis",
      caption:
        "Le canal de Panama ouvre au moment même où la guerre éclate en Europe, refermant une ère d’intégration mondiale.",
    },
  },
  arcs: {
    "ind-arc-atlantic-cable": { label: "Câble transatlantique : de Valentia à Heart’s Content" },
    "ind-arc-mediterranean-cable": { label: "Câble de Porthcurno à Gibraltar et Malte" },
    "ind-arc-red-sea-cable": { label: "Câble de la mer Rouge : de Malte et l’Égypte à Aden et Bombay" },
    "ind-arc-eastern-extension": {
      label: "Câbles et ligne terrestre de Madras à Singapour, Darwin et Adélaïde",
    },
    "ind-arc-pacific-cable-north": { label: "Câble du Pacifique : de Bamfield à l’île Fanning et aux Fidji" },
    "ind-arc-pacific-cable-south": { label: "Câble du Pacifique : des Fidji à l’île Norfolk et au Queensland" },
    "ind-arc-cotton-new-orleans": {
      label: "Le coton, de La Nouvelle-Orléans à Liverpool",
      cargo: ["Coton brut", "Tabac"],
    },
    "ind-arc-bombay-suez": {
      label: "La route à vapeur de Suez : le coton de Bombay vers la Méditerranée",
      cargo: ["Coton brut", "Jute", "Blé", "Courrier"],
    },
    "ind-arc-welsh-coal": {
      label: "Le charbon-vapeur gallois vers l’Atlantique Sud",
      cargo: ["Charbon-vapeur", "Rails", "Machines"],
    },
    "ind-arc-emigration-liverpool": {
      label: "L’émigration de Liverpool vers New York",
      cargo: ["Émigrants irlandais", "Émigrants britanniques", "Émigrants scandinaves"],
    },
    "ind-arc-tech-belgium-ruhr": {
      label: "Le savoir-faire britannique gagne la Belgique et la Ruhr",
      cargo: ["Machines textiles", "Machines à vapeur", "Techniques minières"],
    },
    "ind-arc-iwakura-mission": {
      label: "Le retour de la mission Iwakura par Suez",
      cargo: ["Études d’usines", "Savoir ferroviaire", "Modèles juridiques"],
    },
  },
  territories: {
    "ind-zone-britain": { name: "Grande-Bretagne : le cœur industriel" },
    "ind-zone-british-raj": { name: "Raj britannique" },
    "ind-zone-german-empire": { name: "Empire allemand" },
    "ind-zone-us-manufacturing-belt": { name: "Ceinture manufacturière et ferroviaire des États-Unis" },
    "ind-zone-meiji-japan": { name: "Japon de Meiji" },
    "ind-zone-russian-empire": { name: "Empire russe" },
    "ind-zone-french-third-republic": { name: "Troisième République française" },
  },
};
