import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "persia-cyrus-medes": {
    title: "Cyrus renverse les Mèdes",
    place: "Ecbatane, Médie",
    summary:
      "Cyrus, roi du petit royaume perse d’Anshan et vassal des Mèdes, se soulève contre son suzerain Astyage. Lorsque l’armée mède se mutine et lui livre Astyage, comme le rapporte une chronique babylonienne, Cyrus entre dans Ecbatane et emporte son trésor en Perse.",
    context:
      "Mèdes et Perses étaient des peuples apparentés, de langue iranienne, installés sur le plateau au début du Ier millénaire av. J.-C. Les Mèdes avaient aidé à abattre l’Assyrie en 612 av. J.-C. et régnaient depuis Ecbatane sur un royaume assez lâche. En s’en emparant, Cyrus hérite de leurs nobles, de leurs cavaliers et de prétentions qui s’étendaient jusqu’à l’est de l’Anatolie.",
    whyHere:
      "Ecbatane s’étendait au pied du mont Alvand, là où la grande route venue de Mésopotamie franchit le Zagros et débouche sur le plateau. Qui la tenait contrôlait l’axe reliant les plaines fluviales de l’ouest aux steppes et aux oasis de l’est.",
  },
  "persia-sardis": {
    title: "Crésus tombe à Sardes",
    place: "Sardes, Lydie",
    summary:
      "Crésus de Lydie franchit le fleuve Halys pour frapper le premier, livre une bataille indécise à Ptérie et se retire pour l’hiver. Cyrus le suit contre toute attente, bat la cavalerie lydienne devant Sardes et prend la citadelle après un bref siège.",
    context:
      "Crésus était synonyme de richesse, et son royaume fut l’un des premiers à frapper monnaie. Hérodote raconte que l’oracle de Delphes lui avait promis qu’en attaquant la Perse il détruirait un grand empire\u00a0: ce fut le sien. Avec la Lydie, les cités grecques d’Ionie passent sous domination perse.",
    whyHere:
      "Sardes se dressait sur un contrefort du mont Tmolos, au-dessus de la fertile vallée de l’Hermos, et le Pactole, à ses pieds, charriait des paillettes d’or. De là, des routes descendaient vers les ports de l’Égée\u00a0: la ville était la clé naturelle de l’Anatolie occidentale.",
  },
  "persia-pasargadae": {
    title: "Pasargades, la première capitale",
    place: "Pasargades, Perside",
    summary:
      "Cyrus bâtit une cité royale de palais à colonnes et de pavillons de pierre, entourés de jardins clos et irrigués, ancêtres du «\u00a0paradis\u00a0» persan. Mort en 530 av. J.-C. en combattant des nomades d’Asie centrale, il fut inhumé ici, dans un simple tombeau de pierre à toit en bâtière posé sur un socle à gradins.",
    context:
      "Pasargades mêlait des apports venus de tout le nouvel empire\u00a0: taille de pierre lydienne et ionienne, génies ailés assyriens, salles à colonnes mèdes. C’était la première affirmation d’un style impérial perse. Deux siècles plus tard, Alexandre visita le tombeau et le fit restaurer.",
    whyHere:
      "Le site occupe une haute plaine de la Perside, berceau tribal des Perses, arrosée par la rivière Pulvar. La tradition y plaçait la victoire décisive de Cyrus sur les Mèdes\u00a0: la capitale s’éleva sur le champ même de son triomphe.",
  },
  "persia-babylon": {
    title: "Babylone ouvre ses portes",
    place: "Babylone, Mésopotamie",
    summary:
      "À l’automne 539 av. J.-C., Cyrus bat l’armée babylonienne à Opis, sur le Tigre. Quelques jours plus tard, ses troupes entrent dans Babylone sans combattre, le roi Nabonide est capturé, et Cyrus fait son entrée dans la plus grande ville de son temps en nouveau souverain.",
    context:
      "Nabonide avait passé dix ans dans l’oasis de Tayma, en Arabie, et s’était aliéné les prêtres de Marduk, le dieu de Babylone. Avec Babylone, Cyrus obtient toute la Mésopotamie, la Syrie et le Levant\u00a0: la Perse devient le plus vaste empire que le monde ait encore connu.",
    whyHere:
      "Babylone enjambait l’Euphrate là où il se rapproche le plus du Tigre, au cœur du réseau de canaux qui irriguait les terres les plus riches d’Asie occidentale. Opis gardait le passage du Tigre sur la route du Zagros\u00a0: une victoire en ce lieu ouvrait le chemin de la capitale.",
    schematic: {
      steps: ["Nabonide se brouille avec les prêtres", "Cyrus vainqueur à Opis", "Babylone prise sans siège", "La Syrie et le Levant se soumettent"],
    },
  },
  "persia-cylinder": {
    title: "Le cylindre de Cyrus",
    place: "Babylone, Mésopotamie",
    summary:
      "Un cylindre d’argile inscrit en akkadien, enfoui dans les fondations du rempart de Babylone, proclame que le dieu Marduk a choisi Cyrus. Le texte affirme qu’il est entré en paix dans la ville, a restauré les temples délaissés et permis aux peuples déportés et à leurs dieux de rentrer chez eux.",
    context:
      "Il s’agit d’une inscription de fondation mésopotamienne classique et d’un texte de propagande contre Nabonide. On l’a souvent présenté comme la première charte des droits de l’homme, lecture moderne que la plupart des historiens rejettent. Il reflète pourtant une politique bien réelle\u00a0: la Perse gouvernait avec les dieux, les élites et les coutumes locales, et non contre eux.",
    whyHere:
      "Babylone était le cœur religieux et savant de la Mésopotamie, et y régner exigeait la bénédiction de Marduk. Enfouir des inscriptions dans les murailles était la manière dont les rois mésopotamiens s’adressaient aux dieux et à leurs successeurs\u00a0: Cyrus parlait la langue locale du pouvoir.",
  },
  "persia-return": {
    title: "Le retour des exilés",
    place: "Jérusalem, Juda",
    summary:
      "Cyrus autorise les Judéens déportés en Babylonie par Nabuchodonosor à rentrer chez eux et à rebâtir le Temple de Jérusalem. Des groupes de rapatriés entreprennent le long voyage du retour, et le Second Temple est achevé vers 516 av. J.-C., sous Darius.",
    context:
      "Le livre d’Isaïe appelle Cyrus l’oint du Seigneur, le seul étranger à recevoir ce titre dans la Bible hébraïque. Beaucoup de Juifs choisirent de rester en Babylonie, où leur communauté prospéra pendant des siècles. Juda devint Yehud, petite province autonome de l’empire.",
    whyHere:
      "Juda occupait le pont terrestre entre la Mésopotamie et l’Égypte. Une population loyale et reconnaissante dans ces collines, sur la route que la Perse allait bientôt prendre vers le Nil, servait la stratégie de l’empire autant que sa réputation.",
  },
  "persia-pelusium": {
    title: "Cambyse conquiert l’Égypte",
    place: "Péluse, delta du Nil",
    summary:
      "Fils de Cyrus, Cambyse II traverse le désert du Sinaï, bat le pharaon Psammétique III à Péluse et prend Memphis. L’Égypte devient une province perse, et Cambyse, couronné pharaon, fonde la XXVIIe dynastie.",
    context:
      "Hérodote fait de Cambyse un tyran fou, mais les sources égyptiennes le montrent adoptant les titres pharaoniques et honorant les dieux locaux. La Libye et la cité grecque de Cyrène se soumettent, tandis que les expéditions vers la Nubie au sud et l’oasis de Siwa à l’ouest échouent.",
    whyHere:
      "Péluse gardait la branche la plus orientale du Nil, au débouché de la route côtière venue de Gaza à travers le désert. Marais et sables y canalisent tout envahisseur, et Hérodote raconte que des tribus arabes fournirent des outres d’eau pour permettre à l’armée de passer.",
  },
  "persia-behistun": {
    title: "Darius grave son histoire à Behistun",
    place: "Mont Behistun, Médie",
    summary:
      "Sur une falaise dominant la route, Darius fait sculpter un relief et un long texte en vieux-perse, en élamite et en babylonien. Il y raconte comment il tua un mage qui avait usurpé le trône en se faisant passer pour Bardiya, fils de Cyrus, puis écrasa neuf rois rebelles en une seule année.",
    context:
      "Bien des historiens soupçonnent Darius, lointain parent de Cyrus, d’avoir en réalité assassiné le vrai Bardiya. Des copies de son récit circulèrent dans tout l’empire, dont une version araméenne retrouvée en Égypte. Au XIXe siècle, ce texte trilingue devint la clé du déchiffrement du cunéiforme.",
    whyHere:
      "Le mont Behistun domine la grande route de Babylone à Ecbatane, près d’une source où s’arrêtaient les voyageurs. Le texte est placé très haut, visible de chaque caravane mais hors d’atteinte de quiconque voudrait le mutiler.",
  },
  "persia-satrapies": {
    title: "Satrapies et tribut",
    place: "Suse, Élam",
    summary:
      "Darius divise l’empire en une vingtaine de provinces, chacune confiée à un satrape, et fixe le tribut que chacune doit en argent ou en nature. Secrétaires royaux, commandants de garnison et inspecteurs surnommés les «\u00a0Yeux du roi\u00a0» tiennent les satrapes en respect.",
    context:
      "Darius fait de Suse, qu’il rebâtit, sa capitale administrative. L’araméen impérial devient la langue commune des scribes de l’Égypte à l’Indus, tandis que lois, temples et élites locales restent en place. Hérodote a conservé la liste des provinces et de ce que chacune versait.",
    whyHere:
      "Suse se dressait dans la plaine basse du Khuzestan, entre le Zagros et la Mésopotamie. L’ancienne capitale élamite reliait les hautes terres perses aux vieilles civilisations fluviales et se trouvait à portée de Babylone.",
    schematic: {
      steps: ["Des satrapes gouvernent les provinces", "Un tribut fixe en argent", "Les Yeux du roi inspectent", "L’araméen unit les scribes", "Les coutumes locales demeurent"],
    },
  },
  "persia-apadana": {
    title: "Persépolis et l’Apadana",
    place: "Persépolis, Perside",
    summary:
      "Darius entreprend à Persépolis une immense terrasse de pierre, couronnée par l’Apadana, salle d’audience dont le toit reposait sur des colonnes d’une vingtaine de mètres. Ses escaliers montrent les délégations des peuples soumis apportant leurs présents\u00a0: Lydiens chargés de vases, Indiens portant de la poudre d’or, Bactriens menant un chameau.",
    context:
      "Xerxès et ses successeurs y bâtirent pendant des générations. Des milliers de tablettes d’argile montrent que les bâtisseurs, hommes et femmes, étaient des ouvriers payés en rations de grain, de vin et de bière. Les reliefs présentent l’empire comme une paisible procession autour du roi.",
    whyHere:
      "La terrasse s’adosse à la montagne de la Miséricorde, au-dessus de la plaine de Marvdasht, au cœur du pays perse, non loin de Pasargades. Loin des turbulentes cités des plaines, c’était une scène d’apparat bâtie sur la terre même de la dynastie.",
    schematic: {
      westLabel: "Peuples soumis",
      eastLabel: "Persépolis",
      eastbound: ["poudre d’or", "chevaux", "étoffes", "ivoire", "chameaux"],
      westbound: ["protection royale", "garnisons", "routes", "dons royaux"],
    },
  },
  "persia-daric": {
    title: "La darique d’or",
    place: "Sardes, Lydie",
    summary:
      "Darius émet une monnaie d’or, la darique, et une monnaie d’argent, le sicle, qui montrent toutes deux le roi en archer courant. Si pures et d’un poids si régulier, les dariques inspiraient confiance tout autour de l’Égée.",
    context:
      "La monnaie était une invention lydienne et circulait surtout dans les provinces occidentales de l’empire. Au cœur du pays perse, on payait encore en argent pesé et en rations. Plus tard, les rois se servirent des dariques pour engager des mercenaires grecs et acheter des alliés.",
    whyHere:
      "L’atelier se trouvait à Sardes, où les artisans lydiens affinaient depuis longtemps l’or charrié par le Pactole. Le monde grec voisin commerçait déjà en monnaie\u00a0: c’est ici que l’argent perse trouvait son marché le plus actif.",
  },
  "persia-indus": {
    title: "Jusqu’à la vallée de l’Indus",
    place: "Gandhara et Indus",
    summary:
      "Darius étend la domination perse au-delà du Gandhara, jusqu’à la vallée de l’Indus, qu’Hérodote décrit comme la plus riche de toutes les provinces, payant son tribut en poudre d’or. Il envoie le capitaine grec Scylax de Caryanda descendre l’Indus jusqu’à la mer, puis contourner l’Arabie jusqu’en Égypte.",
    context:
      "Le Gandhara avait sans doute déjà été conquis par Cyrus. Des soldats indiens marchèrent plus tard avec Xerxès contre la Grèce, et l’écriture kharoshthi de la région dérive de l’araméen des scribes perses.",
    whyHere:
      "Près d’Attock, l’Indus quitte les montagnes pour la plaine, là où le franchit la route venue de la vallée de Kaboul et de la passe de Khyber. L’or tiré des sables de ses affluents faisait de la région une proie convoitée.",
    schematic: {
      steps: ["Darius conquiert l’Indus", "Scylax descend le fleuve", "Le tour de l’Arabie", "Une voie maritime de l’Inde à l’Égypte"],
    },
  },
};
