export const speciesData = [
  { name: "Goldfish",       tempMin: 10, tempMax: 24, tdsMin: 100, tdsMax: 400, turbidityMax: 20 },
  { name: "Guppy",          tempMin: 22, tempMax: 28, tdsMin: 100, tdsMax: 500, turbidityMax: 15 },
  { name: "Betta Fish",     tempMin: 24, tempMax: 30, tdsMin: 50,  tdsMax: 300, turbidityMax: 10 },
  { name: "Koi",            tempMin: 10, tempMax: 25, tdsMin: 100, tdsMax: 500, turbidityMax: 25 },
  { name: "Tilapia",        tempMin: 20, tempMax: 30, tdsMin: 200, tdsMax: 800, turbidityMax: 30 },
  { name: "Catfish",        tempMin: 18, tempMax: 28, tdsMin: 150, tdsMax: 600, turbidityMax: 35 },
  { name: "Rainbow Trout",  tempMin: 10, tempMax: 18, tdsMin: 50,  tdsMax: 300, turbidityMax: 10 },
  { name: "Discus",         tempMin: 26, tempMax: 32, tdsMin: 20,  tdsMax: 150, turbidityMax: 5  },
];

export const historicalData = [
  { time: "10:00", temp: 24.1, tds: 310, turbidity: 8.2 },
  { time: "10:10", temp: 24.3, tds: 315, turbidity: 8.5 },
  { time: "10:20", temp: 24.0, tds: 308, turbidity: 8.1 },
  { time: "10:30", temp: 24.5, tds: 320, turbidity: 9.0 },
  { time: "10:40", temp: 24.7, tds: 325, turbidity: 8.8 },
  { time: "10:50", temp: 24.6, tds: 318, turbidity: 8.3 },
  { time: "11:00", temp: 24.8, tds: 322, turbidity: 8.6 },
];

export function generateLiveSensorData() {
  const temp = parseFloat((24 + Math.random() * 2).toFixed(1));
  const tds = Math.floor(300 + Math.random() * 50);
  const turbidity = parseFloat((7 + Math.random() * 4).toFixed(1));

  let quality = "Good";
  if (turbidity > 10 || tds > 400) quality = "Warning";
  if (turbidity > 15 || tds > 600) quality = "Critical";

  return { temp, tds, turbidity, quality, timestamp: new Date().toLocaleTimeString() };
}

export function getCompatibility(species, sensor) {
  const tempOk = sensor.temp >= species.tempMin && sensor.temp <= species.tempMax;
  const tdsOk = sensor.tds >= species.tdsMin && sensor.tds <= species.tdsMax;
  const turbidityOk = sensor.turbidity <= species.turbidityMax;

  if (tempOk && tdsOk && turbidityOk) return "Compatible";
  if ((tempOk && tdsOk) || (tempOk && turbidityOk) || (tdsOk && turbidityOk)) return "Marginal";
  return "Incompatible";
}
