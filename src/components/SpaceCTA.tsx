"use client";

import Link from "next/link";

export default function SpaceCTA() {
  const handleReservationClick = () => {
    const element = document.getElementById("rezerva");
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = "/#rezerva";
    }
  };

  return (
    <section className="space-cta-section">
      <div className="space-cta-container">
        <h2 className="space-cta-headline">Simte experiența.</h2>

        <div className="space-cta-buttons">
          <button className="space-cta-button space-cta-primary" onClick={handleReservationClick}>
            REZERVĂ O MASĂ
          </button>
          <Link href="/meniuri" className="space-cta-button space-cta-secondary">
            EXPLOREAZĂ MENIURILE
          </Link>
        </div>
      </div>
    </section>
  );
}

