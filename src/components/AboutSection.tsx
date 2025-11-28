import { useEffect, useState, useRef } from "react";
export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 border-t border-amber-200/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <div className="text-xs tracking-[0.5em] text-amber-200/60 mb-6">
              ABOUT ME
            </div>
            <h2 className="text-4xl font-serif font-light italic text-amber-100 mb-8">
              Aspiring Full-Stack Developer
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a 4th-year Computer Science Student at the University of Santo
              Tomas. I'm an aspiring creative developer with a passion for
              building beautiful, functional, and user-friendly websites and
              applications. With little expertise in both design and
              development, I bridge the gap between aesthetics and
              functionality. And I want to learn more about technology
            </p>
            <p className="text-gray-400 leading-relaxed">
              I also enjoy playing online games, watching anime, and music. I
              also love to lift weights or go to the gym every week for my
              mental and physical health
            </p>
          </div>
          {/* Right column */}
          <div>
            <div className="text-xs tracking-[0.5em] text-amber-200/60 mb-6">
              EXPERTISE
            </div>
            <div className="space-y-8">
              {[
                {
                  skill: "Front-End Development",
                  level: "80%",
                },
                {
                  skill: "JavaScript",
                  level: "70%",
                },
                {
                  skill: "SEO",
                  level: "80%",
                },
                {
                  skill: "Back-End Development",
                  level: "75%",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm tracking-wider text-gray-300">
                      {item.skill}
                    </span>
                    <span className="text-xs text-amber-200/60">
                      {item.level}
                    </span>
                  </div>
                  <div className="h-px bg-gray-800 overflow-hidden">
                    <div
                      className={`h-full bg-linear-to-r from-amber-200/60 to-amber-200/20 transition-all duration-1000 ease-out ${
                        isVisible ? "translate-x-0" : "-translate-x-full"
                      }`}
                      style={{
                        width: item.level,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-amber-200/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs tracking-[0.3em] text-amber-200/60">
            © 2025 Yuta Koike
          </div>
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/kouuuuuta/"
              className="text-xs tracking-[0.3em] text-amber-200/60 hover:text-amber-200 transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.facebook.com/yuta.koike.14811"
              className="text-xs tracking-[0.3em] text-amber-200/60 hover:text-amber-200 transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="https://www.linkedin.com/in/yuta-koike-1139b8301/"
              className="text-xs tracking-[0.3em] text-amber-200/60 hover:text-amber-200 transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
