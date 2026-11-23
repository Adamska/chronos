import type { EventTranslation } from "@/i18n/contentTypes";

export const events: Readonly<Record<string, EventTranslation>> = {
  "meso-uruk": {
    title: "Uruk, la première ville",
    place: "Uruk, sud de la Mésopotamie",
    summary:
      "Entre 3500 et 3100 av. J.-C. environ, Uruk passa du gros village à ce que beaucoup d’historiens tiennent pour la première vraie ville, peuplée de peut-être 25\u00a0000 à 40\u00a0000 habitants. De grands temples s’élevèrent dans les quartiers sacrés de l’Eanna et d’Anu, servis par des potiers, des tisserands, des métallurgistes et des scribes à plein temps.",
    context:
      "Des villages d’agriculteurs parsemaient la plaine du Sud depuis l’époque d’Obeid, mais rien de cette ampleur n’avait encore existé nulle part. Les maisonnées des temples d’Uruk collectaient l’orge, la laine et le travail, redistribuaient des rations et dirigeaient des ateliers\u00a0: elles inventaient la bureaucratie que les États suivants allaient copier.",
    whyHere:
      "Il ne pleut pas assez dans le sud de l’Irak pour cultiver, mais l’Euphrate étalait un limon fertile sur une plaine si plate que de courts canaux suffisaient à mener l’eau aux champs. L’orge irriguée donnait des rendements sans commune mesure avec l’agriculture pluviale, et ce surplus nourrissait des gens qui n’avaient plus à cultiver.",
    schematic: {
      steps: [
        "Les crues étalent le limon",
        "Des canaux irriguent l’orge",
        "Le surplus nourrit des artisans",
        "Les temples organisent le travail",
        "La première ville surgit",
      ],
    },
  },
  "meso-uruk-expansion": {
    title: "Les comptoirs d’Uruk en amont",
    place: "Habuba Kabira, moyen Euphrate",
    summary:
      "Vers 3400 av. J.-C., des gens venus du sud de la Mésopotamie fondèrent des villes planifiées à des centaines de kilomètres en amont, comme Habuba Kabira en Syrie, avec des maisons, des temples et une poterie dans le style d’Uruk. D’autres comptoirs apparurent en Anatolie et sur le plateau iranien.",
    context:
      "Les archéologues parlent d’expansion urukéenne et débattent encore\u00a0: colonisation, réseau commercial ou réfugiés fuyant le Sud\u00a0? Vers 3100 av. J.-C., ces comptoirs furent abandonnés et le Nord revint à ses propres traditions.",
    whyHere:
      "La plaine du Sud avait de l’orge, de la laine et des roseaux, mais presque pas de bois, de pierre ni de métal. Habuba Kabira se trouvait au grand coude de l’Euphrate, là où les routes venues du Taurus et de la Méditerranée rejoignaient le fleuve qui pouvait porter les marchandises jusqu’à Sumer.",
  },
  "meso-cuneiform": {
    title: "L’invention de l’écriture",
    place: "Quartier de l’Eanna, Uruk",
    summary:
      "Vers 3200 av. J.-C., les scribes des temples d’Uruk se mirent à imprimer des signes dans des tablettes d’argile fraîche à l’aide d’un roseau. Les plus anciennes tablettes comptent surtout des rations, du bétail et des terres, mais en quelques siècles ces signes devinrent le cunéiforme, en forme de clous, capable de noter la langue elle-même.",
    context:
      "L’écriture est née de la comptabilité\u00a0: jetons et sceaux-cylindres servaient depuis longtemps à suivre les biens, et une grande économie de temple exigeait davantage. Le cunéiforme fut ensuite adapté à l’akkadien, à l’élamite, au hittite et à d’autres langues, et resta en usage environ 3\u00a0000 ans\u00a0: les dernières tablettes connues datent du Ier siècle de notre ère.",
    whyHere:
      "L’argile était partout dans la plaine alluviale, gratuite et facile à modeler, et les roseaux des marais faisaient d’excellents calames. Séchées ou cuites, les tablettes ont résisté aux incendies et aux inondations\u00a0: c’est pourquoi des centaines de milliers d’entre elles nous sont parvenues.",
    schematic: {
      steps: [
        "Les temples comptent les biens",
        "Jetons et sceaux",
        "Des dessins sur l’argile",
        "Les signes notent des sons",
        "Lettres, lois et littérature",
      ],
    },
  },
  "meso-royal-tombs": {
    title: "Les tombes royales d’Ur",
    place: "Ur, sud de la Mésopotamie",
    summary:
      "Vers 2600 av. J.-C., les souverains d’Ur furent enterrés avec des coiffes d’or, des lyres, des armes et des dizaines de serviteurs morts avec eux. Fouillées par Leonard Woolley dans les années 1920, ces tombes livrèrent l’Étendard d’Ur et les bijoux de la reine Puabi.",
    context:
      "Sumer formait alors une mosaïque de cités-États rivales, chacune avec son dieu, son temple et son souverain. Leur richesse se lit dans les matériaux\u00a0: lapis-lazuli du Badakhshan, en Afghanistan, perles de cornaline de la vallée de l’Indus, or et argent d’Iran et d’Anatolie.",
    whyHere:
      "Ur se trouvait près du fond du golfe Persique, là où l’Euphrate rejoignait les routes maritimes de l’Orient. C’était le port naturel de Sumer\u00a0: les produits de luxe venus de milliers de kilomètres y arrivaient en premier.",
  },
  "meso-stele-vultures": {
    title: "Lagash contre Umma",
    place: "Girsu, État de Lagash",
    summary:
      "Vers 2450 av. J.-C., le roi Eannatum de Lagash vainquit sa voisine Umma dans une guerre pour un district frontalier fertile et célébra sa victoire sur la stèle des Vautours. On y voit ses soldats serrés en phalange derrière boucliers et lances, et des vautours emportant les morts.",
    context:
      "Le conflit entre Lagash et Umma dura des générations\u00a0: c’est la première querelle de frontière que l’on puisse suivre dans les textes. Un siècle plus tard, Lugal-zagesi d’Umma conquit Lagash et une grande partie de Sumer, avant de tomber à son tour face à Sargon.",
    whyHere:
      "Dans un pays sans pluie, un champ ne valait rien si aucun canal ne l’atteignait. Le Gu-edena disputé s’étendait entre les deux cités et dépendait des mêmes canaux\u00a0: chaque querelle de terres était aussi une querelle d’eau.",
  },
  "meso-sargon": {
    title: "Sargon fonde le premier empire",
    place: "Akkad (site inconnu), Mésopotamie centrale",
    summary:
      "Vers 2334 av. J.-C., Sargon, ancien échanson du roi de Kish, s’empara du pouvoir et conquit toutes les cités de Sumer. Ses armées atteignirent ensuite la côte méditerranéenne et les montagnes d’Élam\u00a0: pour la première fois, de nombreux peuples étaient réunis sous un seul souverain.",
    context:
      "Sargon régnait depuis une nouvelle capitale, Akkad, dont on n’a jamais retrouvé le site. Sa langue sémitique, l’akkadien, devint celle du gouvernement, et son petit-fils Naram-Sin se proclama roi des quatre régions du monde. L’empire se disloqua vers 2154 av. J.-C., entre révoltes, invasions et sécheresse.",
    whyHere:
      "Akkad se trouvait au nord de la plaine alluviale, là où le Tigre et l’Euphrate se rapprochent le plus. De là, un souverain contrôlait les deux fleuves, les canaux qui les reliaient, et les routes remontant l’Euphrate vers la Syrie et la Diyala vers l’Iran.",
  },
  "meso-dilmun": {
    title: "Des navires de Dilmoun et de Meluhha",
    place: "Dilmoun (Qal’at al-Bahreïn)",
    summary:
      "Sargon se vantait d’avoir fait amarrer au quai d’Akkad des navires de Dilmoun, de Magan et de Meluhha. Dilmoun, c’était Bahreïn\u00a0; Magan, l’Oman riche en cuivre\u00a0; Meluhha, très probablement la civilisation de l’Indus, dont les sceaux et les perles de cornaline se retrouvent dans les villes mésopotamiennes.",
    context:
      "Pendant plusieurs siècles, le Golfe fut une route maritime animée reliant deux des plus anciennes civilisations urbaines du monde. Dilmoun s’enrichit comme intermédiaire, et les Sumériens l’imaginaient en terre pure où le héros du Déluge vivait éternellement.",
    whyHere:
      "Bahreïn est une île de sources d’eau douce au milieu d’une mer salée, la seule escale sûre à mi-chemin du Golfe. Son port convenait aux navires qui longeaient les côtes entre les embouchures de Sumer, les montagnes à cuivre d’Oman et le delta de l’Indus.",
    schematic: {
      westLabel: "Mésopotamie",
      eastLabel: "Dilmoun, Magan et Meluhha",
      eastbound: ["étoffes de laine", "orge", "huile de sésame", "argent"],
      westbound: ["cuivre", "cornaline", "ivoire", "bois", "perles"],
    },
  },
  "meso-enheduanna": {
    title: "Enheduanna, premier auteur connu",
    place: "Temple de Nanna, Ur",
    summary:
      "Sargon fit de sa fille Enheduanna la grande prêtresse du dieu Lune Nanna à Ur. On lui attribue des hymnes à la déesse Inanna et un recueil d’hymnes aux temples, ce qui fait d’elle le plus ancien auteur de l’histoire connu par son nom.",
    context:
      "Placer une fille du roi à la tête du temple le plus prestigieux du Sud était un acte politique qui liait les cités sumériennes à la dynastie d’Akkad. Ses poèmes furent recopiés par les scribes pendant des siècles, même si les spécialistes débattent de la part qu’elle en a réellement écrite.",
    whyHere:
      "Ur était l’une des cités les plus anciennes et les plus saintes de Sumer, la demeure du dieu Lune. Tenir son temple, c’était gagner le Sud conquis, loin d’Akkad, dans le Nord.",
  },
  "meso-ur-iii": {
    title: "Ur-Nammu et la ziggurat d’Ur",
    place: "Ur, sud de la Mésopotamie",
    summary:
      "Vers 2112 av. J.-C., Ur-Nammu fonda la troisième dynastie d’Ur et entreprit une grande tour à degrés, la ziggurat d’Ur, achevée par son fils Shulgi. Ses lois, le code d’Ur-Nammu, forment le plus ancien recueil juridique conservé.",
    context:
      "L’État d’Ur III fut l’un des plus bureaucratiques de l’Antiquité\u00a0: il a laissé des dizaines de milliers de tablettes qui comptent moutons, travailleurs et rations. Il s’effondra vers 2004 av. J.-C., quand les Élamites mirent Ur à sac et emmenèrent le roi Ibbi-Sin vers l’est.",
    whyHere:
      "Dans une plaine sans collines ni pierre, la brique crue était le seul matériau pour bâtir en hauteur. La ziggurat hissait le temple du dieu Lune bien au-dessus de l’horizon plat, visible de tous les champs et canaux alentour.",
  },
  "meso-gilgamesh": {
    title: "L’Épopée de Gilgamesh",
    place: "Uruk, sud de la Mésopotamie",
    summary:
      "Gilgamesh fut probablement un véritable roi d’Uruk vers 2700 av. J.-C. Vers 2100 av. J.-C., à la cour des rois d’Ur, des poèmes sumériens contaient ses aventures\u00a0; ils furent plus tard fondus dans l’épopée akkadienne d’un roi qui cherche l’immortalité et échoue.",
    context:
      "La version la plus connue, en douze tablettes, fut mise en forme vers 1200 av. J.-C. et retrouvée dans les ruines de Ninive dans les années 1850. Son récit du Déluge, identifié par George Smith en 1872, rappelle de très près l’histoire biblique de Noé.",
    whyHere:
      "L’épopée s’ouvre et se referme sur les remparts d’Uruk, que la tradition attribuait à Gilgamesh. Son grand déluge reflète un pays de deux fleuves imprévisibles, capables de noyer des plaines entières, et sa quête des cèdres rappelle le bois que Sumer devait aller chercher dans de lointaines montagnes.",
  },
  "meso-kanesh": {
    title: "Les marchands assyriens à Kanesh",
    place: "Kanesh (Kültepe), Anatolie centrale",
    summary:
      "Dès 1950 av. J.-C. environ, des familles de marchands de la cité d’Assur tinrent un quartier commercial aux portes de Kanesh, en Anatolie. Leurs 23\u00a0000 lettres et contrats conservés décrivent des caravanes d’ânes portant l’étain et les étoffes de laine vers l’ouest, et rapportant l’argent et l’or.",
    context:
      "Assur n’était alors qu’une petite cité-État gouvernée par une assemblée de marchands et d’anciens. À Assur, épouses et sœurs tissaient les étoffes et géraient les affaires par lettre pendant que les hommes voyageaient\u00a0: c’est le réseau commercial le mieux documenté du monde antique.",
    whyHere:
      "L’Anatolie avait de l’argent mais peu d’étain, le métal qui change le cuivre en bronze. Assur, sur le Tigre, se trouvait au carrefour des routes de l’étain venues d’Iran et des cols qui franchissent le Taurus vers le plateau anatolien.",
    schematic: {
      westLabel: "Anatolie (Kanesh)",
      eastLabel: "Assur",
      eastbound: ["argent", "or"],
      westbound: ["étain", "étoffes de laine", "ânes"],
    },
  },
};
