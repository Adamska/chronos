import type { HistoricalEvent } from "@/types/chronicle";

export const lateEvents: readonly HistoricalEvent[] = [
  {
    id: "napo-tilsit",
    title: "Jena and the Treaties of Tilsit",
    year: 1807,
    place: "Tilsit, on the Niemen",
    coordinates: [21.87, 55.08],
    layer: "borders",
    significance: 4,
    wikipediaSlug: "Treaties_of_Tilsit",
    summary:
      "After shattering the Prussian army at Jena and Auerstedt in October 1806 and beating the Russians at Friedland in June 1807, Napoleon met Tsar Alexander I on a raft moored in the Niemen at Tilsit. The July treaties halved Prussia, created the Kingdom of Westphalia and the Duchy of Warsaw, and made Russia a partner in the blockade of Britain.",
    context:
      "Prussia had gone to war almost alone in 1806 and collapsed within weeks; Napoleon entered Berlin on 27 October. The winter battle of Eylau in February 1807 was a bloody draw before Friedland forced the tsar to negotiate. Tilsit marked the summit of Napoleon's power on the continent, though the alliance with Russia rested on little real trust.",
    whyHere:
      "The Niemen marked the edge of the Russian Empire, so a raft in midstream let the two emperors meet as equals on neutral ground. Tilsit stood where the road from Königsberg crossed the river, the gateway between the Baltic plains of East Prussia and Russian Lithuania.",
    keyFigures: ["Napoleon Bonaparte", "Alexander I of Russia", "Frederick William III of Prussia", "Louise of Mecklenburg-Strelitz"],
  },
  {
    id: "napo-peninsular",
    title: "The Peninsular War",
    year: 1808,
    endYear: 1814,
    place: "Madrid",
    coordinates: [-3.7, 40.42],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Peninsular_War",
    summary:
      "In 1808 Napoleon forced the Spanish Bourbons to abdicate and made his brother Joseph king of Spain. The Madrid uprising of 2 May, brutally crushed, opened six years of war in which Spanish armies and guerrillas, the Portuguese and a British force under Arthur Wellesley, later Duke of Wellington, tied down hundreds of thousands of French troops.",
    context:
      "The war grew out of an attempt to close Portugal, Britain's oldest ally, to British trade. The surrender of a French army at Bailén in July 1808 shattered the myth of French invincibility, and the 'Spanish ulcer' drained the Empire of men and money. In Spanish America the collapse of royal authority opened the way to the wars of independence.",
    whyHere:
      "The Iberian plateau is high, dry and cut by sierras, so large armies struggled to live off the land while guerrillas knew every pass. Wellington held Portugal behind the fortified Lines of Torres Vedras north of Lisbon and was supplied by the Royal Navy, while the French depended on long, exposed roads across the Pyrenees.",
    keyFigures: ["Arthur Wellesley, 1st Duke of Wellington", "Joseph Bonaparte", "Ferdinand VII of Spain"],
  },
  {
    id: "napo-wagram",
    title: "Battle of Wagram",
    year: 1809,
    place: "Deutsch-Wagram, Marchfeld",
    coordinates: [16.56, 48.3],
    layer: "conflict",
    significance: 3,
    wikipediaSlug: "Battle_of_Wagram",
    summary:
      "On 5 and 6 July 1809 Napoleon defeated Archduke Charles's Austrian army on the Marchfeld plain north-east of Vienna, in one of the largest battles yet fought, with some 300,000 men engaged. The Treaty of Schönbrunn took more land from Austria, including its Adriatic coast, and in 1810 Napoleon married the archduchess Marie Louise.",
    context:
      "Austria had gone back to war in 1809, hoping to exploit Napoleon's troubles in Spain and to spark a German national rising. In May the French had been thrown back at Aspern-Essling, Napoleon's first major personal defeat. Wagram restored his supremacy at a heavy cost in men.",
    whyHere:
      "The Danube, broad and fast below Vienna, separated the French in the city from the Austrians on the open plain to the north. Napoleon turned the large wooded island of Lobau into a fortified base and bridged the last channel at night, crossing where the river splits into several arms.",
    keyFigures: ["Napoleon Bonaparte", "Archduke Charles", "Marie Louise"],
  },
  {
    id: "napo-russia",
    title: "The Russian Campaign",
    year: 1812,
    place: "Borodino",
    coordinates: [35.82, 55.52],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "French_invasion_of_Russia",
    summary:
      "In June 1812 Napoleon crossed the Niemen with some 450,000 front-line troops, the largest army Europe had ever seen. After the slaughter of Borodino on 7 September he entered Moscow, which burned around him, and in October began a retreat that ended in catastrophe at the crossing of the Berezina in late November.",
    context:
      "The Russian armies fell back, avoiding battle and stripping the land, until Kutuzov made a stand at Borodino, about 120 kilometres west of Moscow. Alexander I refused to negotiate even after the city fell. Hunger, cold, typhus and Cossack raids destroyed the Grande Armée, and only a fraction of the men who had entered Russia recrossed the Niemen in December.",
    whyHere:
      "Borodino lay on the Smolensk road, the main route to Moscow, where streams and low hills gave Kutuzov a defensive line across the invader's path. The sheer distance, some 900 kilometres of poor roads from the Niemen to Moscow, made it impossible to feed such a host, and the early winter turned the retreat into a disaster.",
    keyFigures: ["Napoleon Bonaparte", "Mikhail Kutuzov", "Alexander I of Russia", "Michel Ney"],
    schematic: {
      kind: "causal",
      steps: ["Russia leaves the blockade", "Grande Armée crosses the Niemen", "Moscow burns, no peace", "Winter retreat destroys the army"],
    },
  },
  {
    id: "napo-leipzig",
    title: "Battle of Leipzig",
    year: 1813,
    place: "Leipzig, Saxony",
    coordinates: [12.42, 51.31],
    layer: "conflict",
    significance: 4,
    wikipediaSlug: "Battle_of_Leipzig",
    summary:
      "From 16 to 19 October 1813 the armies of Russia, Prussia, Austria and Sweden defeated Napoleon at Leipzig in the Battle of the Nations, with some 500,000 soldiers engaged, the largest battle in Europe before the First World War. The French fell back to the Rhine, and Napoleon's German empire collapsed.",
    context:
      "After the Russian disaster, Prussia rose against France in early 1813, and Austria joined the coalition in August. Napoleon raised a new army of young conscripts and won at Lützen, Bautzen and Dresden but could not break the alliance. In 1814 the allies invaded France and took Paris; Napoleon abdicated at Fontainebleau in April and was sent to rule the small island of Elba.",
    whyHere:
      "Leipzig, a trading city at the meeting of roads across the Saxon plain, was the hub of Napoleon's communications with France. Holding it let him strike at any of the converging allied armies, but the open ground also let them close in from three sides, and when a bridge over the Elster was blown too early, thousands of French troops were trapped.",
    keyFigures: ["Napoleon Bonaparte", "Gebhard Leberecht von Blücher", "Karl Philipp, Prince of Schwarzenberg", "Jean-Baptiste Bernadotte"],
  },
  {
    id: "napo-vienna",
    title: "Congress of Vienna",
    year: 1814,
    endYear: 1815,
    place: "Vienna",
    coordinates: [16.37, 48.21],
    layer: "borders",
    significance: 5,
    wikipediaSlug: "Congress_of_Vienna",
    summary:
      "From September 1814 to June 1815 the victorious powers redrew the map of Europe at Vienna. Russia gained most of Poland, Prussia took much of Saxony and the Rhineland, Austria recovered northern Italy, Belgium and the Netherlands were joined in one kingdom, and a German Confederation of 39 states replaced the Holy Roman Empire.",
    context:
      "Metternich for Austria, Castlereagh for Britain, Tsar Alexander I, Hardenberg for Prussia and Talleyrand for France bargained over a balance of power that would stop any single state from dominating the continent. The settlement ignored many national hopes, but no general European war broke out again until 1914. The congress also condemned the Atlantic slave trade in principle.",
    whyHere:
      "Vienna, the Habsburg capital on the Danube, stood where German, Italian, Slavic and Hungarian Europe met, and Austria had the most to lose from any reshuffling of central Europe. Hosting the congress let Metternich steer the agenda while the courts of Europe were entertained in its palaces and ballrooms.",
    keyFigures: ["Klemens von Metternich", "Viscount Castlereagh", "Charles Maurice de Talleyrand", "Alexander I of Russia"],
    schematic: {
      kind: "causal",
      steps: ["Napoleon defeated and exiled", "Great powers meet in Vienna", "Buffer states ring France", "A century without general war"],
    },
  },
  {
    id: "napo-waterloo",
    title: "The Hundred Days and Waterloo",
    year: 1815,
    place: "Waterloo, south of Brussels",
    coordinates: [4.41, 50.68],
    layer: "conflict",
    significance: 5,
    wikipediaSlug: "Battle_of_Waterloo",
    summary:
      "Napoleon escaped from Elba, landed at Golfe-Juan on 1 March 1815 and reached Paris without a shot fired, as the troops sent to stop him went over to his side. On 18 June, south of Brussels, Wellington's army held its ridge all afternoon until Blücher's Prussians fell on the French flank, and Napoleon's last army broke.",
    context:
      "King Louis XVIII fled to Ghent, and the powers gathered at Vienna declared Napoleon an outlaw. He struck into Belgium to beat the British and Prussian armies before the Austrians and Russians could arrive, defeating the Prussians at Ligny on 16 June. Four days after Waterloo he abdicated for the second time.",
    whyHere:
      "The Brussels road crossed a low ridge at Mont-Saint-Jean, whose reverse slope sheltered Wellington's infantry from French guns, while the walled farms of Hougoumont and La Haye Sainte served as forts in front of it. Heavy overnight rain softened the ground and delayed the French attack until late morning, giving the Prussians time to march in from Wavre.",
    keyFigures: ["Napoleon Bonaparte", "Arthur Wellesley, 1st Duke of Wellington", "Gebhard Leberecht von Blücher", "Michel Ney"],
    primarySource: {
      excerpt: "It has been a damned nice thing, the nearest run thing you ever saw in your life.",
      attribution: "The Duke of Wellington to Thomas Creevey, Brussels, 19 June 1815, in The Creevey Papers",
    },
  },
  {
    id: "napo-saint-helena",
    title: "Death on Saint Helena",
    year: 1821,
    place: "Longwood, Saint Helena",
    coordinates: [-5.68, -15.96],
    layer: "science",
    significance: 3,
    wikipediaSlug: "Longwood_House",
    summary:
      "Surrendering to the British in July 1815, Napoleon was exiled to Saint Helena in the South Atlantic, where he lived under guard at Longwood House. He died there on 5 May 1821, aged 51, most probably of stomach cancer.",
    context:
      "In exile he dictated his memories to companions such as Las Cases, whose Memorial of Saint Helena, published in 1823, helped build the legend of Napoleon as heir and defender of the Revolution. His remains were brought back to Paris in 1840 and laid beneath the dome of the Invalides.",
    whyHere:
      "Saint Helena lies some 1,900 kilometres off the coast of Africa, one of the most isolated inhabited islands on Earth, and served as a port of call for East India Company ships. After the escape from Elba the British chose it because no rescue could approach unseen, and they garrisoned both the island and distant Ascension.",
    keyFigures: ["Napoleon Bonaparte", "Hudson Lowe", "Emmanuel de Las Cases"],
  },
];
