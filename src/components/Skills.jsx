// components/Skills.jsx
import React, { useRef, useState, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { skills } from "../data/data";

const CATEGORY_COLORS = {
  Frontend: { bar: "bg-accent-cyan", text: "text-accent-cyan", border: "border-accent-cyan/30" },
  Backend: { bar: "bg-accent-blue", text: "text-accent-blue", border: "border-accent-blue/30" },
  DevOps: { bar: "bg-accent-purple", text: "text-accent-purple", border: "border-accent-purple/30" },
  Tools: { bar: "bg-accent-green", text: "text-accent-green", border: "border-accent-green/30" },
};

const SkillBar = ({ name, level, color, animate }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1.5">
      <span className="font-outfit text-sm text-gray-300">{name}</span>
      <span className={`font-mono text-xs ${color.text}`}>{level}%</span>
    </div>
    <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden border border-border-subtle">
      <div
        className={`h-full rounded-full ${color.bar} transition-all duration-1000 ease-out`}
        style={{
          width: animate ? `${level}%` : "0%",
          boxShadow: animate ? `0 0 8px currentColor` : "none",
        }}
      />
    </div>
  </div>
);

const SkillCategory = ({ category, items }) => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const color = CATEGORY_COLORS[category] || CATEGORY_COLORS.Tools;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl bg-bg-card border ${color.border} hover:shadow-glow transition-all duration-300`}
    >
      <h3 className={`font-syne font-bold text-lg ${color.text} mb-5 flex items-center gap-2`}>
        <span className="font-mono text-xs opacity-60">./</span>
        {category}
      </h3>
      {items.map((skill) => (
        <SkillBar key={skill.name} {...skill} color={color} animate={animate} />
      ))}
    </div>
  );
};

const Skills = () => (
  <SectionWrapper id="skills"  title="Tech Stack">
    <div className="grid sm:grid-cols-2 gap-5">
      {Object.entries(skills).map(([category, items]) => (
        <SkillCategory key={category} category={category} items={items} />
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
