export default function SkillsList({ groups }) {
  return (
    <div className="skills-list">
      {groups.map((group) => (
        <div key={group.label} className="skill-row">
          <span className="skill-label">{group.label}</span>
          <span className="skill-pills">
            {group.pills.map((pill) => (
              <span key={pill} className="skill-pill">
                {pill}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
