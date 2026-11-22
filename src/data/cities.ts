import type { CityRecord } from "@/types/atlas";

export const CITIES: readonly CityRecord[] = [
  {
    id: "uruk", name: "Uruk", coordinates: [45.64, 31.32], wikipediaSlug: "Uruk",
    population: [[-3500, 14], [-3100, 40], [-2800, 80], [-2500, 50], [-2000, 30], [-1000, 10], [-300, 20], [300, 1]],
  },
  {
    id: "ur", name: "Ur", coordinates: [46.1, 30.96], wikipediaSlug: "Ur",
    population: [[-3000, 10], [-2500, 35], [-2100, 65], [-1900, 40], [-1500, 15], [-500, 5], [-300, 1]],
  },
  {
    id: "memphis", name: "Memphis", coordinates: [31.25, 29.85], wikipediaSlug: "Memphis, Egypt",
    population: [[-3100, 20], [-2700, 35], [-2300, 45], [-1800, 35], [-1300, 50], [-500, 20], [0, 10], [600, 2]],
  },
  {
    id: "mohenjo-daro", name: "Mohenjo-daro", coordinates: [68.14, 27.33], wikipediaSlug: "Mohenjo-daro",
    population: [[-2600, 20], [-2500, 40], [-2000, 40], [-1900, 10], [-1700, 1]],
  },
  {
    id: "thebes", name: "Luxor (Thebes)", coordinates: [32.64, 25.7], wikipediaSlug: "Thebes, Egypt",
    population: [[-2000, 15], [-1500, 60], [-1300, 80], [-1000, 50], [-700, 30], [-300, 15], [0, 5]],
  },
  {
    id: "babylon", name: "Babylon", coordinates: [44.42, 32.54], wikipediaSlug: "Babylon",
    population: [[-1900, 15], [-1700, 60], [-1200, 40], [-650, 60], [-570, 200], [-350, 200], [-200, 60], [100, 10], [300, 1]],
  },
  {
    id: "nineveh", name: "Nineveh", coordinates: [43.15, 36.36], wikipediaSlug: "Nineveh",
    population: [[-1200, 15], [-900, 40], [-700, 120], [-650, 150], [-612, 100], [-600, 10], [-300, 5]],
  },
  {
    id: "pataliputra", name: "Patna (Pataliputra)", coordinates: [85.14, 25.61], wikipediaSlug: "Pataliputra",
    population: [[-500, 20], [-400, 100], [-300, 300], [-200, 350], [-100, 200], [300, 100], [500, 50], [700, 10]],
  },
  {
    id: "alexandria", name: "Alexandria", coordinates: [29.92, 31.2], wikipediaSlug: "Alexandria",
    population: [[-320, 50], [-250, 250], [-100, 400], [100, 500], [300, 400], [640, 100], [1800, 10], [1950, 1000], [2025, 5800]],
  },
  {
    id: "ctesiphon", name: "Ctesiphon (Seleucia)", coordinates: [44.58, 33.09], wikipediaSlug: "Ctesiphon",
    population: [[-300, 50], [-150, 300], [100, 200], [170, 50], [400, 250], [570, 500], [637, 400], [700, 50], [800, 5]],
  },
  {
    id: "rome", name: "Rome", coordinates: [12.5, 41.9], wikipediaSlug: "Rome",
    population: [[-500, 30], [-200, 200], [100, 1000], [300, 800], [450, 400], [600, 50], [1500, 55], [1870, 220], [2025, 4300]],
  },
  {
    id: "xian", name: "Xi'an (Chang'an)", coordinates: [108.94, 34.34], wikipediaSlug: "Xi'an",
    population: [[-1000, 40], [-200, 150], [0, 400], [200, 100], [600, 500], [750, 1000], [904, 100], [1500, 130]],
  },
  {
    id: "luoyang", name: "Luoyang", coordinates: [112.45, 34.62], wikipediaSlug: "Luoyang",
    population: [[-1000, 20], [-700, 60], [-300, 100], [100, 500], [200, 50], [520, 600], [540, 100], [700, 300], [1100, 100]],
  },
  {
    id: "teotihuacan", name: "Teotihuacan", coordinates: [-98.84, 19.69], wikipediaSlug: "Teotihuacan",
    population: [[-100, 20], [100, 60], [300, 100], [450, 125], [550, 100], [650, 30], [750, 5]],
  },
  {
    id: "nanjing", name: "Nanjing (Jiankang)", coordinates: [118.8, 32.06], wikipediaSlug: "Nanjing",
    population: [[300, 100], [500, 400], [589, 50], [1400, 480], [1500, 150], [1850, 600], [1950, 1000], [1990, 2900], [2025, 9700]],
  },
  {
    id: "istanbul", name: "Istanbul (Constantinople)", coordinates: [28.98, 41.01], wikipediaSlug: "Istanbul",
    population: [[330, 50], [500, 500], [700, 150], [1000, 300], [1453, 50], [1700, 700], [1950, 1000], [1980, 4400], [2025, 16000]],
  },
  {
    id: "baghdad", name: "Baghdad", coordinates: [44.37, 33.31], wikipediaSlug: "Baghdad",
    population: [[765, 100], [800, 700], [900, 900], [1000, 300], [1258, 100], [1300, 40], [1900, 145], [1950, 580], [2025, 8000]],
  },
  {
    id: "cordoba", name: "Córdoba", coordinates: [-4.78, 37.88], wikipediaSlug: "Córdoba, Spain",
    population: [[750, 50], [900, 250], [1000, 450], [1100, 100], [1236, 60], [1500, 35], [1900, 60], [2025, 320]],
  },
  {
    id: "kyoto", name: "Kyoto (Heian-kyō)", coordinates: [135.77, 35.01], wikipediaSlug: "Kyoto",
    population: [[794, 100], [1000, 175], [1467, 150], [1500, 40], [1600, 300], [1700, 350], [1900, 350], [1950, 1000], [2025, 1500]],
  },
  {
    id: "kaifeng", name: "Kaifeng (Bianjing)", coordinates: [114.31, 34.8], wikipediaSlug: "Kaifeng",
    population: [[750, 50], [960, 250], [1100, 600], [1127, 500], [1200, 150], [1500, 120], [1900, 200]],
  },
  {
    id: "hangzhou", name: "Hangzhou (Lin'an)", coordinates: [120.16, 30.27], wikipediaSlug: "Hangzhou",
    population: [[900, 100], [1130, 200], [1200, 700], [1276, 1000], [1400, 250], [1800, 400], [1950, 700], [1990, 1500], [2025, 8500]],
  },
  {
    id: "angkor", name: "Angkor", coordinates: [103.87, 13.41], wikipediaSlug: "Angkor",
    population: [[900, 100], [1100, 300], [1200, 500], [1300, 300], [1431, 50], [1600, 10]],
  },
  {
    id: "cairo", name: "Cairo", coordinates: [31.24, 30.04], wikipediaSlug: "Cairo",
    population: [[1000, 150], [1340, 500], [1400, 350], [1500, 400], [1800, 250], [1900, 600], [1950, 2500], [1980, 7300], [2025, 23100]],
  },
  {
    id: "beijing", name: "Beijing (Khanbaliq)", coordinates: [116.4, 39.9], wikipediaSlug: "Beijing",
    population: [[1300, 400], [1400, 150], [1500, 670], [1700, 650], [1800, 1100], [1900, 1100], [1950, 1700], [2000, 10200], [2025, 22600]],
  },
  {
    id: "delhi", name: "Delhi", coordinates: [77.21, 28.61], wikipediaSlug: "Delhi",
    population: [[1200, 60], [1340, 400], [1400, 50], [1700, 500], [1800, 140], [1900, 210], [1950, 1400], [1990, 9700], [2025, 34700]],
  },
  {
    id: "vijayanagara", name: "Hampi (Vijayanagara)", coordinates: [76.47, 15.33], wikipediaSlug: "Vijayanagara",
    population: [[1340, 30], [1400, 200], [1500, 500], [1565, 480], [1570, 20], [1600, 10]],
  },
  {
    id: "tenochtitlan", name: "Tenochtitlan", coordinates: [-99.13, 19.44], wikipediaSlug: "Tenochtitlan",
    population: [[1325, 5], [1400, 50], [1450, 100], [1500, 200], [1519, 200], [1521, 10]],
  },
  {
    id: "cusco", name: "Cusco", coordinates: [-71.97, -13.53], wikipediaSlug: "Cusco",
    population: [[1200, 10], [1438, 40], [1530, 100], [1540, 30], [1800, 30], [1900, 20], [2025, 450]],
  },
  {
    id: "venice", name: "Venice", coordinates: [12.34, 45.44], wikipediaSlug: "Venice",
    population: [[900, 40], [1200, 70], [1300, 110], [1400, 85], [1500, 115], [1570, 180], [1600, 150], [1800, 140], [1900, 150]],
  },
  {
    id: "isfahan", name: "Isfahan", coordinates: [51.67, 32.65], wikipediaSlug: "Isfahan",
    population: [[1000, 100], [1500, 50], [1600, 250], [1670, 500], [1722, 450], [1730, 100], [1800, 50], [1950, 180], [2025, 2300]],
  },
  {
    id: "agra", name: "Agra", coordinates: [78.01, 27.18], wikipediaSlug: "Agra",
    population: [[1500, 30], [1600, 500], [1650, 500], [1700, 150], [1800, 60], [1900, 190], [2025, 2100]],
  },
  {
    id: "paris", name: "Paris", coordinates: [2.35, 48.86], wikipediaSlug: "Paris",
    population: [[1000, 20], [1200, 110], [1328, 230], [1700, 530], [1800, 550], [1850, 1300], [1900, 3300], [1950, 6300], [2025, 11300]],
  },
  {
    id: "london", name: "London", coordinates: [-0.13, 51.51], wikipediaSlug: "London",
    population: [[1300, 80], [1600, 190], [1700, 550], [1800, 860], [1825, 1350], [1850, 2300], [1900, 6500], [1950, 8400], [2025, 9800]],
  },
  {
    id: "moscow", name: "Moscow", coordinates: [37.62, 55.76], wikipediaSlug: "Moscow",
    population: [[1400, 30], [1550, 100], [1700, 130], [1800, 250], [1900, 1100], [1950, 5400], [2025, 12700]],
  },
  {
    id: "osaka", name: "Osaka", coordinates: [135.5, 34.69], wikipediaSlug: "Osaka",
    population: [[1580, 50], [1700, 380], [1800, 380], [1900, 970], [1950, 7000], [1980, 17000], [2025, 18900]],
  },
  {
    id: "tokyo", name: "Tokyo (Edo)", coordinates: [139.69, 35.69], wikipediaSlug: "Tokyo",
    population: [[1600, 60], [1700, 690], [1800, 1000], [1868, 600], [1900, 1500], [1950, 11300], [1980, 28500], [2020, 37400], [2025, 37000]],
  },
  {
    id: "guangzhou", name: "Guangzhou (Canton)", coordinates: [113.26, 23.13], wikipediaSlug: "Guangzhou",
    population: [[-200, 20], [800, 200], [1500, 150], [1800, 800], [1850, 875], [1900, 600], [1950, 1300], [1990, 3100], [2025, 14600]],
  },
  {
    id: "dhaka", name: "Dhaka", coordinates: [90.41, 23.81], wikipediaSlug: "Dhaka",
    population: [[1610, 100], [1700, 200], [1800, 200], [1900, 100], [1950, 340], [1980, 3300], [2025, 24600]],
  },
  {
    id: "kolkata", name: "Kolkata (Calcutta)", coordinates: [88.36, 22.57], wikipediaSlug: "Kolkata",
    population: [[1700, 10], [1800, 200], [1850, 410], [1900, 1100], [1950, 4600], [1980, 9000], [2025, 16000]],
  },
  {
    id: "mumbai", name: "Mumbai (Bombay)", coordinates: [72.88, 19.08], wikipediaSlug: "Mumbai",
    population: [[1700, 30], [1800, 150], [1850, 575], [1900, 800], [1950, 2900], [1980, 9200], [2025, 22100]],
  },
  {
    id: "berlin", name: "Berlin", coordinates: [13.4, 52.52], wikipediaSlug: "Berlin",
    population: [[1400, 10], [1700, 60], [1800, 170], [1850, 420], [1900, 2700], [1925, 4000], [1945, 2800], [1990, 3400], [2025, 3600]],
  },
  {
    id: "new-york", name: "New York", coordinates: [-74.01, 40.71], wikipediaSlug: "New York City",
    population: [[1700, 5], [1800, 60], [1850, 700], [1900, 4200], [1925, 7800], [1950, 12300], [1980, 15600], [2025, 19200]],
  },
  {
    id: "shanghai", name: "Shanghai", coordinates: [121.47, 31.23], wikipediaSlug: "Shanghai",
    population: [[1800, 100], [1850, 300], [1900, 600], [1930, 3100], [1950, 4300], [1990, 7800], [2000, 14000], [2025, 30500]],
  },
  {
    id: "mexico-city", name: "Mexico City", coordinates: [-99.13, 19.43], wikipediaSlug: "Mexico City",
    population: [[1524, 30], [1600, 60], [1800, 130], [1900, 350], [1950, 2900], [1980, 13000], [2025, 22800]],
  },
  {
    id: "sao-paulo", name: "São Paulo", coordinates: [-46.63, -23.55], wikipediaSlug: "São Paulo",
    population: [[1600, 2], [1800, 20], [1900, 240], [1950, 2300], [1980, 12100], [2025, 23000]],
  },
  {
    id: "lagos", name: "Lagos", coordinates: [3.38, 6.52], wikipediaSlug: "Lagos",
    population: [[1800, 20], [1900, 40], [1950, 330], [1980, 2600], [2000, 7300], [2025, 17000]],
  },
];
