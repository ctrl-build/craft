"use client";

import { useState, useEffect } from "react";

export default function StoryHero() {
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

  const imageOpacity = prefersReducedMotion
    ? 1
    : Math.max(0, 1 - scrollY / 600);
  const textOpacity = prefersReducedMotion
    ? 1
    : Math.max(0, 1 - scrollY / 400);

  return (
    <section className="story-hero-section">
      <div
        className="story-hero-image-container"
        style={{
          opacity: imageOpacity,
        }}
      >
        <div
          className="story-hero-image"
          style={{
            backgroundImage: `url("/assets/images/story-hero.jpg?v=2")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="story-hero-overlay"></div>
      </div>

      <div
        className="story-hero-content"
        style={{
          opacity: textOpacity,
        }}
      >
        <h1 className="story-hero-headline">POVESTEA NOASTRĂ.</h1>
        <p className="story-hero-subhead">Mai mult decât un pub. O destinație.</p>
      </div>

      <div className="story-hero-scroll-indicator">
        <span className="story-scroll-text">SCROLL</span>
      </div>
    </section>
  );
}

