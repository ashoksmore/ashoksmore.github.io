import SectionHeading from '../components/SectionHeading';
import { profile, RESUME_URL } from '../data/content';

export default function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading">Contact</SectionHeading>
      <p className="contact-intro">
        Open to full-stack and AI-forward roles at MedTech, FinTech, and eCommerce startups.
        {profile.relocationNote}.
      </p>
      <ul className="contact-list">
        <li>
          <span className="contact-label">Location</span>
          <span>
            {profile.location} · {profile.relocationNote}
          </span>
        </li>
        <li>
          <span className="contact-label">Phone</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </li>
        <li>
          <span className="contact-label">Email</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <span className="contact-label">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/ashok-more
          </a>
        </li>
        <li>
          <span className="contact-label">GitHub</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/ashoksmore
          </a>
        </li>
        <li>
          <span className="contact-label">Resume</span>
          <a href={RESUME_URL}>Download PDF</a>
        </li>
      </ul>
      <div className="contact-actions">
        <a className="btn btn-filled" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="btn" href={RESUME_URL}>
          Download Resume
        </a>
      </div>
    </section>
  );
}
