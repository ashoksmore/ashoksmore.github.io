export default function ExperienceCard({ company, dates, role, bullets }) {
  return (
    <article className="exp-card">
      <div className="exp-card-header">
        <strong>{company}</strong>
        <span className="exp-dates">{dates}</span>
      </div>
      <p className="exp-role">{role}</p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
