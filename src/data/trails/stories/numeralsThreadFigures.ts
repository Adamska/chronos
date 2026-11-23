import type { KeyFigure } from "@/types/story";

export const figures: readonly KeyFigure[] = [
  {
    id: "numerals-fig-aryabhata",
    name: "Aryabhata",
    role: "Gupta-era astronomer and mathematician of the Ganges plain",
    born: 476,
    died: 550,
    wikipediaSlug: "Aryabhata",
    places: [
      { year: 476, place: "Kusumapura (Pataliputra)", coordinates: [85.14, 25.59], note: "Born in 476, as he records himself; tradition ties his working life to Kusumapura, the great city on the Ganges." },
      { year: 499, place: "Kusumapura (Pataliputra)", coordinates: [85.14, 25.6], note: "Aged 23, completed the Aryabhatiya, a compact verse treatise on arithmetic, algebra, trigonometry and astronomy." },
    ],
  },
  {
    id: "numerals-fig-brahmagupta",
    name: "Brahmagupta",
    role: "Astronomer who first gave zero rules as a number",
    born: 598,
    died: 668,
    wikipediaSlug: "Brahmagupta",
    places: [
      { year: 598, place: "Bhillamala, Gurjara kingdom", coordinates: [72.27, 25.0], note: "Born in the capital of a Gurjara kingdom on the routes between Gujarat and northern India." },
      { year: 628, place: "Bhillamala, Gurjara kingdom", coordinates: [72.27, 25.01], note: "Aged thirty, wrote the Brahmasphutasiddhanta, with the first known rules for calculating with zero and negative numbers." },
      { year: 665, place: "Ujjain, Malwa", coordinates: [75.78, 23.18], note: "Linked by tradition to the observatory of Ujjain, he wrote a practical astronomical handbook in his late sixties." },
    ],
  },
  {
    id: "numerals-fig-khwarizmi",
    name: "Al-Khwarizmi",
    role: "Baghdad scholar who taught Indian reckoning and algebra",
    born: 780,
    died: 850,
    wikipediaSlug: "Muhammad_ibn_Musa_al-Khwarizmi",
    places: [
      { year: 780, place: "Khwarazm, Central Asia", coordinates: [60.6, 41.4], note: "His name points to the oasis of Khwarazm on the lower Amu Darya, south of the Aral Sea." },
      { year: 813, place: "Baghdad, Abbasid Caliphate", coordinates: [44.37, 33.32], note: "Joined the circle of scholars around the caliph al-Ma'mun, later known as the House of Wisdom." },
      { year: 825, place: "Baghdad, Abbasid Caliphate", coordinates: [44.38, 33.31], note: "Wrote on calculation with the Indian numerals, the book Europe later knew as Algoritmi de numero Indorum." },
      { year: 830, place: "Baghdad, Abbasid Caliphate", coordinates: [44.36, 33.33], note: "His treatise on completing and balancing equations, al-jabr, gave its name to algebra." },
    ],
  },
  {
    id: "numerals-fig-gerbert",
    name: "Gerbert of Aurillac",
    role: "Scholar-monk who brought the digits to Latin schools, later pope",
    born: 946,
    died: 1003,
    wikipediaSlug: "Pope_Sylvester_II",
    places: [
      { year: 963, place: "Aurillac, Auvergne", coordinates: [2.44, 44.93], note: "Of humble birth, he was educated at the Benedictine abbey of Saint-Géraud." },
      { year: 967, place: "Vic, Catalonia", coordinates: [2.25, 41.93], note: "Studied mathematics and astronomy for about three years under Bishop Atto, on the frontier of al-Andalus." },
      { year: 972, place: "Reims, France", coordinates: [4.03, 49.26], note: "Became master of the cathedral school, teaching with an abacus whose counters bore the nine digits." },
      { year: 999, place: "Rome", coordinates: [12.45, 41.9], note: "Elected Pope Sylvester II, the first French pope, with the support of Emperor Otto III." },
      { year: 1003, place: "Rome", coordinates: [12.5, 41.89], note: "Died in Rome; later legend turned the learned pope into a sorcerer who had bargained with the devil." },
    ],
  },
  {
    id: "numerals-fig-fibonacci",
    name: "Leonardo of Pisa (Fibonacci)",
    role: "Pisan merchant mathematician who taught Europe the Indian figures",
    born: 1170,
    died: 1250,
    wikipediaSlug: "Fibonacci",
    places: [
      { year: 1170, place: "Pisa", coordinates: [10.4, 43.72], note: "Born into the Bonacci family of the maritime republic of Pisa." },
      { year: 1192, place: "Bugia, North Africa", coordinates: [5.06, 36.75], note: "Joined his father, a customs official for Pisan merchants, and learned the Indian numerals from local teachers." },
      { year: 1195, place: "Alexandria, Egypt", coordinates: [29.92, 31.2], note: "Pursued the subject on business journeys to Egypt, Syria, Byzantium, Sicily and Provence." },
      { year: 1202, place: "Pisa", coordinates: [10.4, 43.72], note: "Published the Liber Abaci, the book that brought positional numerals and zero to Italian merchants." },
      { year: 1225, place: "Pisa", coordinates: [10.41, 43.71], note: "Presented to Emperor Frederick II, whose court scholars set him mathematical challenges." },
      { year: 1240, place: "Pisa", coordinates: [10.4, 43.72], note: "The republic granted him a yearly salary in reward for his services to the city and its accounts." },
    ],
  },
];
