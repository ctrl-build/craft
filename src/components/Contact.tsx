"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    telefon: "",
    data: "",
    ora: "",
    persoane: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleInputBlur = (fieldName: string) => {
    if (!formData[fieldName as keyof typeof formData]) {
      setFocusedField(null);
    }
  };

  const isFieldActive = (fieldName: string) => {
    return focusedField === fieldName || !!formData[fieldName as keyof typeof formData];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="rezerva" className="contact-section">
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? "visible" : ""}`}>
          <h2 className="contact-headline">Te așteptăm.</h2>
          <p className="contact-description">
            Fă o rezervare online sau sună-ne. Locul tău la Craft e pregătit.
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-form-wrapper ${isVisible ? "visible" : ""}`}>
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="nume"
                    name="nume"
                    value={formData.nume}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("nume")}
                    onBlur={() => handleInputBlur("nume")}
                    className="form-input"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="nume"
                    className={`form-label ${focusedField === "nume" || formData.nume ? "focused" : ""}`}
                  >
                    Nume
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("email")}
                    onBlur={() => handleInputBlur("email")}
                    className="form-input"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="email"
                    className={`form-label ${focusedField === "email" || formData.email ? "focused" : ""}`}
                  >
                    Email
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("telefon")}
                    onBlur={() => handleInputBlur("telefon")}
                    className="form-input"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="telefon"
                    className={`form-label ${focusedField === "telefon" || formData.telefon ? "focused" : ""}`}
                  >
                    Telefon
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    id="data"
                    name="data"
                    value={formData.data}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("data")}
                    onBlur={() => handleInputBlur("data")}
                    className="form-input form-input-date"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="data"
                    className={`form-label ${isFieldActive("data") ? "focused" : ""}`}
                  >
                    Data
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="time"
                    id="ora"
                    name="ora"
                    value={formData.ora}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("ora")}
                    onBlur={() => handleInputBlur("ora")}
                    className="form-input form-input-time"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="ora"
                    className={`form-label ${isFieldActive("ora") ? "focused" : ""}`}
                  >
                    Ora
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    id="persoane"
                    name="persoane"
                    value={formData.persoane}
                    onChange={handleInputChange}
                    onFocus={() => handleInputFocus("persoane")}
                    onBlur={() => handleInputBlur("persoane")}
                    className="form-input"
                    min="1"
                    required
                    suppressHydrationWarning
                  />
                  <label
                    htmlFor="persoane"
                    className={`form-label ${focusedField === "persoane" || formData.persoane ? "focused" : ""}`}
                  >
                    Nr. Persoane
                  </label>
                </div>

                <button type="submit" className="form-submit" disabled={isSubmitting} suppressHydrationWarning>
                  {isSubmitting ? (
                    <span className="submit-spinner">⏳</span>
                  ) : (
                    "TRIMITE REZERVAREA"
                  )}
                </button>
              </form>
            ) : (
              <div className="form-success">
                <p className="success-message">Mulțumim! Rezervarea ta a fost primită.</p>
              </div>
            )}
          </div>

          <div className={`contact-info-wrapper ${isVisible ? "visible" : ""}`}>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.1234567890123!2d23.7945!3d44.3196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d7b8e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2sEugeniu%20Carada%2012%2C%20Craiova%2C%20Romania!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="detail-label">Adresă:</span>
                <span className="detail-value">Eugeniu Carada 12, Craiova, Romania</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Telefon:</span>
                <a href="tel:+40775342099" className="detail-value detail-link">
                  +40 775 342 099
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Email:</span>
                <a href="mailto:office@craftpub.ro" className="detail-value detail-link">
                  office@craftpub.ro
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Program:</span>
                <div className="detail-hours">
                  <div className="hours-row">
                    <span className="hours-day">Luni - Joi:</span>
                    <span className="hours-time">09:00 - 00:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Vineri:</span>
                    <span className="hours-time">09:00 - 01:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Sâmbătă:</span>
                    <span className="hours-time">10:00 - 01:00</span>
                  </div>
                  <div className="hours-row">
                    <span className="hours-day">Duminică:</span>
                    <span className="hours-time">10:00 - 00:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

