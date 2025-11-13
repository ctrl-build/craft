"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "POVESTEA", href: "/povestea" },
  { label: "MENIURI", href: "/meniuri" },
  { label: "SPAȚIUL", href: "/spatiul" },
  { label: "EVENIMENTE", href: "/evenimente" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

  // Only set mounted after client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getActiveLink = (href: string) => {
    // Don't mark as active until mounted to avoid hydration mismatches
    if (!isMounted) {
      return false;
    }
    
    if (href.startsWith("#")) {
      return false;
    }
    
    if (!pathname || typeof pathname !== "string") {
      return false;
    }
    
    const currentPath = pathname.trim();
    const linkPath = href.trim();
    
    // Handle root path explicitly
    if (currentPath === "/" && linkPath === "/") {
      return true;
    }
    
    // For non-root paths, do exact match
    if (currentPath !== "/" && linkPath !== "/") {
      // Remove trailing slashes for comparison
      const normalizedCurrentPath = currentPath.replace(/\/$/, "");
      const normalizedLinkPath = linkPath.replace(/\/$/, "");
      
      if (normalizedCurrentPath === normalizedLinkPath) {
        return true;
      }
    }
    
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      firstFocusableRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMenuOpen) return;

      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const focusableElements = overlayRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>;

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`header-container ${
          isScrolled ? "header-scrolled" : "header-immersive"
        } ${isMenuOpen ? "menu-open" : ""}`}
      >
        <div className="header-content">
          <a href="/" className="logo-link">
            <span className="logo-text">CRAFT.</span>
          </a>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${getActiveLink(link.href) ? "active" : ""}`}
                data-label={link.label}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="header-right">
            <a href="/contact" className="header-cta desktop-cta">
              REZERVĂ ACUM
            </a>
            <a href="/contact" className="header-cta mobile-cta">
              REZERVĂ
            </a>
            <button
              className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={overlayRef}
        className={`mobile-overlay ${isMenuOpen ? "overlay-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="mobile-nav">
          {navLinks.map((link, index) => {
            const isFirst = index === 0;
            const isLast = index === navLinks.length - 1;
            return (
              <a
                key={link.href}
                ref={isFirst ? firstFocusableRef : isLast ? lastFocusableRef : null}
                href={link.href}
                className={`mobile-nav-link ${getActiveLink(link.href) ? "active" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mobile-footer">
          <div className="contact-info">
            <p className="contact-address">Eugeniu Carada 12, Craiova</p>
            <p className="contact-phone">+40 251 123 456</p>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
          </div>
        </div>
      </div>
    </>
  );
}

