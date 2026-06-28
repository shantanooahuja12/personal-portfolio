import { motion, AnimatePresence } from "motion/react";

interface PageShutterProps {
  isActive: boolean;
  onTransitionHalfway?: () => void;
  onTransitionComplete?: () => void;
}

export default function PageShutter({
  isActive,
  onTransitionHalfway,
  onTransitionComplete
}: PageShutterProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[999] pointer-events-auto flex flex-col justify-between" id="page-shutter-overlay">
          {/* Top block wiping down */}
          <motion.div
            className="w-full bg-white h-1/2 flex items-end justify-center pb-8"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1] // Custom cubic bezier (easeInOutQuart)
            }}
            onAnimationComplete={() => {
              if (isActive && onTransitionHalfway) {
                // Trigger the actual content change when screen is fully blocked
                onTransitionHalfway();
              }
            }}
          >
            <span className="font-display text-[8vw] font-extrabold text-black uppercase tracking-tighter leading-none select-none">
              yeqq
            </span>
          </motion.div>

          {/* Bottom block wiping up */}
          <motion.div
            className="w-full bg-white h-1/2 flex items-start justify-center pt-8"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1]
            }}
            onAnimationEnd={() => {
              // Wait for exit to complete
              if (!isActive && onTransitionComplete) {
                onTransitionComplete();
              }
            }}
          >
            <span className="font-mono text-xs font-bold tracking-widest text-black/50 select-none">
              [ loading state transition ]
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
