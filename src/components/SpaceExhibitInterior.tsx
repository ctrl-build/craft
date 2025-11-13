"use client";

import { useState, useEffect } from "react";

const interiorImages = [
  "/assets/images/space/interior-1.jpg",
  "/assets/images/space/interior-2.jpg",
  "/assets/images/space/interior-3.jpg",
  "/assets/images/space/interior-4.jpg",
  "/assets/images/space/interior-5.jpg",
  "/assets/images/space/interior-6.jpg",
  "/assets/images/space/interior-7.jpg",
  "/assets/images/space/interior-8.jpg",
  "/assets/images/space/interior-9.jpg",
  "/assets/images/space/interior-10.jpg",
];

export default function SpaceExhibitInterior() {
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
    setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <section id="interior" className="space-exhibit-section">
        <div className="space-exhibit-container">
          <div className="space-exhibit-header">
            <h2 className="space-exhibit-headline">Interior: Inima Casei</h2>
            <p className="space-exhibit-description">
              Explorează designul premiat, o fuziune de texturi calde și energie vibrantă.
            </p>
          </div>

          <div className="space-exhibit-grid">
            {interiorImages.map((image, index) => (
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
                src={interiorImages[currentImageIndex]}
                alt={`Interior ${currentImageIndex + 1}`}
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

