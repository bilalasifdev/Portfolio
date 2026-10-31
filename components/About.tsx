import { site } from "@/data/content";

export default function About() {
  return (
    <section className="home-about" id="about" aria-labelledby="about-title">
      <div className="home-about-copy">
        <h2 id="about-title" className="home-about-title">
          About <em>me</em>
        </h2>
        <p className="about-lede">
          I&apos;m {site.name}, a full-stack web developer focused on creating digital experiences that feel as
          considered as they look.
        </p>
        <p className="about-body">
          I build full-stack web applications with React, Next.js, Node.js, and Express, backed by MongoDB, MySQL,
          PostgreSQL, or Firebase. After completing the Full-Stack Web Development course at SMIT, I&apos;m sharpening
          my skills by building real projects and turning design ideas into clean, responsive, maintainable code.
        </p>
        <a className="primary-action" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="home-about-visual">
        <img
          className="home-about-pfp"
          src="/images/profile.webp"
          alt={`Portrait of ${site.name}`}
          width={900}
          height={1350}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
