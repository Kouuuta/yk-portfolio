import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TechStackCard } from "../interface/TechStackCard";

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <circle cx="12" cy="12" r="2" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <rect width="24" height="24" rx="3" />
    <path
      d="M13.5 16.5v-2h2v-1h-2v-2h3v-1h-4v6h4v-1h-3zm-3-6h-3v1h1v5h1v-5h1v-1z"
      fill="white"
    />
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.56-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path
      d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z"
      fill="#3776AB"
    />
    <path
      d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.579 0-1.046-.47-1.046-1.052 0-.581.467-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052z"
      fill="#FFD43B"
    />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.998 0c-.24 0-.48.06-.7.18L1.91 5.82c-.44.25-.71.72-.71 1.23v9.9c0 .51.27.98.71 1.23l9.39 5.64c.22.12.46.18.7.18.24 0 .48-.06.7-.18l9.39-5.64c.44-.25.71-.72.71-1.23v-9.9c0-.51-.27-.98-.71-1.23L12.7.18c-.22-.12-.46-.18-.7-.18zm0 4.42c2.86 0 5.18 2.32 5.18 5.18 0 2.86-2.32 5.18-5.18 5.18-2.86 0-5.18-2.32-5.18-5.18 0-2.86 2.32-5.18 5.18-5.18z" />
  </svg>
);

const techStackData = [
  {
    platform: "React",
    username: "Frontend Library",
    color: "#20232a",
    icon: <ReactIcon />,
    iconBg: "bg-[#61DAFB]",
    iconColor: "text-[#20232a]",
    textColor: "text-amber-100",
  },
  {
    platform: "TailwindCSS",
    username: "CSS Framework",
    color: "#0f172a",
    icon: <TailwindIcon />,
    iconBg: "bg-[#06B6D4]",
    iconColor: "text-white",
    textColor: "text-amber-100",
  },
  {
    platform: "TypeScript",
    username: "Type Safety",
    color: "#1e3a8a",
    icon: <TypeScriptIcon />,
    iconBg: "bg-[#3178C6]",
    iconColor: "text-white",
    textColor: "text-amber-100",
  },
  {
    platform: "Django",
    username: "Backend Framework",
    color: "#0c4b33",
    icon: <DjangoIcon />,
    iconBg: "bg-[#092E20]",
    iconColor: "text-[#44B78B]",
    textColor: "text-amber-100",
  },
  {
    platform: "Python",
    username: "Programming Language",
    color: "#1e293b",
    icon: <PythonIcon />,
    iconBg: "bg-gradient-to-br from-[#3776AB] to-[#FFD43B]",
    iconColor: "text-white",
    textColor: "text-amber-100",
  },
  {
    platform: "Node.js",
    username: "Runtime Environment",
    color: "#1a3a1a",
    icon: <NodeIcon />,
    iconBg: "bg-[#339933]",
    iconColor: "text-white",
    textColor: "text-amber-100",
  },
];

export function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animation = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <main className="max-h-100vh w-full bg-black overflow-hidden flex flex-col md:flex-row relative mt-30">
      {/* Left Content Section */}
      <div className="w-full md:w-[40%] p-8 md:p-16 flex flex-col justify-between z-20 relative">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-xs tracking-[0.5em] text-amber-200/60 mb-4">
            MY TECH-STACK
          </div>
          <h2 className="text-3xl md:text-6xl font-serif font-light italic text-amber-100 mb-10">
            The Techs Behind Every Project I Build.
          </h2>
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A collection of modern web technologies that power the interfaces
              and systems I build focused on performance, precision, and
              aesthetic detail.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[60%] h-[40vh] md:h-[65vh] flex items-center relative perspective-container">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none md:block hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none md:block hidden" />

        <div ref={scrollRef} className="w-full overflow-hidden py-8">
          <div ref={trackRef} className="flex gap-12 w-max px-12">
            {techStackData.map((data, index) => (
              <TechStackCard key={`orig-${index}`} {...data} />
            ))}
            {techStackData.map((data, index) => (
              <TechStackCard key={`dup-${index}`} {...data} />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}
