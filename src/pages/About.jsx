import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading">About</SectionHeading>
      <p>
        Full stack software engineer with 5+ years building and scaling production systems
        in Python, React, Java, and AWS across <strong>MedTech</strong>,{' '}
        <strong>FinTech</strong>, and <strong>eCommerce</strong>—from clinical analytics
        and regulated health data at Medsix, to brokerage APIs and compliance-heavy finance
        at DriveWealth, to high-volume marketplace and logistics platforms at Ingram Micro.
        Comfortable joining early-stage MedTech or FinTech teams with 0→1 ownership. I ship
        ML/AI in production (deterministic patterns, RAG-style grounding), run tight code
        review for AI-generated changes, and partner across teams for quality.
      </p>
    </section>
  );
}
