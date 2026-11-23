import type { KeyFigure } from "@/types/story";

export const figures: readonly KeyFigure[] = [
  {
    id: "battuta-fig-battuta",
    name: "Ibn Battuta",
    role: "Moroccan scholar and the great traveller of the medieval world",
    born: 1304,
    died: 1369,
    wikipediaSlug: "Ibn_Battuta",
    places: [
      { year: 1304, place: "Tangier, Morocco", coordinates: [-5.81, 35.77], note: "Born into a Berber family of legal scholars and judges." },
      { year: 1326, place: "Cairo, Egypt", coordinates: [31.24, 30.04], note: "Saw the Mamluk capital, the greatest city he had yet known." },
      { year: 1326, place: "Mecca, Hejaz", coordinates: [39.83, 21.42], note: "Completed his first hajj and resolved to keep travelling." },
      { year: 1331, place: "Kilwa, Swahili coast", coordinates: [39.51, -8.96], note: "Reached the southernmost point of his journeys, a rich city of stone mosques." },
      { year: 1334, place: "Delhi, India", coordinates: [77.21, 28.61], note: "Became a judge in the service of Sultan Muhammad bin Tughluq for some eight years." },
      { year: 1345, place: "Quanzhou (Zaitun), China", coordinates: [118.59, 24.91], note: "Reached the great port of southern China, the eastern limit of his travels." },
      { year: 1352, place: "Capital of Mali, upper Niger", coordinates: [-8.33, 11.37], note: "Spent eight months at the court of Mansa Sulayman." },
      { year: 1355, place: "Fez, Morocco", coordinates: [-4.98, 34.06], note: "Saw his travels set down in the Rihla, then served as a judge in Morocco until his death." },
    ],
  },
  {
    id: "battuta-fig-tughluq",
    name: "Muhammad bin Tughluq",
    role: "Brilliant and erratic sultan of Delhi, Ibn Battuta's employer",
    born: 1290,
    died: 1351,
    wikipediaSlug: "Muhammad_bin_Tughluq",
    places: [
      { year: 1325, place: "Delhi", coordinates: [77.21, 28.61], note: "Took the throne after his father died when a pavilion collapsed, perhaps not by accident." },
      { year: 1327, place: "Daulatabad, Deccan", coordinates: [75.21, 19.94], note: "Ordered much of Delhi's elite to move to a second capital in the Deccan, a costly failure." },
      { year: 1330, place: "Delhi", coordinates: [77.22, 28.6], note: "Issued brass and copper tokens to stand for silver coins, and forgeries flooded the market." },
      { year: 1342, place: "Delhi", coordinates: [77.21, 28.61], note: "Sent Ibn Battuta as his ambassador to the Mongol emperor of China." },
      { year: 1351, place: "Near Thatta, Sindh", coordinates: [67.92, 24.75], note: "Died of fever while campaigning against rebels on the lower Indus." },
    ],
  },
  {
    id: "battuta-fig-abu-inan",
    name: "Abu Inan Faris",
    role: "Marinid sultan of Morocco who commissioned the Rihla",
    born: 1329,
    died: 1358,
    wikipediaSlug: "Abu_Inan_Faris",
    places: [
      { year: 1348, place: "Tlemcen", coordinates: [-1.32, 34.88], note: "Proclaimed himself sultan while his father was away fighting in Ifriqiya." },
      { year: 1349, place: "Fez", coordinates: [-4.98, 34.06], note: "Welcomed the returning Ibn Battuta at court; the next year he began building the Bou Inania madrasa." },
      { year: 1354, place: "Fez", coordinates: [-4.97, 34.06], note: "Ordered the traveller's memories to be written down by his secretary Ibn Juzayy." },
      { year: 1357, place: "Tunis", coordinates: [10.17, 36.8], note: "Briefly conquered Tunis, pushing Marinid power to its greatest extent." },
      { year: 1358, place: "Fez", coordinates: [-4.98, 34.06], note: "Fell ill on his return and was strangled by his own vizier." },
    ],
  },
];
