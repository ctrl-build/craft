"use client";

import { useState, useEffect } from "react";

export default function EventsPortal() {
  const [hoveredSide, setHoveredSide] = useState<"craft" | "chicago" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCraftClick = () => {
    const element = document.getElementById("grupuri");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleChicagoClick = () => {
    const element = document.getElementById("evenimente");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (isMobile) {
    return (
      <section className="events-portal-section">
        <div className="events-portal-mobile">
          <div
            className="events-portal-card events-portal-craft"
            onClick={handleCraftClick}
            style={{
              backgroundImage: "url(/assets/images/events/craft-group.jpg)",
            }}
          >
            <div className="events-portal-overlay"></div>
            <div className="events-portal-content">
              <h2 className="events-portal-title">GRUPURI LA CRAFT</h2>
              <p className="events-portal-subhead">
                Pentru aniversări, cine de afaceri sau seri memorabile.
              </p>
            </div>
          </div>

          <div
            className="events-portal-card events-portal-chicago"
            onClick={handleChicagoClick}
            style={{
              backgroundImage: "url(/assets/images/events/chicago-hall.jpg)",
            }}
          >
            <div className="events-portal-overlay"></div>
            <div className="events-portal-content">
              <h2 className="events-portal-title">EVENIMENTE LA CHICAGO HALL</h2>
              <p className="events-portal-subhead">
                Pentru nunți, botezuri sau evenimente corporate de anvergură.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="events-portal-section">
      <div className="events-portal-split">
        <div
          className={`events-portal-half events-portal-craft ${
            hoveredSide === "craft" ? "expanded" : hoveredSide === null ? "default" : "compressed"
          }`}
          onMouseEnter={() => setHoveredSide("craft")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleCraftClick}
          style={{
            backgroundImage: "url(/assets/images/events/craft-group.jpg)",
          }}
        >
          <div className="events-portal-overlay"></div>
          <div className={`events-portal-content ${hoveredSide === "chicago" ? "content-hidden" : ""}`}>
            <h2 className="events-portal-title">GRUPURI LA CRAFT</h2>
            <p className="events-portal-subhead">
              Pentru aniversări, cine de afaceri sau seri memorabile.
            </p>
            <span className={`events-portal-prompt ${hoveredSide === "craft" ? "visible" : ""}`}>
              SCROLL PENTRU DETALII
            </span>
          </div>
        </div>

        <div
          className={`events-portal-divider ${
            hoveredSide === "craft"
              ? "divider-pushed-right"
              : hoveredSide === "chicago"
              ? "divider-pushed-left"
              : ""
          }`}
        ></div>

        <div
          className={`events-portal-half events-portal-chicago ${
            hoveredSide === "chicago" ? "expanded" : hoveredSide === null ? "default" : "compressed"
          }`}
          onMouseEnter={() => setHoveredSide("chicago")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={handleChicagoClick}
          style={{
            backgroundImage: "url(/assets/images/events/chicago-hall.jpg)",
          }}
        >
          <div className="events-portal-overlay"></div>
          <div className={`events-portal-content ${hoveredSide === "craft" ? "content-hidden" : ""}`}>
            <h2 className="events-portal-title">EVENIMENTE LA CHICAGO HALL</h2>
            <p className="events-portal-subhead">
              Pentru nunți, botezuri sau evenimente corporate de anvergură.
            </p>
            <span className={`events-portal-prompt ${hoveredSide === "chicago" ? "visible" : ""}`}>
              SCROLL PENTRU DETALII
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

