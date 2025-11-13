"use client";

import { useState, useEffect, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  labelEn: string;
}

const stats: Stat[] = [
  { value: 90, label: "Locuri Interior", labelEn: "Interior Seats" },
  { value: 80, label: "Locuri Rooftop", labelEn: "Rooftop Seats" },
  { value: 60, label: "Locuri Terasă", labelEn: "Terrace Seats" },
];

export default function ChapterSpatiulPrimitor() {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCountedRef.current) {
            setIsVisible(true);
            hasCountedRef.current = true;

            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              const stepDuration = duration / steps;

              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  setCountedValues((prev) => {
                    const newValues = [...prev];
                    newValues[index] = stat.value;
                    return newValues;
                  });
                  clearInterval(timer);
                } else {
                  setCountedValues((prev) => {
                    const newValues = [...prev];
                    newValues[index] = Math.floor(current);
                    return newValues;
                  });
                }
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="chapter-spatiul-section">
      <div className="chapter-container">
        <h2 className={`chapter-headline ${isVisible ? "visible" : ""}`}>
          Un loc pentru toți
        </h2>

        <div className="chapter-content">
          <div className={`chapter-text-wrapper ${isVisible ? "visible" : ""}`}>
            <p className="chapter-paragraph">
              "Primitor" este cuvântul nostru de ordine. Am primit premiul "Best Interior" pentru că am creat un spațiu de peste 100mp unde oricine se simte binevenit, fie că ești singur, cu prietenii sau cu un grup mare.
            </p>
          </div>

          <div className={`chapter-stats-wrapper ${isVisible ? "visible" : ""}`}>
            {stats.map((stat, index) => (
              <div key={index} className="story-stat-block">
                <div className="story-stat-number">
                  {countedValues[index]}
                </div>
                <div className="story-stat-label">{stat.label}</div>
                <div className="story-stat-label-en">{stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

