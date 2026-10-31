import { site } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="intro">
        <p className="availability">
          <span className="live-dot" aria-hidden="true" />
          Available for freelancing
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="muhammad">Muhammad</span>
          <span className="bilal-asif">Bilal Asif</span>
        </h1>
        <p className="role">{site.role}</p>
        <p className="summary">
          I design and develop responsive, high-performance websites and web applications, combining clean code,
          thoughtful user experiences, and modern technologies to turn ideas into meaningful digital products.
        </p>
        <p className="location-status">
          Based in Pakistan <span aria-hidden="true" /> Available worldwide
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            View my work <span aria-hidden="true">↗</span>
          </a>
          <a className="cv-action" href={site.cv} download={site.cvFileName}>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <a className="scroll-indicator" href="#about" aria-label="Scroll to About">
        <svg className="mouse-icon" viewBox="0 0 24 38" aria-hidden="true">
          <rect x="4" y="1.5" width="16" height="25" rx="8" />
          <path d="M12 6v6" />
        </svg>
        <svg className="arrow-icon" viewBox="0 0 16 20" aria-hidden="true">
          <path d="M8 1v15" />
          <path d="m3 11 5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}
