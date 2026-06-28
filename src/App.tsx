import { useState, useEffect } from "react";
import { SERVICES, EDUCATION_DATA, SKILLS_DATA, EXPERIENCE_DATA } from "./data";
import { Project } from "./types";
import { motion } from "motion/react";

// Components
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import InfiniteMarquee from "./components/InfiniteMarquee";
import MagneticElement from "./components/MagneticElement";
import ClipReveal from "./components/ClipReveal";
import PageShutter from "./components/PageShutter";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetailModal from "./components/ProjectDetailModal";
import StudioDossier from "./components/StudioDossier";
import Footer from "./components/Footer";

export default function App() {
  // Navigation Section States
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  // Transition Shutter States
  const [shutterActive, setShutterActive] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  // Trigger smooth shutter wipe before executing route/state flip
  const triggerShutterTransition = (action: () => void) => {
    setPendingAction(() => action);
    setShutterActive(true);
  };

  const handleShutterHalfway = () => {
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  const handleShutterComplete = () => {
    setShutterActive(false);
  };

  // Auto Scroll Helper
  const navigateToSection = (id: string) => {
    // If modal dossier is open, close it first with a wipe transition
    if (activeProject || isStudioOpen) {
      triggerShutterTransition(() => {
        setActiveProject(null);
        setIsStudioOpen(false);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden" id="core-app-layout">
      {/* Dynamic Grid Background layer */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-[0.12] z-0" />

      {/* High-Performance Custom Lerped Cursor */}
      <CustomCursor />

      {/* Global Transition Shutter Curtain */}
      <PageShutter
        isActive={shutterActive}
        onTransitionHalfway={handleShutterHalfway}
        onTransitionComplete={handleShutterComplete}
      />

      {/* Top Navbar */}
      <Navbar
        onNavigate={navigateToSection}
        onOpenAgencyInfo={() => triggerShutterTransition(() => setIsStudioOpen(true))}
      />

      {/* Main Core Content container */}
      <main className="relative z-10 pt-16 flex flex-col w-full">
        
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-[90vh] flex flex-col justify-between border-b border-white/15"
        >
          {/* Hero upper details grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/15 border-b border-white/15">
            <div className="md:col-span-8 p-6 sm:p-12 flex flex-col justify-end min-h-[40vh] md:min-h-[55vh]">
              <ClipReveal type="overflow">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-4 sm:mb-6">
                  [ portfolio registry // active ]
                </span>
              </ClipReveal>
              <ClipReveal type="overflow" duration={1.2}>
                <h1 className="font-display text-[11vw] sm:text-[8vw] font-black lowercase tracking-[-0.08em] text-white leading-[0.8]">
                  shantanoo ahuja <br />
                  <span className="text-neutral-400">digital strategy</span> <br />
                  & data insights
                </h1>
              </ClipReveal>
            </div>
            
            <div className="md:col-span-4 p-6 sm:p-12 flex flex-col justify-between gap-12 bg-neutral-950/20">
              <div className="flex justify-between items-start font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                <span>mumbai // india</span>
                <span>asia/kolkata</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <ClipReveal type="clip" delay={0.2}>
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 lowercase leading-relaxed">
                    shantanoo is a digital strategist and insights developer at jai hind college specializing in high-contrast marketing layouts, SEO keyword architecture, and prompt engineering pipelines.
                  </p>
                </ClipReveal>
                
                {/* Scroll Discover Indicator */}
                <div className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#888888] font-mono">[scroll discover]</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <MagneticElement>
                    <button
                      onClick={() => navigateToSection("projects-section")}
                      className="group font-mono text-[11px] text-white bg-white/10 hover:bg-white hover:text-black border border-white/15 px-3 py-2 rounded-sm transition-all duration-300 flex items-center gap-2 cursor-none text-left"
                      data-cursor="pointer"
                    >
                      <span>projects blueprint</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </MagneticElement>
                  <MagneticElement>
                    <a
                      href="mailto:shantanooahuja12@gmail.com"
                      className="group font-mono text-[11px] text-neutral-400 hover:text-white border border-white/10 hover:border-white px-3 py-2 rounded-sm transition-all duration-300 flex items-center gap-2 cursor-none text-left"
                      data-cursor="pointer"
                    >
                      <span>[email]</span>
                    </a>
                  </MagneticElement>
                </div>
              </div>
            </div>
          </div>

          {/* INFINITE MARQUEE LOOP */}
          <div className="border-b border-white/15">
            <InfiniteMarquee text="shantanoo ahuja — digital strategy — data insights — consumer analytics — jai hind college" speed={22} variant="light" />
          </div>

          {/* Bottom Hero Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15 border-b border-white/15 bg-neutral-950/10">
            <div className="p-4 sm:p-6 flex flex-col justify-between gap-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ coordinates ]</span>
              <span className="font-mono text-xs text-white">18.9647° N, 72.8258° E</span>
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between gap-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ operational status ]</span>
              <span className="font-mono text-xs text-emerald-500 font-bold">● verified profile</span>
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between gap-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ profile layout ]</span>
              <span className="font-mono text-xs text-white">digital strategy ledger</span>
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between gap-4">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">[ strategic record ]</span>
              <button
                onClick={() => triggerShutterTransition(() => setIsStudioOpen(true))}
                className="font-mono text-xs text-white/70 hover:text-white transition-colors flex items-center gap-2 text-left cursor-none bg-transparent border-none p-0"
                data-cursor="pointer"
              >
                <span>open dossier [07]</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>


        {/* MISSION STATEMENT / TEXT CLIP UNMASK */}
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 border-b border-white/15 bg-neutral-950/20" id="philosophy-section">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ core strategy statement ]</span>
            
            <ClipReveal type="clip" duration={1}>
              <p className="font-display text-[4vw] sm:text-[3vw] font-black lowercase tracking-[-0.04em] text-white leading-tight">
                we believe digital strategy is not about decorative templates or vanity impressions. we construct <span className="text-neutral-500">rigid analytical models</span> and high-motion brand loops. we do not just map consumer metrics; we build digital landmarks.
              </p>
            </ClipReveal>
          </div>
        </section>

        {/* SECTION 1: EDUCATION */}
        <section id="education" className="relative w-full border-b border-white/15 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15">
            <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ academic history ]</span>
              <div className="mt-8 md:mt-16">
                <ClipReveal type="overflow">
                  <h2 className="font-display text-[8vw] sm:text-[4vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none">
                    [education]
                  </h2>
                </ClipReveal>
              </div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 flex items-end">
              <ClipReveal type="clip" delay={0.15}>
                <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed lowercase">
                  educational milestones focused on digital strategy, consumer behavior, and financial cost sheets.
                </p>
              </ClipReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="group p-6 sm:p-8 flex flex-col justify-between gap-8 transition-colors duration-500 hover:bg-neutral-950/40">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-neutral-500">[{edu.period}]</span>
                  <span className="font-mono text-[9px] text-neutral-600 border border-white/10 px-2 py-0.5 rounded-sm bg-neutral-900/40 uppercase">verified register</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-black lowercase tracking-[-0.05em] text-white transition-all duration-300">
                    {edu.institution}
                  </h3>
                  <h4 className="font-mono text-xs text-neutral-400">
                    {edu.degree}
                  </h4>
                  {edu.details && (
                    <p className="font-sans text-xs text-neutral-500 lowercase leading-relaxed mt-4 pt-4 border-t border-white/5">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: SKILLS MATRIX */}
        <section id="skills" className="relative w-full border-b border-white/15 bg-neutral-950/20">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15">
            <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ weapons of choice ]</span>
              <div className="mt-8 md:mt-16">
                <ClipReveal type="overflow">
                  <h2 className="font-display text-[8vw] sm:text-[4vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none">
                    [skills & tools]
                  </h2>
                </ClipReveal>
              </div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 flex items-end">
              <ClipReveal type="clip" delay={0.15}>
                <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed lowercase">
                  technical tools designed to prototype interactive layouts, engineering interfaces, and prompt complex generative artificial intelligence.
                </p>
              </ClipReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {SKILLS_DATA.map((cat, idx) => (
              <div key={idx} className="p-6 sm:p-8 flex flex-col gap-6">
                <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[{cat.label}]</span>
                <div className="flex flex-col gap-3">
                  {cat.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className="group relative w-full border border-white/10 hover:border-white p-4 rounded-sm bg-black transition-all duration-300 cursor-none flex justify-between items-center overflow-hidden"
                      data-cursor="pointer"
                    >
                      {/* Sliding dark bg panel for inversion */}
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                      
                      <span className="relative font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-black group-hover:tracking-[0.08em] transition-all duration-300 z-10 lowercase">
                        {tag}
                      </span>
                      <span className="relative font-mono text-[9px] text-neutral-500 group-hover:text-black z-10">
                        [0{tagIdx + 1}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE GRID */}
        <section id="experience" className="relative w-full border-b border-white/15 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15">
            <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ leadership index ]</span>
              <div className="mt-8 md:mt-16">
                <ClipReveal type="overflow">
                  <h2 className="font-display text-[8vw] sm:text-[4vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none">
                    [leadership & <br />experience]
                  </h2>
                </ClipReveal>
              </div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 flex items-end">
              <ClipReveal type="clip" delay={0.15}>
                <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed lowercase">
                  professional leadership, brand sponsorships management, and search optimization intern logs.
                </p>
              </ClipReveal>
            </div>
          </div>
          
          <div className="grid grid-cols-1 divide-y divide-white/15">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-neutral-950/10 last:border-b-0" id={`experience-block-${idx}`}>
                {/* Left role meta */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <span className="font-mono text-xs text-neutral-500 block mb-2">[{exp.period}]</span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white lowercase tracking-[-0.06em]">
                      {exp.role}
                    </h3>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block">[ organization ]</span>
                    <span className="font-sans text-xs sm:text-sm text-neutral-400 font-medium lowercase block mt-1">
                      {exp.organization}
                    </span>
                  </div>
                </div>
                
                {/* Right bullets with clip-path reveal */}
                <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-center">
                  <ul className="flex flex-col gap-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <motion.li
                        key={bIdx}
                        className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed lowercase relative pl-6 border-l-2 border-white/10 hover:border-white transition-colors duration-300 py-0.5"
                        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0, y: 15 }}
                        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: bIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PROJECTS MANIFEST */}
        <ProjectGrid
          onSelectProject={(project) => triggerShutterTransition(() => setActiveProject(project))}
        />


        {/* SERVICES / CAPABILITIES SECTION */}
        <section className="relative w-full bg-black border-b border-white/15" id="services-section">
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/15">
            <div className="md:col-span-4 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-white/15 flex flex-col justify-between">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">[ capabilities checklist ]</span>
              <div className="mt-8 md:mt-16">
                <ClipReveal type="overflow">
                  <h2 className="font-display text-[8vw] sm:text-[4vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none">
                    operational <br />blueprints
                  </h2>
                </ClipReveal>
              </div>
            </div>
            <div className="md:col-span-8 p-6 sm:p-8 flex items-end">
              <ClipReveal type="clip" delay={0.15}>
                <p className="font-sans text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed lowercase">
                  we formulate rigid consumer brand playbooks and highly detailed market analysis frameworks, strictly tailored to digital strategy standards. review our core categories below.
                </p>
              </ClipReveal>
            </div>
          </div>

          {/* Capabilities grid with hover-spacing effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-6 sm:p-8 flex flex-col justify-between gap-12 transition-colors duration-500 hover:bg-neutral-950/70"
                id={`service-card-${service.id}`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-neutral-600">[{service.index}]</span>
                  <span className="font-mono text-[9px] text-neutral-500 border border-white/10 px-2 py-0.5 rounded-sm bg-neutral-900 uppercase">
                    active system
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Magnetic element around capability titles */}
                  <MagneticElement range={30} strength={0.25}>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold lowercase tracking-[-0.05em] text-white transition-all duration-300 group-hover:text-neutral-200">
                      {service.title}
                    </h3>
                  </MagneticElement>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed lowercase">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {service.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] text-neutral-400 bg-white/5 border border-white/5 px-2 py-1 rounded-sm group-hover:border-white/15 group-hover:text-white transition-colors"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* CALL TO ACTION MARQUEE / FOOTER HERO */}
        <section className="relative w-full py-12 sm:py-20 border-b border-white/15 bg-black">
          <InfiniteMarquee text="collaborate with shantanoo ahuja — initiate dossier review — build digital strategy" speed={18} reverse variant="light" />
          <div className="text-center mt-12 sm:mt-16 px-4">
            <ClipReveal type="overflow">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                [ project initiation registry ]
              </span>
            </ClipReveal>
            <ClipReveal type="overflow" delay={0.2}>
              <h2 className="font-display text-[8vw] sm:text-[5vw] font-extrabold lowercase tracking-[-0.06em] text-white leading-none mb-8">
                have an elite blueprint <br />to formulate?
              </h2>
            </ClipReveal>
            <ClipReveal type="clip" delay={0.3}>
              <MagneticElement>
                <a
                  href="mailto:shantanooahuja12@gmail.com"
                  className="inline-block px-8 py-4 border border-white hover:bg-white hover:text-black font-mono text-xs tracking-widest text-white uppercase rounded-sm transition-all duration-300 cursor-none"
                  data-cursor="pointer"
                >
                  connect with shantanoo
                </a>
              </MagneticElement>
            </ClipReveal>
          </div>
        </section>

      </main>

      {/* Grid aligned Footer */}
      <Footer
        onOpenAgencyInfo={() => triggerShutterTransition(() => setIsStudioOpen(true))}
        onNavigate={navigateToSection}
      />

      {/* PORTALS/MODALS LAYER (Activated cleanly under shutter transition) */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => triggerShutterTransition(() => setActiveProject(null))}
      />

      <StudioDossier
        isOpen={isStudioOpen}
        onClose={() => triggerShutterTransition(() => setIsStudioOpen(false))}
      />
    </div>
  );
}
