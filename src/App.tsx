import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/Loading";
import { HeroSection } from "./components/HeroSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { AboutSection } from "./components/AboutSection";
import { TechStack } from "./components/TechStack";

export function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        className={`transition-opacity duration-800 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <CustomCursor />
        <Navigation />
        <HeroSection startAnimation={showContent} />
        <TechStack />
        <PortfolioGrid />
        <AboutSection />
      </div>
    </div>
  );
}
