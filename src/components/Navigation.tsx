import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-amber-200/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-9xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-serif italic text-amber-100 hover:text-amber-200 transition-colors"
          >
            YK.
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("work")}
              className="text-xs tracking-[0.2em] text-gray-300 hover:text-amber-200 transition-colors"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs tracking-[0.2em] text-gray-300 hover:text-amber-200 transition-colors"
            >
              ABOUT
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 border border-amber-200/30 text-amber-100 text-xs tracking-[0.2em] hover:bg-amber-200/10 transition-all duration-300"
            >
              CONTACT
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-amber-200"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-2xl tracking-[0.2em] text-gray-300 hover:text-amber-200 transition-colors"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl tracking-[0.2em] text-gray-300 hover:text-amber-200 transition-colors"
            >
              ABOUT
            </button>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3 border border-amber-200/30 text-amber-100 text-sm tracking-[0.2em] hover:bg-amber-200/10 transition-all duration-300"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
