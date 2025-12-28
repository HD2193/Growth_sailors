import HomeWithFAQ from "./components/HomeWithFAQ";
import WhatWithInteraction from "./components/WhatWithInteraction";
import WhyWithInteraction from "./components/WhyWithInteraction";
import WhoWithInteraction from "./components/WhoWithInteraction";
import PricingWithInteraction from "./components/PricingWithInteraction";
import "./styles/globals.css";
import { useEffect, useState } from "react";

export default function App() {
  const [scale, setScale] = useState(1);
  const [currentPage, setCurrentPage] = useState<
    "home" | "what" | "why" | "who" | "pricing"
  >("home");

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const designWidth = 1440;

      // Calculate scale based on viewport width to use full screen
      const widthScale = viewportWidth / designWidth;

      // Use the width scale to fill the screen
      setScale(widthScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Listen for navigation clicks
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkText = target.textContent?.toLowerCase().trim();
      
      // Find the closest clickable element
      const clickedElement = target.closest('[data-name*="Link"], [data-name*="menu-item"]') || target;
      const elementText = clickedElement.textContent?.toLowerCase().trim();

      console.log("Clicked element text:", elementText);

      // Check if click is on navigation items - use exact match for single words
      if (elementText === "what") {
        e.preventDefault();
        setCurrentPage("what");
        window.scrollTo(0, 0);
      } else if (elementText === "why") {
        e.preventDefault();
        setCurrentPage("why");
        window.scrollTo(0, 0);
      } else if (elementText === "who") {
        e.preventDefault();
        setCurrentPage("who");
        window.scrollTo(0, 0);
      } else if (elementText === "numbers" || elementText === "pricing") {
        e.preventDefault();
        console.log("Navigating to pricing page");
        setCurrentPage("pricing");
        window.scrollTo(0, 0);
      } else if (elementText === "home" || target.closest('[data-name*="logo"]')) {
        e.preventDefault();
        setCurrentPage("home");
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("click", handleNavClick);
    return () => document.removeEventListener("click", handleNavClick);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#111] overflow-x-hidden">
      <div
        className="w-[1440px] origin-top-left"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {currentPage === "home" ? (
          <HomeWithFAQ />
        ) : currentPage === "what" ? (
          <WhatWithInteraction />
        ) : currentPage === "why" ? (
          <WhyWithInteraction />
        ) : currentPage === "who" ? (
          <WhoWithInteraction />
        ) : (
          <PricingWithInteraction />
        )}
      </div>
    </div>
  );
}
