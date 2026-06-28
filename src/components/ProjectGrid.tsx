import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import ClipReveal from "./ClipReveal";
import MagneticElement from "./MagneticElement";

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id); // Default expand the first project!
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-black border-t border-white/15" id="projects-section">
      {/* Section Header with rigid technical grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15">
        <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between">
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ academic & creative projects ]</span>
          <div className="mt-8 md:mt-16">
            <ClipReveal type="overflow">
              <h2 className="font-display text-[8vw] sm:text-[4vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none">
                [projects manifest]
              </h2>
            </ClipReveal>
          </div>
        </div>
        <div className="md:col-span-8 p-6 sm:p-8 flex items-end">
          <ClipReveal type="clip" delay={0.2}>
            <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed lowercase">
              complete repository of campaign strategies, cost sheets, and web ui/ux research wireframes. hover or click any project title to open a smooth accordion mask reveal of the inner tactical blueprint, or trigger the fullscreen curtain shutter for full dossier inspection.
            </p>
          </ClipReveal>
        </div>
      </div>

      {/* Accordion Technical List */}
      <div className="flex flex-col w-full divide-y divide-white/15 border-b border-white/15" id="projects-accordion-list">
        {PROJECTS.map((project, idx) => {
          const isExpanded = expandedId === project.id;
          const isHovered = hoveredId === project.id;
          const indexString = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              className={`relative w-full transition-colors duration-500 overflow-hidden ${
                isExpanded ? "bg-neutral-950/40" : "hover:bg-neutral-950/20"
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              id={`project-item-${project.id}`}
            >
              {/* Header Trigger Row */}
              <div
                onClick={() => toggleExpand(project.id)}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 cursor-none select-none z-10 relative"
                data-cursor="pointer"
              >
                {/* Left side: index, titles */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-neutral-500 w-6">
                    [{indexString}]
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white lowercase tracking-[-0.05em] transition-all duration-300">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                      // {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Right side: category & action text */}
                <div className="flex items-center justify-between sm:justify-end gap-8 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t border-white/5 sm:border-0">
                  <span className="font-mono text-[9px] text-neutral-400 border border-white/10 px-2 py-0.5 rounded-sm bg-neutral-900/40 uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline-block">
                      {isExpanded ? "[collapse file]" : "[expand details]"}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-6 h-6 border border-white/20 flex items-center justify-center text-white text-xs font-mono"
                    >
                      +
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Accordion Expansion Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 sm:px-8 sm:pb-12 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5">
                      
                      {/* Left: Interactive preview image (responsive and elegant) */}
                      <div className="md:col-span-3 relative h-48 sm:h-64 rounded-sm overflow-hidden border border-white/10 group/img bg-neutral-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover/img:scale-100"
                        />
                        <div className="absolute inset-0 bg-black/10 mix-blend-difference" />
                      </div>

                      {/* Middle: Rich tactical blueprint and metrics */}
                      <div className="md:col-span-6 flex flex-col justify-between gap-6">
                        <div className="flex flex-col gap-3">
                          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                            [ strategic overview ]
                          </span>
                          <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed lowercase">
                            {project.summary}
                          </p>
                          <p className="font-sans text-xs text-neutral-500 leading-relaxed lowercase">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Spec Grid Chips */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                          {project.techSpec?.map((spec, sIdx) => {
                            const [label, val] = spec.split(":");
                            return (
                              <div key={sIdx} className="bg-neutral-950/60 p-3 border border-white/5 rounded-sm">
                                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block">
                                  {label?.trim() || "[spec]"}
                                </span>
                                <span className="font-sans text-xs text-white font-medium lowercase block mt-1">
                                  {val?.trim() || spec}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right: Big brutalist buttons & results preview */}
                      <div className="md:col-span-3 flex flex-col justify-between gap-6 border-l border-white/10 md:pl-6">
                        <div className="flex flex-col gap-3">
                          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                            [ critical targets ]
                          </span>
                          <ul className="flex flex-col gap-2">
                            {project.results?.slice(0, 2).map((res, rIdx) => (
                              <li key={rIdx} className="font-mono text-[11px] text-neutral-400 flex items-start gap-2 lowercase">
                                <span className="text-white">•</span>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Button to Open Deep Shutter Dossier */}
                        <div className="pt-4 md:pt-0">
                          <MagneticElement strength={0.2} range={20}>
                            <button
                              onClick={() => onSelectProject(project)}
                              className="w-full text-center px-4 py-3 border border-white bg-white text-black hover:bg-black hover:text-white font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-none"
                              data-cursor="pointer"
                            >
                              open deep dossier [→]
                            </button>
                          </MagneticElement>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
