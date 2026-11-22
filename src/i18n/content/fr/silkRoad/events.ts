import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "silk-zhang-qian": {
    title: "Zhang Qian atteint la Bactriane",
    place: "Daxia (Bactriane), sur le cours supérieur de l’Oxus",
    summary:
      "Envoyé par l’empereur Wu pour rallier les Yuezhi contre les Xiongnu, Zhang Qian rejoignit leurs nouvelles terres sur l’Oxus après dix ans de captivité chez les Xiongnu. L’alliance échoua, mais son rapport sur le Ferghana, la Bactriane et la Parthie offrit à la cour des Han sa première image détaillée de l’Occident.",
    context:
      "La confédération des Xiongnu dominait la steppe et soumettait les Han au tribut. Chassés vers l’ouest par les Xiongnu, les Yuezhi s’étaient établis au nord de l’Oxus et tenaient la Bactriane sous leur coupe. Sur la centaine d’hommes partis, seuls Zhang Qian et son guide Ganfu sont attestés comme étant revenus.",
    whyHere:
      "La Bactriane se trouvait au débouché de la vallée de l’Oxus sur les cols de l’Hindou Kouch : ses marchés attiraient les marchandises de l’Inde, de la steppe et de l’Iran. En y découvrant des étoffes du Sichuan, Zhang Qian comprit qu’une route reliait déjà le sud-ouest de la Chine à la Bactriane en passant par l’Inde.",
    schematic: {
      steps: [
        "Les Han cherchent des alliés contre les Xiongnu",
        "L’envoyé rejoint les Yuezhi en Bactriane",
        "La cour découvre les chevaux du Ferghana",
        "Les armées han poussent vers l’ouest",
      ],
    },
  },
  "silk-hexi-corridor": {
    title: "La conquête han du corridor du Hexi",
    place: "Corridor du Hexi (Jiuquan)",
    summary:
      "En 121 av. J.-C., le jeune général Huo Qubing chassa les Xiongnu du corridor du Hexi, et le roi Hunye se rendit avec des dizaines de milliers de fidèles. Au cours des décennies suivantes, les Han y implantèrent les commanderies de Wuwei, Zhangye, Jiuquan et Dunhuang, et prolongèrent leurs murailles vers l’ouest jusqu’à la passe de Yumen.",
    context:
      "L’empereur Wu rompit avec l’ancienne politique qui consistait à apaiser les Xiongnu par des alliances matrimoniales et des présents. Tenir cette bande de terre coupait les Xiongnu de leurs alliés qiang, au sud, et ouvrait un contact direct avec les cités-oasis du bassin du Tarim.",
    whyHere:
      "Le corridor est une dépression longue de près de 1 000 kilomètres entre les monts Qilian et le désert de Gobi, où des rivières de fonte des neiges alimentent un chapelet d’oasis. C’était le seul passage praticable du fleuve Jaune au bassin du Tarim : qui le tenait contrôlait le trafic terrestre entre la Chine et l’Occident.",
  },
  "silk-heavenly-horses": {
    title: "La guerre des chevaux célestes",
    place: "Vallée du Ferghana (Dayuan)",
    summary:
      "Lorsque le royaume de Dayuan, dans le Ferghana, refusa de céder ses précieux chevaux et fit tuer un envoyé han, l’empereur Wu lança le général Li Guangli vers l’ouest à travers le bassin du Tarim. La première expédition échoua, mais la seconde assiégea la capitale, Ershi, et ramena environ trois mille chevaux.",
    context:
      "La cavalerie han voulait des montures plus grandes et plus robustes que les poneys de steppe des Xiongnu, et Zhang Qian avait signalé les chevaux « qui suent le sang » du Ferghana. Cette victoire impressionna les cités-oasis et prépara l’installation de garnisons han dans les Contrées occidentales.",
    whyHere:
      "Le Ferghana est un bassin fertile cerné par les chaînes du Tian Shan et de l’Alaï, dont les pâturages de luzerne permettaient d’élever des chevaux lourds. Pour l’atteindre, il fallait longer tout le pourtour du Taklamakan et franchir les cols à l’ouest de Kachgar ; la première armée s’effondra faute de vivres tirés des oasis du parcours.",
  },
  "silk-pliny": {
    title: "Pline fait le compte des luxes orientaux",
    place: "Rome",
    summary:
      "Dans son Histoire naturelle, dédiée en 77 au futur empereur Titus, Pline l’Ancien déplorait que l’Inde, le pays des Sères et l’Arabie soutirent chaque année à l’Empire romain cent millions de sesterces.",
    context:
      "La soie parvenait à Rome comme un luxe coûteux, au terme de longues chaînes d’intermédiaires, et les Romains n’en connaissaient que vaguement les producteurs, qu’ils nommaient les Sères. La plupart des marchandises orientales, au premier rang desquelles le poivre, arrivaient par mer en Égypte, tandis que la Parthie contrôlait les accès terrestres.",
    whyHere:
      "Rome se trouvait à l’extrémité occidentale du réseau, à des milliers de kilomètres de tout producteur de soie. Ses importations transitaient par Alexandrie, alimentée par des ports de la mer Rouge comme Bérénice, et par des cités caravanières syriennes comme Palmyre et Antioche.",
    schematic: {
      westLabel: "Empire romain",
      eastLabel: "Inde et Chine",
      eastbound: ["monnaies d’or", "verrerie", "corail", "vin"],
      westbound: ["soie", "poivre", "perles", "pierres précieuses"],
    },
  },
  "silk-gan-ying": {
    title: "Gan Ying rebrousse chemin au bord du Golfe",
    place: "Fond du golfe Persique (Tiaozhi)",
    summary:
      "Le général han Ban Chao chargea son envoyé Gan Ying de trouver Da Qin, l’Empire romain. Gan Ying atteignit le rivage d’une vaste mer, probablement le golfe Persique, où des marins parthes l’avertirent que la traversée pouvait durer jusqu’à deux ans ; il fit demi-tour.",
    context:
      "Ban Chao avait rétabli l’autorité han sur le bassin du Tarim. Le Livre des Han postérieurs affirme que la Parthie voulait vendre elle-même la soie chinoise à Rome et tenait donc les deux empires à l’écart l’un de l’autre ; nombre d’historiens lisent l’avertissement des marins sous cet éclairage.",
    whyHere:
      "La Mésopotamie et le Golfe formaient la charnière entre la route terrestre venue d’Iran et les routes maritimes vers l’Inde et l’Égypte, et la Parthie tenait l’une et l’autre. Le voyageur venu de l’est se heurtait ici à la mer, ce qui faisait des patrons de navires parthes les gardiens de tout ce qui s’étendait au-delà.",
  },
  "silk-kanishka": {
    title: "Kanishka et le bouddhisme kouchan",
    place: "Purushapura (Peshawar), Gandhara",
    summary:
      "L’empereur kouchan Kanishka, dont le règne commença probablement vers 127, régnait de la Bactriane à la plaine du Gange et fut un protecteur célèbre du bouddhisme. Les ateliers du Gandhara et de Mathura produisirent quelques-unes des premières représentations du Bouddha sous forme humaine.",
    context:
      "La domination kouchane réunit sous une même dynastie les mondes centrasiatique, iranien et indien. Des moines venus des terres parthes et kouchanes, comme An Shigao et Lokaksema, furent parmi les premiers à traduire des textes bouddhiques en chinois, à Luoyang, au IIe siècle.",
    whyHere:
      "Le Gandhara s’étend au pied de la passe de Khyber et des routes qui franchissent l’Hindou Kouch et le Karakoram. Ses monastères jalonnaient les chemins que prenaient les marchands vers le nord, en direction de la Bactriane et du bassin du Tarim : le bouddhisme voyagea vers l’est avec les caravanes.",
  },
  "silk-sogdian-letters": {
    title: "Les Anciennes Lettres sogdiennes",
    place: "Tour de guet han à l’ouest de Dunhuang",
    summary:
      "Vers 313, un sac de lettres écrites par des marchands sogdiens établis en Chine s’égara dans une tour de guet à l’ouest de Dunhuang, où Aurel Stein le découvrit en 1907. L’une des lettres relate le sac de Luoyang en 311 ; une autre émane de Miwnay, une femme abandonnée sans ressources à Dunhuang par son mari.",
    context:
      "Les Sogdiens de Samarcande et de Boukhara avaient constitué une diaspora de comptoirs marchands à travers la Chine du Nord. Les lettres montrent un réseau familial négociant des marchandises comme le musc et l’argent, tandis que la dynastie des Jin occidentaux s’effondrait autour d’eux.",
    whyHere:
      "Dunhuang gardait le point où s’achève le corridor du Hexi et où commencent les routes qui contournent le Taklamakan : le courrier entre la Chine et la Sogdiane passait par ses postes frontières. L’air sec du désert a conservé un papier qui aurait pourri presque partout ailleurs.",
  },
  "silk-silkworms": {
    title: "Des vers à soie passés en fraude à Constantinople",
    place: "Constantinople",
    summary:
      "Selon Procope, des moines qui avaient vécu dans un pays appelé Sérinde apportèrent des œufs de vers à soie à Justinien vers 552. Leur présent jeta les bases d’une industrie byzantine de la soie qui ne dépendait plus entièrement des intermédiaires perses.",
    context:
      "L’Empire romain d’Orient livrait des guerres répétées à la Perse sassanide, qui contrôlait le commerce terrestre de la soie et le taxait lourdement. Justinien avait déjà tenté, sans succès, d’acheter de la soie par l’intermédiaire de marchands éthiopiens en mer Rouge afin de contourner la Perse.",
    whyHere:
      "Constantinople commandait les détroits entre la mer Noire et la mer Égée et constituait le plus grand marché d’étoffes de luxe de l’empire. Le mûrier poussait bien en Grèce, en Syrie et en Anatolie : une fois les œufs arrivés, la soie pouvait être produite à l’intérieur des frontières impériales.",
  },
  "silk-xuanzang": {
    title: "Le voyage de Xuanzang en Inde",
    place: "Bamiyan, Hindou Kouch",
    summary:
      "Bravant l’interdiction de voyager à l’étranger, le moine Xuanzang quitta la Chine en 629 et gagna l’ouest par Tourfan, Samarcande et l’Hindou Kouch, passant devant les grands bouddhas de Bamiyan sur la route de l’Inde. Il étudia à Nalanda et revint à Chang’an en 645 avec plus de six cents textes bouddhiques.",
    context:
      "La jeune dynastie Tang n’avait pas encore assuré sa frontière occidentale, et le khaganat turc occidental dominait les routes. Les Mémoires sur les contrées occidentales de Xuanzang devinrent une source essentielle sur l’Asie centrale et l’Inde, et ses traductions transformèrent le bouddhisme chinois.",
    whyHere:
      "Bamiyan occupe une haute vallée entre l’Hindou Kouch et la chaîne du Koh-i-Baba, sur la route qui descend de la Bactriane vers le Gandhara. Les caravanes qui y faisaient halte dotaient les monastères et les bouddhas colossaux taillés dans ses falaises.",
  },
  "silk-chang-an": {
    title: "Chang’an, capitale des Tang",
    place: "Chang’an (Xi’an)",
    summary:
      "Sous l’empereur Xuanzong, la Chang’an des Tang comptait parmi les plus grandes villes du monde : un quadrillage fortifié d’environ 84 kilomètres carrés, peuplé peut-être d’un million d’habitants. Marchands sogdiens, perses, turcs et arabes commerçaient dans son marché de l’Ouest, étroitement réglementé.",
    context:
      "Les armées tang s’étaient emparées des oasis du Tarim au milieu du VIIe siècle et y avaient établi les Quatre Garnisons d’Anxi. Des communautés zoroastriennes, manichéennes et de l’Église d’Orient pratiquaient leur culte dans la ville, et la musique comme le costume d’Asie centrale furent en vogue jusqu’à la révolte d’An Lushan, en 755.",
    whyHere:
      "Chang’an se dressait dans la vallée de la Wei, un bassin protégé par des montagnes et des cols gardés, à la tête orientale de la route du corridor du Hexi. Les barges de grain venues de l’est et les caravanes venues de l’ouest y convergeaient.",
  },
};
