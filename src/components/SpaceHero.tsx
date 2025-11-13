"use client";

import { useState, useEffect } from "react";

export default function SpaceHero() {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const textOpacity = prefersReducedMotion
    ? 1
    : Math.max(0, 1 - scrollY / 400);

  return (
    <section className="space-hero-section">
      <div
        className="space-hero-image-container"
        style={{
          backgroundImage: "url(/assets/images/space/hero-interior.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-hero-overlay"></div>
      </div>

      <div
        className="space-hero-content"
        style={{
          opacity: textOpacity,
        }}
      >
        <h1 className="space-hero-headline">SPAȚIUL NOSTRU</h1>

        <div className="space-hero-award">
          <p className="award-label">CÂȘTIGĂTOR</p>
          <p className="award-title">BEST INTERIOR</p>
          <p className="award-source">RESTAURANT GURU 2020</p>
        </div>

        <p className="space-hero-subhead">O destinație. Nu doar un interior.</p>
      </div>

      <div className="space-hero-scroll-indicator">
        <span className="space-scroll-text">SCROLL</span>
        <span className="space-scroll-arrow">↓</span>
      </div>
    </section>
  );
}

