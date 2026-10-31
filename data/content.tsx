import type { ReactNode } from "react";

/* ==========================================================================
   Site content — edit everything about you in this one file.
   ========================================================================== */

export const site = {
  name: "Muhammad Bilal Asif",
  role: "Full-Stack Web Developer",
  email: "m.bilalkhan1907@gmail.com",
  github: "https://github.com/bilalasifdev",
  linkedin: "https://www.linkedin.com/in/muhammad-bilal-asif-a40044362",
  cv: "/Muhammad_Bilal_Asif.pdf",
  cvFileName: "MuhammadBilalAsif.pdf",
  /** Formspree endpoint that receives contact-form messages */
  formEndpoint: "https://formspree.io/f/xyezplge",
  year: 2026,
} as const;

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export type SocialLink = { label: string; href: string; icon: ReactNode };

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: site.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.1 8.45H3.4V20h2.7V8.45ZM4.75 4A1.63 1.63 0 1 0 4.75 7.25 1.63 1.63 0 0 0 4.75 4ZM20.6 13.38c0-3.48-1.86-5.1-4.34-5.1-2 0-2.9 1.1-3.4 1.87V8.45h-2.7V20h2.7v-6.4c0-1.69.31-3.32 2.41-3.32 2.08 0 2.1 1.93 2.1 3.43V20h2.7l.01-6.62Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
];

export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Small label shown in the preview frame's top bar */
  frameLabel: string;
  /** Accent colour used for this project's glow, line and badge */
  accent: string;
  status?: string;
  /** Live demo or repository. Leave out until the project has one. */
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Aethelgard Atelier",
    category: "Full-stack e-commerce",
    year: "2026",
    description:
      "A full-stack e-commerce platform with product browsing, cart, checkout, customer accounts, orders, and an admin dashboard.",
    image: "/images/aethelgard-atelier.webp",
    imageAlt: "Aethelgard Atelier storefront home page",
    frameLabel: "Storefront preview",
    accent: "#d8b46a",
    status: "In progress",
  },
  {
    name: "ForgeMind AI v2",
    category: "AI / LLM engineering",
    year: "2026",
    description:
      "An experimental, from-scratch language model focused on full-stack web development. I'm exploring how LLMs work end to end — dataset preparation, tokenization, training, inference, memory, and agent components — building it with AI-assisted development while I learn.",
    image: "/images/forgemind-ai.svg",
    imageAlt: "Neural network illustration for ForgeMind AI v2",
    frameLabel: "Concept illustration",
    accent: "#7fd0ff",
    status: "In progress",
  },
];

export type SkillGroup = { number: string; title: string; description: string; detail: string; skills: string[] };
export type JourneyStep = { number: string; period: string; title: string; text: string };

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that feel fast, intentional, and effortless to use.",
    detail: "Building responsive layouts that adapt across devices, with JavaScript interactivity and reusable React and Next.js components.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Reliable systems and APIs that keep digital products moving.",
    detail: "Building Node.js and Express.js servers with REST APIs and user authentication.",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    number: "03",
    title: "Databases",
    description: "Data that is organised, dependable, and easy to query.",
    detail: "Working with both NoSQL and SQL databases to fit the needs of different applications.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    number: "04",
    title: "Tools & Integrations",
    description: "The tools and services that keep development clear and consistent.",
    detail: "Using Git and GitHub for version control, Postman to test APIs, Vercel to deploy, and Stripe and PayPal for payments.",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Stripe", "PayPal"],
  },
];

export const journeySteps: JourneyStep[] = [
  { number: "01", period: "2024 – 2025", title: "Matriculation", text: "Completed matriculation at IJK Schooling and Coaching System." },
  { number: "02", period: "Apr 2025 – Jul 2026", title: "Full-Stack Web Development", text: "Completed the Full-Stack Web Development course at Saylani Mass IT Training (SMIT), building a foundation in the tools behind modern web products." },
  { number: "03", period: "2026 – Present", title: "Studying and building", text: "Studying Intermediate at Jamia Millia Govt Degree College while building Aethelgard Atelier, a full-stack e-commerce platform, and ForgeMind AI v2, an experimental language model, to sharpen my skills." },
  { number: "04", period: "The next chapter", title: "Open to possibilities", text: "Ready to collaborate, keep learning, and build digital products that make an idea feel real." },
];
