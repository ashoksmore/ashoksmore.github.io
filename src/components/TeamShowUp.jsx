import { teamShowUp } from '../data/about';
import TeamValueIcon from './TeamValueIcon';

export default function TeamShowUp() {
  return (
    <section className="about-team" aria-labelledby="team-heading">
      <h2 id="team-heading" className="about-subheading">
        How I show up for your team
      </h2>
      <ul className="team-showup-grid">
        {teamShowUp.map((item) => (
          <li key={item.id}>
            <article className="team-value-card">
              <TeamValueIcon name={item.id} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
