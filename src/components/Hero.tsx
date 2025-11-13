"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const videoOpacity = prefersReducedMotion
    ? 1
    : Math.max(0, 1 - scrollY / 800);
  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.5;
  const contentParallaxOffset = prefersReducedMotion ? 0 : parallaxOffset * 0.3;

  return (
    <section className="hero-section">
      <div
        className="hero-video-container"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translateY(${parallaxOffset}px)`,
          opacity: videoOpacity,
        }}
      >
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero-poster.png"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div
        className={`hero-content ${isLoaded ? "loaded" : ""}`}
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translateY(${contentParallaxOffset}px)`,
        }}
      >
        <h1 className="hero-headline">
          <span className="hero-line-1">SUFLET LICHID.</span>
          <span className="hero-line-2">SPIRIT LOCAL.</span>
        </h1>
        <p className="hero-subheadline">
          O colecție de gusturi, meșteșug și momente, în inima Craiovei.
        </p>
        <a href="/contact" className="hero-cta">
          REZERVĂ O MASĂ
        </a>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
}

