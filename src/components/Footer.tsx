"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="global-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="TripAdvisor"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="footer-legal">
            {/* Legal pages not yet created - links disabled for now */}
            <span className="footer-link footer-link-mobile" style={{ opacity: 0.5, cursor: "default" }}>
              Termeni
            </span>
            <span className="footer-link footer-link-desktop" style={{ opacity: 0.5, cursor: "default" }}>
              Termeni si Conditii
            </span>
            <span className="footer-separator">|</span>
            <span className="footer-link footer-link-mobile" style={{ opacity: 0.5, cursor: "default" }}>
              Confidențialitate
            </span>
            <span className="footer-link footer-link-desktop" style={{ opacity: 0.5, cursor: "default" }}>
              Politica de Confidentialitate
            </span>
            <span className="footer-separator">|</span>
            <span className="footer-link footer-link-mobile" style={{ opacity: 0.5, cursor: "default" }}>
              Cookies
            </span>
            <span className="footer-link footer-link-desktop" style={{ opacity: 0.5, cursor: "default" }}>
              Politica Cookies
            </span>
            <span className="footer-separator desktop-only">|</span>
            <button onClick={scrollToTop} className="footer-link footer-back-to-top desktop-only">
              SUS ↑
            </button>
          </div>

          <div className="footer-copyright">
            <p>© 2025 CRAFT. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

