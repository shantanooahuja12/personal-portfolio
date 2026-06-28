import { motion } from "motion/react";

interface InfiniteMarqueeProps {
  text: string;
  speed?: number; // Duration of full sweep in seconds
  reverse?: boolean;
  variant?: "dark" | "light";
}

export default function InfiniteMarquee({
  text,
  speed = 25,
  reverse = false,
  variant = "dark"
}: InfiniteMarqueeProps) {
  // Repeat the text multiple times to ensure it overflows any screen size for seamless looping
  const items = Array(6).fill(text);

  const containerBg = variant === "light" ? "bg-white border-y border-white" : "bg-black border-y border-white/10";
  const textColor = variant === "light" ? "text-black" : "text-white";
  const separatorColor = variant === "light" ? "text-black/30" : "text-white/20";

  return (
    <div className={`relative w-full overflow-hidden py-4 flex select-none ${containerBg}`} id="infinite-marquee">
      <motion.div
        className={`flex whitespace-nowrap gap-12 text-[7vw] sm:text-[4vw] font-display font-extrabold lowercase tracking-[-0.07em] leading-none pr-12 ${textColor}`}
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{ willChange: "transform" }}
      >
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-12">
            <span>{item}</span>
            <span className={`${separatorColor} select-none font-sans`}>*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
