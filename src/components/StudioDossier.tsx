import { STATS, CLIENT_LOGS } from "../data";
import MagneticElement from "./MagneticElement";
import ClipReveal from "./ClipReveal";
import { useEffect, useRef } from "react";

interface StudioDossierProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudioDossier({ isOpen, onClose }: StudioDossierProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 z-40 bg-black text-white overflow-y-auto pt-16 flex flex-col cursor-none"
      id="studio-dossier-portal"
    >
      {/* Background Visual Matrix */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-25" />

      {/* Header bar */}
      <div className="sticky top-16 z-30 w-full bg-black/95 backdrop-blur-md border-b border-white/15 px-4 sm:px-8 py-4 flex justify-between items-center">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          studio operational blueprint // log-2026
        </span>
        <MagneticElement>
          <button
            onClick={onClose}
            className="group font-mono text-xs text-white/70 hover:text-white bg-transparent border-none py-1 cursor-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.15em] group-hover:text-red-400 font-bold">close studio dossier</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 flex-grow flex flex-col gap-12 sm:gap-20">
        
        {/* Main Title & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/15 pb-12 sm:pb-16">
          <div className="lg:col-span-8">
            <ClipReveal type="overflow">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                [ dossier operational manifesto ]
              </span>
            </ClipReveal>
            <ClipReveal type="overflow" duration={1.1}>
              <h1 className="font-display text-[8vw] sm:text-[6vw] font-extrabold lowercase tracking-[-0.06em] leading-none mb-6">
                we do not write templates.<br />we design digital brand ecosystems.
              </h1>
            </ClipReveal>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <ClipReveal type="clip" delay={0.25}>
              <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed lowercase">
                shantanoo ahuja operates at the intersection of quantitative consumer analytics and high-motion digital storytelling. this dossier compiles his academic milestones, client partnerships, and rigorous design strategies.
              </p>
            </ClipReveal>
          </div>
        </div>

        {/* Operating Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/15 divide-y lg:divide-y-0 lg:divide-x divide-white/15 bg-neutral-950/30 rounded-sm">
          {STATS.map((stat, i) => (
            <div key={stat.index} className="p-6 flex flex-col gap-3 justify-between">
              <span className="font-mono text-xs text-neutral-500">[{stat.index}] {stat.label}</span>
              <span className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter text-white lowercase">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 border border-white/15 bg-neutral-950/20 flex flex-col justify-between h-[280px] rounded-sm">
            <span className="font-mono text-xs text-neutral-500">[method 01]</span>
            <div>
              <h3 className="font-display text-xl font-bold lowercase text-white mb-2">architectural rigidity</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed lowercase">
                we utilize static 1px border systems that freeze screen components within custom grid containers, guaranteeing robust alignment and extreme stability.
              </p>
            </div>
          </div>

          <div className="p-6 border border-white/15 bg-neutral-950/20 flex flex-col justify-between h-[280px] rounded-sm">
            <span className="font-mono text-xs text-neutral-500">[method 02]</span>
            <div>
              <h3 className="font-display text-xl font-bold lowercase text-white mb-2">kinetics over decoration</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed lowercase">
                all motion incorporates true physics principles. inertial mouse trackers, magnetic gravitational field buttons, and clip-path scroll unmasking.
              </p>
            </div>
          </div>

          <div className="p-6 border border-white/15 bg-neutral-950/20 flex flex-col justify-between h-[280px] rounded-sm">
            <span className="font-mono text-xs text-neutral-500">[method 03]</span>
            <div>
              <h3 className="font-display text-xl font-bold lowercase text-white mb-2">monochromatic hierarchy</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed lowercase">
                by discarding the distracting noise of heavy colors, typography and micro-behaviors carry the visual narrative. stark white on solid black.
              </p>
            </div>
          </div>
        </div>

        {/* Client Ledger / Roster with Rigid Technical Grid */}
        <div className="flex flex-col gap-6">
          <h2 className="font-mono text-xs text-neutral-400 uppercase tracking-widest border-b border-white/15 pb-2">
            [ registered client ledgers // 2024 - 2026 ]
          </h2>
          
          <div className="border border-white/15 divide-y divide-white/15 bg-neutral-950/30 rounded-sm">
            {/* Header Row */}
            <div className="grid grid-cols-12 p-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest hidden md:grid">
              <span className="col-span-3">partner</span>
              <span className="col-span-4">project register</span>
              <span className="col-span-3">assigned capability</span>
              <span className="col-span-2 text-right">deployment year</span>
            </div>

            {/* Client Entries */}
            {CLIENT_LOGS.map((log) => (
              <div
                key={log.id}
                className="grid grid-cols-1 md:grid-cols-12 p-4 font-sans text-sm items-center hover:bg-neutral-900/40 transition-colors"
                id={`client-entry-${log.id}`}
              >
                <span className="col-span-3 font-display font-bold text-white lowercase md:mb-0 mb-1">
                  {log.name}
                </span>
                <span className="col-span-4 text-neutral-400 lowercase md:mb-0 mb-1">
                  {log.project}
                </span>
                <span className="col-span-3 font-mono text-xs text-neutral-500 lowercase md:mb-0 mb-2">
                  {log.service}
                </span>
                <span className="col-span-2 text-neutral-500 text-left md:text-right font-mono text-xs">
                  {log.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Dossier Footer */}
        <div className="mt-8 border-t border-white/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pb-12">
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              ledger review completed
            </span>
            <span className="font-sans text-xs text-neutral-400 lowercase">
              shut down operational files to return to core portfolio grid
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
