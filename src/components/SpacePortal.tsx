"use client";

import { useState, useEffect } from "react";

export default function SpacePortal() {
  const [hoveredSide, setHoveredSide] = useState<"interior" | "rooftop" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteriorClick = () => {
    const element = document.getElementById("interior");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleRooftopClick = () => {
    const element = document.getElementById("rooftop");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (isMobile) {
    return (
      <section className="space-portal-section">
        <div className="space-portal-mobile">
          <div
            className="space-portal-card space-portal-interior"
            onClick={handleInteriorClick}
            style={{
              backgroundImage: "url(/assets/images/space/interior-1.jpg)",
            }}
          >
            <div className="space-portal-overlay"></div>
            <h2 className="space-portal-title">INTERIOR</h2>
          </div>

          <div
            className="space-portal-card space-portal-rooftop"
            onClick={handleRooftopClick}
            style={{
              backgroundImage: "url(/assets/images/space/rooftop-1.jpg)",
            }}
          >
            <div className="space-portal-overlay"></div>
            <h2 className="space-portal-title">ROOFTOP</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-portal-section">
      <div className="space-portal-split">
        <div
          className={`space-portal-half space-portal-interior ${
            hoveredSide === "interior" ? "expanded" : hoveredSide === null ? "default" : "compressed"
          }`}
          onMouseEnter={() => setHoveredSide("interior")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleInteriorClick}
          style={{
            backgroundImage: "url(/assets/images/space/interior-1.jpg)",
          }}
        >
          <div className="space-portal-overlay"></div>
          <h2 className="space-portal-title">INTERIOR</h2>
        </div>

        <div
          className={`space-portal-divider ${
            hoveredSide === "interior"
              ? "divider-pushed-right"
              : hoveredSide === "rooftop"
              ? "divider-pushed-left"
              : ""
          }`}
        ></div>

        <div
          className={`space-portal-half space-portal-rooftop ${
            hoveredSide === "rooftop" ? "expanded" : hoveredSide === null ? "default" : "compressed"
          }`}
          onMouseEnter={() => setHoveredSide("rooftop")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleRooftopClick}
          style={{
            backgroundImage: "url(/assets/images/space/rooftop-1.jpg)",
          }}
        >
          <div className="space-portal-overlay"></div>
          <h2 className="space-portal-title">ROOFTOP</h2>
        </div>
      </div>
    </section>
  );
}

