// components/Projects.jsx
import React, { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/data";

const ProjectCard = ({ project, featured }) => (
  <div
    className={`group relative rounded-2xl overflow-hidden bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
      featured ? "flex flex-col" : ""
    }`}
  >
    {/* Featured badge */}
    {project.featured && (
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-2.5 py-1 bg-accent-cyan/90 text-bg-primary rounded-full text-xs font-syne font-bold">
        <Star size={10} fill="currentColor" />
        Featured
      </div>
    )}

    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.classList.add("bg-gradient-to-br", "from-bg-secondary", "to-bg-primary");
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />

      {/* Action links — revealed on hover */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-primary/80 border border-border-subtle text-white hover:text-accent-cyan hover:border-accent-cyan/40 backdrop-blur-sm transition-all duration-200"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-bg-primary/80 border border-border-subtle text-white hover:text-accent-cyan hover:border-accent-cyan/40 backdrop-blur-sm transition-all duration-200"
            aria-label="Live demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-syne font-bold text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-outfit text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-bg-primary border border-border-subtle text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <SectionWrapper id="projects"  title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {others.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border-subtle text-gray-400 font-outfit text-sm rounded-lg hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
          >
            {showAll ? "Show Less" : `Show ${others.length} More Projects`}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
