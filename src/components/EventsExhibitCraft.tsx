"use client";

import { useState, useRef, useEffect } from "react";

export default function EventsExhibitCraft() {
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
      id="grupuri"
      ref={sectionRef}
      className={`events-exhibit-section ${isVisible ? "visible" : ""}`}
    >
      <div className="events-exhibit-container">
        <div className="events-exhibit-content">
          <div className="events-exhibit-text">
            <h2 className="events-exhibit-headline">Spiritul Craft. La scară mai mare.</h2>
            <p className="events-exhibit-body">
              Aduceți-vă prietenii. Am creat un spațiu primitor și flexibil, perfect pentru grupuri. Fie că e o zi de naștere sau o masă cu echipa, vă oferim atmosfera premiată a pub-ului într-un cadru semi-privat.
            </p>
          </div>
          <div className="events-exhibit-image-wrapper">
            <div
              className="events-exhibit-image"
              style={{
                backgroundImage: "url(/assets/images/events/craft-interior.jpg)",
              }}
            />
          </div>
          <div className="events-exhibit-stats">
            <div className="events-stat-block">
              <span className="events-stat-number">90</span>
              <span className="events-stat-label">LOCURI INTERIOR</span>
            </div>
            <div className="events-stat-block">
              <span className="events-stat-number">80</span>
              <span className="events-stat-label">LOCURI ROOFTOP</span>
            </div>
            <div className="events-stat-block">
              <span className="events-stat-number">60</span>
              <span className="events-stat-label">LOCURI TERASĂ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

