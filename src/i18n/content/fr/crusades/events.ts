import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "crusade-clermont": {
    title: "Urbain II prêche à Clermont",
    place: "Clermont, Auvergne",
    summary:
      "Le 27 novembre 1095, à la clôture d’un concile, le pape Urbain II harangue une foule réunie dans un champ aux portes de Clermont\u00a0: il appelle les chevaliers d’Occident à partir vers l’est, à secourir leurs frères chrétiens et à délivrer Jérusalem. À ceux qui partiront par dévotion, le voyage tiendra lieu de toute pénitence, et des milliers de fidèles cousent une croix d’étoffe sur leurs vêtements.",
    context:
      "Depuis que les Turcs seldjoukides ont écrasé une armée byzantine à Manzikert en 1071, l’essentiel de l’Anatolie a échappé à Constantinople. En mars 1095, au concile de Plaisance, les envoyés de l’empereur Alexis Ier Comnène demandent au pape des soldats occidentaux\u00a0; Urbain, soucieux d’affirmer son autorité sur la chrétienté latine et de détourner la violence des chevaliers vers l’extérieur, transforme cette requête en un immense pèlerinage armé.",
    whyHere:
      "Urbain était un Champenois qui parcourait les terres qu’il connaissait le mieux, où les châteaux, les chevaliers querelleurs et le réseau monastique de Cluny lui assuraient un public tout trouvé. Clermont, cité épiscopale au cœur du royaume, pouvait rassembler des prélats du Nord comme du Midi, et de là le message se répandit le long des routes de pèlerinage et des chemins monastiques.",
    schematic: {
      steps: ["Victoire seldjoukide à Manzikert", "Alexis demande des soldats", "Urbain prêche un pèlerinage armé", "L’Occident prend la croix"],
    },
  },
  "crusade-peoples": {
    title: "La croisade populaire",
    place: "Civetot, Bithynie",
    summary:
      "Des mois avant que les princes soient prêts, des dizaines de milliers de gens du peuple et de petits chevaliers, souvent entraînés par le prédicateur Pierre l’Ermite, marchent de la Rhénanie à Constantinople en traversant la Hongrie. Alexis les fait passer le Bosphore et, en octobre 1096, les Seldjoukides de Kılıç Arslan les surprennent et les massacrent presque tous près du camp de Civetot.",
    context:
      "Sans véritable ravitaillement, les marcheurs pillent sur leur passage et se heurtent aux Hongrois et aux Byzantins à Belgrade et à Niš. Alexis, méfiant envers cette foule indisciplinée, les presse d’attendre les grandes armées, mais leurs raids vers Nicée provoquent la riposte turque.",
    whyHere:
      "Civetot était un camp sur le golfe de Nicomédie, le premier mouillage abrité de la rive asiatique à portée de Nicée, la capitale seldjoukide, située une quarantaine de kilomètres à l’intérieur des terres. Entre le camp et la ville, des collines boisées permirent aux Turcs de tendre une embuscade sur l’unique route.",
  },
  "crusade-rhineland": {
    title: "Massacres en Rhénanie",
    place: "Mayence, Rhénanie",
    summary:
      "En mai et juin 1096, des bandes de croisés, dont la plus nombreuse était conduite par le comte Emich de Flonheim, attaquent les communautés juives de Spire, Worms, Mayence et Cologne. Des centaines de personnes périssent à Mayence seulement, d’autres sont baptisées de force, et certains choisissent de tuer leur famille et de se donner la mort plutôt que de se convertir.",
    context:
      "Certains croisés estimaient inutile d’aller combattre au loin les ennemis du Christ quand des Juifs vivaient parmi eux, et la convoitise de leurs biens joua aussi son rôle. Des évêques comme Jean de Spire tentèrent de les protéger, avec un succès inégal, et des chroniques hébraïques rédigées dans les décennies suivantes gardèrent la mémoire des victimes.",
    whyHere:
      "Le Rhin était la grande artère commerciale des pays germaniques, et ses vieilles cités épiscopales, Spire, Worms, Mayence et Cologne, abritaient les communautés juives les plus anciennes et les plus prospères au nord des Alpes. Les bandes croisées qui se rassemblaient le long du fleuve avant de gagner le Danube les traversaient de part en part.",
  },
  "crusade-nicaea": {
    title: "Le siège de Nicée",
    place: "Nicée, Bithynie",
    summary:
      "En mai 1097, les armées des princes, qui ont prêté serment à Alexis à Constantinople, assiègent Nicée, la capitale du sultan Kılıç Arslan. En juin, la garnison se rend en secret aux Byzantins, et la ville retourne à l’Empire sans le pillage qu’espéraient les croisés.",
    context:
      "Les chefs, parmi lesquels Godefroy de Bouillon, Raymond de Toulouse, Bohémond de Tarente et Robert de Normandie, avaient promis de rendre les anciennes terres byzantines. Quelques jours plus tard, ils battent Kılıç Arslan à Dorylée et entament une épuisante traversée estivale de l’Anatolie.",
    whyHere:
      "Nicée bordait la rive orientale du lac Ascania, si bien que sa garnison pouvait être ravitaillée par l’eau tant que le lac restait libre. Il fallut qu’Alexis fasse traîner des bateaux par voie de terre depuis la mer jusqu’au lac pour couper vraiment la ville, qui gardait la grande route menant du Bosphore à l’Anatolie.",
  },
  "crusade-antioch": {
    title: "Le siège d’Antioche",
    place: "Antioche, Syrie",
    summary:
      "À partir d’octobre 1097, les croisés assiègent Antioche, l’une des grandes villes de l’Orient, durant un hiver de famine. Le 3 juin 1098, une complicité dans la place permet aux hommes de Bohémond d’escalader les murs\u00a0; quelques jours plus tard, ils sont à leur tour assiégés par l’armée de secours de Kerbogha de Mossoul, qu’ils mettent en déroute lors d’une sortie désespérée le 28 juin.",
    context:
      "La découverte de ce que certains présentèrent comme la Sainte Lance ranima le moral des croisés. Bohémond garda Antioche pour lui malgré les serments prêtés à Alexis, ce qui empoisonna pour des décennies les relations avec Byzance, tandis que Baudouin de Boulogne s’était déjà emparé d’Édesse, fondant le premier État latin d’Orient.",
    whyHere:
      "Antioche s’étendait entre l’Oronte et le mont Silpius, et ses murailles escaladaient la montagne, ce qui rendait tout blocus complet impossible. Elle commandait le passage entre l’Anatolie et la Syrie\u00a0: aucune armée descendant vers le sud ne pouvait la laisser derrière elle sans danger.",
  },
  "crusade-jerusalem-1099": {
    title: "La prise de Jérusalem",
    place: "Jérusalem",
    summary:
      "Le 15 juillet 1099, après cinq semaines de siège et grâce à des tours construites avec le bois de navires génois, les croisés forcent l’entrée de Jérusalem. Ils massacrent une grande partie de la population musulmane et juive, un carnage rapporté par les auteurs latins comme arabes et dont le monde islamique garda longtemps le souvenir.",
    context:
      "Les Fatimides d’Égypte avaient repris la ville aux vassaux des Seldjoukides l’année précédente et proposé aux Francs l’accès des pèlerins, ce qu’ils refusèrent. Quelques semaines plus tard, les croisés battent une armée de secours fatimide à Ascalon, et Godefroy de Bouillon prend la tête de Jérusalem en refusant, dit-on, le titre de roi.",
    whyHere:
      "Jérusalem se dresse sur la ligne de crête des monts de Judée, loin de la mer, et ses défenseurs avaient bouché ou empoisonné les puits hors des murs. Les assiégeants dépendaient des vivres débarqués à Jaffa, et de profondes vallées à l’est et à l’ouest ne laissaient que les côtés nord et sud accessibles aux tours de siège.",
  },
  "crusade-kingdom": {
    title: "Les Francs s’installent en Orient",
    place: "Bethléem",
    summary:
      "Le jour de Noël 1100, Baudouin de Boulogne, frère de Godefroy et ancien comte d’Édesse, est couronné premier roi de Jérusalem à Bethléem. Dans les décennies suivantes, les Francs prennent une à une les villes de la côte, et quatre États latins se dessinent\u00a0: Édesse, Antioche, Tripoli et Jérusalem.",
    context:
      "Les colons formaient une petite minorité latine qui gouvernait une majorité de chrétiens orientaux, de musulmans et de juifs, en s’appuyant sur des administrateurs locaux et sur l’arrivée de nouveaux pèlerins d’Europe. Les Européens appelaient ces terres l’Outremer, et les Francs qui y naissaient adoptèrent vite le costume, la cuisine et les bains de l’Orient.",
    whyHere:
      "Bethléem, cité de David et lieu de naissance du Christ, toute proche de Jérusalem, offrait un cadre royal sans qu’il faille couronner un roi là où le Christ avait porté la couronne d’épines. Le royaume, lui, épousait une mince bande côtière dont les ports, Jaffa, Acre et Tyr, le reliaient aux routes maritimes venues d’Italie.",
  },
  "crusade-templars": {
    title: "Des moines armés",
    place: "Esplanade du Temple, Jérusalem",
    summary:
      "Vers 1120, une poignée de chevaliers menés par Hugues de Payns font vœu de protéger les pèlerins sur les routes de Terre sainte, et le roi Baudouin II les loge dans la mosquée al-Aqsa, que les Francs prenaient pour le Temple de Salomon. Les Templiers, puis les Hospitaliers, nés d’un hospice pour pèlerins, deviennent les premiers ordres militaires\u00a0: des moines qui combattent.",
    context:
      "Approuvés au concile de Troyes en 1129 et soutenus par Bernard de Clairvaux, les ordres reçoivent dans toute l’Europe des domaines dont les revenus financent châteaux et troupes en Orient. Leur réseau de maisons permet aussi aux pèlerins de déposer de l’argent en un lieu et de le retirer dans un autre, une forme précoce de banque internationale.",
    whyHere:
      "Les pèlerins débarqués à Jaffa devaient affronter deux jours de montée à travers des collines infestées de brigands jusqu’à Jérusalem\u00a0: garder cette route fut la première mission de l’ordre. L’esplanade du Temple, la grande plate-forme qui domine la ville, offrit aux chevaliers un quartier général et le nom qu’ils portèrent dans toute la chrétienté.",
  },
  "crusade-tyre": {
    title: "Venise prend sa part de Tyr",
    place: "Tyr, Liban",
    summary:
      "En 1124, une flotte vénitienne aide le royaume de Jérusalem à assiéger et prendre Tyr, l’un des derniers ports fatimides de la côte. En vertu du Pactum Warmundi conclu l’année précédente, Venise reçoit le tiers de la ville, avec son quartier, son église et ses tribunaux, et l’exemption de péages dans tout le royaume.",
    context:
      "Aucun État latin ne pouvait survivre sans les républiques maritimes italiennes, qui transportaient pèlerins, soldats et ravitaillement à travers la Méditerranée. Gênes, Pise et Venise se faisaient payer en privilèges, et leurs quartiers d’Acre, de Tyr et d’Antioche devinrent les bases d’un commerce du Levant en plein essor.",
    whyHere:
      "Tyr occupait une ancienne île reliée au continent par la chaussée d’Alexandre le Grand\u00a0: seule une armée maîtresse de la mer pouvait la prendre. Son double port et les plantations de canne à sucre de sa plaine côtière en faisaient l’une des plus riches proies du Levant.",
    schematic: {
      steps: ["Le royaume a besoin d’une flotte", "Venise bloque Tyr par la mer", "Venise obtient un tiers de la ville", "Des quartiers italiens sur toute la côte"],
    },
  },
  "crusade-edessa": {
    title: "Zengi prend Édesse",
    place: "Édesse, haute Mésopotamie",
    summary:
      "À la fin de 1144, Imad al-Din Zengi, maître de Mossoul et d’Alep, assiège Édesse en l’absence de son comte, Josselin II, et l’emporte d’assaut le 24 décembre après que ses sapeurs ont abattu un pan de muraille. Le premier État latin fondé est aussi le premier à tomber.",
    context:
      "Zengi avait passé des années à réunir Mossoul et Alep sous son autorité, et cette conquête fit de lui un champion du djihad aux yeux des musulmans. En Europe, la nouvelle bouleversa la papauté, qui appela à une nouvelle croisade.",
    whyHere:
      "Édesse se trouvait à l’est de l’Euphrate, loin du cœur côtier des États latins, avant-poste chrétien exposé entre Alep et Mossoul. Elle menaçait la route qui reliait les deux capitales de Zengi, ce qui en faisait sa première cible naturelle.",
  },
  "crusade-second": {
    title: "La deuxième croisade échoue devant Damas",
    place: "Damas, Syrie",
    summary:
      "Prêchée par Bernard de Clairvaux, la deuxième croisade conduit en Orient le roi de France Louis VII et le roi de Germanie Conrad III, mais les Turcs malmènent leurs deux armées en Anatolie. En juillet 1148, les survivants assiègent Damas, la seule puissance musulmane souvent alliée de Jérusalem, et se retirent au bout de quatre jours.",
    context:
      "Le même appel lance des chevaliers saxons et danois contre les Wendes païens au-delà de l’Elbe et aide une flotte anglaise, flamande et rhénane à prendre Lisbonne en 1147. Le fiasco de Damas pousse la ville vers Nur al-Din, le fils de Zengi, et envenime les relations entre nouveaux venus et Francs établis.",
    whyHere:
      "Damas était une ville-oasis nourrie par le Barada et ceinte de vergers clos de murs, par lesquels les croisés l’abordèrent d’abord. Quand ils se déplacèrent vers la plaine découverte et sans eau à l’est de la ville, ils perdirent leur ravitaillement, et le siège s’effondra.",
  },
  "crusade-nur-ad-din": {
    title: "Nur al-Din unifie la Syrie",
    place: "Damas, Syrie",
    summary:
      "En 1154, Nur al-Din, maître d’Alep, prend Damas presque sans combat et unifie la Syrie musulmane pour la première fois depuis l’arrivée des croisés. Pieux et austère, il bâtit madrasas, hôpitaux et fortifications, et fait de la reconquête de Jérusalem le cœur de son règne.",
    context:
      "Il mobilise prédicateurs, poètes et inscriptions pour raviver l’idée du djihad contre les Francs, et fait sculpter à Alep une chaire somptueuse destinée à la mosquée al-Aqsa, à installer une fois Jérusalem reprise. Sa rivalité avec le roi Amaury de Jérusalem se mue bientôt en course pour l’Égypte.",
    whyHere:
      "Alep et Damas étaient les deux grandes villes de la Syrie intérieure, reliées par la route qui suit la vallée de l’Oronte et la lisière du désert. Les tenir toutes deux donnait à Nur al-Din un front unique face aux États latins sur toute leur frontière orientale.",
  },
};
