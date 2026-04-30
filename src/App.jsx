import { useState, useEffect } from "react";
import SensorCard    from "./components/SensorCard";
import StatusBadge   from "./components/StatusBadge";
import SpeciesTable  from "./components/SpeciesTable";
import SensorChart   from "./components/SensorChart";
import SafeSpecies   from "./components/SafeSpecies";
import { speciesData, historicalData, generateLiveSensorData } from "./data/mockData";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode]   = useState(true);
  const [sensor, setSensor]       = useState(generateLiveSensorData());
  const [chartData, setChartData] = useState(historicalData);

  // Simulate live sensor updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newReading = generateLiveSensorData();
      setSensor(newReading);
      setChartData(prev => {
        const updated = [...prev, {
          time: newReading.timestamp,
          temp: newReading.temp,
          tds: newReading.tds,
          turbidity: newReading.turbidity,
        }];
        return updated.slice(-10); // keep last 10 readings
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 const alerts = [];
  if (sensor.temp > 32 || sensor.temp < 10) alerts.push(`⚠️ Temperature is ${sensor.temp}°C — outside safe range!`);
  if (sensor.tds > 800) alerts.push(`⚠️ TDS is ${sensor.tds} ppm — dangerously high!`);
  if (sensor.turbidity > 5) alerts.push(`⚠️ Turbidity is ${sensor.turbidity} NTU — water too cloudy!`);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* Alert Banner */}
      {alerts.length > 0 && (
        <div style={{background:"#c0392b", color:"#fff", padding:"0.75rem 1.5rem", fontWeight:"bold", fontSize:"0.95rem"}}>
          {alerts.map((a, i) => <div key={i}>{a}</div>)}
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo">🌊</span>
          <h1>HydroVision</h1>
          <span className="live-dot" title="Simulated Live">● LIVE</span>
        </div>
        <nav>
          <a href="#sensors">Sensors</a>
          <a href="#speciesCompatibility">Compatibility</a>
          <a href="#historicalData">Trends</a>
          <a href="#safeUnsafe">Safe/Unsafe</a>
        </nav>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main className="main">

        {/* Sensor Cards */}
        <section id="sensors">
          <h2 className="section-title">Live Sensor Readings</h2>
          <p className="section-sub">Last updated: {sensor.timestamp}</p>
          <div className="sensor-grid">
            <SensorCard label="Temperature"  value={sensor.temp}      unit="°C"  icon="🌡️" quality={sensor.quality} />
            <SensorCard label="TDS"          value={sensor.tds}       unit="ppm" icon="💧" quality={sensor.quality} />
            <SensorCard label="Turbidity"    value={sensor.turbidity} unit="NTU" icon="🌫️" quality={sensor.quality} />
            <div className="sensor-card quality-card">
              <div className="sensor-icon">🔬</div>
              <div className="sensor-label">Water Quality</div>
              <div className="sensor-value">
                <StatusBadge status={sensor.quality} />
              </div>
            </div>
          </div>
        </section>

        {/* Chart */}
        <SensorChart data={chartData} />

        {/* Species Table */}
        <SpeciesTable speciesList={speciesData} sensor={sensor} />

        {/* Safe / Unsafe */}
        <SafeSpecies speciesList={speciesData} sensor={sensor} />

      </main>

      <footer className="footer">
        <p>© 2025 HydroVision — IoT Water Quality Monitoring</p>
        <p className="footer-note">Built with React · Mock data mode (Firebase integration ready)</p>
      </footer>

    </div>
  );
}
