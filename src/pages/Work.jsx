import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { experience } from '../data/content';

export default function Work() {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <div className="exp-column">
        {experience.map((job) => (
          <ExperienceCard key={job.company} {...job} />
        ))}
      </div>
    </section>
  );
}
