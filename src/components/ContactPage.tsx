"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined") return;

    const loadMap = () => {
      if (!(window as any).google || !(window as any).google.maps) {
        const script = document.createElement("script");
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initializeMap();
        };
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || !(window as any).google?.maps) return;

      const map = new (window as any).google.maps.Map(mapRef.current, {
        center: { lat: 44.3178, lng: 23.8014 },
        zoom: 17,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            featureType: "water",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            featureType: "landscape",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#F5F5F5" }, { lightness: 50 }],
          },
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      const marker = new (window as any).google.maps.Marker({
        position: { lat: 44.3178, lng: 23.8014 },
        map: map,
        title: "Craft Pub",
        icon: {
          path: (window as any).google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#6e8264",
          fillOpacity: 1,
          strokeColor: "#6e8264",
          strokeWeight: 3,
        },
      });
    };

    loadMap();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    return (
      focusedField === fieldName ||
      formData[fieldName as keyof typeof formData] !== ""
    );
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
        date: "",
        time: "",
        people: "",
        message: "",
      });
    }, 3000);
  };

  if (isMobile) {
    return (
      <div className="contact-desk-mobile">
        <div
          className="contact-desk-hero-image"
          style={{
            backgroundImage: "url(/assets/images/contact/hero-bar.jpg)",
          }}
        >
          <div className="contact-desk-hero-overlay"></div>
        </div>

        <div className="contact-desk-mobile-content">
          <h1 className="contact-desk-headline">Contact & Rezervări</h1>

          <div className="contact-desk-info-block">
            <div className="contact-info-item">
              <h3 className="contact-info-label">Adresă</h3>
              <p className="contact-info-value">Eugeniu Carada 12, Craiova, Romania</p>
            </div>

            <div className="contact-info-item">
              <h3 className="contact-info-label">Telefon</h3>
              <p className="contact-info-value">
                <a href="tel:+40775342099">+40 775 342 099</a>
              </p>
            </div>

            <div className="contact-info-item">
              <h3 className="contact-info-label">Email</h3>
              <p className="contact-info-value">
                <a href="mailto:office@craftpub.ro">office@craftpub.ro</a>
              </p>
            </div>

            <div className="contact-info-item">
              <h3 className="contact-info-label">Program</h3>
              <div className="contact-hours-list">
                <p className="contact-hours-item">Luni - Joi: 09:00 - 00:00</p>
                <p className="contact-hours-item">Vineri: 09:00 - 01:00</p>
                <p className="contact-hours-item">Sâmbătă: 10:00 - 01:00</p>
                <p className="contact-hours-item">Duminică: 10:00 - 00:00</p>
              </div>
            </div>
          </div>

          <form className={`contact-desk-form ${isSubmitted ? "form-submitted" : ""}`} onSubmit={handleSubmit}>
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
                Data
              </label>
            </div>

            <div className="form-group">
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus("time")}
                onBlur={() => handleInputBlur("time")}
                className="form-input form-input-time"
                suppressHydrationWarning
              />
              <label
                htmlFor="time"
                className={`form-label ${isFieldActive("time") ? "focused" : ""}`}
              >
                Ora
              </label>
            </div>

            <div className="form-group">
              <input
                type="number"
                id="people"
                name="people"
                value={formData.people}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus("people")}
                onBlur={() => handleInputBlur("people")}
                className="form-input"
                min="1"
                suppressHydrationWarning
              />
              <label
                htmlFor="people"
                className={`form-label ${isFieldActive("people") ? "focused" : ""}`}
              >
                Nr. Persoane
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
                "Mesaj trimis!"
              ) : (
                "TRIMITE MESAJUL"
              )}
            </button>

            {isSubmitted && (
              <div className="form-success">
                Mulțumim! Mesajul tău a fost trimis.
              </div>
            )}
          </form>

          <div className="contact-desk-map-container">
            <div className="contact-desk-map" ref={mapRef}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-desk-container">
      <div className="contact-desk-split">
        <div className="contact-desk-left">
          <div
            className="contact-desk-image"
            style={{
              backgroundImage: "url(/assets/images/contact/hero-bar.jpg)",
            }}
          />
        </div>

        <div className="contact-desk-right">
          <div className="contact-desk-content">
            <h1 className="contact-desk-headline">Contact & Rezervări</h1>

            <p className="contact-desk-intro">
              Ai o întrebare? Vrei să faci o rezervare? Suntem aici. Folosește formularul de mai jos sau sună-ne. Locul tău la Craft te așteaptă.
            </p>

            <div className="contact-desk-info-block">
              <div className="contact-info-item">
                <h3 className="contact-info-label">Adresă</h3>
                <p className="contact-info-value">Eugeniu Carada 12, Craiova, Romania</p>
              </div>

              <div className="contact-info-item">
                <h3 className="contact-info-label">Telefon</h3>
                <p className="contact-info-value">
                  <a href="tel:+40775342099">+40 775 342 099</a>
                </p>
              </div>

              <div className="contact-info-item">
                <h3 className="contact-info-label">Email</h3>
                <p className="contact-info-value">
                  <a href="mailto:office@craftpub.ro">office@craftpub.ro</a>
                </p>
              </div>

              <div className="contact-info-item">
                <h3 className="contact-info-label">Program</h3>
                <div className="contact-hours-list">
                  <p className="contact-hours-item">Luni - Joi: 09:00 - 00:00</p>
                  <p className="contact-hours-item">Vineri: 09:00 - 01:00</p>
                  <p className="contact-hours-item">Sâmbătă: 10:00 - 01:00</p>
                  <p className="contact-hours-item">Duminică: 10:00 - 00:00</p>
                </div>
              </div>
            </div>

            <form className={`contact-desk-form ${isSubmitted ? "form-submitted" : ""}`} onSubmit={handleSubmit}>
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
                  Data
                </label>
              </div>

              <div className="form-group">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus("time")}
                  onBlur={() => handleInputBlur("time")}
                  className="form-input form-input-time"
                  suppressHydrationWarning
                />
                <label
                  htmlFor="time"
                  className={`form-label ${isFieldActive("time") ? "focused" : ""}`}
                >
                  Ora
                </label>
              </div>

              <div className="form-group">
                <input
                  type="number"
                  id="people"
                  name="people"
                  value={formData.people}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus("people")}
                  onBlur={() => handleInputBlur("people")}
                  className="form-input"
                  min="1"
                  suppressHydrationWarning
                />
                <label
                  htmlFor="people"
                  className={`form-label ${isFieldActive("people") ? "focused" : ""}`}
                >
                  Nr. Persoane
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
                  "Mesaj trimis!"
                ) : (
                  "TRIMITE MESAJUL"
                )}
              </button>

              {isSubmitted && (
                <div className="form-success">
                  Mulțumim! Mesajul tău a fost trimis.
                </div>
              )}
            </form>

            <div className="contact-desk-map-container">
              <div className="contact-desk-map" ref={mapRef}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
