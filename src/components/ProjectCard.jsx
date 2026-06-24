export default function ProjectCard({
  title,
  subtitle,
  tags,
  description,
  highlights,
  github,
  demo,
  link,
  linkLabel,
  linkedin,
  linkedinLabel = 'LinkedIn',
}) {
  const hasActions = github || link || demo || linkedin;

  return (
    <article className="project-card">
      <h3>{title}</h3>
      {subtitle && <p className="project-subtitle">{subtitle}</p>}
      <p className="project-tags">{tags}</p>
      <p>{description}</p>
      {highlights?.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {hasActions && (
        <div className="project-actions">
          {demo && (
            <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {link && linkLabel && (
            <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel}
            </a>
          )}
          {linkedin && (
            <a className="btn" href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedinLabel}
            </a>
          )}
          {github && (
            <a className="btn" href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}
