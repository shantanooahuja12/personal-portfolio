import { useRef, useState, useEffect, ReactElement } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticElementProps {
  children: ReactElement;
  range?: number; // Distance threshold in px to activate attraction
  strength?: number; // Power of magnetic suction (0 to 1)
}

export default function MagneticElement({
  children,
  range = 45,
  strength = 0.4
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Spring configuration for physical elastic bounce-back
  const springOptions = { damping: 15, stiffness: 150, mass: 0.6 };
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const distanceX = e.clientX - elementCenterX;
      const distanceY = e.clientY - elementCenterY;

      // Pythagorean distance check
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < range) {
        // Attract toward the cursor with strength factor
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        // Snap back cleanly to center
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      window.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        window.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [range, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="inline-block"
      id={`magnetic-wrapper-${Math.random().toString(36).substr(2, 9)}`}
    >
      {children}
    </motion.div>
  );
}
