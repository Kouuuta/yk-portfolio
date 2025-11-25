import { useState, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [, setIsExiting] = useState(false);
  const textRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const handleExplore = () => {
    setIsExiting(true);

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(textRefs.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.inOut",
    })
      .to(
        buttonRef.current,
        {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        bgRef.current,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.2"
      )
      .to(
        slider1Ref.current,
        {
          y: "-100%",
          duration: 0.9,
          ease: "power4.inOut",
        },
        "-=0.4"
      )
      .to(
        slider2Ref.current,
        {
          y: "-100%",
          duration: 0.9,
          ease: "power4.inOut",
        },
        "-=0.4"
      );
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        ref={bgRef}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center"
        style={{ zIndex: 53 }}
      >
        <div className="text-4xl md:text-7xl font-serif mb-6 leading-none text-center">
          <div className="overflow-hidden mb-4">
            <h2
              ref={(el) => {
                textRefs.current[0] = el;
              }}
              className="block font-light italic text-amber-100 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text"
            >
              Creating innovations
            </h2>
          </div>
          <div className="overflow-hidden mb-4">
            <h2
              ref={(el) => {
                textRefs.current[1] = el;
              }}
              className="block font-light italic text-amber-100 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text"
            >
              For Everyday
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              ref={(el) => {
                textRefs.current[2] = el;
              }}
              className="block font-light italic text-amber-100 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text"
            >
              people.
            </h2>
          </div>
        </div>

        <button
          ref={buttonRef}
          onClick={handleExplore}
          className="mb-7 group relative px-8 py-3 border border-amber-200/30 text-amber-100 text-sm tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-amber-200/60"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Let's Go
          </span>
          <div className="absolute inset-0 bg-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </div>

      <div
        ref={slider1Ref}
        className="fixed inset-0"
        style={{
          backgroundColor: "#ffffff",
          zIndex: 51,
        }}
      />
      <div
        ref={slider2Ref}
        className="fixed inset-0"
        style={{
          backgroundColor: "rgba(253, 230, 138, 0.8)",
          zIndex: 52,
        }}
      />
    </div>
  );
}
