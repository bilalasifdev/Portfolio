import { journeySteps } from "@/data/content";

export default function Journey() {
  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="journey-heading">
        <h2 id="journey-title" className="journey-title">
          My <em>journey</em>
        </h2>
      </div>

      <ol className="journey-story">
        {journeySteps.map((step) => (
          <li className="journey-step" key={step.number}>
            <div className="journey-step-number">{step.number}</div>
            <i aria-hidden="true" />
            <div className="journey-step-copy">
              <span>{step.period}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
