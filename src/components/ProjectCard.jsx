export default function ProjectCard({ title, tags, description, github, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-tags">{tags}</p>
      <p>{description}</p>
      <div className="project-actions">
        <a className="btn" href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {demo && (
          <a className="btn" href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
