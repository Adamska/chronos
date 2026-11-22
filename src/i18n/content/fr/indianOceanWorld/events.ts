import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "io-hippalus": {
    title: "Hippalos et la traversée en haute mer",
    place: "Eudaemon Arabia (Aden), à l’entrée de la mer Rouge",
    summary:
      "Les sources grecques attribuent à un pilote nommé Hippalos la découverte de la route directe à travers la mer d’Arabie, portée par la mousson du sud-ouest, au lieu du cabotage le long des côtes d’Arabie et de Perse. Le Périple affirme même que le vent du sud-ouest avait reçu son nom.",
    context:
      "Sa datation fait débat : certains spécialistes le situent à l’époque des voyages d’Eudoxe de Cyzique, à la fin du IIe siècle av. J.-C., d’autres au Ier siècle apr. J.-C., et quelques-uns pensent que « Hippalos » fut d’abord le nom du vent. Les marins arabes et indiens utilisaient assurément la mousson bien avant qu’un Grec ne la consigne par écrit.",
    whyHere:
      "Les vents de l’océan Indien s’inversent au fil des saisons : de juin à septembre environ, la mousson du sud-ouest souffle avec régularité vers l’Inde, et de novembre à mars, la mousson du nord-est souffle en sens inverse. Un navire quittant le golfe d’Aden au cœur de l’été pouvait filer vent arrière jusqu’au Malabar en quelques semaines et rentrer l’hiver suivant.",
    schematic: {
      steps: [
        "Les vents s’inversent selon la saison",
        "Les pilotes traversent la haute mer",
        "Le vent d’été souffle vers l’est",
        "Le vent d’hiver ramène au port",
      ],
    },
  },
  "io-berenike": {
    title: "L’Égypte romaine se tourne vers l’océan Indien",
    place: "Bérénice et Myos Hormos, côte égyptienne de la mer Rouge",
    summary:
      "Après l’annexion de l’Égypte par Auguste en 30 av. J.-C., le trafic entre l’Inde et les ports de la mer Rouge, Myos Hormos et Bérénice, connut un essor rapide. Les fouilles de Bérénice ont livré du teck indien, du poivre noir, des inscriptions en tamoul-brahmi et de la céramique culinaire indienne.",
    context:
      "Les Ptolémées avaient fondé Bérénice vers 275 av. J.-C., surtout pour importer des éléphants de guerre africains. Sous Rome, le port devint la principale porte d’entrée du poivre, des textiles et des pierres précieuses, et l’Empire taxait les importations au quart de leur valeur.",
    whyHere:
      "De forts vents du nord balaient le nord de la mer Rouge presque toute l’année : plutôt que de remonter péniblement vers Suez contre le vent, les navires déchargeaient bien plus au sud. De Bérénice, des caravanes de chameaux traversaient quelque 380 kilomètres de désert jusqu’à Coptos, sur le Nil, un trajet que Pline estimait à douze jours.",
  },
  "io-periplus": {
    title: "Le Périple de la mer Érythrée",
    place: "Barygaza (Bharuch), golfe de Khambhat",
    summary:
      "Un marchand anonyme d’Égypte, de langue grecque, rédigea un guide pratique des ports s’échelonnant de la mer Rouge à l’Afrique orientale, à l’Arabie et à l’Inde, précisant ce que chaque marché achetait et vendait, et quand prendre la mer. Il décrit Barygaza, Muziris, Poduké sur la côte de Coromandel, et même une contrée nommée Thina, au-delà du Gange.",
    context:
      "Le texte est généralement daté entre 40 et 70 apr. J.-C. environ. Il nomme des souverains comme Zoskalès sur la côte africaine et Charibaël en Arabie du Sud, et rapporte que Barygaza importait vin, cuivre, étain, corail et monnaie romaine en échange de cotonnades, de pierres précieuses, d’ivoire et d’épices.",
    whyHere:
      "Barygaza se trouvait en amont de l’estuaire de la Narmada, au fond du golfe de Khambhat, débouché des cotonnades et des gemmes de l’Inde occidentale. Le golfe connaît certaines des plus fortes marées d’Asie : des pilotes locaux devaient aller au-devant des navires et les remorquer vers l’amont à travers le mascaret déferlant.",
  },
  "io-muziris": {
    title: "Le papyrus de Muziris",
    place: "Muziris (près de Pattanam), côte de Malabar",
    summary:
      "Un papyrus égyptien du milieu du IIe siècle consigne un prêt pour un voyage à Muziris et la cargaison de retour du navire Hermapollon : nard du Gange, ivoire et textiles, estimés à près de sept millions de drachmes. Il montre quels capitaux un seul voyage de mousson pouvait mobiliser.",
    context:
      "Pline l’Ancien qualifiait Muziris de premier emporium de l’Inde, et les poèmes tamouls de l’époque du Sangam décrivent des navires étrangers arrivant chargés d’or et repartant chargés de poivre. Les fouilles menées à Pattanam depuis 2007 ont mis au jour des amphores et du verre romains sur ce qui pourrait être le port antique.",
    whyHere:
      "Muziris s’élevait près de l’embouchure de la Periyar, à courte distance des collines qui produisaient l’essentiel du poivre noir du monde. Les navires quittaient l’Égypte au cœur de l’été, traversaient la mer d’Arabie avec la mousson du sud-ouest et rentraient en décembre ou en janvier avec la mousson du nord-est.",
    schematic: {
      westLabel: "Égypte romaine",
      eastLabel: "Côte de Malabar",
      eastbound: ["monnaies d’or", "vin", "verre", "corail", "cuivre"],
      westbound: ["poivre", "malabathrum", "ivoire", "perles", "nard du Gange"],
    },
  },
  "io-oc-eo": {
    title: "Le Funan et le port d’Óc Eo",
    place: "Óc Eo, ouest du delta du Mékong",
    summary:
      "Au milieu du IIIe siècle, Kang Tai et Zhu Ying, envoyés du royaume chinois de Wu, visitèrent le Funan, dont le principal port était Óc Eo. Les fouilles y ont livré des sceaux indiens, des miroirs de bronze chinois et de l’or romain, dont un médaillon d’Antonin le Pieux daté de 152.",
    context:
      "Le Funan fut le premier grand État marchand de l’Asie du Sud-Est continentale, et les annales chinoises rapportent que son souverain Fan Shiman arma une flotte et soumit ses voisins. Ses rois adoptèrent des titres royaux indiens, le sanskrit et les cultes hindous et bouddhiques.",
    whyHere:
      "Les marchandises venues de l’Inde franchissaient souvent l’étroit isthme de Kra avant d’être réembarquées à travers le golfe de Thaïlande, dont Óc Eo était l’atterrage naturel. Des canaux la reliaient au Mékong, dont le riz nourrissait les équipages qui attendaient que la mousson tourne vers la Chine. Lorsque les navires se mirent à passer directement par le détroit de Malacca, le Funan perdit cet avantage.",
  },
  "io-aksum": {
    title: "Ezana d’Aksoum adopte le christianisme",
    place: "Aksoum, hauts plateaux du Tigré",
    summary:
      "Le roi Ezana d’Aksoum se convertit au christianisme vers les années 330 sous l’influence de Frumence, un Syrien de Tyr capturé enfant lorsque son navire avait fait escale dans un port de la mer Rouge, en route pour l’Inde. Les monnaies plus tardives d’Ezana portent la croix, parmi les toutes premières au monde à l’arborer.",
    context:
      "Aksoum frappait sa propre monnaie d’or, commerçait l’ivoire avec Rome et l’Inde, et contrôla plus tard une partie de l’Arabie du Sud. Frumence fut consacré évêque par Athanase d’Alexandrie, liant l’Église éthiopienne à l’Égypte pour seize siècles.",
    whyHere:
      "Aksoum occupe un plateau à plus de 2 000 mètres d’altitude, où les pluies d’été permettent l’agriculture, à environ huit jours de marche d’Adulis, sur le golfe de Zula. Les navires en route pour l’Inde faisaient escale à Adulis : les idées gagnaient Aksoum par la mer aussi aisément que l’ivoire en partait.",
  },
  "io-srivijaya": {
    title: "Srivijaya, maîtresse des détroits",
    place: "Palembang, sur la Musi, Sumatra",
    summary:
      "L’inscription de Kedukan Bukit, datée de 682, relate une expédition sacrée du souverain Dapunta Hyang à la tête d’une armée de vingt mille hommes. En quelques années, Srivijaya avait absorbé le port rival de Malayu, à Jambi, et atteint Bangka, commandant les accès au détroit de Malacca et au détroit de la Sonde.",
    context:
      "Le moine chinois Yijing fit escale à Srivijaya en 671, en route pour l’Inde, puis y passa des années à copier et traduire des textes bouddhiques. Srivijaya envoyait un tribut à la Chine et maintenait les détroits ouverts et surveillés, attirant les navires dans ses ports.",
    whyHere:
      "Les navires de Chine arrivaient avec la mousson du nord-est, ceux de l’Inde avec la mousson du sud-ouest, et aucun ne pouvait poursuivre sa route avant que le vent ne tourne. Palembang, à l’abri en amont du fleuve mais proche à la fois du détroit de Malacca et du détroit de la Sonde, devint le lieu où ils attendaient.",
  },
  "io-belitung": {
    title: "L’épave de Belitung",
    place: "Au large de l’île de Belitung, mer de Java",
    summary:
      "Un navire à bordages cousus, de conception propre à l’ouest de l’océan Indien, sombra au large de Belitung vers 830 avec quelque 60 000 pièces de céramique Tang, surtout des bols de Changsha, ainsi que de la vaisselle d’or et d’argent. Un bol porte une date correspondant à 826.",
    context:
      "Découverte par des pêcheurs en 1998, l’épave est la preuve matérielle la plus nette de voyages directs entre les ports abbassides et la Chine des Tang. Bien des bols portent des motifs bouddhiques et islamiques destinés aux acheteurs du Golfe.",
    whyHere:
      "Ceinte de récifs, Belitung se trouve entre Bangka et Bornéo, sur le passage qui mène de la mer de Chine méridionale à la mer de Java. Une coque cousue de fibre de coco pouvait fléchir sur de tels récifs, mais non survivre à un choc avec une pleine cargaison.",
    schematic: {
      westLabel: "Golfe abbasside",
      eastLabel: "Chine des Tang",
      eastbound: ["encens", "perles", "verrerie", "ivoire"],
      westbound: ["bols de Changsha", "céladons", "coupes d’or", "anis étoilé"],
    },
  },
  "io-siraf": {
    title: "Siraf et la Relation de la Chine et de l’Inde",
    place: "Siraf, côte du golfe Persique",
    summary:
      "Un recueil de récits de marchands compilé en 851 décrit la route maritime de Siraf à Canton, par Mascate, Quilon et Kalah, dans la péninsule Malaise. Vers 916, Abu Zayd de Siraf ajouta que le massacre des marchands étrangers de Canton en 878–879 avait mis un terme aux voyages directs.",
    context:
      "Siraf s’enrichit comme principal débouché de l’Irak abbasside sur le Golfe, et ses marchands bâtirent des maisons de plusieurs étages en bois importé. Après un grand séisme en 977 et le déplacement du commerce vers Kish et Ormuz, la ville déclina.",
    whyHere:
      "Siraf n’avait presque ni eau ni terres cultivables, mais un mouillage profond tout près du rivage permettait aux grands navires d’y charger plutôt que de s’engager dans les hauts-fonds du fond du Golfe, à Bassora. Un aller-retour vers la Chine prenait un an et demi ou davantage, car chaque étape devait attendre sa mousson.",
  },
  "io-chola-raid": {
    title: "Le raid chola contre Srivijaya",
    place: "Kadaram (Kedah), péninsule Malaise",
    summary:
      "La flotte de Rajendra Ier traversa le golfe du Bengale, mit à sac Kadaram et d’autres ports de Srivijaya et captura le roi Sangrama Vijayatunggavarman. Une inscription tamoule de Thanjavur énumère plus d’une douzaine de lieux conquis, des îles Nicobar à Sumatra.",
    context:
      "Le mobile du raid reste débattu, mais il visait probablement à briser l’emprise de Srivijaya sur le lucratif commerce avec la Chine. Les relations avaient pourtant été cordiales : un roi de Srivijaya avait doté un monastère bouddhique à Nagapattinam une vingtaine d’années plus tôt.",
    whyHere:
      "Kedah était le premier atterrage des navires qui traversaient le golfe du Bengale depuis l’Inde, guidés par le sommet du Gunung Jerai, haut de 1 200 mètres. S’en emparer mettait l’entrée occidentale du détroit de Malacca à portée des Chola.",
    schematic: {
      steps: [
        "Essor du commerce sous les Song",
        "Srivijaya taxe les détroits",
        "La flotte chola cingle vers l’est",
        "Kadaram mise à sac",
      ],
    },
  },
};
