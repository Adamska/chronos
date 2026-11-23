import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "viking-lindisfarne": {
    title: "Le raid sur Lindisfarne",
    place: "Lindisfarne, Northumbrie",
    summary:
      "Le 8 juin 793, des pillards venus de Scandinavie par la mer saccagent le monastère de Lindisfarne\u00a0: ils tuent des moines, en emmènent d’autres comme esclaves et dépouillent l’église de ses trésors. L’attaque bouleverse l’Europe chrétienne\u00a0; on y voit traditionnellement le début de l’âge des Vikings.",
    context:
      "Des navires du Nord avaient déjà frappé la côte du Wessex, à Portland, quelques années plus tôt, mais Lindisfarne était le sanctuaire le plus célèbre du nord, celui de saint Cuthbert et des Évangiles de Lindisfarne. Deux ans plus tard, les pillards incendiaient aussi les monastères insulaires des Hébrides et de l’Irlande.",
    whyHere:
      "Le monastère se dressait sur une île de marée, reliée à la terre ferme seulement à marée basse mais grande ouverte sur la mer, sans murailles ni garnison. Depuis les fjords de l’ouest de la Norvège, un navire pouvait franchir quelque 700 kilomètres de mer du Nord et s’échouer sur sa plage sans prévenir.",
    schematic: {
      steps: ["Navires rapides au faible tirant d’eau", "Riches monastères côtiers sans défense", "Raid éclair sur Lindisfarne", "Les raids gagnent l’Irlande et la Francie"],
    },
  },
  "viking-hedeby": {
    title: "Hedeby, porte entre deux mers",
    place: "Hedeby, Schleswig",
    summary:
      "Le roi danois Godfred détruit Reric, marché slave concurrent, et transfère ses marchands à Hedeby, qui devient la plus grande ville marchande du Nord viking. Derrière elle, il renforce le Danevirke, un rempart de terre qui barre l’isthme du Jutland face aux Francs.",
    context:
      "Charlemagne venait de soumettre les Saxons, portant la frontière franque aux portes du Danemark. Hedeby frappait monnaie et attirait des marchands de Francie, de Frise, des pays slaves et de Suède, qui y échangeaient esclaves, fourrures, verre, vin et armes.",
    whyHere:
      "Hedeby se trouvait au fond de la Schlei, un long bras de mer de la Baltique, à une quinzaine de kilomètres seulement de rivières coulant vers la mer du Nord. On pouvait faire passer les marchandises par charroi à travers cet isthme étroit plutôt que de contourner, par une route longue et dangereuse, la pointe du Jutland.",
  },
  "viking-faroes": {
    title: "Des colons nordiques aux Féroé",
    place: "Îles Féroé",
    summary:
      "Vers 825, le savant irlandais Dicuil écrit qu’un groupe d’îles situé à deux jours de navigation au nord de la Bretagne, longtemps habité par des ermites irlandais, a été vidé par les Normands. Des paysans nordiques s’installent aux Féroé au début du IXe siècle avec leurs moutons, leur langue et leurs assemblées.",
    context:
      "Les Féroé furent la première étape d’un mouvement nordique à travers l’Atlantique Nord qui allait atteindre l’Islande, le Groenland et l’Amérique du Nord. La tradition des sagas fit plus tard de Grímur Kamban le premier colon.",
    whyHere:
      "Les îles se trouvent à peu près à mi-chemin entre les Shetland et l’Islande, une escale pour les navires qui traversent l’océan. Sans arbres mais verdoyantes, elles offraient des pâturages aux moutons, d’où leur nom norrois, Færeyjar, les «\u00a0îles aux moutons\u00a0».",
  },
  "viking-birka": {
    title: "La mission d’Anschaire à Birka",
    place: "Birka, lac Mälar",
    summary:
      "Le moine franc Anschaire atteint Birka, la ville marchande des Suédois, où il obtient le droit de prêcher et de bâtir une église. Sa biographie, écrite par son successeur Rimbert, offre l’un des rares témoignages directs sur une ville scandinave du IXe siècle.",
    context:
      "Birka prospéra de la fin du VIIIe siècle jusque vers 970, reliant la Baltique aux fleuves de Russie\u00a0; ses tombes renferment de la soie, des monnaies islamiques et du verre franc. La mission d’Anschaire fit peu de convertis durables, et la Suède resta largement païenne deux siècles encore.",
    whyHere:
      "Birka s’élevait sur l’île de Björkö, dans le lac Mälar, alors encore un profond bras de la Baltique qui pénétrait au cœur de la Suède. Ses ports étaient abrités des tempêtes, son fort perché surveillait les voies d’eau, et l’hiver, le lac gelé devenait une route.",
  },
  "viking-oseberg": {
    title: "La sépulture du navire d’Oseberg",
    place: "Oseberg, Vestfold",
    summary:
      "Deux femmes de haut rang furent inhumées dans un navire de chêne richement sculpté, long de 21,5 mètres et doté de quinze paires d’avirons, avec un chariot, des traîneaux, des lits, des textiles et des chevaux sacrifiés. Les cernes du bois datent la sépulture de 834\u00a0; le navire fut fouillé en 1904.",
    context:
      "Le navire était au cœur de la puissance et des croyances scandinaves. Coques à clin aux planches qui se chevauchent, quille solide et voile carrée\u00a0: ces bateaux étaient assez légers pour remonter les fleuves ou être tirés sur les plages, et assez robustes pour traverser la mer du Nord.",
    whyHere:
      "Le Vestfold, sur la rive ouest du fjord d’Oslo, était une riche terre de chefs, aux champs fertiles et aux eaux abritées. L’épaisse argile bleue du tertre empêcha l’air de pénétrer et conserva le bois, les cordages et les étoffes pendant plus de mille ans.",
  },
  "viking-dublin": {
    title: "Le longphort de Dublin",
    place: "Dublin, Irlande",
    summary:
      "Après un demi-siècle de raids éclairs sur les monastères irlandais, des équipages nordiques hivernent en Irlande et bâtissent à Dublin un camp de navires fortifié, un longphort. Il devient une ville et un royaume norrois, le plus grand marché aux esclaves de l’Occident viking.",
    context:
      "Les premiers raids sur l’Irlande datent de 795. À partir des années 830, les flottes grossissent et pénètrent à l’intérieur des terres par les fleuves et les lacs. Les rois irlandais combattent les nouveaux venus mais s’allient et se marient aussi avec eux, et Dublin reste une ville norroise pendant trois siècles.",
    whyHere:
      "Le camp occupait un sombre bassin de marée, le Dubh Linn, au confluent de la Poddle et de la Liffey, qui abritait les navires et ouvrait une route vers l’intérieur. Tournée vers la mer d’Irlande, Dublin était le carrefour des routes maritimes reliant la Norvège, les îles écossaises, la Grande-Bretagne et la France.",
  },
  "viking-paris-845": {
    title: "Ragnar met Paris à sac",
    place: "Paris, Francie occidentale",
    summary:
      "Une flotte de quelque 120 navires, conduite par un chef que les Francs appellent Reginherus et que l’on identifie souvent à Ragnar, remonte la Seine et occupe Paris à Pâques 845. Le roi Charles le Chauve paie 7\u00a0000 livres d’argent pour obtenir son départ.",
    context:
      "En 843, le traité de Verdun avait partagé l’empire de Charlemagne entre ses petits-fils querelleurs. Leurs guerres laissaient fleuves et côtes sans défense, et acheter le départ des pillards, un tribut qu’on appellera plus tard Danegeld, devint une habitude des rois francs.",
    whyHere:
      "La Seine est navigable pour les navires à faible tirant d’eau depuis la Manche jusqu’à Paris et au-delà. Ses méandres offraient aux pillards des îles où camper, tandis que de riches abbayes, comme Saint-Germain-des-Prés, bordaient ses rives.",
  },
  "viking-rurik": {
    title: "Riourik à Novgorod",
    place: "Novgorod, lac Ilmen",
    summary:
      "Selon la Chronique des temps passés, les peuples slaves et finnois du Nord invitèrent un Varègue nommé Riourik et ses frères à régner sur eux. Riourik s’établit à Novgorod et fonda la dynastie qui gouverna la Russie jusqu’en 1598.",
    context:
      "Des Scandinaves, que leurs voisins appelaient Rus’, commerçaient et pillaient le long des fleuves de l’Est depuis le milieu du VIIIe siècle, comme le montrent les fouilles de Staraïa Ladoga. La chronique fut rédigée deux siècles et demi plus tard, et les historiens débattent encore de la part de légende de son récit.",
    whyHere:
      "Novgorod se dresse sur le Volkhov, juste au nord du lac Ilmen, là où les voies d’eau venues de la Baltique rejoignent les portages menant à la Volga comme au Dniepr. Qui la tenait contrôlait l’extrémité nord des routes fluviales vers la Caspienne et la mer Noire.",
  },
  "viking-great-army": {
    title: "La Grande Armée païenne",
    place: "Est-Anglie",
    summary:
      "Une vaste coalition de bandes vikings, menée par Ivar le Désossé et Halfdan, débarque en Est-Anglie. Au lieu de piller puis repartir, elle reste\u00a0: elle prend York en 866, tue les rois de Northumbrie et d’Est-Anglie et submerge la Mercie en moins de dix ans.",
    context:
      "L’Angleterre était divisée en quatre royaumes rivaux incapables de s’unir contre l’envahisseur. Dès 876, une partie de l’armée s’installe, se partage les terres de Northumbrie et commence à les cultiver.",
    whyHere:
      "L’armée se déplaçait par les fleuves et les anciennes voies romaines\u00a0: l’Ouse jusqu’à York, le Trent jusqu’à Nottingham et Repton, la Tamise jusqu’à Reading. Ses camps d’hiver au bord de l’eau permettaient à ses navires et à ses chevaux de la porter au cœur de chaque royaume.",
  },
  "viking-dirhams": {
    title: "L’argent du califat",
    place: "Spillings, Gotland",
    summary:
      "Vers 870, un paysan de Gotland enfouit sous le plancher d’une dépendance quelque 67 kilogrammes d’argent, dont plus de 14\u00a0000 pièces. Ce sont pour la plupart des dirhams islamiques frappés de l’Irak à l’Asie centrale, remontés vers le nord par les fleuves russes.",
    context:
      "À la même époque, le géographe Ibn Khordadbeh décrit des marchands rus’ apportant fourrures et épées jusqu’à la mer Noire et à la Caspienne, certains poursuivant à dos de chameau jusqu’à Bagdad. Les Scandinaves estimaient l’argent au poids, coupant pièces et bijoux en morceaux pour payer.",
    whyHere:
      "Gotland se trouve au milieu de la Baltique, escale naturelle entre la Suède, les rivages orientaux de la Baltique et les fleuves de Russie. Sans villes ni banques, ses paysans-marchands cachaient leurs richesses chez eux\u00a0; l’île a livré plus de 700 trésors d’argent.",
    schematic: {
      westLabel: "Scandinavie",
      eastLabel: "Monde islamique",
      eastbound: ["fourrures", "esclaves", "ambre", "épées", "miel"],
      westbound: ["dirhams d’argent", "soie", "perles de verre", "épices"],
    },
  },
  "viking-iceland": {
    title: "Le peuplement de l’Islande",
    place: "Reykjavík, Islande",
    summary:
      "La tradition islandaise fait d’Ingólfr Arnarson le premier colon permanent, installé à Reykjavík vers 874. En soixante ans, quelque 400 familles de colons, consignées dans le Livre de la colonisation, s’étaient partagé toutes les terres exploitables.",
    context:
      "La plupart des colons venaient de l’ouest de la Norvège, souvent après un passage par les colonies nordiques d’Écosse et d’Irlande, d’où ils amenaient épouses et esclaves gaéliques. Des moines irlandais les avaient précédés, puis étaient partis. Une couche de cendres volcaniques des années 870 marque l’arrivée des hommes.",
    whyHere:
      "L’Islande était une terre vide, aux côtes sud et ouest adoucies par le Gulf Stream, avec de l’herbe pour le bétail et les moutons et du bois flotté sur les rivages. Reykjavík, la «\u00a0baie des fumées\u00a0», doit son nom à la vapeur de ses sources chaudes.",
  },
  "viking-edington": {
    title: "Alfred vainqueur à Edington",
    place: "Edington, Wessex",
    summary:
      "Surpris en plein hiver par l’armée de Guthrum, le roi Alfred de Wessex se cache dans les marais du Somerset, lève une nouvelle armée et écrase les Danois à Edington en mai 878. Guthrum accepte le baptême, et un traité partage ensuite l’Angleterre, laissant le nord et l’est sous la loi danoise\u00a0: le Danelaw.",
    context:
      "Le Wessex était le dernier royaume anglais encore debout. Après sa victoire, Alfred bâtit des villes fortifiées, les burhs, et une flotte, et ses héritiers reconquirent peu à peu le Danelaw, où les noms de lieux nordiques en -by et en -thorpe subsistent aujourd’hui.",
    whyHere:
      "Le refuge d’Alfred, Athelney, était une île au milieu des marais inondés du Somerset, où la cavalerie ne pouvait le suivre. Edington se trouve au bord nord de la plaine de Salisbury, un plateau de craie dégagé, à portée de la base danoise de Chippenham.",
  },
};
