export default function HeroStatText({ value, label }) {
  return (
    <div className="hero-stat">
      <span className="hero-stat-value hero-stat-value--text">{value}</span>
      {label && <span className="hero-stat-label">{label}</span>}
    </div>
  );
}
