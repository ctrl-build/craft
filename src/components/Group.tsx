"use client";

import { useState, useEffect, useRef } from "react";

export default function Group() {
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

  const handleCraftClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reservationForm = document.getElementById("rezerva");
    if (reservationForm) {
      reservationForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="group-section">
      <div className="group-container">
        <h2 className={`group-headline ${isVisible ? "visible" : ""}`}>
          De la o masă de grup la un eveniment major.
        </h2>

        <div className="group-cards">
          <div className={`group-card group-card-craft ${isVisible ? "visible" : ""}`}>
            <div className="group-card-image-wrapper">
              <div
                className="group-card-image craft-image"
                style={{
                  backgroundImage: "url(/assets/images/group-craft.jpg)",
                }}
              />
              <div className="group-card-overlay"></div>
            </div>
            <div className="group-card-content">
              <h3 className="group-card-title">Grupuri la Craft</h3>
              <p className="group-card-description">
                Plănuiești o aniversare sau o masă cu echipa? Spațiul nostru generos este perfect pentru grupuri de până la 90 de persoane.
              </p>
              <a href="#rezerva" className="group-card-cta" onClick={handleCraftClick}>
                REZERVĂ PENTRU GRUP
              </a>
            </div>
          </div>

          <div className={`group-card group-card-chicago ${isVisible ? "visible" : ""}`}>
            <div className="group-card-image-wrapper">
              <div
                className="group-card-image chicago-image"
                style={{
                  backgroundImage: "url(/assets/images/group-chicago.jpg)",
                }}
              />
              <div className="group-card-overlay"></div>
            </div>
            <div className="group-card-content">
              <h3 className="group-card-title">Evenimente la Chicago Hall</h3>
              <p className="group-card-description">
                Pentru momentele care cer un spațiu pe măsură, sora noastră, Chicago Events Hall, vă oferă 400 de locuri pentru nunți, conferințe sau petreceri corporate.
              </p>
              <a href="https://chicagobar.ro" target="_blank" rel="noopener noreferrer" className="group-card-cta">
                EXPLOREAZĂ CHICAGO HALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

