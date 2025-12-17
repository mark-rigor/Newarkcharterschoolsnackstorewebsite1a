import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/e341933b3bcd51e185864e9d6eb40d2836a38d20.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      } border-b-2 border-[#C8102E]`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Newark Charter Patriots" className="h-16 w-auto" />
            <div>
              <h1 className="font-bold text-[#003D7A]">Patriots Snack Store</h1>
              <p className="text-sm text-[#C8102E] font-semibold">Fuel Your Day 🔥</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            <a
              href="#home"
              className="px-4 py-2 rounded-lg text-[#003D7A] hover:bg-[#003D7A] hover:text-white transition-all duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#deals"
              className="px-4 py-2 rounded-lg text-[#003D7A] hover:bg-[#C8102E] hover:text-white transition-all duration-200 font-medium"
            >
              Daily Deals
            </a>
            <a
              href="#menu"
              className="px-4 py-2 rounded-lg text-[#003D7A] hover:bg-[#003D7A] hover:text-white transition-all duration-200 font-medium"
            >
              Menu
            </a>
            <a
              href="#hours"
              className="px-4 py-2 rounded-lg text-[#003D7A] hover:bg-[#C8102E] hover:text-white transition-all duration-200 font-medium"
            >
              Hours & Info
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg bg-[#003D7A] text-white hover:bg-[#002855] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
            <a
              href="#home"
              className="px-4 py-3 rounded-lg text-[#003D7A] hover:bg-[#003D7A] hover:text-white transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#deals"
              className="px-4 py-3 rounded-lg text-[#003D7A] hover:bg-[#C8102E] hover:text-white transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Daily Deals
            </a>
            <a
              href="#menu"
              className="px-4 py-3 rounded-lg text-[#003D7A] hover:bg-[#003D7A] hover:text-white transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#hours"
              className="px-4 py-3 rounded-lg text-[#003D7A] hover:bg-[#C8102E] hover:text-white transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Hours & Info
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
