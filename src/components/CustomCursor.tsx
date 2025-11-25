import { useEffect, useState } from "react";
export function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      }
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);
  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <div
          className={`rounded-full bg-amber-200 transition-all duration-300 ${
            isHovering ? "w-16 h-16" : "w-2 h-2"
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-8 h-8 border border-amber-200/30 rounded-full" />
      </div>
    </>
  );
}
