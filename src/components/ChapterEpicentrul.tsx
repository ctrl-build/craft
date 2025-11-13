"use client";

import { useState, useEffect, useRef } from "react";

export default function ChapterEpicentrul() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight + 100 && rect.bottom > -100;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    checkVisibility();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    observer.observe(sectionRef.current);

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <section ref={sectionRef} className="chapter-epicentrul-section" style={{ position: "relative", zIndex: 10 }}>
      <div className="chapter-container">
        <h2 className={`chapter-headline ${isVisible ? "visible" : ""}`}>
          Epicentrul Social al Craiovei
        </h2>

        <div className="chapter-content">
          <div className={`chapter-text-wrapper ${isVisible ? "visible" : ""}`}>
            <p className="chapter-paragraph">
              Suntem ancorați în inima orașului, lângă Centrul Vechi și cele mai importante atracții. De la prima oră a dimineții, am devenit rapid locul preferat al localnicilor și al turiștilor deopotrivă. Craft este locul unde pulsul orașului se simte cel mai bine, un punct de întâlnire unde se nasc conversații și se leagă prietenii.
            </p>
          </div>

          <div className={`chapter-map-wrapper ${isVisible ? "visible" : ""}`}>
            <div className="story-map-container">
              <svg
                className="story-map-svg"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="map-pulse"
                  cx="200"
                  cy="200"
                  r="30"
                  fill="none"
                  stroke="var(--ambra-arzatoare)"
                  strokeWidth="2"
                />
                <circle
                  className="map-heart"
                  cx="200"
                  cy="200"
                  r="8"
                  fill="var(--ambra-arzatoare)"
                />
                <text
                  x="200"
                  y="250"
                  textAnchor="middle"
                  className="map-label"
                  fill="var(--creta)"
                  fontSize="14"
                  fontFamily="var(--font-inter), sans-serif"
                >
                  Craft
                </text>
                <text
                  x="200"
                  y="280"
                  textAnchor="middle"
                  className="map-label-small"
                  fill="rgba(245, 245, 245, 0.6)"
                  fontSize="12"
                  fontFamily="var(--font-inter), sans-serif"
                >
                  Centrul Vechi
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

