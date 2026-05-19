import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section className="projects" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
