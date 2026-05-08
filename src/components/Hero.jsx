// components/Hero.jsx
// Full-viewport hero with animated greeting, role typewriter, and CTA buttons.
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, ArrowDown, Download } from "lucide-react";
import { personalInfo } from "../data/data";

const ROLES = [
  "Full-Stack Developer",
  "React Specialist",
  "Open-Source Contributor",
  "Modern Frontend Engineer",
  "API Architect",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Entrance animation */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ backgroundSize: "50px 50px" }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent-green/30 bg-accent-green/10">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-mono text-xs text-accent-green tracking-widest uppercase">
              {personalInfo.contactInfo?.availableForWork !== false
                ? "Available for work"
                : "Currently employed"}
            </span>
          </div>

          {/* Greeting */}
          <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">
            Hi there, I'm
          </p>

          {/* Name */}
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4">
            {personalInfo.name.split(" ")[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-cyan-gradient">
              {personalInfo.name.split(" ")[1]}
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-8 mb-6">
            <p className="font-mono text-gray-300 text-lg">
              <span className="text-accent-cyan">&gt;</span>{" "}
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-5 bg-accent-cyan align-middle ml-0.5 animate-pulse" />
            </p>
          </div>

          {/* Tagline */}
          <p className="font-outfit text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
            <button
              onClick={() => scrollTo("projects")}
              className="group w-full sm:w-auto px-7 py-3.5 bg-accent-cyan text-bg-primary font-syne font-bold text-sm rounded-lg hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border-subtle text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/20 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-accent-cyan/10" />

            {/* Glow */}
            <div className="absolute inset-6 rounded-full bg-accent-cyan/10 blur-xl" />

            {/* Photo */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-accent-cyan/30 shadow-glow">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    personalInfo.name
                  )}&background=0d1321&color=22d3ee&size=256`;
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-bg-card border border-border-subtle rounded-lg shadow-card">
              <p className="font-mono text-xs text-accent-cyan">
                &lt;/1 yr xp&gt;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-accent-cyan transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-accent-cyan" />
      </button>
    </section>
  );
};

export default Hero;
