"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/content";

export default function Header() {
  const [active, setActive] = useState<string>(navItems[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);

      const probe = window.innerHeight * 0.4;
      let current: string = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= probe) current = item.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="#hero" aria-label="Muhammad Bilal Asif — back to top" onClick={() => setMenuOpen(false)}>
        <svg className="brand-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path d="m16 3 11 6.5v13L16 29 5 22.5v-13L16 3Z" />
          <path d="m16 8 6.5 3.8v7.4L16 23l-6.5-3.8v-7.4L16 8Z" />
          <path d="M27 9.5 22.5 13M5 9.5 9.5 13" />
        </svg>
        <span className="brand-name">Muhammad Bilal Asif</span>
      </a>

      <nav id="site-nav" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`nav-link${active === item.id ? " is-active" : ""}`}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-contact" href="#contact">
          Let&apos;s work together <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
