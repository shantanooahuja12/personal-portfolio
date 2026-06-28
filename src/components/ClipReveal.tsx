import { motion } from "motion/react";
import { ReactNode } from "react";

interface ClipRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  type?: "clip" | "overflow";
}

export default function ClipReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  type = "clip"
}: ClipRevealProps) {
  if (type === "overflow") {
    // Reveal by sliding upward out of an overflow-hidden wrapper
    return (
      <div className={`overflow-hidden ${className}`} id="clip-reveal-overflow">
        <motion.div
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: duration,
            ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo cubic-bezier
            delay: delay
          }}
          style={{ willChange: "transform" }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Reveal by opening a clip-path polygon from bottom to top
  return (
    <motion.div
      className={className}
      id="clip-reveal-polygon"
      initial={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: 20
      }}
      whileInView={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        delay: delay
      }}
      style={{ willChange: "transform, clip-path" }}
    >
      {children}
    </motion.div>
  );
}
