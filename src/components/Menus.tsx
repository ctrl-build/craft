"use client";

import Link from "next/link";

export default function Menus() {
  return (
    <section className="menus-portal-section">
      <div className="menus-portal-container">
        <div className="menus-portal-text">
          <h2 className="menus-portal-headline">Arta Gustului.</h2>
          <p className="menus-portal-description">
            O bucătărie definită de meșteșug. Folosim arome locale și tehnici
            internaționale pentru a transforma ingrediente proaspete în momente
            memorabile. De la un mic dejun vibrant la o cină complexă, fiecare
            farfurie spune o poveste. Colecția noastră de băuturi este curatoriată
            pentru a completa perfect experiența.
          </p>
        </div>

        <div className="menus-portal-ctas">
          <Link href="/meniuri" className="menu-cta-block menu-cta-food">
            <div className="cta-image-wrapper">
              <div className="cta-image food-image"></div>
              <div className="cta-overlay"></div>
            </div>
            <div className="cta-content">
              <span className="cta-text">EXPLOREAZĂ MÂNCAREA</span>
            </div>
          </Link>

          <Link href="/meniuri" className="menu-cta-block menu-cta-drinks">
            <div className="cta-image-wrapper">
              <div className="cta-image drinks-image"></div>
              <div className="cta-overlay"></div>
            </div>
            <div className="cta-content">
              <span className="cta-text">DESCOPERĂ BĂUTURILE</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
