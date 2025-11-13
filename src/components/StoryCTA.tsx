"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function StoryCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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

  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reservationForm = document.getElementById("rezerva");
    if (reservationForm) {
      reservationForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#rezerva";
    }
  };

  return (
    <section ref={sectionRef} className="story-cta-section">
      <div className="story-cta-container">
        <h2 className={`story-cta-headline ${isVisible ? "visible" : ""}`}>
          Gata de un nou capitol?
        </h2>

        <div className={`story-cta-buttons ${isVisible ? "visible" : ""}`}>
          <a
            href="#rezerva"
            onClick={handleReserveClick}
            className="story-cta-button story-cta-primary"
          >
            REZERVĂ O MASĂ
          </a>
          <Link href="/meniuri" className="story-cta-button story-cta-secondary">
            EXPLOREAZĂ MENIURILE
          </Link>
        </div>
      </div>
    </section>
  );
}

