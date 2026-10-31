import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <h2 id="skills-title" className="skills-title">
          My <em>skills</em>
        </h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span>{group.number}</span>
            </div>
            <h3>{group.title}</h3>
            <div className="skill-copy">
              <p>{group.description}</p>
              <span className="skill-detail">{group.detail}</span>
            </div>
            <ul className="skill-list" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
