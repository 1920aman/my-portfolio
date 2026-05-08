// components/SectionWrapper.jsx
// Reusable wrapper for all portfolio sections — handles spacing, grid bg, and heading.
import React, { useRef, useState, useEffect } from "react";

const SectionWrapper = ({ id, label, title, children, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={`relative py-24 px-6 ${className}`} ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-accent-cyan text-xs tracking-widest mb-2">
            {label}
          </p>
          <div className="flex items-center gap-5">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border-subtle to-transparent max-w-xs" />
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
