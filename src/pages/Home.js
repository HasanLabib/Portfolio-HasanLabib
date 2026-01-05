import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollUtils";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollProgress from "../components/ScrollProgress";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.state && location.state.section;
    if (section) {
      // Delay to ensure sections are rendered before scrolling
      const t = setTimeout(() => scrollToSection(section), 100);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  return (
    <div>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
