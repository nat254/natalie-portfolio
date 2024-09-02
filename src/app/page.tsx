"use client";
import "@/app/page.css";
import HeroSection from "../components/HeroSection";
import Talents from "../components/Talents";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="talents">
        <Talents />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
