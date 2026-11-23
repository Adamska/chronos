import type { KeyFigure } from "@/types/story";

export const figures: readonly KeyFigure[] = [
  {
    id: "equiano-fig-equiano",
    name: "Olaudah Equiano",
    role: "Formerly enslaved sailor, writer and abolitionist",
    born: 1745,
    died: 1797,
    wikipediaSlug: "Olaudah_Equiano",
    places: [
      { year: 1745, place: "Essaka, Igbo country", coordinates: [6.95, 5.9], note: "Born here by his own account; baptismal and naval records instead name South Carolina." },
      { year: 1756, place: "Bridgetown, Barbados", coordinates: [-59.62, 13.1], note: "Arrived after the Middle Passage, aged about eleven, and was put up for sale." },
      { year: 1759, place: "St Margaret's, Westminster", coordinates: [-0.127, 51.4995], note: "Baptised as Gustavus Vassa while serving with his owner in the Royal Navy." },
      { year: 1766, place: "Plymouth, Montserrat", coordinates: [-62.22, 16.71], note: "Bought his freedom from the merchant Robert King for forty pounds." },
      { year: 1773, place: "North of Svalbard", coordinates: [20.5, 80.6], note: "Sailed as a free man on the Royal Navy's attempt to reach the North Pole." },
      { year: 1789, place: "London", coordinates: [-0.14, 51.52], note: "Published The Interesting Narrative and campaigned against the slave trade." },
      { year: 1792, place: "Soham, Cambridgeshire", coordinates: [0.34, 52.33], note: "Married Susannah Cullen, an Englishwoman; they had two daughters." },
      { year: 1797, place: "London", coordinates: [-0.13, 51.51], note: "Died in London; his surviving daughter later inherited his considerable estate." },
    ],
  },
  {
    id: "equiano-fig-phipps",
    name: "Constantine Phipps",
    role: "Naval officer who led the 1773 expedition toward the North Pole",
    born: 1744,
    died: 1792,
    wikipediaSlug: "Constantine_Phipps,_2nd_Baron_Mulgrave",
    places: [
      { year: 1744, place: "London", coordinates: [-0.13, 51.51], note: "Born into an aristocratic family; he went to sea in the Royal Navy as a boy." },
      { year: 1766, place: "Newfoundland", coordinates: [-52.7, 47.56], note: "Sailed to Newfoundland and Labrador with his friend the naturalist Joseph Banks." },
      { year: 1773, place: "North of Svalbard", coordinates: [15.0, 80.5], note: "Commanded HMS Racehorse and HMS Carcass until pack ice stopped them near 81 degrees north." },
      { year: 1792, place: "Liège", coordinates: [5.57, 50.63], note: "Died abroad after a career as naval commander, politician and Lord of the Admiralty." },
    ],
  },
  {
    id: "equiano-fig-sharp",
    name: "Granville Sharp",
    role: "Pioneer English abolitionist and Equiano's ally",
    born: 1735,
    died: 1813,
    wikipediaSlug: "Granville_Sharp",
    places: [
      { year: 1735, place: "Durham", coordinates: [-1.58, 54.78], note: "Born the son of an archdeacon; he became a clerk in the government's Ordnance Office." },
      { year: 1765, place: "London", coordinates: [-0.09, 51.51], note: "Took up the cause of Jonathan Strong, an enslaved youth beaten and abandoned in the street." },
      { year: 1772, place: "Westminster Hall, London", coordinates: [-0.125, 51.4995], note: "Backed the Somerset case, which ruled that an enslaved man could not be forced out of England." },
      { year: 1783, place: "London", coordinates: [-0.09, 51.52], note: "Alerted by Equiano, he pursued the Zong case and tried to have the crew tried for murder." },
      { year: 1787, place: "Sierra Leone", coordinates: [-13.23, 8.48], note: "The Province of Freedom he planned for Black Londoners was founded on this coast." },
      { year: 1813, place: "Fulham, London", coordinates: [-0.2, 51.47], note: "Died a few years after the slave trade he had fought for decades was abolished." },
    ],
  },
];
