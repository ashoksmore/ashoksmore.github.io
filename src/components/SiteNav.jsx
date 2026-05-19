import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navRoutes, RESUME_URL } from '../data/content';

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav-inner">
        <NavLink to="/" className="nav-brand" onClick={closeMenu}>
          Ashok S. More
        </NavLink>
        <button
          type="button"
          className={`nav-toggle-label${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <ul id="nav-menu" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navRoutes.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="nav-resume-mobile">
            <a className="btn nav-resume" href={RESUME_URL} onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ul>
        <a className="btn btn-filled nav-resume" href={RESUME_URL}>
          Resume
        </a>
      </div>
    </nav>
  );
}
