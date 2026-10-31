import Header from "@/components/Header";
import SocialRail from "@/components/SocialRail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <SocialRail />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
