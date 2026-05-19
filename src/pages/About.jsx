import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import SkillsList from '../components/SkillsList';
import { skillGroups, educationItems } from '../data/content';
import TeamShowUp from '../components/TeamShowUp';
import {
  aboutIntro,
  journeyTimeline,
  whatDrivesMe,
  livingQuote,
} from '../data/about';

export default function About() {
  return (
    <article className="about-page">
      <header className="about-intro">
        <SectionHeading id="about-heading">About</SectionHeading>
        <p className="about-lead">{aboutIntro}</p>
        <p className="about-context">
          Across <strong>MedTech</strong>, <strong>FinTech</strong>, and{' '}
          <strong>eCommerce</strong>, the stack shifts—but the bar stays the same: systems
          people can rely on, and teammates who know what shipped and why.
        </p>
        <p className="about-beyond-link">
          <Link to="/beyond-code">Beyond the Code</Link> — how half marathon training shapes the
          way I build software.
        </p>
      </header>

      <section className="about-journey" aria-labelledby="journey-heading">
        <h2 id="journey-heading" className="about-subheading">
          The path here
        </h2>
        <ol className="journey-timeline">
          {journeyTimeline.map((step, index) => (
            <li key={step.place} className="journey-step">
              <div className="journey-marker" aria-hidden="true">
                <span className="journey-dot" />
                {index < journeyTimeline.length - 1 && (
                  <span className="journey-line" />
                )}
              </div>
              <div className="journey-content">
                <p className="journey-period">{step.period}</p>
                <h3 className="journey-place">{step.place}</h3>
                <p className="journey-story">{step.story}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-drives" aria-labelledby="drives-heading">
        <h2 id="drives-heading" className="about-subheading">
          What drives me
        </h2>
        <div className="drives-list">
          {whatDrivesMe.map((item) => (
            <div key={item.title} className="drives-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <TeamShowUp />

      <figure className="about-quote">
        <blockquote cite="#">
          <p>{livingQuote.text}</p>
        </blockquote>
        <figcaption>{livingQuote.attribution}</figcaption>
      </figure>

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
    </article>
  );
}
