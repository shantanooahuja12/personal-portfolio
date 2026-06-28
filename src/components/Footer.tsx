import MagneticElement from "./MagneticElement";

interface FooterProps {
  onOpenAgencyInfo: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onOpenAgencyInfo, onNavigate }: FooterProps) {
  return (
    <footer className="relative w-full bg-black border-t border-white/15 select-none" id="footer-section">
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/15">
        
        {/* Column 1: Shantanoo branding & credits */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-12">
          <div>
            <h4 className="font-display text-2xl font-black text-white lowercase tracking-[0.05em] leading-none mb-4">
              [shantanoo ahuja]
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed max-w-sm lowercase">
              digital strategist and consumer insights developer mapping technical data metrics to high-fidelity brand activations. based in mumbai, india.
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
              designed & built by shantanoo ahuja © 2026
            </span>
            <span className="font-mono text-[9px] text-neutral-600 block mt-1">
              active chamber // 60fps locked digital blueprint.
            </span>
          </div>
        </div>

        {/* Column 2: [navigation] */}
        <div className="md:col-span-4 p-6 sm:p-8">
          <span className="font-mono text-xs text-neutral-500 tracking-wider block mb-6">
            [navigation]
          </span>
          <ul className="flex flex-col gap-3 font-mono text-xs lowercase">
            <li>
              <MagneticElement>
                <button
                  onClick={() => onNavigate("hero")}
                  className="group text-neutral-400 hover:text-white cursor-none bg-transparent border-none text-left p-0"
                  data-cursor="pointer"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
                  <span className="mx-1 group-hover:underline">home</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
                </button>
              </MagneticElement>
            </li>
            <li>
              <MagneticElement>
                <button
                  onClick={() => onNavigate("education")}
                  className="group text-neutral-400 hover:text-white cursor-none bg-transparent border-none text-left p-0"
                  data-cursor="pointer"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
                  <span className="mx-1 group-hover:underline">education</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
                </button>
              </MagneticElement>
            </li>
            <li>
              <MagneticElement>
                <button
                  onClick={() => onNavigate("skills")}
                  className="group text-neutral-400 hover:text-white cursor-none bg-transparent border-none text-left p-0"
                  data-cursor="pointer"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
                  <span className="mx-1 group-hover:underline">skills & tools</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
                </button>
              </MagneticElement>
            </li>
            <li>
              <MagneticElement>
                <button
                  onClick={() => onNavigate("experience")}
                  className="group text-neutral-400 hover:text-white cursor-none bg-transparent border-none text-left p-0"
                  data-cursor="pointer"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
                  <span className="mx-1 group-hover:underline">experience</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
                </button>
              </MagneticElement>
            </li>
            <li>
              <MagneticElement>
                <button
                  onClick={() => onNavigate("projects-section")}
                  className="group text-neutral-400 hover:text-white cursor-none bg-transparent border-none text-left p-0"
                  data-cursor="pointer"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
                  <span className="mx-1 group-hover:underline">projects</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&gt;</span>
                </button>
              </MagneticElement>
            </li>
          </ul>
        </div>

        {/* Column 3: [connect] */}
        <div className="md:col-span-3 p-6 sm:p-8">
          <span className="font-mono text-xs text-neutral-500 tracking-wider block mb-6">
            [connect]
          </span>
          <ul className="flex flex-col gap-4 font-sans text-sm lowercase">
            <li>
              <span className="font-mono text-[10px] text-neutral-600 block">[email]</span>
              <MagneticElement>
                <a
                  href="mailto:shantanooahuja12@gmail.com"
                  className="text-white hover:text-neutral-400 cursor-none underline underline-offset-4 decoration-white/20 hover:decoration-white/100 transition-colors"
                  data-cursor="pointer"
                >
                  shantanooahuja12@gmail.com
                </a>
              </MagneticElement>
            </li>
            <li>
              <span className="font-mono text-[10px] text-neutral-600 block">[location]</span>
              <span className="text-white">
                mumbai, india
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
