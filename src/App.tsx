import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function App() {
  useEffect(() => {
    const dividers = document.querySelectorAll(".section-divider");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    dividers.forEach((d) => observer.observe(d));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />

      <Hero />

      <div className="section-divider">
        <span className="section-label">About</span>
      </div>

      <About />

      <div className="section-divider">
        <span className="section-label">Education</span>
      </div>

      <Education />

      <div className="section-divider">
        <span className="section-label">Projects</span>
      </div>

      <Projects />

      <div className="section-divider">
        <span className="section-label">Contact</span>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
