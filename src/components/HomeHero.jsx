import { useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/content';
import StatCounter from './StatCounter';
import HeroStatText from './HeroStatText';

const numericStats = [
  { target: 6, suffix: '', label: 'Years experience' },
  { target: 3, suffix: '', label: 'Industries' },
];

export default function HomeHero() {
  const [imgSrc, setImgSrc] = useState('/headshot.jpg');

  return (
    <section className="home-hero" aria-labelledby="hero-name">
      <div className="home-hero-inner">
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">{profile.location} · Open to relocation</p>
          <h1 id="hero-name" className="home-hero-name">
            {profile.name}
          </h1>
          <p className="home-hero-title">{profile.title}</p>
          {profile.credentials && (
            <p className="home-hero-credentials">{profile.credentials}</p>
          )}
          <p className="home-hero-tagline">{profile.tagline}</p>

          <div className="hero-stats" role="group" aria-label="Career highlights">
            {numericStats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
            <HeroStatText value="GenAI shipped" />
          </div>

          <div className="home-hero-ctas">
            <Link to="/work" className="btn btn-hero-primary">
              See My Work
            </Link>
            <Link to="/about" className="btn btn-hero-secondary">
              My Story
            </Link>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-hero-photo-wrap">
            <img
              src={imgSrc}
              alt={`${profile.name}, professional headshot`}
              className="home-hero-photo"
              width={320}
              height={320}
              onError={() => setImgSrc('/headshot.svg')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
