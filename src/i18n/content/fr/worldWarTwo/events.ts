import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "ww2-marco-polo": {
    title: "L’incident du pont Marco-Polo",
    place: "Pont Marco-Polo, près de Beiping (Pékin)",
    summary:
      "Dans la nuit du 7 juillet 1937, un accrochage entre des troupes japonaises en manœuvre et des soldats chinois au pont Marco-Polo, au sud-ouest de Beiping, dégénère en guerre ouverte. Fin juillet, le Japon tient Beiping et Tianjin\u00a0; en août, les combats gagnent Shanghai.",
    context:
      "Le Japon s’était emparé de la Mandchourie en 1931 pour en faire l’État fantoche du Mandchoukouo, puis n’avait cessé d’avancer en Chine du Nord. Les nationalistes de Tchang Kaï-chek et les communistes de Mao Zedong suspendent leur guerre civile dans un fragile front uni. En Chine, la guerre de résistance est datée de cette nuit-là, deux ans avant que la guerre n’éclate en Europe.",
    whyHere:
      "Le pont porte la grand-route et la voie ferrée Beiping-Hankou au-dessus de la rivière Yongding\u00a0: c’est la porte qui mène de l’ancienne capitale à la grande plaine de Chine du Nord. Des garnisons japonaises stationnaient le long de ces axes en vertu du traité qui avait clos la guerre des Boxers en 1901\u00a0; des soldats rivaux se faisaient donc face à un carrefour vital.",
  },
  "ww2-nanjing": {
    title: "Le massacre de Nankin",
    place: "Nankin, Chine",
    summary:
      "Après la prise de la capitale nationaliste le 13 décembre 1937, les troupes japonaises tuent prisonniers de guerre et civils et commettent des viols de masse pendant environ six semaines. Les estimations vont de plusieurs dizaines de milliers à plus de 200 000 morts\u00a0; le tribunal de Tokyo, après la guerre, retint un bilan supérieur à 200 000.",
    context:
      "La bataille de Shanghai, d’août à novembre 1937, avait coûté de lourdes pertes au Japon, dont les armées poursuivent les Chinois en retraite le long du Yangzi. Une poignée d’étrangers, dont l’homme d’affaires allemand John Rabe, crée une zone de sécurité qui abrite quelque 200 000 civils. Le massacre reste une plaie vive dans les relations entre la Chine et le Japon.",
    whyHere:
      "Nankin s’étend sur la rive sud du Yangzi, à quelque 300 kilomètres en amont de Shanghai, derrière d’épaisses murailles de l’époque Ming. Dos au large fleuve, presque sans bateaux, soldats vaincus et civils n’avaient guère d’issue quand la ville tomba.",
  },
  "ww2-poland": {
    title: "L’invasion et le partage de la Pologne",
    place: "Varsovie, Pologne",
    summary:
      "Le 1er septembre 1939, l’Allemagne envahit la Pologne par l’ouest, le nord et le sud\u00a0; le Royaume-Uni et la France lui déclarent la guerre deux jours plus tard. Le 17 septembre, l’Union soviétique attaque à l’est, comme le prévoyait le protocole secret du pacte germano-soviétique, et début octobre la Pologne est partagée entre les deux.",
    context:
      "Hitler avait annexé l’Autriche en 1938 et démembré la Tchécoslovaquie en 1939, pendant que Londres et Paris pratiquaient l’apaisement. Les deux occupants s’acharnent à détruire la société polonaise\u00a0: les Allemands assassinent les élites et persécutent les Juifs, les Soviétiques déportent des centaines de milliers de personnes et, en 1940, fusillent quelque 22 000 officiers et notables polonais à Katyn et ailleurs.",
    whyHere:
      "La Pologne s’étend sur la grande plaine d’Europe du Nord, sans barrière montagneuse entre Berlin et Moscou. Avec la Prusse-Orientale au nord, les pays tchèques et la Slovaquie au sud, l’Allemagne enveloppait les armées polonaises sur trois côtés avant même le premier coup de feu.",
    schematic: {
      steps: ["Hitler et Staline signent un pacte", "Un protocole secret partage la Pologne", "L’Allemagne envahit le 1er septembre", "Londres et Paris déclarent la guerre", "L’Armée rouge envahit par l’est"],
    },
  },
  "ww2-atlantic": {
    title: "La bataille de l’Atlantique",
    place: "Commandement des Approches occidentales, Liverpool",
    summary:
      "Pendant près de six ans, les U-Boote allemands tentent de couper les routes maritimes qui apportent vivres, carburant et armes au Royaume-Uni puis, à partir de 1941, à l’Union soviétique. En mai 1943, les groupes d’escorte, les avions à long rayon d’action, le radar et le déchiffrement mené à Bletchley Park renversent la situation\u00a0: l’amiral Dönitz retire ses meutes de l’Atlantique Nord.",
    context:
      "Le Royaume-Uni importait une grande partie de sa nourriture et presque tout son pétrole. À partir de mars 1941, le programme américain de prêt-bail fournit armes et ravitaillement au Royaume-Uni, à l’URSS, à la Chine et à d’autres. Environ 3 500 navires marchands alliés sont coulés et des dizaines de milliers de marins périssent, tandis qu’environ 30 000 des quelque 40 000 sous-mariniers allemands sont tués.",
    whyHere:
      "Les convois partis d’Halifax et de New York convergeaient vers Liverpool et la Clyde par les Approches nord-occidentales. Au milieu de l’océan, au sud du Groenland, s’ouvrait un trou que les avions basés à terre ne pouvaient atteindre\u00a0: les meutes y chassaient. Après 1940, les U-Boote gagnaient directement l’Atlantique depuis les bases de la France occupée.",
    schematic: {
      westLabel: "Amérique du Nord",
      eastLabel: "Royaume-Uni et URSS",
      eastbound: ["carburant", "vivres", "avions", "camions", "soldats"],
      westbound: ["or et dollars", "baux de bases", "secrets du radar"],
    },
  },
  "ww2-fall-france": {
    title: "La chute de la France et Dunkerque",
    place: "Sedan, sur la Meuse",
    summary:
      "Le 10 mai 1940, l’Allemagne attaque les Pays-Bas, la Belgique, le Luxembourg et la France. Les divisions blindées franchissent les Ardennes, percent à Sedan le 13 mai et atteignent la Manche une semaine plus tard\u00a0; environ 338 000 soldats britanniques et français sont évacués de Dunkerque, et le 22 juin la France signe l’armistice.",
    context:
      "Paris tombe le 14 juin et le nouveau gouvernement du maréchal Pétain demande les conditions de l’ennemi. La France est coupée en une zone occupée au nord et à l’ouest et une zone non occupée gouvernée depuis Vichy, qui collabore avec l’Allemagne. Quelque 1,8 million de soldats français partent en captivité.",
    whyHere:
      "Les chefs alliés attendaient le coup principal à travers la plaine belge, comme en 1914, et jugeaient les collines boisées des Ardennes impropres aux chars. Sedan se trouvait à la charnière fragile entre les armées alliées entrées en Belgique et la ligne Maginot, plus au sud.",
  },
  "ww2-appeal": {
    title: "L’appel du 18 Juin",
    place: "Broadcasting House de la BBC, Londres",
    summary:
      "Au lendemain de l’annonce par Pétain qu’il demande l’armistice, Charles de Gaulle, jeune général de brigade arrivé la veille à Londres, parle au micro de la BBC. Il appelle soldats, ingénieurs et ouvriers français à le rejoindre\u00a0: cette guerre est une guerre mondiale, la défaite n’est pas définitive. Peu l’entendent en direct, mais l’appel devient l’acte fondateur de la France libre.",
    context:
      "Churchill reconnaît de Gaulle comme chef des Français libres le 28 juin, et un tribunal de Vichy le condamne à mort par contumace. En août 1940, le Tchad de Félix Éboué se rallie à lui, suivi de la majeure partie de l’Afrique-Équatoriale française et du Cameroun\u00a0: la France libre a désormais un territoire.",
    whyHere:
      "Londres était la dernière capitale libre à portée de la France occupée, et les émetteurs de la BBC franchissaient la Manche là où les armées ne le pouvaient pas. Son service français, Radio Londres, diffusa chaque soir nouvelles et messages codés pour la Résistance jusqu’à la Libération.",
  },
  "ww2-battle-britain": {
    title: "La bataille d’Angleterre et le Blitz",
    place: "Bentley Priory, quartier général du Fighter Command",
    summary:
      "De juillet à octobre 1940, la Luftwaffe tente de conquérir la maîtrise du ciel du sud de l’Angleterre pour préparer une invasion. Guidé par le radar, le Fighter Command de la RAF tient bon et, en septembre, Hitler ajourne le débarquement sans date\u00a0; le Blitz sur Londres et d’autres villes dure jusqu’en mai 1941 et tue environ 43 000 civils.",
    context:
      "Churchill était devenu Premier ministre le 10 mai 1940\u00a0; après la chute de la France, le Royaume-Uni et son empire combattent seuls. Les pilotes venaient de tout le Commonwealth et de l’Europe occupée\u00a0; l’escadrille polonaise 303 compta parmi les plus efficaces.",
    whyHere:
      "La Manche, large de 33 kilomètres seulement à Douvres, formait un fossé que l’armée allemande ne pouvait franchir sans maîtriser le ciel. Les stations radar Chain Home, le long de la côte, repéraient les raids qui se formaient au-dessus de la France, et un réseau de salles de contrôle dirigeait les chasseurs à leur rencontre.",
  },
  "ww2-barbarossa": {
    title: "L’opération Barbarossa",
    place: "Forteresse de Brest-Litovsk, sur le Boug",
    summary:
      "Le 22 juin 1941, l’Allemagne et ses alliés envahissent l’Union soviétique avec quelque 3,8 millions d’hommes, sur un front allant de la Baltique à la mer Noire. Trois groupes d’armées foncent sur Leningrad, Moscou et Kiev et encerclent d’immenses armées soviétiques, mais en décembre une contre-offensive les repousse des portes de Moscou.",
    context:
      "Hitler conçoit la campagne comme une guerre d’anéantissement pour conquérir un «\u00a0espace vital\u00a0». Derrière le front, des unités mobiles de tuerie fusillent les Juifs par centaines de milliers\u00a0; sur quelque 5,7 millions de soldats soviétiques capturés pendant la guerre, environ 3,3 millions meurent en captivité allemande. Staline avait ignoré les avertissements répétés.",
    whyHere:
      "Entre la Baltique et la mer Noire, la plaine s’ouvre vers l’est sans obstacle montagneux, même si les marais du Pripet coupent le front en deux. Moscou était à mille kilomètres de la frontière, et la boue d’automne puis le froid de l’hiver usèrent une armée qui avait prévu une campagne courte.",
  },
  "ww2-leningrad": {
    title: "Le siège de Leningrad",
    place: "Leningrad (Saint-Pétersbourg)",
    summary:
      "À partir de septembre 1941, les forces allemandes et finlandaises coupent Leningrad de toute liaison terrestre\u00a0; le blocus dure 872 jours, jusqu’en janvier 1944. Au moins 800 000 civils meurent, peut-être plus d’un million, la plupart de faim et de froid au cours du premier hiver.",
    context:
      "Hitler choisit d’affamer la ville plutôt que de la prendre d’assaut. En novembre 1941, la ration de pain des enfants et des personnes à charge tombe à 125 grammes par jour. La Septième Symphonie de Chostakovitch, jouée dans la ville assiégée en août 1942, devient le symbole de sa résistance.",
    whyHere:
      "Leningrad occupe le fond du golfe de Finlande, sur un étroit isthme entre la mer et le lac Ladoga. Une fois les Allemands sur la rive du lac à Chlisselbourg et les Finlandais maîtres de l’isthme au nord, il ne restait que le Ladoga\u00a0: en bateau l’été, et l’hiver par une route de glace, la Route de la vie.",
  },
  "ww2-pearl-harbor": {
    title: "Pearl Harbor et l’offensive japonaise vers le sud",
    place: "Pearl Harbor, Oahu, Hawaï",
    summary:
      "Le 7 décembre 1941, les avions de six porte-avions japonais attaquent la flotte américaine du Pacifique à Pearl Harbor, coulant ou endommageant ses huit cuirassés et tuant 2 403 Américains. Dans les heures qui suivent, le Japon frappe aussi la Malaisie, Hong Kong et les Philippines\u00a0; en mai 1942, il tient Singapour, les Indes néerlandaises et la Birmanie.",
    context:
      "Après l’occupation du sud de l’Indochine par le Japon en juillet 1941, les États-Unis gèlent les avoirs japonais et coupent le pétrole. L’Allemagne et l’Italie déclarent la guerre aux États-Unis le 11 décembre. La reddition de Singapour, le 15 février 1942, envoie en captivité quelque 80 000 soldats britanniques et du Commonwealth, et l’occupation apporte à l’Asie travail forcé et famines.",
    whyHere:
      "Lagon abrité au milieu du Pacifique, Pearl Harbor était la base avancée d’où la flotte américaine pouvait frapper le flanc du Japon. Les stratèges japonais voulaient la paralyser le temps de s’emparer du pétrole de Bornéo et de Sumatra, du caoutchouc et de l’étain de Malaisie, à des milliers de kilomètres au sud-ouest.",
    schematic: {
      steps: ["Le Japon occupe le sud de l’Indochine", "Les États-Unis coupent le pétrole", "Le Japon vise le pétrole du Sud-Est asiatique", "Attaque contre la flotte américaine", "Les États-Unis entrent en guerre"],
    },
  },
  "ww2-auschwitz": {
    title: "La Shoah\u00a0: Wannsee et Auschwitz-Birkenau",
    place: "Auschwitz-Birkenau, Pologne occupée",
    summary:
      "Le 20 janvier 1942, dans une villa de Wannsee, à Berlin, Reinhard Heydrich et de hauts responsables coordonnent la déportation et l’assassinat des Juifs d’Europe, un génocide déjà engagé par les fusillades de masse en Union soviétique occupée. À Auschwitz-Birkenau, le plus grand des centres de mise à mort, environ 1,1 million de personnes sont assassinées, dont près d’un million de Juifs, pour la plupart gazés dès leur arrivée.",
    context:
      "Au total, l’Allemagne nazie et ses complices assassinent environ six millions de Juifs, soit près des deux tiers des Juifs d’Europe\u00a0: c’est le génocide que l’on nomme Shoah ou Holocauste. Les Roms et les Sinti, les personnes handicapées, des civils polonais, les prisonniers de guerre soviétiques, les homosexuels, les Témoins de Jéhovah et les opposants politiques sont eux aussi persécutés et tués en grand nombre. Les troupes soviétiques libèrent Auschwitz le 27 janvier 1945, devenu la Journée internationale de commémoration des victimes de l’Holocauste.",
    whyHere:
      "La Pologne occupée avait abrité la plus grande communauté juive d’Europe, quelque 3,3 millions de personnes, et c’est là que furent bâtis les principaux centres de mise à mort, Auschwitz, Treblinka, Sobibor et Belzec, loin du regard de l’opinion allemande. Auschwitz se trouvait à un nœud ferroviaire où pouvaient arriver des trains de tout le continent, de la France et des Pays-Bas jusqu’à la Grèce et la Hongrie.",
  },
  "ww2-midway": {
    title: "La bataille de Midway",
    place: "Atoll de Midway, Pacifique central",
    summary:
      "Du 4 au 7 juin 1942, les avions embarqués américains, prévenus par des cryptographes qui lisaient les messages de la marine japonaise, tendent une embuscade à la flotte envoyée prendre Midway. Quatre grands porte-avions japonais sont coulés, contre la perte de l’USS Yorktown, et la puissance offensive du Japon dans le Pacifique ne s’en remettra jamais.",
    context:
      "L’amiral Yamamoto voulait attirer et détruire les porte-avions américains qui avaient échappé à Pearl Harbor. Un mois plus tôt, en mer de Corail, l’US Navy avait déjà enrayé une offensive japonaise vers Port Moresby. Le Japon perd non seulement des navires mais des centaines d’aviateurs aguerris, alors que les chantiers américains s’apprêtent à le surclasser de très loin.",
    whyHere:
      "Minuscule atoll à l’extrémité occidentale de l’archipel d’Hawaï, Midway se trouve à environ 2 100 kilomètres au nord-ouest de Pearl Harbor. Sa piste surveillait le Pacifique central, et le Japon comptait que l’US Navy devrait se battre pour garder ce dernier avant-poste avant Hawaï.",
  },
  "ww2-guadalcanal": {
    title: "La campagne de Guadalcanal",
    place: "Henderson Field, Guadalcanal",
    summary:
      "Le 7 août 1942, les Marines américains débarquent à Guadalcanal et s’emparent de l’aérodrome que construisaient les Japonais, rebaptisé Henderson Field. Suivent six mois de combats sur terre, sur mer et dans les airs, jusqu’à l’évacuation de l’île par le Japon en février 1943.",
    context:
      "C’est la première grande offensive alliée du Pacifique, menée alors même que les Australiens tiennent les Japonais sur la piste de Kokoda, en Nouvelle-Guinée. Environ 7 100 militaires alliés et plus de 19 000 soldats japonais meurent sur l’île ou à ses abords, beaucoup de ces derniers de faim et de maladie.",
    whyHere:
      "Depuis un aérodrome à Guadalcanal, les bombardiers japonais auraient pu couper la route maritime entre les États-Unis et l’Australie. L’étroit chenal qui longe l’archipel des Salomon, surnommé «\u00a0the Slot\u00a0», permettait aux navires japonais d’amener des renforts de nuit, et tant de bâtiments sombrèrent au large de l’île que le détroit fut appelé Ironbottom Sound, le «\u00a0détroit au fond de fer\u00a0».",
  },
};
