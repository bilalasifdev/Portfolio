'use client';

import { useEffect, useState } from "react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-bilal-asif-a40044362",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.1 8.45H3.4V20h2.7V8.45ZM4.75 4A1.63 1.63 0 1 0 4.75 7.25 1.63 1.63 0 0 0 4.75 4ZM20.6 13.38c0-3.48-1.86-5.1-4.34-5.1-2 0-2.9 1.1-3.4 1.87V8.45h-2.7V20h2.7v-6.4c0-1.69.31-3.32 2.41-3.32 2.08 0 2.1 1.93 2.1 3.43V20h2.7l.01-6.62Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:m.bilalkhan1907@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
];

const projects = [
  {
    name: "Aethelgard Atelier",
    category: "Full-stack e-commerce",
    year: "2026",
    description: "A full-stack e-commerce platform with product browsing, cart, checkout, customer accounts, orders, and an admin dashboard. Currently in progress.",
    tags: ["React", "TypeScript", "Express.js", "Tailwind CSS", "Stripe", "PayPal"],
    art: "orbit",
    image: "/images/aethelgard-atelier.png",
    link: "https://github.com/YOUR_USERNAME/aethelgard-atelier",
  },
  {
    name: "ForgeMind AI v2",
    category: "AI / LLM engineering",
    year: "2026",
    description: "A custom AI/LLM system covering dataset processing, tokenization, training, inference, memory, and agent components. Currently in progress.",
    tags: ["Python", "PyTorch", "BPE Tokenization", "REST API"],
    art: "sun",
    status: "In Progress",
    image: "/images/forgemind-ai.svg",
    link: "https://github.com/YOUR_USERNAME/forgemind-ai-v2",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that feel fast, intentional, and effortless to use.",
    detail: "Building responsive layouts that adapt across devices, with DOM-driven interactivity and reusable React components.",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Reliable systems and APIs that keep digital products moving.",
    detail: "Building Express.js APIs with authentication, payment integration, inventory logic, and backend API testing.",
    skills: ["Express.js", "REST APIs", "Authentication", "Stripe & PayPal"],
  },
  {
    number: "03",
    title: "AI & Python",
    description: "Hands-on work behind how language models are built and served.",
    detail: "Working on dataset processing, BPE tokenization, training, and inference for a custom LLM project in Python and PyTorch.",
    skills: ["Python", "PyTorch", "Tokenization", "Inference"],
  },
  {
    number: "04",
    title: "Tools & Others",
    description: "The tools and practices that keep development clear and consistent.",
    detail: "Using Git and GitHub for version control, TypeScript and Tailwind CSS for clean, maintainable interfaces.",
    skills: ["Git & GitHub", "TypeScript", "Tailwind CSS", "API testing"],
  },
];

const journeySteps = [
  { number: "01", period: "2023 – 2025", title: "Matriculation", text: "Completed matriculation at IJK Schooling and Coaching System." },
  { number: "02", period: "2025 – 2026", title: "Full-Stack Web Development", text: "Completed the Full-Stack Web Development program at Saylani Mass IT Training (SMIT), building a foundation in the tools behind modern web products." },
  { number: "03", period: "2026 – Present", title: "Studying and building", text: "Studying Intermediate at Jamia Millia Govt Degree College while building Aethelgard Atelier, a full-stack e-commerce platform, and ForgeMind AI v2, a custom LLM project." },
  { number: "04", period: "The next chapter", title: "Open to possibilities", text: "Ready to collaborate, keep learning, and build digital products that make an idea feel real." },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentProject, setCurrentProject] = useState(0);
  const [contactSent, setContactSent] = useState(false);
  const [contactSending, setContactSending] = useState(false);
  const [contactError, setContactError] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "work", "skills", "journey", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-12% 0px -12% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <main className="hero" id="hero">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Muhammad Bilal Asif home">
          <svg className="brand-icon" viewBox="0 0 32 32" aria-hidden="true">
            <path d="m16 3 11 6.5v13L16 29 5 22.5v-13L16 3Z" />
            <path d="m16 8 6.5 3.8v7.4L16 23l-6.5-3.8v-7.4L16 8Z" />
            <path d="M27 9.5 22.5 13M5 9.5 9.5 13" />
          </svg>
          <span className="brand-name">Muhammad Bilal Asif</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className={`nav-bar ${activeSection === "hero" ? "is-active" : ""}`} href="#hero" aria-label="Home" aria-current={activeSection === "hero" ? "page" : undefined}><span /></a>
          <a className={`nav-bar ${activeSection === "about" ? "is-active" : ""}`} href="#about" aria-label="About" aria-current={activeSection === "about" ? "page" : undefined}><span /></a>
          <a className={`nav-bar ${activeSection === "work" ? "is-active" : ""}`} href="#work" aria-label="Selected work" aria-current={activeSection === "work" ? "page" : undefined}><span /></a>
          <a className={`nav-bar ${activeSection === "skills" ? "is-active" : ""}`} href="#skills" aria-label="Skills" aria-current={activeSection === "skills" ? "page" : undefined}><span /></a>
          <a className={`nav-bar ${activeSection === "journey" ? "is-active" : ""}`} href="#journey" aria-label="Journey" aria-current={activeSection === "journey" ? "page" : undefined}><span /></a>
          <a className={`nav-bar ${activeSection === "contact" ? "is-active" : ""}`} href="#contact" aria-label="Contact" aria-current={activeSection === "contact" ? "page" : undefined}><span /></a>
        </nav>

        <a className="header-contact" href="#contact">Let&apos;s Work Together <span aria-hidden="true">↗</span></a>
      </header>

      <section className="intro" aria-labelledby="hero-title">
        <p className="availability"><span className="live-dot" aria-hidden="true" />Available for freelancing</p>
        <h1 id="hero-title" className="hero-title">
          <span className="muhammad">Muhammad</span>
          <span className="bilal-asif">Bilal Asif</span>
        </h1>
        <p className="role">Full-Stack Web Developer</p>
        <p className="summary">
          I design and develop responsive, high-performance websites and web applications, combining clean code, thoughtful user experiences, and modern technologies to turn ideas into meaningful digital products.
        </p>
        <p className="location-status">Based in Pakistan <span /> Available worldwide</p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">View My Work <span aria-hidden="true">↗</span></a>
          <a className="cv-action" href="/Muhammad_Bilal_Asif.pdf" download="MuhammadBilalAsif.pdf">Download CV <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <button className="scroll-indicator" type="button" aria-label="Scroll to About" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
        <svg className="mouse-icon" viewBox="0 0 24 38">
          <rect x="4" y="1.5" width="16" height="25" rx="8" />
          <path d="M12 6v6" />
        </svg>
        <svg className="arrow-icon" viewBox="0 0 16 20">
          <path d="M8 1v15" />
          <path d="m3 11 5 5 5-5" />
        </svg>
      </button>
      </main>

      <nav className="social-rail" aria-label="Social links">
        <span className="rail-line" aria-hidden="true" />
        <div className="social-links">
          {socialLinks.map((link) => (
            <a className="social-link" href={link.href} key={link.label} aria-label={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <section className="home-about" id="about" aria-labelledby="home-about-title">
        <div className="home-about-copy">
          <p className="about-kicker"><span className="live-dot" aria-hidden="true" />A little about me</p>
          <h2 id="home-about-title" className="home-about-title"><span>Building with</span><em>clarity &amp; intent.</em></h2>
          <p className="about-lede">I&apos;m Muhammad Bilal Asif, a full-stack web developer focused on creating digital experiences that feel as considered as they look.</p>
          <p className="about-body">I have a solid foundation in HTML and CSS and build responsive layouts that adapt seamlessly across devices. I'm expanding my JavaScript skills to improve interactivity and performance, and I enjoy turning design concepts into clean, maintainable code while continuously refining my frontend craft.</p>
          <a className="primary-action" href="#about">Explore About Me <span aria-hidden="true">↗</span></a>
        </div>
        <div className="home-about-visual" aria-hidden="true">
          <img className="home-about-pfp" src="/images/profile.png" alt="Muhammad Bilal Asif" />
          <span className="home-about-mark">BA</span>
        </div>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="work-heading">
          <div>
            <p className="about-kicker"><span className="live-dot" aria-hidden="true" />Selected work</p>
            <h2 id="work-title" className="work-title">Ideas made <em>visible.</em></h2>
          </div>
          <p className="work-intro">A small selection of digital products shaped through strategy, design, and thoughtful engineering.</p>
        </div>

        <div className="project-carousel" aria-roledescription="carousel" aria-label="Selected projects">
          <button className="carousel-arrow carousel-arrow--prev" type="button" aria-label="Previous project" onClick={() => setCurrentProject((current) => (current + projects.length - 1) % projects.length)}><span aria-hidden="true">←</span></button>
          <div className="project-stage">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const project = projects[(currentProject + offset + projects.length) % projects.length];
              const artClass = project.art === "orbit" ? "project-card--one" : project.art === "window" ? "project-card--two" : "project-card--three";
              return (
                <article className={`project-card project-card--slot-${offset} ${artClass}`} key={`${currentProject}-${offset}`} aria-hidden={offset !== 0}>
                  <div className="project-art" aria-hidden="true">
                    {project.image ? (
                      <img className="project-art-image" src={project.image} alt="" />
                    ) : (
                      <>
                        {project.art === "orbit" && <><span className="art-orbit" /><span className="art-core" /></>}
                        {project.art === "window" && <><span className="art-window" /><span className="art-line" /></>}
                        {project.art === "sun" && <><span className="art-sun" /><span className="art-grid" /></>}
                      </>
                    )}
                    {project.status && <span className="project-status-badge">{project.status}</span>}
                  </div>
                  {offset === 0 && (
                    <a
                      className="project-link-overlay"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name}`}
                    >
                      <span>View project ↗</span>
                    </a>
                  )}
                  <div className="project-info">
                    <div className="project-meta"><span>{String((projects.indexOf(project) + 1)).padStart(2, "0")} / {project.category}</span><span>{project.year}</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              );
            })}
          </div>
          <button className="carousel-arrow carousel-arrow--next" type="button" aria-label="Next project" onClick={() => setCurrentProject((current) => (current + 1) % projects.length)}><span aria-hidden="true">→</span></button>
        </div>
      </section>

      <section className="skills-section" id="skills" aria-labelledby="skills-title">
        <div className="skills-heading">
          <div>
            <p className="about-kicker"><span className="live-dot" aria-hidden="true" />Capabilities</p>
            <h2 id="skills-title" className="skills-title">Built for <em>what&apos;s next.</em></h2>
          </div>
          <p className="skills-intro">A focused toolkit for turning ambitious ideas into clear, resilient digital experiences.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number} data-number={group.number} tabIndex={0}>
              <div className="skill-card-top"><span>{group.number}</span><i /></div>
              <h3>{group.title}</h3>
              <div className="skill-copy"><p>{group.description}</p><span className="skill-detail">{group.detail}</span></div>
              <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-footer"><span />Always learning, always refining <strong>—</strong> currently building a full-stack e-commerce platform and an AI/LLM project.</p>
      </section>

      <section className="journey-section" id="journey" aria-labelledby="journey-title">
        <div className="journey-heading">
          <div>
            <p className="about-kicker"><span className="live-dot" aria-hidden="true" />The journey</p>
            <h2 id="journey-title" className="journey-title">Still becoming <em>better.</em></h2>
          </div>
          <p className="journey-intro">A growing path shaped by curiosity, practice, and the desire to build work that matters.</p>
        </div>
        <div className="journey-line" aria-hidden="true" />
        <div className="journey-list journey-story">
          {journeySteps.map((step) => (
            <article className="journey-step" key={step.number} tabIndex={0}>
              <div className="journey-step-number">{step.number}</div>
              <div className="journey-step-copy"><span>{step.period}</span><h3>{step.title}</h3><p>{step.text}</p></div>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
        <p className="journey-footer"><span />Every step is part of the build.</p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p className="about-kicker"><span className="live-dot" aria-hidden="true" />Have an idea?</p>
          <h2 id="contact-title" className="contact-title">Let&apos;s work <em>together.</em></h2>
          <p className="contact-intro">Tell me a little about what you&apos;re building. I&apos;ll get back to you and we can turn the first thought into a clear next step.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-aside">
            <p className="contact-label">Start a conversation</p>
            <a href="mailto:m.bilalkhan1907@gmail.com" className="contact-email">m.bilalkhan1907@gmail.com <span aria-hidden="true">↗</span></a>
            <p className="contact-note">Based in Pakistan<br />Available worldwide</p>
          </div>
          <form
            className="contact-form"
            onSubmit={async (event) => {
              event.preventDefault();
              setContactError(false);
              setContactSending(true);
              const form = event.currentTarget;
              try {
                const response = await fetch("https://formspree.io/f/xyezplge", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: new FormData(form),
                });
                if (!response.ok) throw new Error("Request failed");
                setContactSent(true);
                form.reset();
              } catch {
                setContactError(true);
              } finally {
                setContactSending(false);
              }
            }}
          >
            <label><span>Your name</span><input name="name" type="text" placeholder="Muhammad Bilal" required /></label>
            <label><span>Email address</span><input name="email" type="email" placeholder="you@example.com" required /></label>
            <label className="contact-form-wide"><span>What are we building?</span><textarea name="message" rows={4} placeholder="Tell me about your idea..." required /></label>
            <button className="contact-submit" type="submit" disabled={contactSending}>
              {contactSending ? "Sending…" : contactSent ? "Message sent ✓" : "Send message ↗"}
            </button>
            {contactSent && <p className="contact-success" role="status">Thanks—your message has been sent. I&apos;ll get back to you soon.</p>}
            {contactError && <p className="contact-success" role="status">Something went wrong. Please email me directly instead.</p>}
          </form>
        </div>
        <footer className="site-footer">
          <div className="footer-brand"><span className="footer-mark">BA</span><div><strong>Muhammad Bilal Asif</strong><small>Full-Stack Web Developer</small></div></div>
          <nav className="footer-nav" aria-label="Footer navigation"><a href="#hero">Home</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
          <a className="footer-cv" href="/Muhammad_Bilal_Asif.pdf" download="MuhammadBilalAsif.pdf">Download CV <span aria-hidden="true">↓</span></a>
          <div className="footer-bottom"><span>© 2026 Muhammad Bilal Asif</span><span className="footer-status"><i />Available for freelance work</span><span>Built with clarity &amp; intent.</span></div>
        </footer>
      </section>
    </div>
  );
}
