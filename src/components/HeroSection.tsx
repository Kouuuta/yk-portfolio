export function HeroSection() {
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
          <div className="text-xs tracking-[0.5em] text-amber-200/80 mb-4 font-light">
            HI, MY NAME IS
          </div>
          <h1 className="text-7xl md:text-9xl font-serif mb-6 leading-none">
            <span className="block font-light italic text-amber-100 bg-linear-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text">
              Yuta
            </span>
            <span className="block font-bold tracking-tight bg-linear-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
              KOIKE
            </span>
          </h1>
        </div>

        <div className="w-32 h-px bg-linear-to-r from-transparent via-amber-200/50 to-transparent mx-auto mb-8 animate-pulse" />

        <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Crafting timeless experiences through the intersection of art,
          technology, and human connection
        </p>

        <div className="mt-12 flex gap-6 justify-center items-center">
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

      <button
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer z-20"
      >
        <div className="w-px h-16 bg-linear-to-b from-amber-200/60 to-transparent animate-pulse" />
      </button>
    </section>
  );
}
