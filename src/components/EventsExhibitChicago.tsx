"use client";

import { useState, useRef, useEffect } from "react";

export default function EventsExhibitChicago() {
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

  return (
    <section
      id="evenimente"
      ref={sectionRef}
      className={`events-exhibit-chicago-section ${isVisible ? "visible" : ""}`}
    >
      <div
        className="events-exhibit-chicago-background"
        style={{
          backgroundImage: "url(/assets/images/events/chicago-wedding.jpg)",
        }}
      >
        <div className="events-exhibit-chicago-overlay"></div>
        <div className="events-exhibit-chicago-content">
          <h2 className="events-exhibit-chicago-headline">Eleganță la cheie.</h2>
          <p className="events-exhibit-chicago-body">
            Pentru momentele care cer un spațiu pe măsură, sora noastră, Chicago Events Hall, este o locație unică. Cu 400 de locuri, 1200mp, și o echipă de profesioniști gata să organizeze totul, de la nunți la conferințe.
          </p>
          <a
            href="https://chicagobar.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="events-exhibit-chicago-cta"
          >
            VIZITEAZĂ CHICAGO-HALL.RO
          </a>
        </div>
      </div>
    </section>
  );
}

