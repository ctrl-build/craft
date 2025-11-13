"use client";

import { useState, useRef, useEffect } from "react";

export default function EventsForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleInputBlur = (fieldName: string) => {
    setFocusedField(null);
  };

  const isFieldActive = (fieldName: string) => {
    return focusedField === fieldName || formData[fieldName as keyof typeof formData] !== "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className={`events-form-section ${isVisible ? "visible" : ""}`}
    >
      <div className="events-form-container">
        <div className="events-form-header">
          <h2 className="events-form-headline">Începe planificarea.</h2>
          <p className="events-form-description">
            Indiferent de mărime, echipa noastră vă stă la dispoziție. Spuneți-ne ce plănuiți și vă vom contacta cu soluția perfectă.
          </p>
        </div>

        <form className="events-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("name")}
              onBlur={() => handleInputBlur("name")}
              className="form-input"
              suppressHydrationWarning
            />
            <label
              htmlFor="name"
              className={`form-label ${isFieldActive("name") ? "focused" : ""}`}
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
              suppressHydrationWarning
            />
            <label
              htmlFor="email"
              className={`form-label ${isFieldActive("email") ? "focused" : ""}`}
            >
              Email
            </label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("phone")}
              onBlur={() => handleInputBlur("phone")}
              className="form-input"
              suppressHydrationWarning
            />
            <label
              htmlFor="phone"
              className={`form-label ${isFieldActive("phone") ? "focused" : ""}`}
            >
              Telefon
            </label>
          </div>

          <div className="form-group">
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("eventType")}
              onBlur={() => handleInputBlur("eventType")}
              className="form-input form-select"
            >
              <option value="">Selectează tipul evenimentului</option>
              <option value="craft">Grup la Craft (sub 90 pers)</option>
              <option value="chicago">Eveniment la Chicago (90+ pers)</option>
            </select>
            <label
              htmlFor="eventType"
              className={`form-label ${isFieldActive("eventType") ? "focused" : ""}`}
            >
              Tipul Evenimentului
            </label>
          </div>

          <div className="form-group">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("date")}
              onBlur={() => handleInputBlur("date")}
              className="form-input form-input-date"
              suppressHydrationWarning
            />
            <label
              htmlFor="date"
              className={`form-label ${isFieldActive("date") ? "focused" : ""}`}
            >
              Data Estimată
            </label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("message")}
              onBlur={() => handleInputBlur("message")}
              className="form-input form-textarea"
              rows={4}
            />
            <label
              htmlFor="message"
              className={`form-label ${isFieldActive("message") ? "focused" : ""}`}
            >
              Mesaj
            </label>
          </div>

          <button
            type="submit"
            className={`form-submit ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? (
              <>
                <span className="submit-spinner"></span>
                Se trimite...
              </>
            ) : isSubmitted ? (
              "Cerere trimisă!"
            ) : (
              "TRIMITE CEREREA"
            )}
          </button>

          {isSubmitted && (
            <div className="form-success">
              Mulțumim! Vă vom contacta în curând.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

