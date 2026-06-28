import { Project } from "../types";
import MagneticElement from "./MagneticElement";
import ClipReveal from "./ClipReveal";
import { useEffect, useRef } from "react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When open, lock background page scroll
    if (project) {
      document.body.style.overflow = "hidden";
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      ref={scrollContainerRef}
      className="fixed inset-0 z-40 bg-black text-white overflow-y-auto pt-16 flex flex-col cursor-none"
      id="project-detail-portal"
    >
      {/* Visual background Grid structure */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      {/* Detail Header / Top Bar */}
      <div className="sticky top-16 z-30 w-full bg-black/95 backdrop-blur-md border-b border-white/15 px-4 sm:px-8 py-4 flex justify-between items-center">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          project technical dossier // {project.id}
        </span>
        
        <MagneticElement>
          <button
            onClick={onClose}
            className="group font-mono text-xs text-white/70 hover:text-white bg-transparent border-none py-1 cursor-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.15em] group-hover:text-red-400 font-bold">close dossier</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 flex-grow flex flex-col gap-12 sm:gap-20">
        
        {/* Title and Summary Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/15 pb-12 sm:pb-16">
          <div className="lg:col-span-8 flex flex-col justify-between">
            <ClipReveal type="overflow">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                [{project.category}]
              </span>
            </ClipReveal>
            <ClipReveal type="overflow" duration={1}>
              <h1 className="font-display text-[8vw] sm:text-[6vw] font-extrabold lowercase tracking-[-0.06em] leading-none mb-6">
                {project.title}
              </h1>
            </ClipReveal>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <ClipReveal type="clip" delay={0.2}>
              <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed lowercase">
                {project.summary}
              </p>
            </ClipReveal>
          </div>
        </div>

        {/* Project Technical Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/15 bg-neutral-950/40 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/15 rounded-sm">
          <div className="p-4 sm:p-6 flex flex-col gap-1">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">client</span>
            <span className="font-sans text-sm font-medium text-white lowercase">{project.client}</span>
          </div>
          <div className="p-4 sm:p-6 flex flex-col gap-1 border-t border-white/15 md:border-t-0">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">services rendered</span>
            <span className="font-sans text-xs text-white lowercase">
              {project.services.join(", ")}
            </span>
          </div>
          <div className="p-4 sm:p-6 flex flex-col gap-1">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">role</span>
            <span className="font-sans text-sm text-white lowercase">{project.role}</span>
          </div>
          <div className="p-4 sm:p-6 flex flex-col gap-1 border-t border-white/15 md:border-t-0">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">deployment year</span>
            <span className="font-sans text-sm text-white">{project.year}</span>
          </div>
        </div>

        {/* Primary High-Contrast Image Block */}
        <div className="border border-white/15 p-2 sm:p-4 bg-neutral-950/30 rounded-sm">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
            />
          </div>
        </div>

        {/* Narrative Description & Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
              [ original blueprint & mission ]
            </h3>
            <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed lowercase">
              {project.description}
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
              [ technical obstacles overcome ]
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-neutral-400 lowercase">
              {project.challenges?.map((challenge, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-white/40 font-bold">0{i + 1}.</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub Gallery / Secondary Blueprint views */}
        {project.subImages && project.subImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {project.subImages.map((sub, i) => (
              <div key={i} className="border border-white/15 p-2 bg-neutral-950/50 rounded-sm">
                <div className="w-full aspect-[3/2] overflow-hidden rounded-sm">
                  <img
                    src={sub}
                    alt={`${project.title} detailed asset ${i}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="pt-3 px-1 flex justify-between items-center font-mono text-[9px] text-neutral-500">
                  <span>BLUEPRINT REFERENCE // SHEET 0{i + 2}</span>
                  <span>100% SCALE VECTORS</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Stack Bento & Results */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 border-t border-white/15 pt-12 sm:pt-16">
          {/* Tech stack items */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              [ targeted engineering stack ]
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techSpec?.map((spec, i) => (
                <span
                  key={i}
                  className="font-mono text-xs text-white bg-white/10 border border-white/15 px-3 py-1.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Results achieved */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              [ confirmed studio result ]
            </h3>
            <ul className="flex flex-col gap-4 font-sans text-sm text-neutral-300 lowercase">
              {project.results?.map((res, i) => (
                <li key={i} className="flex gap-4 items-center p-4 border border-white/10 rounded-sm bg-neutral-950/40">
                  <span className="font-mono text-xs text-emerald-500 font-bold">✓ confirmed</span>
                  <span className="leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back navigation footer inside modal */}
        <div className="mt-8 border-t border-white/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pb-12">
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              technical review complete
            </span>
            <span className="font-sans text-xs text-neutral-400 lowercase">
              return to index catalog to explore alternate blueprints
            </span>
          </div>

          <MagneticElement>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-white/40 hover:border-white font-mono text-xs text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 rounded-sm cursor-none"
              data-cursor="pointer"
            >
              close dossier
            </button>
          </MagneticElement>
        </div>

      </div>
    </div>
  );
}
