import type { EventTranslation } from "@/i18n/contentTypes";

export const events2: Readonly<Record<string, EventTranslation>> = {
  "mongol-baghdad": {
    title: "Houlagou met Bagdad à sac",
    place: "Bagdad, sur le Tigre",
    summary:
      "Envoyé vers l’ouest par son frère Möngke, Houlagou détruisit en 1256 les forteresses des ismaéliens nizârites, puis assiégea Bagdad, qui capitula le 10 février 1258. La ville fut mise à sac et le calife al-Musta’sim exécuté, ce qui mit fin à cinq siècles de règne abbasside depuis Bagdad.",
    context:
      "Le calife ne disposait plus que d’une faible puissance militaire, mais jouissait d’un grand prestige auprès des musulmans sunnites, et son refus de se soumettre fit de lui une cible. L’armée de Houlagou comptait des ingénieurs chinois et des troupes chrétiennes géorgiennes, et il prit à son service le savant Nasir al-Din al-Tusi, pour qui il fit bientôt bâtir un observatoire à Maragha.",
    whyHere:
      "Bagdad se trouvait là où le Tigre et l’Euphrate se rapprochent le plus, au débouché de la grande route qui descend du plateau iranien par les cols du Zagros. Sa plaine plate, sillonnée de canaux, n’offrait aux défenseurs aucune hauteur, et les Mongols rompirent les digues pour noyer l’armée de campagne du calife avant de converger sur les remparts.",
  },
  "mongol-ain-jalut": {
    title: "La bataille d’Aïn Djalout",
    place: "Aïn Djalout, vallée de Jezreel",
    summary:
      "Le 3 septembre 1260, le sultan mamelouk Qutuz et son général Baybars vainquirent une armée mongole près de la source d’Aïn Djalout ; son commandant, Kitbuqa, fut tué. Les Mongols perdirent bientôt la Syrie, et l’Euphrate devint la frontière durable entre l’Ilkhanat et les Mamelouks.",
    context:
      "Après avoir pris Alep et Damas, Houlagou apprit la mort de Möngke et retira vers l’est l’essentiel de son armée, ne laissant à Kitbuqa que des forces réduites. Nombre de Mamelouks, dont Baybars, étaient des Turcs kiptchaks achetés enfants dans la même steppe que leurs ennemis, et ils combattaient avec le même art de l’archerie montée.",
    whyHere:
      "Les pâturages secs et épars de la Syrie ne pouvaient entretenir durant l’été une armée mongole complète et ses montures de rechange, ce qui explique en partie pourquoi Houlagou n’y laissa qu’une petite force. Aïn Djalout se trouve dans la vallée de Jezreel, couloir entre les collines de Galilée et la Samarie qu’emprunte la route de la côte à Damas, et sa source en faisait un lieu tout désigné pour camper et livrer bataille.",
    schematic: {
      steps: [
        "Möngke meurt en Chine en 1259",
        "Houlagou retire le gros de son armée",
        "La Syrie ne peut nourrir de grands troupeaux",
        "Les Mamelouks défont les troupes de Kitbuqa",
        "L’Euphrate devient la frontière",
      ],
    },
  },
  "mongol-toluid-war": {
    title: "La guerre civile toluide",
    place: "Karakorum et la steppe mongole",
    summary:
      "Möngke étant mort en 1259 sans successeur désigné, des assemblées rivales proclamèrent grand khan, en 1260, ses deux frères, Kubilaï et Ariq Böke. Kubilaï, fort des richesses de la Chine du Nord, coupa Karakorum de son grain et contraignit Ariq Böke à se rendre en 1264.",
    context:
      "Cette guerre et les conflits qui suivirent, Berké de la Horde d’Or contre Houlagou et Qaïdu contre Kubilaï, mirent fin à l’unité politique de l’empire. Quatre grands États successeurs en émergèrent : les Yuan, la Horde d’Or, l’Ilkhanat et le khanat de Djaghataï, liés par la parenté et le commerce, mais souvent en guerre.",
    whyHere:
      "Karakorum se trouvait au cœur de la prairie, loin de toute terre agricole capable de la nourrir, et dépendait du grain acheminé de Chine du Nord. Qui tenait les champs de Chine pouvait affamer l’ancienne capitale des steppes : voilà pourquoi le centre du pouvoir mongol glissa vers le sud, dans les nouvelles villes de Kubilaï.",
  },
  "mongol-xiangyang": {
    title: "Le siège de Xiangyang",
    place: "Xiangyang et Fancheng, sur la Han",
    summary:
      "Des années durant, les armées de Kubilaï bloquèrent Xiangyang et Fancheng, les forteresses jumelles des Song. En 1273, des trébuchets à contrepoids construits par deux ingénieurs musulmans envoyés par l’Ilkhanat, Ismaïl et Ala al-Din, contribuèrent à faire tomber Fancheng, et le commandant Song Lü Wenhuan livra Xiangyang.",
    context:
      "Les Song du Sud tenaient depuis des décennies la ligne de la Huai et de la Han grâce à leurs villes fortifiées, à leurs flottes fluviales et à leurs armes à poudre. Sur le conseil d’un transfuge Song, Liu Zheng, les Mongols se dotèrent de leur propre marine fluviale, transformant une armée des steppes en une force combinée de cavalerie, d’infanterie et de navires de guerre.",
    whyHere:
      "Xiangyang et Fancheng se faisaient face de part et d’autre de la Han, gardant la principale route entre la plaine de Chine du Nord et le Yangzi. Rivières, murailles et rizières émoussaient la cavalerie ; une fois les villes jumelles tombées, la Han porta les flottes mongoles jusqu’au Yangzi, puis vers la capitale des Song, Lin’an.",
    schematic: {
      steps: [
        "Les villes jumelles barrent la Han",
        "Les Mongols construisent une flotte fluviale",
        "Des ingénieurs de l’Ilkhanat bâtissent des trébuchets",
        "Xiangyang capitule en 1273",
        "Le Yangzi s’ouvre aux flottes mongoles",
      ],
    },
  },
  "mongol-yuan": {
    title: "Kubilaï proclame la dynastie Yuan",
    place: "Dadu (Khanbaliq), l’actuelle Pékin",
    summary:
      "En 1271, Kubilaï Khan adopta le nom dynastique chinois de Grand Yuan et fit de sa nouvelle ville de Dadu, que les locuteurs turcs et mongols appelaient Khanbaliq, sa capitale principale. En 1279, les Yuan régnaient sur toute la Chine, première dynastie non han à y parvenir.",
    context:
      "Kubilaï régnait à la fois en grand khan et en empereur de Chine, même si les khanats occidentaux ne reconnaissaient que mollement sa suprématie. Sa cour employait Mongols, Chinois, Ouïghours, Persans et Tibétains, et marchandises, techniques et experts circulaient entre la Chine des Yuan et l’Ilkhanat d’Iran.",
    whyHere:
      "Dadu fut bâtie juste au sud des cols des monts Yan, là où la plaine de Chine du Nord rejoint les routes de la steppe mongole. De là, Kubilaï pouvait gouverner les terres agricoles tout en restant à portée de sa capitale d’été, Shangdu, dans la prairie, tandis que canaux et cabotage apportaient le riz du Sud.",
    schematic: {
      westLabel: "Iran de l’Ilkhanat",
      eastLabel: "Chine des Yuan",
      eastbound: ["instruments astronomiques", "administrateurs musulmans", "pigment de cobalt", "ingénieurs en trébuchets"],
      westbound: ["papier-monnaie", "porcelaine", "soie", "médecine chinoise"],
    },
  },
  "mongol-japan": {
    title: "Les invasions mongoles du Japon",
    place: "Baie de Hakata, nord de Kyushu",
    summary:
      "En 1274 puis en 1281, des forces Yuan et coréennes firent voile de Corée vers la baie de Hakata, le Japon ayant ignoré les sommations de Kubilaï. Le premier débarquement se retira après une journée de combat ; en 1281, une armada bien plus nombreuse, renforcée d’une flotte venue de Chine du Sud, fut contenue par un mur côtier, puis détruite par un typhon.",
    context:
      "La Corée de Goryeo, vassale des Mongols depuis 1259, dut construire et armer la plupart des navires. Le shogunat de Kamakura, dirigé par le régent Hōjō Tokimune, mobilisa les guerriers de Kyushu, et les tempêtes passèrent à la postérité sous le nom de kamikaze, les « vents divins ».",
    whyHere:
      "Large d’environ 200 kilomètres, avec Tsushima et Iki pour escales, le détroit de Corée offrait la traversée la plus courte, mais il livrait à la merci de la mer une armée bâtie autour du cheval. La baie de Hakata était le point de débarquement naturel au bout de ce chapelet d’îles, et la fin de l’été amenait les typhons sur la côte même que les flottes devaient tenir.",
  },
  "mongol-yamen": {
    title: "La bataille de Yamen",
    place: "Yamen, delta de la rivière des Perles",
    summary:
      "Le 19 mars 1279, une flotte Yuan commandée par Zhang Hongfan anéantit la dernière flotte Song à Yamen, à l’ouest de l’estuaire de la rivière des Perles. Le ministre Lu Xiufu se jeta à la mer avec l’enfant empereur Zhao Bing, et la dynastie Song s’éteignit.",
    context:
      "La capitale des Song, Lin’an, s’était rendue au général mongol Bayan en 1276, mais des loyalistes avaient emmené deux jeunes princes vers le sud par la mer. Pour achever la guerre, les Mongols avaient besoin d’une marine, et une grande partie de celle-ci provenait de commandants et de navires Song ralliés.",
    whyHere:
      "La cavalerie ne pouvait atteindre une cour qui vivait sur ses navires : le dénouement eut donc lieu en mer, parmi les îles et les chenaux du delta de la rivière des Perles. Zhang Shijie fit enchaîner les navires Song les uns aux autres dans le mouillage de Yamen, et les escadres Yuan les coupèrent de l’eau douce avant d’attaquer à la faveur des marées.",
  },
  "mongol-bar-sauma": {
    title: "L’ambassade de Rabban Bar Sauma en Europe",
    place: "Rome",
    summary:
      "En 1287, l’ilkhan Arghoun envoya Rabban Bar Sauma, moine ouïghour de l’Église de l’Orient né près de Khanbaliq, rechercher une alliance occidentale contre les Mamelouks. Il visita Constantinople, Rome, Paris et la Gascogne, rencontra Philippe IV de France et Édouard Ier d’Angleterre, et revint en 1288 avec des lettres du pape Nicolas IV, mais sans armée.",
    context:
      "Bar Sauma avait quitté la Chine dans les années 1270 pour un pèlerinage à Jérusalem avec son disciple Markos, devenu patriarche de l’Église de l’Orient. Son récit, conservé en syriaque, offre un rare regard oriental sur l’Europe latine, rédigé à l’époque même où le livre de Marco Polo décrivait l’Asie aux Européens.",
    whyHere:
      "Bar Sauma put traverser l’Asie parce que les khanats maintenaient routes et relais ouverts entre Khanbaliq et l’Iran. Les Mamelouks barraient à l’Ilkhanat l’accès à la Méditerranée par la Syrie : son envoyé les contourna donc, traversant la mer Noire jusqu’à Constantinople avant de gagner l’Italie.",
  },
  "mongol-java": {
    title: "L’expédition Yuan à Java",
    place: "Daha (Kediri), Java oriental",
    summary:
      "En 1293, une flotte Yuan transportant de 20 000 à 30 000 hommes atteignit Java pour châtier le roi Kertanegara de Singhasari, qui avait mutilé l’envoyé de Kubilaï. Le trouvant déjà mort, les chefs Yuan aidèrent son gendre Raden Wijaya à vaincre l’usurpateur Jayakatwang de Kediri ; Wijaya se retourna alors contre eux et les repoussa jusqu’à leurs navires.",
    context:
      "Ce fut la dernière des guerres d’outre-mer de Kubilaï, après les échecs au Japon et de coûteuses campagnes au Champa et au Đại Việt. Wijaya fonda ensuite Majapahit, qui devint la première puissance de l’archipel.",
    whyHere:
      "Java se trouvait à plus de 3 000 kilomètres des ports Yuan, de l’autre côté de la mer de Chine méridionale, et n’était accessible qu’à la faveur des vents de mousson : l’armée pouvait difficilement être renforcée ou ravitaillée. Une armée bâtie autour du cheval ne tirait aucun avantage des rizières et des vallées fluviales de Java oriental, et elle devait rentrer avant que les vents ne tournent.",
  },
  "mongol-ming": {
    title: "Les armées Ming prennent Dadu",
    place: "Dadu (Pékin)",
    summary:
      "En 1368, Zhu Yuanzhang, ancien moine devenu chef rebelle des Turbans rouges, proclama la dynastie Ming à Nankin, et son général Xu Da marcha vers le nord sur Dadu. Le dernier empereur Yuan, Toghon Temür, s’enfuit dans la steppe avant la chute de la ville, ce qui mit fin à la domination mongole sur la Chine.",
    context:
      "Le pouvoir Yuan avait été affaibli par les querelles de succession, l’effondrement du papier-monnaie, la famine et les grandes crues du fleuve Jaune des années 1340. Lorsque le travail forcé sur les digues du fleuve contribua, en 1351, à embraser les révoltes des Turbans rouges, la cour perdit le contrôle du Sud, dont le grain nourrissait la capitale.",
    whyHere:
      "Dadu dépendait du grain expédié du delta du Yangzi par le Grand Canal et par la côte, et rebelles et pirates du Sud tranchèrent ce cordon vital. La capitale affamée, la cour mongole fit ce qu’avaient fait avant elle les souverains des steppes : elle se replia au nord, dans la prairie, où survécurent les Yuan du Nord.",
    schematic: {
      steps: [
        "Crues du fleuve Jaune et famine",
        "Les corvées sur les digues déclenchent la révolte des Turbans rouges",
        "Les rebelles coupent l’approvisionnement en grain du Sud",
        "Xu Da marche sur Dadu",
        "La cour Yuan se replie dans la steppe",
      ],
    },
  },
};
