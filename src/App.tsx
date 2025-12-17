import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specials } from "./components/Specials";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  // Smooth scrolling
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Specials />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}