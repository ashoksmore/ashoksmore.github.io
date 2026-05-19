import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/about', label: 'About', desc: 'Background across MedTech, FinTech, and eCommerce' },
  { to: '/work', label: 'Work', desc: '5+ years building production full-stack systems' },
  { to: '/projects', label: 'Projects', desc: 'GenAI apps with deterministic-first design' },
  { to: '/beyond-code', label: 'Beyond Code', desc: 'Skills, education, and leadership highlights' },
  { to: '/contact', label: 'Contact', desc: 'Boston · open to relocation' },
];

export default function Home() {
  return (
    <section className="home-page" aria-labelledby="home-heading">
      <h2 id="home-heading" className="section-heading">
        Welcome
      </h2>
      <p className="home-lead">
        Full stack engineer shipping Python, React, and AWS systems in regulated and
        high-scale domains. Explore my experience, projects, and how to get in touch.
      </p>
      <div className="home-grid">
        {quickLinks.map(({ to, label, desc }) => (
          <Link key={to} to={to} className="home-card">
            <h3>{label}</h3>
            <p>{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
