// components/Experience.jsx
import React, { useState } from "react";
import { Briefcase, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { experience } from "../data/data";

const ExperienceCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-border-subtle to-transparent" />
      <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-cyan shadow-glow" />

      <div
        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
          expanded
            ? "bg-bg-card border-accent-cyan/30 shadow-glow"
            : "bg-bg-card border-border-subtle hover:border-accent-cyan/20"
        }`}
      >
        {/* Card header — always visible */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full text-left p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-accent-cyan/10 border border-border-subtle flex-shrink-0">
                <Briefcase size={15} className="text-accent-cyan" />
              </span>
              <div>
                <h3 className="font-syne font-bold text-white text-lg leading-tight">
                  {item.role}
                </h3>
                <p className="font-outfit text-accent-cyan text-sm mt-0.5">
                  {item.company}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 border border-border-subtle text-gray-400 whitespace-nowrap">
                {item.period}
              </span>
              <span
                className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                  item.type === "Internship"
                    ? "bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                    : "bg-accent-green/10 text-accent-green border border-accent-green/20"
                }`}
              >
                {item.type}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-gray-400">
            <span className="font-outfit text-sm line-clamp-1">{item.description}</span>
            <span className="flex-shrink-0 text-accent-cyan">
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </span>
          </div>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="px-6 pb-6 border-t border-border-subtle pt-5">
            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-bg-primary border border-border-subtle text-accent-cyan/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <ul className="space-y-2.5">
              {item.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 font-outfit text-sm text-gray-400">
                  <CheckCircle2 size={14} className="text-accent-green mt-0.5 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => (
  <SectionWrapper id="experience"  title="Experience">
    <div className="max-w-2xl">
      {experience.map((item, i) => (
        <ExperienceCard key={item.id} item={item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
