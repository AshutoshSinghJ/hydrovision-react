export default function SensorCard({ label, value, unit, icon, quality }) {
  const qualityColors = {
    Good:     { border: "#00c9a7", bg: "rgba(0,201,167,0.08)" },
    Warning:  { border: "#f4a261", bg: "rgba(244,162,97,0.08)" },
    Critical: { border: "#e63946", bg: "rgba(230,57,70,0.08)" },
  };

  const style = quality ? qualityColors[quality] : { border: "#00c9a7", bg: "rgba(0,201,167,0.08)" };

  return (
    <div className="sensor-card" style={{ borderColor: style.border, background: style.bg }}>
      <div className="sensor-icon">{icon}</div>
      <div className="sensor-label">{label}</div>
      <div className="sensor-value">
        {value}
        <span className="sensor-unit">{unit}</span>
      </div>
    </div>
  );
}
