import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "silk-talas": {
    title: "La bataille de Talas",
    place: "Vallée de la Talas",
    summary:
      "En 751, une armée abbasside battit près de la rivière Talas une armée tang commandée par Gao Xianzhi, après que, selon les sources chinoises, les Turcs Karlouks de l’armée tang eurent changé de camp. De nombreux soldats chinois furent faits prisonniers et emmenés vers l’ouest.",
    context:
      "La bataille ne mit pas fin à elle seule à la puissance tang en Asie centrale : c’est la révolte d’An Lushan, en 755, qui contraignit les Tang à rappeler leurs armées vers l’est. L’auteur du XIe siècle al-Tha’alibi attribue aux prisonniers chinois de Talas l’introduction de la fabrication du papier à Samarcande, mais le papier était sans doute connu plus tôt en Asie centrale ; mieux vaut lire ce récit comme le symbole d’une transmission plus longue.",
    whyHere:
      "La vallée de la Talas s’étend juste au nord du Tian Shan, sur la route qui mène du Semiretchie à la Transoxiane, là où se touchaient les protectorats tang et les gouverneurs abbassides du Khorassan. Sa steppe ouverte se prêtait à la cavalerie, et les nomades karlouks qui y faisaient paître leurs troupeaux tenaient la balance.",
    schematic: {
      steps: [
        "Les armées tang et abbassides s’affrontent",
        "Des captifs chinois sont emmenés vers l’ouest",
        "Le papier de Samarcande devient renommé",
        "Un moulin à papier à Bagdad dès les années 790",
      ],
    },
  },
  "silk-baghdad": {
    title: "La fondation de Bagdad",
    place: "Bagdad",
    summary:
      "Le calife abbasside al-Mansur fonda sa Ville ronde sur la rive occidentale du Tigre en 762. En quelques décennies, Bagdad devint l’une des plus grandes villes du monde, et elle possédait un moulin à papier dès les années 790.",
    context:
      "Les Abbassides avaient renversé les Omeyyades en 750 avec l’appui du Khorassan et déplacé le cœur du califat vers l’est, loin de Damas. Le papier bon marché remplaça le papyrus et le parchemin dans l’administration et nourrit un essor du livre, des traductions de la science grecque à la poésie.",
    whyHere:
      "C’est là que le Tigre et l’Euphrate se rapprochent le plus et pouvaient être reliés par des canaux : le site tirait ainsi son grain des deux fleuves. Les navires descendaient le Tigre jusqu’à Bassora et au Golfe, tandis que la route du Khorassan escaladait le Zagros vers l’est, en direction de l’Asie centrale.",
  },
  "silk-diamond-sutra": {
    title: "Le Sûtra du diamant de Dunhuang",
    place: "Grottes de Mogao, Dunhuang",
    summary:
      "Un Sûtra du diamant imprimé par xylographie et daté de 868 est le plus ancien livre imprimé daté que l’on connaisse. Il fut emmuré, avec des dizaines de milliers de manuscrits, dans la grotte-bibliothèque de Mogao vers le début du XIe siècle, puis acquis par Aurel Stein en 1907.",
    context:
      "Les grottes de Mogao, commencées au IVe siècle, devinrent un ensemble de centaines de sanctuaires peints financés par les seigneurs locaux, les moines et les marchands. La grotte-bibliothèque renfermait des textes en chinois, tibétain, sogdien, khotanais, vieux ouïghour, sanskrit et hébreu, instantané du brassage de peuples et de croyances le long de la route de la soie.",
    whyHere:
      "Dunhuang était la dernière oasis avant le désert, là où se séparaient les routes nord et sud du Taklamakan : les voyageurs y priaient pour une traversée sans encombre. La falaise de conglomérat tendre qui domine la rivière Daquan se taillait aisément, et le climat aride a conservé le papier pendant neuf siècles.",
  },
  "silk-quanzhou": {
    title: "Quanzhou s’ouvre au monde",
    place: "Quanzhou (Zaitun), Fujian",
    summary:
      "En 1087, le gouvernement des Song ouvrit à Quanzhou un bureau du commerce maritime ; au cours des deux siècles suivants, la ville devint l’un des ports les plus actifs du monde. Marchands arabes, persans, tamouls et d’Asie du Sud-Est s’y établirent et y bâtirent mosquées et temples.",
    context:
      "Le Xi Xia tangoute et les Liao barrant le nord-ouest, les Song se tournèrent vers la mer et taxèrent les importations d’épices et d’encens. Les progrès de la construction navale et la boussole marine firent des jonques chinoises des transporteurs de premier plan sur les routes de l’océan Indien.",
    whyHere:
      "L’estuaire abrité de Quanzhou, sur la côte du Fujian, faisait face à l’Asie du Sud-Est, et son arrière-pays montagneux poussait les hommes vers la mer. Les navires descendaient vers le détroit de Malacca avec la mousson d’hiver, de nord-est, et revenaient avec la mousson d’été, de sud-ouest.",
    schematic: {
      westLabel: "Ports de l’océan Indien",
      eastLabel: "Chine des Song",
      eastbound: ["poivre", "encens", "ivoire", "bois de santal"],
      westbound: ["porcelaine", "soie", "sapèques de cuivre", "objets en fer"],
    },
  },
  "silk-marco-polo": {
    title: "Marco Polo à la cour de Kubilaï Khan",
    place: "Shangdu (Xanadu)",
    summary:
      "Voyageant avec son père et son oncle, Marco Polo atteignit vers 1275 Shangdu, la capitale d’été de Kubilaï Khan, après avoir traversé la Perse, le Pamir et le Taklamakan. Il repartit vers 1291, escortant par mer une épouse mongole jusqu’à l’Ilkhanat, et son livre, rédigé avec Rustichello de Pise, façonna l’image que l’Europe se fit de l’Asie.",
    context:
      "La domination mongole avait placé la plupart des routes terrestres sous l’autorité de khanats apparentés, et Kubilaï employait de nombreux étrangers. Certains auteurs ont douté que Polo soit jamais allé en Chine, mais ses détails sur les revenus du sel, le papier-monnaie et l’administration des Yuan convainquent la plupart des historiens qu’il s’y est bien rendu.",
    whyHere:
      "Shangdu se dressait sur les prairies, juste au nord de la grande plaine de Chine du Nord, où la cour mongole pouvait garder ses chevaux et ses pâturages d’été tout en gouvernant la Chine. Les caravanes venues de l’ouest y parvenaient par le corridor du Hexi et la lisière du Gobi.",
  },
  "silk-pax-mongolica": {
    title: "La route du Cathay selon Pegolotti",
    place: "La Tana, à l’embouchure du Don",
    summary:
      "Vers 1340, l’agent bancaire florentin Francesco Balducci Pegolotti rédigea un manuel du marchand décrivant la route qui menait de la Tana, sur la mer d’Azov, à Khanbaliq : en chariot jusqu’à Astrakhan et Saraï, puis à dos de chameau jusqu’à Ourguentch, Otrar et Almaliq. Il s’appuyait sur des marchands qui avaient fait le voyage.",
    context:
      "Les khanats mongols assuraient la police des routes et entretenaient des relais de poste, et des marchands italiens se rendaient jusqu’en Chine. Cette unité restait fragile : les khanats se morcelaient déjà, et la Pax mongolica ne survécut ni à la peste noire ni à la chute des Yuan en 1368.",
    whyHere:
      "La Tana se trouvait à l’endroit où le Don se jette dans la mer d’Azov, le point le plus proche de la Volga et de Saraï, capitale de la Horde d’or, que les navires italiens pouvaient atteindre. Au-delà, la steppe ouverte permettait aux chariots et aux chameaux de traverser l’Eurasie sans obstacle montagneux jusqu’au Tian Shan.",
  },
  "silk-ibn-battuta": {
    title: "Ibn Battuta à Calicut",
    place: "Calicut, côte de Malabar",
    summary:
      "Le voyageur marocain Ibn Battuta arriva à Calicut au début des années 1340 avec une ambassade du sultan de Delhi auprès de l’empereur yuan, et trouva dans le port des jonques chinoises attendant la mousson. Une tempête fit sombrer le navire qui portait les présents de l’ambassade, mais il gagna plus tard Quanzhou par ses propres moyens.",
    context:
      "Entre 1325 et 1354, Ibn Battuta parcourut bien plus de 100 000 kilomètres, pour l’essentiel dans le monde islamique, où une foi, un droit et une langue communs permettaient à un juge lettré de trouver un emploi de Delhi aux Maldives.",
    whyHere:
      "Calicut se situe à mi-chemin de la côte de Malabar, d’où provenait l’essentiel du poivre noir mondial, et où les navires de Chine croisaient ceux d’Arabie et de Perse. Le calendrier de la mousson contraignait les équipages à y attendre des mois, ce qui faisait du port un immense marché et un lieu de transbordement.",
  },
  "silk-caffa": {
    title: "La peste au siège de Caffa",
    place: "Caffa (Théodosie), Crimée",
    summary:
      "En 1346, la peste éclata dans l’armée de la Horde d’or de Djanibek qui assiégeait le port génois de Caffa. Le notaire Gabriele de’ Mussi écrivit que les assiégeants catapultèrent des cadavres dans la ville ; en 1347, des navires venus de la mer Noire apportèrent la peste noire à Constantinople et en Italie.",
    context:
      "L’ADN ancien prélevé dans des sépultures de 1338 et 1339 de la vallée de la Tchouï, dans l’actuel Kirghizstan, désigne le Tian Shan comme un foyer de la pandémie. De’ Mussi n’était pas un témoin oculaire, et la peste atteignit probablement la Méditerranée à bord de nombreux navires, mais Caffa demeure le lien le mieux documenté entre la steppe et l’Europe.",
    whyHere:
      "Caffa occupait une baie abritée du sud-est de la Crimée, où les caravanes de la steppe rencontraient les galères génoises en partance pour Constantinople et l’Italie. Le commerce qui l’enrichissait reliait aussi les réservoirs de peste des rongeurs de la steppe aux ports surpeuplés de la Méditerranée.",
  },
  "silk-timur": {
    title: "La Samarcande de Tamerlan",
    place: "Samarcande",
    summary:
      "À partir de 1370, Tamerlan fit de Samarcande la capitale d’un empire conquérant dont les campagnes s’étendirent de l’Anatolie à Delhi, et la peupla d’artisans déportés des villes qu’il avait mises à sac. L’envoyé castillan Ruy González de Clavijo vit la ville en 1404, quelques mois avant que Tamerlan ne meure en partant envahir la Chine.",
    context:
      "Tamerlan se réclamait de l’héritage de Gengis Khan mais gouvernait par l’intermédiaire de khans fantoches. Ses campagnes ravagèrent Bagdad, Delhi, Damas et Saraï, la capitale de la Horde d’or, alors même qu’il déversait leurs richesses dans des monuments comme la mosquée Bibi-Khanym.",
    whyHere:
      "Samarcande s’étend dans la vallée du Zeravchan, une oasis bien arrosée entre le désert du Kyzylkoum et les montagnes, où convergent les routes de la Chine, de l’Inde, de l’Iran et de la steppe. En mettant à sac des centres commerciaux rivaux comme Ourguentch et Saraï, Tamerlan contribua à détourner les caravanes vers sa capitale.",
  },
  "silk-constantinople": {
    title: "La chute de Constantinople",
    place: "Constantinople",
    summary:
      "Le 29 mai 1453, le sultan ottoman Mehmed II prit Constantinople après un siège de près de deux mois, mettant fin à l’Empire byzantin. Les Ottomans tenaient désormais les deux rives des détroits qui relient la mer Noire à la Méditerranée.",
    context:
      "Mehmed avait fait bâtir l’année précédente la forteresse de Rumeli Hisarı sur le Bosphore pour couper tout secours venu de la mer Noire, et il contourna la chaîne qui barrait la Corne d’Or en faisant passer des navires par voie de terre. La Caffa génoise ne tint que jusqu’en 1475, même si le commerce entre l’Europe et l’Asie se poursuivit à travers les terres ottomanes et mameloukes.",
    whyHere:
      "Constantinople occupe une péninsule triangulaire entre la Corne d’Or, la mer de Marmara et le Bosphore, là où l’Europe et l’Asie sont distantes de moins d’un kilomètre. Qui la tenait contrôlait chaque navire passant entre la mer Noire et la Méditerranée.",
  },
};
