import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/about", label: "About", key: "about" },
  { href: "/gallery", label: "Gallery", key: "gallery" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function Navbar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-brandDark/90 py-3 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-6 mx-auto lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src="/logo.jpg"
                className="object-contain w-11 h-11 rounded-full border border-primary/20 p-0.5 transition-transform duration-500 group-hover:rotate-[360deg]"
                alt="EventBlizz Logo"
              />
              {/* Subtle glow behind logo */}
              <div className="absolute inset-0 transition-opacity rounded-full opacity-0 bg-primary/20 blur-lg -z-10 group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.25em] text-white leading-none">
                EVENT <span className="font-bold text-primary">BLIZZ</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-gray-400 font-light mt-1">
                Blissful Experiences
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {LINKS.map((link) => (
                <li key={link.key} className="relative group/link">
                  <Link
                    href={link.href}
                    className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
                      active === link.key
                        ? "text-primary"
                        : "text-white/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {/* Underline Animation */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                      active === link.key
                        ? "w-full"
                        : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="p-2 transition-colors rounded-full text-primary hover:bg-white/5 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden bg-brandDark/95 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden ${
            menuOpen
              ? "max-h-[100vh] border-b border-primary/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 py-16">
            {LINKS.map((link, idx) => (
              <li
                key={link.key}
                className={`transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-[0.5em] ${
                    active === link.key ? "text-primary" : "text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
