import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";

const links = [
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Benefícios", href: "#experience" },
  { label: "Parceiros", href: "#partners" },
  { label: "Seja Revendedor", href: "#reseller" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-md scale-150 group-hover:scale-175 transition-transform duration-500" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <Sun className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div>
            <span className="font-display font-black text-primary-foreground text-lg tracking-tight">
              ECORI
            </span>
            <span className="block font-body text-[10px] text-accent/80 tracking-[0.2em] uppercase -mt-1">
              Energia Solar
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent pb-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.ecorionline.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm text-primary bg-accent hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105"
        >
          Ecori Online
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-accent/10 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 font-body text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <a
              href="https://www.ecorionline.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 rounded-full font-display font-semibold text-sm text-primary bg-accent"
            >
              Ecori Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
