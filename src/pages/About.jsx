import SectionHeading from '../components/SectionHeading';
import {
  aboutIntro,
  journeyTimeline,
  whatDrivesMe,
  livingQuote,
  galleryPlaceholders,
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

      <figure className="about-quote">
        <blockquote cite="#">
          <p>{livingQuote.text}</p>
        </blockquote>
        <figcaption>{livingQuote.attribution}</figcaption>
      </figure>

      <section className="about-gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="about-subheading">
          Beyond the Code
        </h2>
        <p className="gallery-lead">
          Marathons, trails, and the quiet hours away from the keyboard—photos coming soon.
        </p>
        <ul className="masonry-grid" aria-label="Photo gallery placeholders">
          {galleryPlaceholders.map((slot) => (
            <li
              key={slot.id}
              className={`masonry-item masonry-item--${slot.aspect}`}
            >
              <div
                className="gallery-placeholder"
                role="img"
                aria-label={`Photo placeholder: ${slot.label}`}
              >
                <span className="gallery-placeholder-icon" aria-hidden="true">
                  ◻
                </span>
                <span className="gallery-placeholder-label">{slot.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
