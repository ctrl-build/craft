"use client";

import { useState, useEffect } from "react";

export default function EventsHero() {
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
    <section className="events-hero-section">
      <div
        className="events-hero-image-container"
        style={{
          backgroundImage: "url(/assets/images/events/hero-table.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="events-hero-overlay"></div>
      </div>

      <div
        className="events-hero-content"
        style={{
          opacity: textOpacity,
        }}
      >
        <h1 className="events-hero-headline">GRUPURI & EVENIMENTE</h1>
        <p className="events-hero-subhead">
          De la o masă de 10, la o noapte de 400. Avem spațiul perfect.
        </p>
      </div>
    </section>
  );
}

