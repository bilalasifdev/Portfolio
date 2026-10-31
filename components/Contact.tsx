import { site } from "@/data/content";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-heading">
        <h2 id="contact-title" className="contact-title">
          Get in <em>touch</em>
        </h2>
        <p className="contact-intro">
          Tell me a little about what you&apos;re building. I&apos;ll get back to you and we can turn the first thought
          into a clear next step.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-aside">
          <p className="contact-label">Start a conversation</p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email} <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">
            Based in Pakistan
            <br />
            Available worldwide
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
