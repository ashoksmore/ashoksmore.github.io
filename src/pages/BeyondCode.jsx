import BeyondHero from '../components/BeyondHero';
import ImageGallery from '../components/ImageGallery';
import {
  beyondIntro,
  engineeringParallels,
  raceStats,
  photoGallery,
} from '../data/beyondCode';

export default function BeyondCode() {
  return (
    <article className="beyond-page">
      <BeyondHero />

      <div className="beyond-body">
        <header className="beyond-intro">
          <h1 className="beyond-title">{beyondIntro.title}</h1>
          <p className="beyond-lead">{beyondIntro.lead}</p>
          <p className="beyond-body-text">{beyondIntro.body}</p>
        </header>

        <section className="beyond-parallels" aria-labelledby="parallels-heading">
          <h2 id="parallels-heading" className="about-subheading">
            What running taught me about engineering
          </h2>
          <ul className="parallels-list">
            {engineeringParallels.map((item) => (
              <li key={item.title} className="parallel-card">
                <h3>{item.title}</h3>
                <p className="parallel-running">
                  <span className="parallel-tag">On the road</span>
                  {item.running}
                </p>
                <p className="parallel-engineering">
                  <span className="parallel-tag">In the codebase</span>
                  {item.engineering}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="beyond-stats" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="about-subheading">
            Race notes
          </h2>
          <p className="stats-note">
            The numbers are part of the story—not the whole story. Update these as the miles add up.
          </p>
          <div className="race-stats" role="list">
            {raceStats.map((stat) => (
              <div key={stat.label} className="race-stat" role="listitem">
                <span className="race-stat-label">{stat.label}</span>
                <span className="race-stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="beyond-gallery" aria-labelledby="beyond-gallery-heading">
          <h2 id="beyond-gallery-heading" className="about-subheading">
            On the road &amp; off
          </h2>
          <p className="gallery-lead">
            Moments from training and race weekends—each caption is a small piece of the same mindset I bring to work.
          </p>
          <ImageGallery photos={photoGallery} />
        </section>
      </div>
    </article>
  );
}
