import { useEffect, useState } from "react";
import MagneticElement from "./MagneticElement";

interface NavbarProps {
  onNavigate: (section: string) => void;
  onOpenAgencyInfo: () => void;
}

export default function Navbar({ onNavigate, onOpenAgencyInfo }: NavbarProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const formatter = new Intl.DateTimeFormat("en-GB", options);
        setTime(formatter.format(now));
      } catch (e) {
        // Fallback
        const hrs = String(now.getHours()).padStart(2, "0");
        const mins = String(now.getMinutes()).padStart(2, "0");
        const secs = String(now.getSeconds()).padStart(2, "0");
        setTime(`${hrs}:${mins}:${secs}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/15 h-16 flex items-center justify-between px-4 sm:px-8 select-none" id="global-navbar">
      {/* Brand logo / left element */}
      <div className="flex items-center gap-4 sm:gap-6">
        <MagneticElement>
          <button
            onClick={() => onNavigate("hero")}
            className="font-display font-black text-lg sm:text-xl tracking-widest text-white hover:opacity-80 bg-transparent border-none cursor-none focus:outline-none uppercase"
            data-cursor="pointer"
          >
            [shantanoo]
          </button>
        </MagneticElement>
        <div className="h-4 w-[1px] bg-white/15 hidden sm:block"></div>
        <span className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium font-sans">
          mumbai, india
        </span>
      </div>

      {/* Center element: Ticking Clock (Asia/Kolkata) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-[11px] sm:text-xs font-medium tracking-widest text-white leading-none">
          {time || "00:00:00"} <span className="text-neutral-500 text-[9px] font-sans">[IST]</span>
        </span>
      </div>

      {/* Right navigation links with brackets kinetic hover */}
      <div className="flex items-center gap-2 sm:gap-4">
        <MagneticElement>
          <button
            onClick={() => onNavigate("education")}
            className="group relative font-mono text-[10px] sm:text-xs text-white/70 hover:text-white transition-all duration-300 py-1 cursor-none bg-transparent border-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-0.5 sm:mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.05em] group-hover:text-white">edu</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>

        <MagneticElement>
          <button
            onClick={() => onNavigate("skills")}
            className="group relative font-mono text-[10px] sm:text-xs text-white/70 hover:text-white transition-all duration-300 py-1 cursor-none bg-transparent border-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-0.5 sm:mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.05em] group-hover:text-white">skills</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>

        <MagneticElement>
          <button
            onClick={() => onNavigate("experience")}
            className="group relative font-mono text-[10px] sm:text-xs text-white/70 hover:text-white transition-all duration-300 py-1 cursor-none bg-transparent border-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-0.5 sm:mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.05em] group-hover:text-white">xp</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>

        <MagneticElement>
          <button
            onClick={() => onNavigate("projects-section")}
            className="group relative font-mono text-[10px] sm:text-xs text-white/70 hover:text-white transition-all duration-300 py-1 cursor-none bg-transparent border-none"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-0.5 sm:mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.05em] group-hover:text-white">projects</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>

        <MagneticElement>
          <button
            onClick={onOpenAgencyInfo}
            className="group relative font-mono text-[10px] sm:text-xs text-white/70 hover:text-white transition-all duration-300 py-1 cursor-none bg-transparent border-none hidden sm:block"
            data-cursor="pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">[</span>
            <span className="mx-0.5 sm:mx-1 inline-block transition-all duration-300 group-hover:tracking-[0.05em] group-hover:text-white">dossier</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">]</span>
          </button>
        </MagneticElement>
      </div>
    </nav>
  );
}
