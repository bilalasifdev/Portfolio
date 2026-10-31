import { socialLinks } from "@/data/content";

export default function SocialRail() {
  return (
    <nav className="social-rail" aria-label="Social links">
      <span className="rail-line" aria-hidden="true" />
      <div className="social-links">
        {socialLinks.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <a
              className="social-link"
              href={link.href}
              key={link.label}
              aria-label={link.label}
              title={link.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
