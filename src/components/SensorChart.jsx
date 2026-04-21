import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

export default function SensorChart({ data }) {
  return (
    <div className="card" id="historicalData">
      <h2>Historical Trends</h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
          <XAxis dataKey="time" stroke="#7a9aab" tick={{ fontSize: 12 }} />
          <YAxis stroke="#7a9aab" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: "#0d2233", border: "1px solid #00c9a7", borderRadius: 8 }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#a0b8c8", fontSize: 13 }} />
          <Line type="monotone" dataKey="temp"      stroke="#00c9a7" strokeWidth={2} dot={false} name="Temp (°C)" />
          <Line type="monotone" dataKey="tds"       stroke="#4ea8de" strokeWidth={2} dot={false} name="TDS (ppm)" />
          <Line type="monotone" dataKey="turbidity" stroke="#f4a261" strokeWidth={2} dot={false} name="Turbidity (NTU)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
