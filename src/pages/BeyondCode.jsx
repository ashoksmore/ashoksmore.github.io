import SectionHeading from '../components/SectionHeading';
import SkillsList from '../components/SkillsList';
import { skillGroups, educationItems } from '../data/content';

export default function BeyondCode() {
  return (
    <>
      <section className="skills" aria-labelledby="skills-heading">
        <SectionHeading id="skills-heading">Skills</SectionHeading>
        <SkillsList groups={skillGroups} />
      </section>

      <section className="education" aria-labelledby="edu-heading">
        <SectionHeading id="edu-heading">Education &amp; highlights</SectionHeading>
        <ul className="edu-list">
          <li>
            <strong>{educationItems[0].strong}</strong>
            {educationItems[0].text}
          </li>
          <li>{educationItems[1].text}</li>
        </ul>
      </section>
    </>
  );
}
