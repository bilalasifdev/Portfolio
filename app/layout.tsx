import type { Metadata, Viewport } from "next";
import "@fontsource-variable/roboto";
import "@fontsource/birthstone/400.css";
import "@fontsource/mea-culpa/400.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Muhammad Bilal Asif — Full-Stack Web Developer";
const description =
  "Portfolio of Muhammad Bilal Asif, a full-stack web developer from Pakistan building responsive, high-performance websites and web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Muhammad Bilal Asif" }],
  keywords: ["Muhammad Bilal Asif", "full-stack web developer", "React", "Next.js", "portfolio", "Pakistan"],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Muhammad Bilal Asif",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020812",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
