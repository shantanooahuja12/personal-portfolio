import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "magnetic">("default");
  const [cursorText, setCursorText] = useState("");

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable custom cursor on touch devices to ensure flawless mobile interactions
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    // Add class to body to hide native cursor
    document.body.classList.add("custom-cursor-active");
    setVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]");
      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor") as any;
        setCursorType(type || "pointer");
        
        const label = cursorAttr.getAttribute("data-cursor-label");
        setCursorText(label || "");
      } else {
        // Standard check for clickable items
        const isClickable = target.closest("a, button, [role='button'], input, select, textarea");
        if (isClickable) {
          setCursorType("pointer");
        } else {
          setCursorType("default");
          setCursorText("");
        }
      }
    };

    const onMouseLeaveWindow = () => {
      setVisible(false);
    };

    const onMouseEnterWindow = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    let animationFrameId: number;

    const updatePosition = () => {
      // Lerp math for inertial trailing physics
      const cursorLerp = 0.3; // Snappy center dot
      const ringLerp = 0.12;   // Heavy premium ring drag

      cursorPosition.current.x += (mouseRef.current.x - cursorPosition.current.x) * cursorLerp;
      cursorPosition.current.y += (mouseRef.current.y - cursorPosition.current.y) * cursorLerp;

      ringPosition.current.x += (mouseRef.current.x - ringPosition.current.x) * ringLerp;
      ringPosition.current.y += (mouseRef.current.y - ringPosition.current.y) * ringLerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x}px, ${cursorPosition.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!visible) return null;

  // Custom Cursor Visual Mapping
  const getRingStyle = () => {
    switch (cursorType) {
      case "pointer":
        return "w-10 h-10 border border-white bg-white/10 scale-110 mix-blend-difference";
      case "view":
        return "w-16 h-16 border border-white bg-white text-black scale-100 flex items-center justify-center";
      case "magnetic":
        return "w-12 h-12 border-2 border-white bg-transparent scale-125 mix-blend-difference";
      default:
        return "w-8 h-8 border border-white/40 bg-transparent mix-blend-difference";
    }
  };

  const getDotStyle = () => {
    switch (cursorType) {
      case "pointer":
        return "w-1.5 h-1.5 bg-white scale-75 mix-blend-difference";
      case "view":
        return "w-0 h-0 opacity-0"; // Hide central dot for "VIEW" lens
      case "magnetic":
        return "w-2 h-2 bg-white mix-blend-difference";
      default:
        return "w-1.5 h-1.5 bg-white mix-blend-difference";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block" id="custom-cursor-container">
      {/* Outer Inertial Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-all duration-300 ease-out flex items-center justify-center ${getRingStyle()}`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        {cursorType === "view" && (
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
            {cursorText || "view"}
          </span>
        )}
      </div>

      {/* Center Snappy Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-all duration-150 ease-out ${getDotStyle()}`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
