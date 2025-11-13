"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (imageRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          const parallaxOffset = (window.innerHeight - rect.top) * 0.15;
          setScrollY(parallaxOffset);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="our-story-section">
      <div className="our-story-container">
        <h2 className={`our-story-headline ${isVisible ? "visible" : ""}`}>
          Meșteșugul de a fi împreună.
        </h2>

        <div className="our-story-content">
          <div
            ref={imageRef}
            className={`our-story-image-wrapper ${isVisible ? "visible" : ""}`}
            style={
              isVisible && scrollY > 0
                ? {
                    transform: `scale(1) translateY(${scrollY * 0.2}px)`,
                  }
                : undefined
            }
          >
            <img
              src="/assets/images/our-story.jpg"
              alt="Craft Pub team"
              className="our-story-image"
            />
          </div>

          <div className="our-story-text-wrapper">
            <div className={`our-story-text ${isVisible ? "visible" : ""}`}>
              <p className="our-story-paragraph">
                Craft nu e doar un pub. E un punct de întâlnire. De la prima oră a dimineții, cu
                aroma cafelei de specialitate, până târziu în noapte, cu ecoul cocktailurilor alese,
                suntem epicentrul social al Craiovei.
              </p>
              <p className="our-story-paragraph">
                Am creat un spațiu premiat unde designul internațional se îmbină cu aromele locale.
                Un loc primitor, mereu plin de viață, unde localnicii și turiștii se simt la fel de
                acasă. Aceasta e povestea noastră. Te invităm să o scrii pe a ta.
              </p>
            </div>

            <Link
              href="/povestea"
              className="our-story-cta"
              data-text="CITEȘTE POVESTEA COMPLETĂ"
            >
              <span className="cta-text">CITEȘTE POVESTEA COMPLETĂ</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

