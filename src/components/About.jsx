// components/About.jsx
import React from "react";
import { MapPin, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "../data/data";

const statItems = [
  { value: "2", label: "Years Experience" },
  { value: "5-7", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
  { value: "∞", label: "Coffees Consumed" },
];

const About = () => {
  const socials = [
    { icon: Github, href: personalInfo.socials.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.socials.twitter, label: "Twitter" },
  ];

  return (
    <SectionWrapper id="about"  title="About Me">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — bio */}
        <div className="space-y-5">
          {personalInfo.bio.map((paragraph, i) => (
            <p
              key={i}
              className="font-outfit text-gray-400 text-base leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {/* Contact details */}
          <div className="pt-4 space-y-3">
            {[
              { icon: Mail, text: personalInfo.email },
              { icon: Phone, text: personalInfo.phone },
              { icon: MapPin, text: personalInfo.location },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-gray-400">
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-accent-cyan/10 border border-border-subtle">
                  <Icon size={14} className="text-accent-cyan" />
                </span>
                <span className="font-outfit text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3 pt-2">
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
        </div>

        {/* Right — stats */}
        <div className="grid grid-cols-2 gap-4">
          {statItems.map(({ value, label }) => (
            <div
              key={label}
              className="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-glow group"
            >
              <p className="font-syne font-extrabold text-4xl text-transparent bg-clip-text bg-cyan-gradient mb-1 group-hover:scale-105 transition-transform duration-300">
                {value}
              </p>
              <p className="font-outfit text-gray-400 text-sm">{label}</p>
            </div>
          ))}

          {/* "What I do" card */}
          <div className="col-span-2 p-6 rounded-xl bg-bg-card border border-border-subtle">
            <p className="font-mono text-accent-cyan text-xs mb-3">
              $ interests
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Clean Architecture",
                "Performance Optimization",
                "Open Source",
                "Developer Experience",
                "Technical Writing",
                "Mentorship",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-outfit font-medium rounded-full bg-accent-cyan/10 border border-border-subtle text-accent-cyan/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
