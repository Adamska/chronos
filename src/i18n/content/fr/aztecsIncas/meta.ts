import type { CampaignMetaTranslation } from "@/i18n/contentTypes";

export const meta: CampaignMetaTranslation = {
  title: "Les Aztèques et les Incas",
  subtitle: "Villes lacustres, routes des Andes et chute de deux empires",
  summary:
    "Sur les îles d’un lac d’altitude et dans une haute vallée des Andes, deux peuples bâtirent les plus grands empires des Amériques, l’un fondé sur le tribut et les marchés, l’autre sur les routes, les entrepôts et le travail. Suivez-les de la fondation de Tenochtitlan en 1325 à l’exécution du dernier Inca en 1572, et découvrez comment de petites troupes espagnoles les abattirent tous deux grâce à leurs alliés autochtones, à la guerre civile et à des épidémies dévastatrices.",
  keywords: [
    "aztèques",
    "incas",
    "mexicas",
    "tenochtitlan",
    "triple alliance",
    "moctezuma",
    "la malinche",
    "hernán cortés",
    "tlaxcala",
    "conquête du mexique",
    "cuzco",
    "pachacutec",
    "machu picchu",
    "routes incas",
    "quipu",
    "atahualpa",
    "francisco pizarro",
    "conquête du pérou",
    "potosí",
    "variole",
  ],
  chapters: {
    "amer-ch-lake": {
      title: "Un aigle sur un cactus",
      caption: "Sur les îles marécageuses du lac Texcoco, les Mexicas errants trouvent le signe promis par leur dieu et fondent leur ville.",
    },
    "amer-ch-alliance": {
      title: "Trois cités, un empire",
      caption:
        "Tenochtitlan, Texcoco et Tlacopan renversent leurs suzerains tépanèques et bâtissent un empire du tribut qui atteindra deux océans.",
    },
    "amer-ch-cusco": {
      title: "Le Cuzco de Pachacutec",
      caption:
        "Vainqueur des Chancas, Pachacutec s’empare du pouvoir et commence à changer un royaume des hautes terres en plus grand empire des Amériques.",
    },
    "amer-ch-quarters": {
      title: "Les quatre quartiers",
      caption: "Routes, coureurs et entrepôts soudent un empire qui s’étire sur 4 000 kilomètres, de Quito au centre du Chili.",
    },
    "amer-ch-landing": {
      title: "Des navires dans le Golfe",
      caption:
        "Hernán Cortés débarque avec quelques centaines d’hommes et une interprète nommée Malintzin, et gagne bientôt des milliers d’alliés autochtones.",
    },
    "amer-ch-fall": {
      title: "La chute de Tenochtitlan",
      caption:
        "La variole, les brigantins et une armée de Tlaxcaltèques et d’autres alliés abattent la capitale insulaire après près de trois mois de siège.",
    },
    "amer-ch-cajamarca": {
      title: "Guet-apens à Cajamarca",
      caption: "Tout juste sorti d’une guerre civile, Atahualpa rencontre la petite troupe de Pizarro sur une place des Andes et tombe dans un piège.",
    },
    "amer-ch-vilcabamba": {
      title: "Le dernier Inca",
      caption:
        "Depuis les forêts de Vilcabamba, les Incas résistent 35 ans, tandis que l’argent de Potosí commence à faire le tour du monde.",
    },
  },
  arcs: {
    "amer-arc-mexica-migration": { label: "L’errance des Mexicas, par Tula et Chapultepec" },
    "amer-arc-tribute-gulf": {
      label: "La route du tribut des basses terres du Golfe",
      cargo: ["capes de coton", "cacao", "caoutchouc", "plumes"],
    },
    "amer-arc-tribute-soconusco": {
      label: "Cacao et plumes de quetzal du Xoconochco",
      cargo: ["cacao", "plumes de quetzal", "peaux de jaguar", "ambre"],
    },
    "amer-arc-road-north": {
      label: "Qhapaq Ñan\u00a0: de Cuzco à Quito",
      cargo: ["messages des chasquis", "quipus", "caravanes de lamas", "soldats"],
    },
    "amer-arc-road-south": { label: "Qhapaq Ñan\u00a0: de Cuzco au centre du Chili", cargo: ["étoffes", "métaux", "caravanes de lamas"] },
    "amer-arc-tupac-north": { label: "Les campagnes incas vers Chimor et Quito" },
    "amer-arc-tupac-south": { label: "Les campagnes incas jusqu’au Maule" },
    "amer-arc-cortes-march": {
      label: "La marche de Cortés, de la côte à Tenochtitlan",
      cargo: ["soldats espagnols", "guerriers tlaxcaltèques", "chevaux", "canons"],
    },
    "amer-arc-retreat": { label: "La retraite vers Tlaxcala après la Noche triste" },
    "amer-arc-smallpox": { label: "La variole arrive des Caraïbes", cargo: ["variole"] },
    "amer-arc-brigantines": {
      label: "Les brigantins portés de Tlaxcala jusqu’au lac",
      cargo: ["pièces de brigantins", "porteurs tlaxcaltèques", "guerriers"],
    },
    "amer-arc-pizarro-voyage": { label: "Les voyages de Pizarro au sud de Panama" },
    "amer-arc-pizarro-cajamarca": { label: "Pizarro monte vers Cajamarca" },
    "amer-arc-ransom": { label: "L’or et l’argent de la rançon d’Atahualpa", cargo: ["or", "argent", "plaques des temples"] },
    "amer-arc-march-cusco": { label: "Les Espagnols marchent sur Cuzco" },
    "amer-arc-manco": { label: "Manco Inca se replie à Vilcabamba" },
    "amer-arc-silver": { label: "L’argent de Potosí vers Panama", cargo: ["barres d’argent", "pièces"] },
  },
  territories: {
    "amer-terr-alliance": { name: "Le cœur de la Triple Alliance" },
    "amer-terr-aztec": { name: "L’Empire aztèque et ses tributaires" },
    "amer-terr-tarascan": { name: "L’État tarasque" },
    "amer-terr-tlaxcala": { name: "Tlaxcala" },
    "amer-terr-inca-core": { name: "Le cœur inca sous Pachacutec" },
    "amer-terr-inca-height": { name: "Le Tahuantinsuyu, l’Empire inca" },
    "amer-terr-neo-inca": { name: "L’État néo-inca de Vilcabamba" },
  },
};
