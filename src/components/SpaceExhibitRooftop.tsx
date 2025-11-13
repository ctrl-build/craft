"use client";

import { useState, useEffect } from "react";

const rooftopImages = [
  "/assets/images/space/rooftop-1.jpg",
  "/assets/images/space/rooftop-2.jpg",
  "/assets/images/space/rooftop-3.jpg",
  "/assets/images/space/rooftop-4.jpg",
  "/assets/images/space/rooftop-5.jpg",
  "/assets/images/space/rooftop-6.jpg",
  "/assets/images/space/rooftop-7.jpg",
  "/assets/images/space/rooftop-8.jpg",
];

export default function SpaceExhibitRooftop() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % rooftopImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + rooftopImages.length) % rooftopImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % rooftopImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + rooftopImages.length) % rooftopImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <section id="rooftop" className="space-exhibit-section">
        <div className="space-exhibit-container">
          <div className="space-exhibit-header">
            <h2 className="space-exhibit-headline">Rooftop: Evadare Urbană</h2>
            <p className="space-exhibit-description">
              Deasupra orașului, sub cerul liber. Descoperă oaza noastră deasupra centrului Craiovei.
            </p>
          </div>

          <div className="space-exhibit-grid">
            {rooftopImages.map((image, index) => (
              <div
                key={index}
                className="space-exhibit-item"
                onClick={() => openLightbox(index)}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="space-exhibit-item-overlay">
                  <span className="space-exhibit-view-icon">👁</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="space-lightbox-overlay" onClick={closeLightbox}>
          <div className="space-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="space-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <button
              className="space-lightbox-prev"
              onClick={prevImage}
              aria-label="Previous"
            >
              ‹
            </button>
            <div className="space-lightbox-image-container">
              <img
                src={rooftopImages[currentImageIndex]}
                alt={`Rooftop ${currentImageIndex + 1}`}
                className="space-lightbox-image"
              />
            </div>
            <button
              className="space-lightbox-next"
              onClick={nextImage}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

