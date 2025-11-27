import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection({ startAnimation = false }) {
  const introRef = useRef(null);
  const yutaRef = useRef(null);
  const koikeRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (startAnimation) {
      const tl = gsap.timeline({ delay: 0.1 });

      // Intro text
      tl.fromTo(
        introRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );

      // Yuta
      tl.fromTo(
        yutaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // KOIKE
      tl.fromTo(
        koikeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      );

      // Divider line
      tl.fromTo(
        dividerRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 1, ease: "power3.inOut" },
        "-=0.3"
      );

      // Description - split words and animate
      if (descriptionRef.current) {
        const words = descriptionRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      // Scroll indicator
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, [startAnimation]);

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(78,204,163,0.1),transparent_50%)]" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-6">
          {/* Intro text */}
          <div
            ref={introRef}
            className="text-xs tracking-[0.5em] text-amber-200/80 mb-4 font-light opacity-0"
          >
            HI, MY NAME IS
          </div>

          {/* Name */}
          <h1 className="text-7xl md:text-9xl font-serif mb-6 leading-none">
            <span
              ref={yutaRef}
              className="block font-light italic text-amber-100 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text opacity-0"
            >
              Yuta
            </span>
            <span
              ref={koikeRef}
              className="block font-bold tracking-tight bg-linear-to-r from-white via-amber-50 to-white bg-clip-text text-transparent opacity-0"
            >
              KOIKE
            </span>
          </h1>
        </div>

        {/* Divider line */}
        <div
          ref={dividerRef}
          className="w-32 h-px bg-linear-to-r from-transparent via-amber-200/50 to-transparent mx-auto mb-8 opacity-0"
        />

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          {"Crafting timeless experiences through the intersection of art, technology, and human connection"
            .split(" ")
            .map((word, i) => (
              <span key={i} className="word inline-block opacity-0">
                {word}&nbsp;
              </span>
            ))}
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="mt-12 flex gap-6 justify-center items-center opacity-0"
        >
          <button
            onClick={scrollToWork}
            className="group relative px-8 py-3 border border-amber-200/30 text-amber-100 text-sm tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-amber-200/60"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              VIEW WORK
            </span>
            <div className="absolute inset-0 bg-amber-200 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>

          <button className="group relative px-8 py-3 bg-amber-200/10 text-amber-100 text-sm tracking-[0.2em] overflow-hidden transition-all duration-500 hover:bg-transparent border border-transparent hover:border-amber-200/30">
            <a href="/Contact" className="relative z-10">
              CONTACT
            </a>
            <div className="absolute inset-0 bg-linear-to-r from-amber-200/0 via-amber-200/20 to-amber-200/0 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer z-20 opacity-0"
      >
        <div className="w-px h-16 bg-linear-to-b from-amber-200/60 to-transparent animate-pulse" />
      </button>
    </section>
  );
}
