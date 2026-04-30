import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { getCompatibility } from "../data/mockData";

export default function SpeciesTable({ speciesList, sensor }) {
  const [search, setSearch] = useState("");

  const filtered = speciesList.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card" id="speciesCompatibility">
      <h2>Species Compatibility</h2>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="🔍 Search species..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #444",
          background: "var(--card-bg, #1e1e1e)",
          color: "var(--text, #fff)",
          fontSize: "0.95rem"
        }}
      />

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Species</th>
              <th>Temp Range (°C)</th>
              <th>TDS Range (ppm)</th>
              <th>Max Turbidity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="5" style={{textAlign:"center", padding:"1rem"}}>No species found</td></tr>
            ) : (
              filtered.map((s) => {
                const status = getCompatibility(s, sensor);
                return (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.tempMin} – {s.tempMax}</td>
                    <td>{s.tdsMin} – {s.tdsMax}</td>
                    <td>{s.turbidityMax}</td>
                    <td><StatusBadge status={status} /></td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
