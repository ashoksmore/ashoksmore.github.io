import { profile, RESUME_URL } from '../data/content';

export default function Header({ compact = false }) {
  return (
    <header className={`site-header${compact ? ' site-header--compact' : ''}`}>
      <div className="site-header-inner">
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <p className="subtitle">{profile.subtitle}</p>
        <p className="header-meta">
          {profile.relocationNote} ·{' '}
          <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
        <nav className="header-links" aria-label="Contact and profiles">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a className="btn btn-filled" href={RESUME_URL}>
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
