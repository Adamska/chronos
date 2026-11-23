import type { Trail } from "@/types/atlas";
import { story } from "./stories/equianoJourney";

export const equianoJourneyTrail: Trail = {
  id: "journey-equiano",
  kind: "journey",
  title: "Olaudah Equiano: From Enslavement to Abolition",
  subtitle: "A life carried across the Atlantic world by the slave trade, and turned against it",
  summary:
    "By his own account, Olaudah Equiano was kidnapped as a child in the Igbo country, survived the Middle Passage and spent a decade enslaved at sea and in the Caribbean before buying his freedom. As Gustavus Vassa he sailed to the Arctic, joined the campaign against the slave trade and in 1789 published The Interesting Narrative, one of the most influential testimonies of the abolition movement.",
  accent: "#9a8a7a",
  keywords: [
    "olaudah equiano",
    "gustavus vassa",
    "interesting narrative",
    "atlantic slave trade",
    "middle passage",
    "abolition",
    "igbo",
    "bight of biafra",
    "barbados",
    "royal navy",
    "montserrat",
    "phipps expedition",
    "zong massacre",
    "sierra leone",
    "granville sharp",
    "sons of africa",
  ],
  stops: [
    {
      id: "equiano-essaka",
      year: 1756,
      place: "Essaka, Igbo country, hinterland of the Bight of Biafra (approximate)",
      coordinates: [6.95, 5.9],
      title: "Kidnapped from Essaka",
      summary:
        "Equiano writes that at about eleven he and his sister were seized from their home by raiders and sold from owner to owner toward the coast over several months. The historian Vincent Carretta has found baptismal and naval records naming South Carolina as his birthplace, so whether his African childhood is memory or composite remains debated.",
      whyHere:
        "The densely populated Igbo uplands lay behind the Niger Delta's maze of creeks, which carried captives down to coastal ports such as Bonny. In the eighteenth century the Bight of Biafra became one of the largest sources of enslaved people shipped to the Americas.",
      wikipediaSlug: "Olaudah_Equiano",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Olaudah Equiano", "Vincent Carretta"],
      primarySource: {
        excerpt:
          "in one of the most remote and fertile of which, called Eboe, I was born, in the year 1745, situated in a charming fruitful vale, named Essaka.",
        attribution: "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano (1789), ch. 1",
      },
    },
    {
      id: "equiano-barbados",
      year: 1756,
      place: "Bridgetown, Barbados",
      coordinates: [-59.62, 13.1],
      title: "The Middle Passage to Barbados",
      summary:
        "Equiano describes the terror of the slave ship, the stench and crowding below deck, and captives who chose to leap into the sea rather than live in bondage. At Bridgetown the survivors were sold in a scramble that separated families and friends.",
      whyHere:
        "Barbados is the easternmost island of the Caribbean, so ships running west before the northeast trade winds and the North Equatorial Current from Africa reached it first. Its sugar plantations made it a principal slave market of the British Caribbean.",
      wikipediaSlug: "Atlantic_slave_trade",
      layer: "trade",
      arrivedBy: "trade",
      primarySource: {
        excerpt:
          "The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us.",
        attribution: "Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano (1789), ch. 2",
      },
    },
    {
      id: "equiano-virginia",
      year: 1756,
      place: "A Virginia plantation (location unrecorded)",
      coordinates: [-76.7, 37.3],
      title: "Sold in Virginia and Renamed",
      summary:
        "Left unsold in Barbados, he was shipped on to Virginia and put to work on a plantation, isolated from anyone who spoke his language. The naval officer Michael Henry Pascal bought him and renamed him Gustavus Vassa, a name he resisted but later used all his life.",
      whyHere:
        "The tidal rivers of the Chesapeake let ocean-going ships sail right up to plantation wharves to load tobacco and unload captives. Virginia's tobacco economy depended on enslaved labour bought from Caribbean and African traders.",
      wikipediaSlug: "Colony_of_Virginia",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Michael Henry Pascal"],
    },
    {
      id: "equiano-louisbourg",
      year: 1758,
      place: "Louisbourg, Cape Breton Island",
      coordinates: [-59.99, 45.89],
      title: "With the Fleet at Louisbourg",
      summary:
        "Still enslaved, Equiano served with Pascal aboard Admiral Boscawen's flagship Namur at the British siege of Louisbourg during the Seven Years' War. He went on to see action at the Battle of Lagos in 1759.",
      whyHere:
        "Louisbourg guarded the entrance to the Gulf of St. Lawrence, the sea road to Quebec and the heart of New France. Its ice-free harbour made it the key to French Canada, so the British had to take it first.",
      wikipediaSlug: "Siege_of_Louisbourg_(1758)",
      layer: "conflict",
      arrivedBy: "military",
      keyFigures: ["Edward Boscawen", "Michael Henry Pascal"],
    },
    {
      id: "equiano-deptford",
      year: 1762,
      place: "Deptford, on the Thames",
      coordinates: [-0.03, 51.48],
      title: "Betrayed at Deptford",
      summary:
        "Baptized in London and expecting his freedom after years of naval service, Equiano was instead sold by Pascal to a ship's captain bound for the West Indies. He was hurried away without the wages and prize money he believed he had earned.",
      whyHere:
        "Deptford's royal dockyard on the Thames was where Royal Navy ships were paid off and refitted at the end of a commission. West Indiamen loaded on the same river, so Pascal could hand him straight to a captain bound for the Caribbean.",
      wikipediaSlug: "Deptford_Dockyard",
      layer: "trade",
      arrivedBy: "military",
      keyFigures: ["Michael Henry Pascal"],
    },
    {
      id: "equiano-montserrat",
      year: 1766,
      place: "Plymouth, Montserrat",
      coordinates: [-62.22, 16.71],
      title: "Buying Freedom in Montserrat",
      summary:
        "Bought by the Quaker merchant Robert King, Equiano worked as a clerk and sailor on trading voyages and saved profits from small ventures of his own. In 1766 he paid King forty pounds for his freedom, while witnessing the brutality inflicted on enslaved people across the islands.",
      whyHere:
        "Montserrat sat in the Leeward Islands chain, a short sail from Antigua, St. Kitts and Guadeloupe. Sloops shuttling sugar, rum and provisions among the islands and to Georgia gave an enslaved sailor a chance to trade on his own account.",
      wikipediaSlug: "Montserrat",
      layer: "trade",
      arrivedBy: "trade",
      keyFigures: ["Robert King"],
    },
    {
      id: "equiano-arctic",
      year: 1773,
      place: "Ice edge north of Svalbard",
      coordinates: [20.5, 80.6],
      title: "Toward the North Pole with Phipps",
      summary:
        "As a free man, Equiano sailed with the physician Charles Irving aboard HMS Racehorse on Constantine Phipps's expedition to find a passage over the North Pole. The ships were trapped in the ice and nearly abandoned before winds opened a way out.",
      whyHere:
        "The warm water of the North Atlantic Drift keeps the seas west of Svalbard open further north than anywhere else on earth. That made the waters north of Spitsbergen the most promising route to test whether open sea lay around the Pole.",
      wikipediaSlug: "Constantine_Phipps,_2nd_Baron_Mulgrave",
      layer: "science",
      arrivedBy: "exploration",
      keyFigures: ["Constantine Phipps", "Charles Irving", "Horatio Nelson"],
    },
    {
      id: "equiano-zong",
      year: 1783,
      place: "London",
      coordinates: [-0.09, 51.52],
      title: "Raising the Alarm over the Zong",
      summary:
        "Equiano brought news of the Zong massacre, in which the crew of a slave ship had thrown more than 130 Africans overboard and then claimed for them as lost cargo, to the abolitionist Granville Sharp. The case became a rallying point for the campaign against the slave trade.",
      whyHere:
        "London was the centre of Britain's marine insurance market and its highest courts, so a dispute over a slave ship from Liverpool was argued there. Its Black community and abolitionist networks turned a legal claim into a public scandal.",
      wikipediaSlug: "Zong_massacre",
      layer: "conflict",
      arrivedBy: "migration",
      keyFigures: ["Granville Sharp"],
    },
    {
      id: "equiano-plymouth",
      year: 1787,
      place: "Plymouth, England",
      coordinates: [-4.14, 50.37],
      title: "The Sierra Leone Resettlement Scheme",
      summary:
        "Appointed commissary for the government-backed resettlement of London's Black Poor in Sierra Leone, Equiano exposed fraud in supplying the expedition and was dismissed before it sailed from Plymouth. The settlers who reached Sierra Leone in 1787 suffered heavy losses to disease.",
      whyHere:
        "Plymouth Sound was the last deep, sheltered anchorage before the Western Approaches, where convoys waited for fair winds. Sierra Leone was chosen for its large natural harbour on the West African coast.",
      wikipediaSlug: "Committee_for_the_Relief_of_the_Black_Poor",
      layer: "borders",
      arrivedBy: "migration",
      keyFigures: ["Granville Sharp"],
    },
    {
      id: "equiano-narrative",
      year: 1789,
      place: "London",
      coordinates: [-0.14, 51.52],
      title: "Publishing The Interesting Narrative",
      summary:
        "Equiano published his autobiography by subscription and sold it himself, touring Britain and Ireland to promote it and the abolitionist cause. It ran through nine editions in his lifetime and made him one of the most prominent Black voices in the debate over the slave trade.",
      whyHere:
        "London was the seat of Parliament, where the slave trade would be debated and eventually abolished, and the centre of Britain's book trade. Publishing there put his testimony before the people who could end the trade.",
      wikipediaSlug: "The_Interesting_Narrative_of_the_Life_of_Olaudah_Equiano",
      layer: "science",
      arrivedBy: "communication",
      keyFigures: ["Olaudah Equiano"],
    },
  ],
  story,
};
