import type { FigureTranslation } from "@/i18n/contentTypes";

export const figures: Readonly<Record<string, FigureTranslation>> = {
  "napo-fig-napoleon": {
    name: "Napoléon Bonaparte",
    role: "Général corse devenu empereur des Français",
    places: [
      { place: "Ajaccio, Corse", note: "Naît dans une famille de petite noblesse corse, un an après la cession de l’île à la France par Gênes." },
      { place: "Brienne-le-Château", note: "Entre à l’école militaire royale de Brienne, où le jeune Corse fait figure d’étranger parmi les nobles français." },
      { place: "Toulon", note: "Jeune officier d’artillerie, il contribue à reprendre le port aux Britanniques et aux royalistes, et devient général." },
      { place: "Rivoli, près de Vérone", note: "Écrase la dernière armée autrichienne envoyée au secours de Mantoue et scelle la conquête de l’Italie du Nord." },
      { place: "Le Caire", note: "Gouverne l’Égypte avec une armée et une équipe de savants, coupé de la France après la victoire de Nelson." },
      { place: "Notre-Dame de Paris", note: "Se couronne lui-même empereur des Français, le 2 décembre, en présence du pape Pie VII." },
      { place: "Moscou", note: "Attend cinq semaines, dans la ville incendiée, une offre de paix du tsar qui ne vient jamais." },
      { place: "Longwood, Sainte-Hélène", note: "Meurt en exil le 5 mai 1821, après avoir dicté les souvenirs qui ont façonné sa légende." },
    ],
  },
  "napo-fig-robespierre": {
    name: "Maximilien de Robespierre",
    role: "Avocat jacobin à la tête du gouvernement révolutionnaire",
    places: [
      { place: "Arras", note: "Né dans la capitale de l’Artois, il devient un avocat connu pour défendre les causes des humbles." },
      { place: "Versailles", note: "Élu aux états généraux par le tiers état de l’Artois, il plaide pour le droit de vote de tous les hommes." },
      { place: "Palais des Tuileries, Paris", note: "Entre au Comité de salut public en juillet 1793 et devient la voix du gouvernement révolutionnaire." },
      { place: "Place de la Révolution, Paris", note: "Renversé le 9 Thermidor, il est guillotiné le lendemain avec vingt et un de ses partisans." },
    ],
  },
  "napo-fig-louis": {
    role: "Dernier roi de la France d’Ancien Régime",
    places: [
      { place: "Versailles", note: "Né à Versailles, il devient l’héritier du trône après la mort prématurée de son père et de son frère aîné." },
      { place: "Reims", note: "Sacré dans la cathédrale de Reims en juin 1775, un an après avoir succédé à son grand-père Louis XV." },
      { place: "Versailles", note: "Convoque les états généraux pour sauver les finances royales et perd en quelques semaines le contrôle des événements." },
      { place: "Varennes-en-Argonne", note: "Arrêté avec sa famille lors de leur fuite secrète vers la frontière de l’Est." },
      { place: "Place de la Révolution, Paris", note: "Jugé par la Convention sous le nom de Louis Capet, il est guillotiné le 21 janvier." },
    ],
  },
  "napo-fig-toussaint": {
    role: "Ancien esclave, chef de la Révolution haïtienne",
    places: [
      { place: "Habitation Bréda, Haut-du-Cap", note: "Né esclave sur une plantation proche du Cap-Français, il obtient sa liberté dans les années 1770." },
      { place: "Plaine du Nord, Saint-Domingue", note: "Rejoint la grande insurrection des esclaves et s’y impose vite comme l’un des chefs les plus capables." },
      { place: "Gonaïves", note: "Se rallie à la République française après l’abolition de l’esclavage et retourne son armée contre Espagnols et Britanniques." },
      { place: "Santo Domingo", note: "S’empare de la partie espagnole d’Hispaniola et promulgue une constitution qui le nomme gouverneur à vie." },
      { place: "Près des Gonaïves", note: "Attiré dans un guet-apens par un général français, il est arrêté et embarqué pour la France." },
      { place: "Fort de Joux, Jura", note: "Meurt dans un cachot glacial de montagne le 7 avril 1803, quelques mois avant l’indépendance d’Haïti." },
    ],
  },
  "napo-fig-wellington": {
    name: "Duc de Wellington",
    role: "Général britannique, vainqueur de Napoléon à Waterloo",
    places: [
      { place: "Dublin", note: "Naît Arthur Wesley dans une famille aristocratique anglo-irlandaise, la même année que Napoléon." },
      { place: "Assaye, Inde", note: "Remporte sa première grande victoire sur les armées marathes, une bataille qu’il compta longtemps parmi ses plus rudes." },
      { place: "Torres Vedras", note: "Abrite son armée derrière des lignes fortifiées au nord de Lisbonne, que les Français ne parviennent pas à forcer." },
      { place: "Vitoria", note: "Met en déroute l’armée du roi Joseph et s’ouvre la route de la France par les Pyrénées." },
      { place: "Vienne", note: "Remplace Castlereagh comme représentant britannique au congrès, peu avant l’annonce de l’évasion de Napoléon." },
      { place: "Waterloo", note: "Tient la crête du Mont-Saint-Jean jusqu’à l’arrivée de Blücher, lors de la dernière bataille des guerres napoléoniennes." },
      { place: "Château de Walmer, Kent", note: "Meurt à Walmer au terme d’une longue carrière politique, deux fois Premier ministre." },
    ],
  },
  "napo-fig-kutuzov": {
    name: "Mikhaïl Koutouzov",
    role: "Maréchal russe qui usa la Grande Armée",
    places: [
      { place: "Saint-Pétersbourg", note: "Né dans une famille noble de la capitale impériale, il est formé comme ingénieur et officier d’artillerie." },
      { place: "Près d’Alouchta, Crimée", note: "Une balle lui traverse la tête face aux Ottomans ; il survit, mais perdra plus tard l’usage de son œil droit." },
      { place: "Austerlitz", note: "Commande l’armée alliée tandis que le tsar Alexandre passe outre à sa prudence, et partage la défaite." },
      { place: "Roussé, sur le Danube", note: "Piège et bat une armée ottomane sur le Danube, gagnant la Bessarabie à la Russie lors de la paix de 1812." },
      { place: "Borodino", note: "Tient tête à Napoléon dans une bataille sanglante, puis abandonne Moscou pour sauver son armée." },
      { place: "Bunzlau, Silésie", note: "Meurt de maladie en avril 1813, alors que l’armée russe s’avance en Allemagne." },
    ],
  },
};
