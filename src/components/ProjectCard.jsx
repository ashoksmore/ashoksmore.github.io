export default function ProjectCard({ title, tags, description, github, demo, link, linkLabel }) {
  const hasActions = github || link || demo;

  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-tags">{tags}</p>
      <p>{description}</p>
      {hasActions && (
        <div className="project-actions">
          {github && (
            <a className="btn" href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {link && linkLabel && (
            <a className="btn" href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel}
            </a>
          )}
          {demo && (
            <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
