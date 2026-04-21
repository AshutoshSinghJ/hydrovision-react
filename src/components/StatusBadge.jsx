export default function StatusBadge({ status }) {
  const colors = {
    Good:         { bg: "#00c9a7", color: "#001a14" },
    Warning:      { bg: "#f4a261", color: "#1a0e00" },
    Critical:     { bg: "#e63946", color: "#fff" },
    Compatible:   { bg: "#00c9a7", color: "#001a14" },
    Marginal:     { bg: "#f4a261", color: "#1a0e00" },
    Incompatible: { bg: "#e63946", color: "#fff" },
  };

  const style = colors[status] || { bg: "#444", color: "#fff" };

  return (
    <span className="status-badge" style={{ background: style.bg, color: style.color }}>
      {status}
    </span>
  );
}
