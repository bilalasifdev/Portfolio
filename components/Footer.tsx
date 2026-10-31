import { navItems, site, socialLinks } from "@/data/content";

const footerLinks = navItems.filter((item) => item.id !== "about" && item.id !== "journey");

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true">BA</span>
          <div>
            <strong>{site.name}</strong>
            <small>{site.role}</small>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>

        <div className="footer-social">
          {socialLinks.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a
                className="social-link"
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {link.icon}
              </a>
            );
          })}
        </div>

        <a className="footer-cv" href={site.cv} download={site.cvFileName}>
          Download CV <span aria-hidden="true">↓</span>
        </a>

        <div className="footer-bottom">
          <span>© {site.year} {site.name}</span>
          <span className="footer-status"><i aria-hidden="true" />Available for freelance work</span>
        </div>
      </div>
    </footer>
  );
}
