"use client";

import { useState, useEffect, useRef } from "react";

interface ImageData {
  id: string;
  src: string;
  category: "interior" | "rooftop";
}

const interiorImages: ImageData[] = [
  { id: "int1", src: "/assets/images/space/interior-1.jpg", category: "interior" },
  { id: "int2", src: "/assets/images/space/interior-2.jpg", category: "interior" },
  { id: "int3", src: "/assets/images/space/interior-3.jpg", category: "interior" },
  { id: "int4", src: "/assets/images/space/interior-4.jpg", category: "interior" },
  { id: "int5", src: "/assets/images/space/interior-5.jpg", category: "interior" },
  { id: "int6", src: "/assets/images/space/interior-6.jpg", category: "interior" },
  { id: "int7", src: "/assets/images/space/interior-7.jpg", category: "interior" },
  { id: "int8", src: "/assets/images/space/interior-8.jpg", category: "interior" },
  { id: "int9", src: "/assets/images/space/interior-9.jpg", category: "interior" },
  { id: "int10", src: "/assets/images/space/interior-10.jpg", category: "interior" },
];

const rooftopImages: ImageData[] = [
  { id: "roof1", src: "/assets/images/space/rooftop-1.jpg", category: "rooftop" },
  { id: "roof2", src: "/assets/images/space/rooftop-2.jpg", category: "rooftop" },
  { id: "roof3", src: "/assets/images/space/rooftop-3.jpg", category: "rooftop" },
];

export default function Space() {
  const [hoveredSide, setHoveredSide] = useState<"interior" | "rooftop" | null>(null);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [slideshowCategory, setSlideshowCategory] = useState<"interior" | "rooftop" | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideshowIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const openSlideshow = (category: "interior" | "rooftop") => {
    setSlideshowCategory(category);
    setIsSlideshowOpen(true);
    setCurrentSlideIndex(0);
  };

  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
    setSlideshowCategory(null);
    setCurrentSlideIndex(0);
  };

  const nextSlide = () => {
    if (!slideshowCategory) return;
    const images = slideshowCategory === "interior" ? interiorImages : rooftopImages;
    setCurrentSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (!slideshowCategory) return;
    const images = slideshowCategory === "interior" ? interiorImages : rooftopImages;
    setCurrentSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isSlideshowOpen || !slideshowCategory) {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
        slideshowIntervalRef.current = null;
      }
      return;
    }

    const images = slideshowCategory === "interior" ? interiorImages : rooftopImages;
    slideshowIntervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current);
      }
    };
  }, [isSlideshowOpen, slideshowCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSlideshowOpen) return;
      if (e.key === "Escape") {
        closeSlideshow();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSlideshowOpen, slideshowCategory, currentSlideIndex]);

  const currentSlideshowImages = slideshowCategory === "interior" ? interiorImages : rooftopImages;
  const currentImage = currentSlideshowImages[currentSlideIndex];

  return (
    <>
      <section className="space-section">
        <div className="space-split-container">
          <div
            className={`space-half space-interior ${hoveredSide === "interior" ? "expanded" : hoveredSide === null ? "default" : "compressed"}`}
            onMouseEnter={() => setHoveredSide("interior")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => openSlideshow("interior")}
          >
            <div className="space-background">
              <div
                className="space-bg-image"
                style={{
                  backgroundImage: `url(${interiorImages[0].src})`,
                }}
              />
              <div className="space-overlay"></div>
            </div>
            <div className={`space-content ${hoveredSide === "rooftop" ? "content-hidden" : ""}`}>
              <h2 className="space-title">INTERIOR</h2>
              <div className="award-badge">
                <span className="award-text">Câștigător, Best Interior 2020</span>
              </div>
              <span className={`space-prompt ${hoveredSide === "interior" ? "visible" : ""}`}>CLICK PENTRU A EXPLORA</span>
            </div>
          </div>

          <div className={`space-divider ${hoveredSide === "interior" ? "divider-pushed-right" : ""} ${hoveredSide === "rooftop" ? "divider-pushed-left" : ""}`}></div>

          <div
            className={`space-half space-rooftop ${hoveredSide === "rooftop" ? "expanded" : hoveredSide === null ? "default" : "compressed"}`}
            onMouseEnter={() => setHoveredSide("rooftop")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => openSlideshow("rooftop")}
          >
            <div className="space-background">
              <div
                className="space-bg-image"
                style={{
                  backgroundImage: `url(${rooftopImages[0].src})`,
                }}
              />
              <div className="space-overlay"></div>
            </div>
            <div className={`space-content ${hoveredSide === "interior" ? "content-hidden" : ""}`}>
              <h2 className="space-title">ROOFTOP</h2>
              <span className={`space-prompt ${hoveredSide === "rooftop" ? "visible" : ""}`}>CLICK PENTRU A EXPLORA</span>
            </div>
          </div>
        </div>

        <div className="space-mobile-intro">
          <h2 className="space-mobile-headline">Două suflete. Un singur spirit.</h2>
        </div>

        <div className="space-mobile-cards">
          <div
            className="space-mobile-card space-card-interior"
            onClick={() => openSlideshow("interior")}
          >
            <div className="space-mobile-bg">
              <div
                className="space-mobile-image"
                style={{
                  backgroundImage: `url(${interiorImages[0].src})`,
                }}
              />
              <div className="space-mobile-overlay"></div>
            </div>
            <div className="space-mobile-content">
              <h2 className="space-mobile-title">INTERIOR</h2>
              <div className="award-badge-mobile">
                <span className="award-text-mobile">Câștigător, Best Interior 2020</span>
              </div>
              <span className="space-mobile-prompt">CLICK PENTRU A EXPLORA</span>
            </div>
          </div>

          <div
            className="space-mobile-card space-card-rooftop"
            onClick={() => openSlideshow("rooftop")}
          >
            <div className="space-mobile-bg">
              <div
                className="space-mobile-image"
                style={{
                  backgroundImage: `url(${rooftopImages[0].src})`,
                }}
              />
              <div className="space-mobile-overlay"></div>
            </div>
            <div className="space-mobile-content">
              <h2 className="space-mobile-title">ROOFTOP</h2>
              <span className="space-mobile-prompt">CLICK PENTRU A EXPLORA</span>
            </div>
          </div>
        </div>
      </section>

      {isSlideshowOpen && slideshowCategory && (
        <div className="slideshow-overlay">
          <div className="slideshow-container">
            <button className="slideshow-close" onClick={closeSlideshow}>
              ×
            </button>
            <button className="slideshow-nav slideshow-prev" onClick={prevSlide}>
              ←
            </button>
            <button className="slideshow-nav slideshow-next" onClick={nextSlide}>
              →
            </button>
            {currentSlideshowImages.map((image, index) => (
              <div
                key={image.id}
                className={`slideshow-image-wrapper ${index === currentSlideIndex ? "active" : ""}`}
              >
                <div
                  className="slideshow-image"
                  style={{
                    backgroundImage: `url(${image.src})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
