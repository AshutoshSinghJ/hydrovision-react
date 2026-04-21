import { getCompatibility } from "../data/mockData";

export default function SafeSpecies({ speciesList, sensor }) {
  const safe       = speciesList.filter(s => getCompatibility(s, sensor) === "Compatible");
  const marginal   = speciesList.filter(s => getCompatibility(s, sensor) === "Marginal");
  const unsafe     = speciesList.filter(s => getCompatibility(s, sensor) === "Incompatible");

  return (
    <div className="card" id="safeUnsafe">
      <h2>Safe & Unsafe Species</h2>
      <div className="species-lists">
        <div className="species-group">
          <h3 className="group-title safe">✅ Compatible ({safe.length})</h3>
          <ul>{safe.map(s => <li key={s.name}>{s.name}</li>)}</ul>
        </div>
        <div className="species-group">
          <h3 className="group-title marginal">⚠️ Marginal ({marginal.length})</h3>
          <ul>{marginal.map(s => <li key={s.name}>{s.name}</li>)}</ul>
        </div>
        <div className="species-group">
          <h3 className="group-title unsafe">❌ Incompatible ({unsafe.length})</h3>
          <ul>{unsafe.map(s => <li key={s.name}>{s.name}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
