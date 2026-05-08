// components/Footer.jsx
import React from "react";
import { Github, Linkedin, Twitter, Terminal, Heart } from "lucide-react";
import { personalInfo } from "../data/data";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-border-subtle flex items-center justify-center">
                <Terminal size={15} className="text-accent-cyan" />
              </span>
              <span className="font-syne font-bold text-white text-lg">
                Dev<span className="text-accent-cyan">.</span>Banik
              </span>
            </div>
            <p className="font-outfit text-gray-400 text-sm leading-relaxed">
              Building the web, one component at a time. Open to collaboration and new opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-xs text-accent-cyan tracking-widest mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="font-outfit text-sm text-gray-400 hover:text-accent-cyan transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-mono text-xs text-accent-cyan tracking-widest mb-4">
              CONNECT
            </h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-subtle text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-outfit text-sm text-gray-400 hover:text-accent-cyan transition-colors duration-200"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-600">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
