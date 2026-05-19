import { Link } from 'react-router-dom';
import { navRoutes, RESUME_URL } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="Footer">
        {navRoutes
          .filter(({ path }) => path !== '/')
          .map(({ path, label }) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        <a href={RESUME_URL}>Resume</a>
      </nav>
      <p>© 2026 Ashok S. More · Built with GitHub Pages</p>
    </footer>
  );
}
