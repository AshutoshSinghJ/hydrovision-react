import StatusBadge from "./StatusBadge";
import { getCompatibility } from "../data/mockData";

export default function SpeciesTable({ speciesList, sensor }) {
  return (
    <div className="card" id="speciesCompatibility">
      <h2>Species Compatibility</h2>
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
            {speciesList.map((s) => {
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
