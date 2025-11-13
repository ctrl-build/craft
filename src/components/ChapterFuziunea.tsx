"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ChapterFuziunea() {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
          setScrollY(scrollProgress * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.5;

  return (
    <section ref={sectionRef} className="chapter-fuziunea-section">
      <div
        className="fuziunea-background"
        style={{
          backgroundImage: "url(/assets/images/story-fuziunea.jpg)",
        }}
      >
        <div className="fuziunea-overlay"></div>
      </div>

      <div
        className="fuziunea-content"
        style={{
          transform: prefersReducedMotion
            ? "none"
            : `translateY(${parallaxOffset}px)`,
        }}
      >
        <h2 className="fuziunea-headline">Arta de a combina</h2>
        <p className="fuziunea-text">
          Filozofia noastră este simplă: o atenție sporită asupra aromelor. Căutăm cele mai bune produse internaționale și le combinăm cu sufletul aromelor locale. Este o bucătărie de fuziune care nu face compromisuri, o colecție de gusturi care surprinde și încântă.
        </p>
        <Link href="/meniuri" className="fuziunea-cta">
          DESCOPERĂ MENIUL
        </Link>
      </div>
    </section>
  );
}

