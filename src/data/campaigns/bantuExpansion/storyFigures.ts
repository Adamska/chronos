import type { KeyFigure } from "@/types/story";

export const figures: readonly KeyFigure[] = [
  {
    id: "bantu-fig-ezana",
    name: "Ezana of Aksum",
    role: "King of Aksum who adopted Christianity",
    born: 320,
    died: 360,
    wikipediaSlug: "Ezana_of_Axum",
    places: [
      { year: 330, place: "Aksum, Tigray highlands", coordinates: [38.72, 14.13], note: "Became king as a boy, with his mother as regent and Frumentius, a Christian from Tyre, as his tutor." },
      { year: 340, place: "Aksum, Tigray highlands", coordinates: [38.72, 14.13], note: "Embraced Christianity; his coins swapped the pagan disc and crescent for the cross." },
      { year: 350, place: "Near Meroë, Nile valley", coordinates: [33.75, 16.94], note: "His stone inscriptions record a campaign against the Noba near the old Kushite capital." },
    ],
  },
  {
    id: "bantu-fig-ibn-battuta",
    name: "Ibn Battuta",
    role: "Moroccan traveller who described the Swahili coast",
    born: 1304,
    died: 1369,
    wikipediaSlug: "Ibn_Battuta",
    places: [
      { year: 1304, place: "Tangier, Morocco", coordinates: [-5.81, 35.77], note: "Born into a family of Berber legal scholars; he left on pilgrimage at twenty-one." },
      { year: 1326, place: "Mecca", coordinates: [39.83, 21.42], note: "Completed his first pilgrimage, then kept travelling for almost thirty years." },
      { year: 1331, place: "Mogadishu", coordinates: [45.34, 2.04], note: "Guest of the sultan, he marvelled at the town's fine cloth and enormous meals." },
      { year: 1331, place: "Kilwa", coordinates: [39.51, -8.96], note: "Called Kilwa one of the most beautiful and best-built towns in the world." },
      { year: 1334, place: "Delhi", coordinates: [77.21, 28.61], note: "Served Sultan Muhammad bin Tughluq as a judge for several years." },
      { year: 1352, place: "Timbuktu, Mali Empire", coordinates: [-3.0, 16.77], note: "Crossed the Sahara to the court of Mansa Suleyman and visited Timbuktu." },
      { year: 1355, place: "Fez, Morocco", coordinates: [-5.0, 34.03], note: "Dictated the account of his journeys, the Rihla, to the scholar Ibn Juzayy." },
    ],
  },
  {
    id: "bantu-fig-afonso",
    name: "Afonso I of Kongo",
    role: "Christian king of Kongo who corresponded with Portugal",
    born: 1456,
    died: 1542,
    wikipediaSlug: "Afonso_I_of_Kongo",
    places: [
      { year: 1491, place: "Mbanza Kongo", coordinates: [14.24, -6.27], note: "Born Mvemba a Nzinga, he was baptised as Afonso soon after his father, King Nzinga a Nkuwu." },
      { year: 1495, place: "Nsundi province", coordinates: [14.8, -5.3], note: "Governed this northern province, where he kept Portuguese priests close and studied their faith." },
      { year: 1509, place: "Mbanza Kongo", coordinates: [14.24, -6.27], note: "Defeated his brother in a battle for the throne, which he credited to a vision of Saint James." },
      { year: 1526, place: "Mbanza Kongo", coordinates: [14.24, -6.27], note: "Wrote to the king of Portugal protesting that traders were seizing his free subjects as slaves." },
      { year: 1542, place: "Mbanza Kongo", coordinates: [14.24, -6.27], note: "Died after more than three decades on the throne, having made Christianity the faith of the Kongo court." },
    ],
  },
];
