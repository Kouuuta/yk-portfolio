import { useState } from "react";

const projects = [
  {
    title: "Big C Trucking Services",
    category: "Website",
    year: "2025",
    image: "bigc_logo.png",
    description:
      "A static website for a trucking company that provides services to customers.",
    link: "https://truckin-website2.vercel.app/",
  },
  {
    title: "Midnight Collection",
    category: "Graphic Design",
    year: "2023",
    image: "SDG 14.png",
    description:
      "An exclusive fashion line that captures the essence of elegance and sophistication in every piece.",
  },
  {
    title: "Urban Narratives",
    category: "Graphic Design",
    year: "2024",
    image: "SDG 16.png",
    description:
      "A photographic journey through the heart of modern cities, capturing stories of life and humanity.",
  },
  {
    title: "Timeless Interiors",
    category: "Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&h=1000&fit=crop",
    description:
      "Interior design that transcends trends, creating spaces that are both functional and beautiful.",
  },
];

const categories = [
  "All",
  "Website",
  "Graphic Design",
  "Photography",
  "Design",
];

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-32 px-6 md:px-12">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-xs tracking-[0.5em] text-amber-200/60 mb-4">
          SELECTED WORKS
        </div>
        <h2 className="text-5xl md:text-6xl font-serif font-light italic text-amber-100">
          Featured Projects
        </h2>
      </div>
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`group relative px-6 py-2 text-xs tracking-[0.2em] transition-all duration-500 overflow-hidden ${
              selectedCategory === category
                ? "bg-amber-200/20 text-amber-100 border border-amber-200/30"
                : "text-gray-400 border border-gray-700 hover:border-amber-200/30 hover:text-amber-200"
            }`}
          >
            <span className="relative z-10">{category}</span>
            {selectedCategory !== category && (
              <div className="absolute inset-0 bg-amber-200/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            )}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-6/5 overflow-hidden bg-gray-900 relative">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-700 blur-xl" />

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Shimmer animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-amber-200/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>

              {/* Wrap the entire card content in a link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer"
              >
                <div className="text-xs tracking-[0.3em] text-amber-200/80 mb-2 animate-pulse">
                  {project.category} — {project.year}
                </div>
                <h3 className="text-3xl font-serif font-light text-white mb-2 group-hover:text-amber-100 transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="h-px w-12 bg-amber-200/50 mb-3 group-hover:w-24 transition-all duration-500" />
                <div className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.link?.replace(/^https?:\/\//, "➤ ") || ""}
                </div>
              </a>
              {/* Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-200/0 group-hover:border-amber-200/30 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-200/0 group-hover:border-amber-200/30 transition-colors duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
