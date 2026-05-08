// components/Education.jsx
import React from "react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/data";

const EducationCard = ({ item, index }) => (
  <div
    className="relative pl-8 pb-12 last:pb-0"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-border-subtle to-transparent" />

    {/* Timeline dot */}
    <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-cyan shadow-glow" />

    <div className="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-glow group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {item.gpa ? (
              <GraduationCap size={16} className="text-accent-cyan flex-shrink-0" />
            ) : (
              <Award size={16} className="text-accent-purple flex-shrink-0" />
            )}
            <h3 className="font-syne font-bold text-white text-lg">{item.degree}</h3>
          </div>
          <p className="font-outfit text-accent-cyan text-sm">{item.institution}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 border border-border-subtle text-gray-400">
            {item.period}
          </span>
          {item.gpa && (
            <p className="font-mono text-xs text-accent-green mt-1.5">CGPA {item.gpa}</p>
          )}
        </div>
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        {item.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-gray-400 font-outfit text-sm">
            <CheckCircle2 size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Education = () => (
  <SectionWrapper id="education"  title="Education">
    <div className="max-w-2xl">
      {education.map((item, i) => (
        <EducationCard key={item.id} item={item} index={i} />
      ))}
    </div>
  </SectionWrapper>
);

export default Education;
