import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "amer-tenochtitlan-founding": {
    title: "La fondation de Tenochtitlan",
    place: "Lac Texcoco, vallée de Mexico",
    summary:
      "La tradition mexica date de 1325 le jour où les errants virent le signe promis par leur dieu Huitzilopochtli\u00a0: un aigle posé sur un figuier de Barbarie. Sur un chapelet d’îlots marécageux du lac Texcoco, ils fondèrent Tenochtitlan, tandis que des parents s’installaient sur l’île voisine de Tlatelolco.",
    context:
      "Les Mexicas racontaient avoir migré pendant des générations depuis une patrie nommée Aztlan. La vallée était déjà peuplée de puissantes cités-États comme Azcapotzalco et Culhuacan, et les nouveaux venus servirent de mercenaires et de tributaires aux Tépanèques avant que leur premier roi, Acamapichtli, ne soit intronisé vers 1375.",
    whyHere:
      "La vallée de Mexico est un bassin fermé, à environ 2 240 mètres d’altitude et sans débouché vers la mer\u00a0: ses rivières s’y accumulaient en une chaîne de lacs peu profonds. Des îles dont personne ne voulait offraient aux Mexicas des douves naturelles, du poisson, des oiseaux d’eau et des roseaux, et les canots atteignaient chaque bourg du rivage bien plus vite qu’un porteur à pied.",
  },
  "amer-triple-alliance": {
    title: "La Triple Alliance",
    place: "Texcoco, vallée de Mexico",
    summary:
      "En 1428, Tenochtitlan, menée par Itzcoatl, s’unit à Texcoco, conduite par le prince exilé Nezahualcoyotl, et à la ville de Tlacopan pour écraser Azcapotzalco, suzeraine tépanèque de la vallée. Les vainqueurs formèrent l’Excan Tlahtoloyan, la Triple Alliance que les historiens appellent l’Empire aztèque.",
    context:
      "Tlacaelel, conseiller d’Itzcoatl, refondit les institutions mexicas autour du dieu de la guerre Huitzilopochtli et de la noblesse guerrière\u00a0; des récits plus tardifs affirment que l’on brûla les anciens livres pour réécrire l’histoire. En quatre-vingt-dix ans, l’alliance, de plus en plus dominée par Tenochtitlan, fit campagne du golfe du Mexique au Pacifique, laissant aux cités vaincues leurs propres souverains tant qu’elles payaient le tribut.",
    whyHere:
      "Trois cités sur trois rives d’un même lac pouvaient contrôler ensemble chaque route de canots, chaque chaussée et chaque champ du rivage. Depuis ce bassin riche et très peuplé, les armées descendaient vers les terres chaudes, dont le coton, le cacao et les plumes ne poussaient pas sur les hauts plateaux frais.",
  },
  "amer-pachacuti-cusco": {
    title: "Pachacutec refonde Cuzco",
    place: "Cuzco, Andes",
    summary:
      "Vers 1438, lorsque les Chancas attaquèrent Cuzco, un fils cadet du souverain Viracocha Inca resta défendre la ville tandis que son père s’enfuyait. Vainqueur, il prit le nom de Pachacutec, «\u00a0celui qui renverse le monde\u00a0», s’empara du pouvoir et entreprit de changer un petit royaume des hautes terres en Tahuantinsuyu, le «\u00a0pays des quatre quartiers\u00a0».",
    context:
      "Les dates traditionnelles proviennent des reconstructions des chroniqueurs espagnols et restent incertaines. On attribue à Pachacutec la reconstruction de Cuzco en pierres ajustées, les débuts de la forteresse-temple de Sacsayhuamán, la conquête du bassin du Titicaca et l’élévation du culte solaire du Coricancha au-dessus de tous les autres.",
    whyHere:
      "Cuzco s’étend à 3 400 mètres dans une vallée fertile où se croisent les routes de la puna, du bassin du Titicaca et des vallées chaudes de l’est. Ses habitants cultivaient la pomme de terre sur les hauteurs et le maïs dans la vallée voisine de l’Urubamba\u00a0: ces récoltes complémentaires donnaient aux souverains des surplus et un carrefour naturel pour les quatre quartiers.",
  },
  "amer-chinampas": {
    title: "Les chinampas et la grande digue",
    place: "Xochimilco, lacs du sud",
    summary:
      "Autour des lacs du sud, les paysans bâtissaient des chinampas, de longues parcelles étroites faites de couches de vase et de végétaux, ancrées par des saules et séparées par des canaux. Après une crue en 1449, Nezahualcoyotl de Texcoco fit construire une digue de 16 kilomètres qui tenait les eaux salées de l’est du lac Texcoco à l’écart de la capitale.",
    context:
      "Les chinampas donnaient plusieurs récoltes par an de maïs, de haricots, de courges, de piments et de fleurs, et contribuaient à nourrir une capitale de peut-être 200 000 habitants. La technique était plus ancienne que les Mexicas, mais la Triple Alliance l’étendit aux lacs d’eau douce de Xochimilco et de Chalco.",
    whyHere:
      "Des sources alimentaient en eau douce les lacs de Xochimilco et de Chalco, tandis qu’au nord le lac Texcoco devenait saumâtre faute d’exutoire. Peu profonds, fertiles et protégés du gel par l’eau, les lacs du sud se prêtaient idéalement aux champs surélevés.",
    schematic: {
      steps: [
        "Un bassin fermé, des lacs peu profonds",
        "Vase et roseaux forment des parcelles",
        "Les canaux arrosent et fertilisent",
        "Plusieurs récoltes par an",
        "Une ville lacustre de 200 000 habitants nourrie",
      ],
    },
  },
  "amer-machu-picchu": {
    title: "Machu Picchu",
    place: "Machu Picchu, au-dessus de l’Urubamba",
    summary:
      "Au milieu du XVe siècle, des bâtisseurs incas élevèrent Machu Picchu sur une crête dominant de très haut l’Urubamba, très probablement comme domaine royal de Pachacutec. Temples, résidences et escaliers de granit finement ajusté s’y mêlent à plus d’une centaine de terrasses agricoles.",
    context:
      "Les souverains incas possédaient des domaines autour de Cuzco, exploités par des familles de serviteurs et abandonnés après la conquête espagnole. Les conquistadors ne trouvèrent jamais Machu Picchu, d’où son remarquable état de conservation\u00a0; les paysans des environs le connaissaient bien avant que Hiram Bingham ne le fasse connaître en 1911.",
    whyHere:
      "Le col entre deux sommets se trouve à environ 2 430 mètres, là où les Andes plongent vers la forêt de nuages du bassin amazonien. Des terrasses bâties sur des lits de gravier drainaient les pluies abondantes et retenaient les pentes, permettant de cultiver sur un site presque entièrement fait de falaises.",
  },
  "amer-qhapaq-nan": {
    title: "Le Qhapaq Ñan, la route inca",
    place: "Hatun Xauxa, Andes centrales",
    summary:
      "Les Incas relièrent leur empire par quelque 40 000 kilomètres de routes, le Qhapaq Ñan, organisé autour de deux axes\u00a0: l’un à travers les Andes, de Quito jusqu’au-delà de Santiago, l’autre le long de la côte. Des ponts de corde enjambaient les gorges, des escaliers gravissaient les cols, et des relais appelés tambos se succédaient à une journée de marche.",
    context:
      "Construites surtout grâce à la mita, la corvée due par chaque communauté, ces routes voyaient passer armées, caravanes de lamas et fonctionnaires, tandis que les simples voyageurs devaient obtenir une autorisation. Des coureurs relayeurs, les chasquis, se transmettaient messages et quipus de poste en poste, parcourant peut-être 240 kilomètres par jour.",
    whyHere:
      "Sans chevaux ni charrettes, un empire étiré sur 4 000 kilomètres de montagnes devait fonctionner à la force des jambes et des caravanes de lamas. Les routes suivaient les hautes vallées et la puna, où vivait l’essentiel de la population, et reliaient déserts, côtes et forêts de nuages au rythme d’un coureur.",
    schematic: {
      steps: [
        "La mita construit les routes",
        "Les tambos stockent des vivres",
        "Les chasquis relaient quipus et ordres",
        "Des armées rapides et nourries",
        "Quatre quartiers gouvernés depuis Cuzco",
      ],
    },
  },
  "amer-tupac-inca": {
    title: "Tupac Inca Yupanqui repousse les frontières",
    place: "Quito, Andes du nord",
    summary:
      "Fils de Pachacutec, Tupac Inca Yupanqui, d’abord comme général puis comme souverain à partir de 1471 environ, porta la puissance inca au nord jusqu’à Quito et au royaume côtier de Chimor, et au sud, à travers l’Atacama, jusqu’au fleuve Maule, au centre du Chili. En deux générations, l’empire passa d’une vallée au plus grand État des Amériques.",
    context:
      "La conquête mêlait force, diplomatie et présents, et les seigneurs locaux qui se soumettaient gardaient leur rang. Des colons appelés mitimaes étaient déplacés à travers l’empire pour tenir les nouvelles provinces, et les orfèvres de Chan Chan, la capitale chimú, furent emmenés à Cuzco.",
    whyHere:
      "Les Andes forment un couloir orienté nord-sud\u00a0: l’expansion suivit donc les vallées de montagne et les oasis côtières le long de cet axe. Les Mapuches au-delà du Maule et la forêt amazonienne à l’est arrêtèrent les armées là où l’agriculture et le ravitaillement des hautes terres ne fonctionnaient plus.",
  },
  "amer-tlatelolco-market": {
    title: "Tlatelolco et son grand marché",
    place: "Tlatelolco, vallée de Mexico",
    summary:
      "En 1473, Axayacatl, souverain de Tenochtitlan, conquit la cité jumelle de Tlatelolco, qui abritait le plus grand marché de Mésoamérique. Des dizaines de milliers de personnes y échangeaient maïs, étoffes, obsidienne, plumes, sel, esclaves et or, en payant avec des fèves de cacao et des capes de coton, sous l’œil de juges qui surveillaient prix et mesures.",
    context:
      "Tlatelolco était aussi la base des pochtecas, marchands au long cours qui voyageaient jusqu’aux confins de la Mésoamérique et servaient d’espions à l’empire. Les Espagnols qui virent le marché en 1519 le comparèrent aux grandes foires d’Europe.",
    whyHere:
      "Partageant son île avec Tenochtitlan, Tlatelolco recevait par canot les marchandises de toutes les villes du lac, dans un pays où tout le reste voyageait à dos d’homme. L’eau faisait de l’île l’endroit le moins coûteux de la vallée pour transporter des marchandises en vrac.",
    schematic: {
      westLabel: "Tlatelolco",
      eastLabel: "Provinces des terres basses",
      eastbound: ["obsidienne", "tissus en poil de lapin", "bijoux d’or", "plantes médicinales"],
      westbound: ["cacao", "coton", "plumes de quetzal", "peaux de jaguar"],
    },
  },
  "amer-templo-mayor": {
    title: "La nouvelle consécration du Templo Mayor",
    place: "Templo Mayor, Tenochtitlan",
    summary:
      "En 1487, le souverain Ahuitzotl consacra de nouveau le Templo Mayor agrandi, la pyramide double du cœur de Tenochtitlan, couronnée des sanctuaires de Huitzilopochtli, dieu de la guerre et du soleil, et de Tlaloc, dieu de la pluie. Des captifs y furent sacrifiés en grand nombre, mais le chiffre de 80 000 avancé par des chroniqueurs plus tardifs passe pour une énorme exagération.",
    context:
      "Le temple fut agrandi sept fois, chaque étape enveloppant la précédente, et des offrandes venues de tous les coins de l’empire furent enfouies dans ses couches. Ses ruines dormirent sous la Mexico coloniale jusqu’en 1978, quand des ouvriers de l’électricité heurtèrent la grande pierre sculptée de la déesse Coyolxauhqui.",
    whyHere:
      "Le temple se dressait là où les Mexicas situaient le signe fondateur, au centre de l’île, à la jonction des chaussées du nord, du sud et de l’ouest. Bâti sur l’argile molle du lac, il s’enfonçait à mesure qu’il grandissait, l’une des raisons pour lesquelles chaque étape fut élevée par-dessus l’ancienne.",
  },
  "amer-quipu": {
    title: "Quipus et entrepôts",
    place: "Huánuco Pampa, Andes centrales",
    summary:
      "Les Incas gouvernaient sans alphabet, consignant recensements, tributs et réserves sur des quipus, cordelettes nouées selon un système décimal et lues par des spécialistes, les quipucamayocs. Dans les centres provinciaux comme Huánuco Pampa, des rangées de centaines d’entrepôts de pierre, les qollqas, conservaient vivres, étoffes et armes.",
    context:
      "L’économie andine ne connaissait ni monnaie ni marchés à la mexicaine. Les foyers devaient du travail plutôt que des biens, et l’État redistribuait par ses entrepôts les produits de ses champs et de ses troupeaux pour nourrir armées, équipes de travail et communautés frappées par la famine.",
    whyHere:
      "Huánuco Pampa occupe un plateau froid à environ 3 700 mètres, où l’air sec et le gel nocturne conservaient pendant des années les pommes de terre lyophilisées et la viande de lama séchée. Les entrepôts s’alignaient sur des pentes ventées pour garder leur contenu au frais et au sec.",
  },
  "amer-moctezuma-tribute": {
    title: "Moctezuma II et l’empire du tribut",
    place: "Tenochtitlan",
    summary:
      "En 1502, Moctezuma Xocoyotzin fut choisi comme huey tlatoani de Tenochtitlan. Il régnait sur un empire d’environ 38 provinces tributaires dont les versements réguliers, peints plus tard dans le Codex Mendoza, affluaient vers la capitale\u00a0: maïs et haricots, dizaines de milliers de capes de coton, cacao, jade, poudre d’or et plumes éclatantes.",
    context:
      "Moctezuma renforça l’étiquette de la cour et réserva les hautes charges à la noblesse. Mais l’empire avait ses limites\u00a0: il ne soumit jamais les Tarasques de l’ouest, qui avaient écrasé une armée mexica vers 1479, ni Tlaxcala, État montagnard qu’il encerclait et combattait dans des «\u00a0guerres fleuries\u00a0» rituelles. Beaucoup de peuples soumis détestaient les collecteurs du tribut.",
    whyHere:
      "Le tribut montait vers un bassin frais où ne poussaient ni le coton ni le cacao. Chaque province payait avec ce que produisait sa terre, si bien que les listes de tribut dessinent aussi une carte des milieux naturels, des basses terres du Golfe aux versants du Pacifique.",
    schematic: {
      westLabel: "Tenochtitlan",
      eastLabel: "Provinces",
      eastbound: ["collecteurs du tribut", "garnisons", "protection"],
      westbound: ["maïs", "capes de coton", "cacao", "plumes", "poudre d’or"],
    },
  },
};
