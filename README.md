# 🌊 HydroVision — React Dashboard

A React-based frontend dashboard for the HydroVision IoT Water Quality Monitoring System.

> This is the **React rebuild** of the original [HydroVision](https://github.com/AshutoshSinghJ/hydrovision) project, migrated from Vanilla JS to a component-based React architecture.

---

## 🖥️ Live Demo
https://hydrovision-react.vercel.app/

---

## 🌟 Features

- ⚡ **Simulated live sensor updates** every 3 seconds (mock data)
- 📊 **Real-time line chart** for temperature, TDS, and turbidity trends
- 🐠 **Species compatibility table** — dynamically updates with sensor readings
- ✅ **Safe/Unsafe species lists** — auto-categorized by current water conditions
- 🌙 **Dark/Light mode toggle**
- 📱 **Fully responsive** layout

---

## 🧰 Tech Stack

| Category     | Technology                          |
|--------------|-------------------------------------|
| Framework    | React 18 (Vite)                     |
| Charts       | Recharts                            |
| Styling      | CSS Variables + Google Fonts        |
| Data         | Mock data (Firebase integration ready) |

---

## ⚙️ How It Works

1. `generateLiveSensorData()` simulates ESP32 sensor readings every 3 seconds
2. `App.jsx` manages global state: sensor readings and chart history
3. Components receive sensor data as props and re-render automatically
4. `getCompatibility()` in `mockData.js` evaluates each species against live readings

### Component Architecture

```
App.jsx
├── SensorCard       — displays individual metric (Temp / TDS / Turbidity / Quality)
├── SensorChart      — Recharts line chart of historical readings
├── SpeciesTable     — compatibility table with dynamic status badges
└── SafeSpecies      — categorised safe / marginal / incompatible species lists
    └── StatusBadge  — reusable colored badge component
```

---

## 🛠️ Setup

```bash
# 1. Clone
git clone https://github.com/AshutoshSinghJ/hydrovision-react.git
cd hydrovision-react

# 2. Install
npm install

# 3. Run
npm run dev
```

---

## 🔌 Firebase Integration (Future)

To connect real ESP32 sensor data, replace `generateLiveSensorData()` in `App.jsx` with:

```js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(app);
onValue(ref(db, "sensors/latest"), (snapshot) => {
  setSensor(snapshot.val());
});
```

---

## 🙏 Acknowledgments

- Original HydroVision project built with ESP32, Firebase, and Vanilla JS
- Recharts for React-native chart components
- Google Fonts (Space Mono + DM Sans)
