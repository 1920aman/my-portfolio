// components/Navbar.jsx
// Sticky navigation bar with active-section highlighting and mobile hamburger menu.
import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  /* Add backdrop when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth scroll helper */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-secondary/90 backdrop-blur-md border-b border-border-subtle shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-border-subtle flex items-center justify-center group-hover:border-accent-cyan transition-colors duration-300">
            <Terminal size={15} className="text-accent-cyan" />
          </span>
          <span className="font-syne font-bold text-white text-lg tracking-tight">
            Dev<span className="text-accent-cyan">.</span>Banik
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 font-outfit text-sm font-medium transition-all duration-300 rounded-md ${
                  activeSection === href
                    ? "text-accent-cyan"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === href && (
                  <span className="absolute inset-0 bg-accent-cyan/10 rounded-md border border-border-subtle" />
                )}
                <span className="relative">{label}</span>
              </button>
            </li>
          ))}
          {/* <li>
            <a
              href="/resume.pdf"
              download
              className="ml-3 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-outfit text-sm font-medium rounded-md hover:bg-accent-cyan/20 hover:border-accent-cyan/60 transition-all duration-300"
            >
              Resume ↗
            </a>
          </li> */}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border-subtle text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-bg-secondary/95 backdrop-blur-md border-b border-border-subtle`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`w-full text-left px-4 py-3 rounded-md font-outfit text-sm font-medium transition-all duration-200 ${
                  activeSection === href
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          {/* <li className="pt-2">
            <a
              href="/resume.pdf"
              download
              className="block text-center px-4 py-3 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-outfit text-sm font-medium rounded-md"
            >
              Download Resume
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
