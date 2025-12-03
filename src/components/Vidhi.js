import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaUser,
  FaPalette,
  FaHandshake,
  FaTimes,
} from "react-icons/fa";
import LightboxModal from "./LightboxModal";
import "./Vidhi.css";

export default function Vidhi() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    eventDate: "",
    eventType: "",
    location: "",
    contactNumber: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const languageVariants = [
    { language: "English", text: "Plan-O-Mania" },
    { language: "Hindi", text: "प्लैन-ओ-मानिया" },
    { language: "Marathi", text: "प्लॅन-ओ-मॅनिया" },
    { language: "Gujarati", text: "પ્લાન-ઓ-માનિયા" },
    { language: "Telugu", text: "ప్లాన్-ఓ-మానియా" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Language rotation animation - every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prev) => (prev + 1) % languageVariants.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [languageVariants.length]);

  const services = [
    {
      id: 1,
      title: "Shaadi Planning",
      description:
        "Complete wedding planning services from concept to execution, ensuring every detail is perfect.",
      image: "/assets/service-1.jpg",
    },
    {
      id: 2,
      title: "Haldi Ceremony",
      description:
        "Beautiful yellow-themed decor and arrangements for the auspicious turmeric ceremony.",
      image: "/assets/service-2.jpg",
    },
    {
      id: 3,
      title: "Sangeet Night",
      description:
        "Entertainment-packed evening with music, dance, and family performances in stunning settings.",
      image: "/assets/service-3.jpg",
    },
    {
      id: 4,
      title: "Pre-Wedding Shoot",
      description:
        "Capture your love story with beautifully curated pre-wedding photography sessions.",
      image: "/assets/service-4.jpg",
    },
    {
      id: 5,
      title: "Post-Wedding Shoot",
      description:
        "Preserve your special moments with elegant post-wedding photography and videography.",
      image: "/assets/service-5.jpg",
    },
    {
      id: 6,
      title: "Destination Wedding",
      description:
        "Plan your dream destination wedding with complete coordination and luxury arrangements.",
      image: "/assets/service-6.jpg",
    },
    {
      id: 7,
      title: "Decor & Theme",
      description:
        "Transform your venue with stunning decor and thematic arrangements that reflect your style.",
      image: "/assets/service-7.jpg",
    },
  ];

  const signatureMoments = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `/assets/moment-${i + 1}.jpg`,
    caption: `Signature Moment ${i + 1}`,
  }));

  const whyChooseUs = [
    {
      icon: <FaUser />,
      title: "Personalized Planning",
      description:
        "Every wedding is unique. We work closely with you to create a celebration that reflects your personality, traditions, and dreams.",
    },
    {
      icon: <FaPalette />,
      title: "Theme Perfection",
      description:
        "From traditional to contemporary, we excel at bringing your vision to life with meticulous attention to detail and creative flair.",
    },
    {
      icon: <FaHandshake />,
      title: "Complete Coordination",
      description:
        "Our experienced team handles every aspect of your wedding, ensuring seamless execution so you can enjoy your special day.",
    },
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      eventType: "Wedding",
      quote:
        "VIDHI by Plan-O-Mania made our wedding dreams come true. The attention to detail and seamless coordination was beyond our expectations.",
      image: "/assets/testimonial-1.jpg",
    },
    {
      name: "Anjali & Vikram",
      eventType: "Destination Wedding",
      quote:
        "Our destination wedding was absolutely magical. The team handled everything perfectly, from decor to logistics.",
      image: "/assets/testimonial-2.jpg",
    },
    {
      name: "Meera & Arjun",
      eventType: "Traditional Wedding",
      quote:
        "The perfect blend of tradition and modernity. Every ceremony was beautifully executed with cultural authenticity.",
      image: "/assets/testimonial-3.jpg",
    },
    {
      name: "Sneha & Rohan",
      eventType: "Intimate Wedding",
      quote:
        "Even our intimate celebration felt grand. The personalized touches made it truly special and memorable.",
      image: "/assets/testimonial-4.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

  // Testimonials autoplay
  useEffect(() => {
    if (testimonialPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonialPaused, testimonials.length]);


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.eventDate) {
      errors.eventDate = "Event date is required";
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber.replace(/\D/g, ""))) {
      errors.contactNumber = "Please enter a valid 10-digit contact number";
    }

    // Honeypot check (if filled, it's spam)
    if (formData.honeypot) {
      errors.honeypot = "Spam detected";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        eventDate: "",
        eventType: "",
        location: "",
        contactNumber: "",
        message: "",
        honeypot: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Generate petals with random properties (memoized to prevent regeneration)
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        x: Math.random() * 100,
        size: 25 + Math.random() * 35, // Increased from 10-30px to 25-60px
      })),
    []
  );

  return (
    <main className="vidhi-page">
      {/* Floating Petals Animation */}
      <div className="floating-petals">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{
              y: -100,
              x: `${petal.x}vw`,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: [
                `${petal.x}vw`,
                `${petal.x + 10}vw`,
                `${petal.x - 5}vw`,
                `${petal.x}vw`,
              ],
              rotate: 360,
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="petal"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
            }}
          >
            <svg viewBox="0 0 20 20" className="petal-svg">
              <ellipse cx="10" cy="10" rx="6" ry="10" fill="currentColor" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Section 1: Hero Section */}
      <section className="vidhi-hero" id="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          <source src="/assets/hero.mov" type="video/quicktime" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title-line">
              VIDHI by
            </h1>
            <div className="language-text-wrapper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLanguageIndex}
                  className="language-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {languageVariants[currentLanguageIndex].text}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="hero-title-line hero-title-second">
              Elegant, cinematic wedding planning experiences.
            </p>
          </div>
          <div className="hero-scroll-indicator">
            <FaChevronDown />
          </div>
        </div>
      </section>

      {/* Section 2: Services Carousel */}
      <section className="vidhi-services" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Discover our comprehensive wedding planning services
            </p>
          </div>

          <div className="services-carousel-wrapper">
            <div className="services-carousel-container">
              <div className="services-carousel-track">
                {/* First set of cards */}
                {services.map((service) => (
                  <div key={`first-${service.id}`} className="service-card">
                    <div className="service-image-wrapper">
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x300/F6D6DB/D4AF37?text=" + encodeURIComponent(service.title);
                        }}
                      />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href="#contact" className="service-link">
                        Learn more →
                      </a>
                    </div>
                  </div>
                ))}
                {/* Duplicated set for seamless loop */}
                {services.map((service) => (
                  <div key={`second-${service.id}`} className="service-card">
                    <div className="service-image-wrapper">
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x300/F6D6DB/D4AF37?text=" + encodeURIComponent(service.title);
                        }}
                      />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href="#contact" className="service-link">
                        Learn more →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Signature Moments */}
      <section className="vidhi-moments" id="moments">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Signature Moments</h2>
            <p className="section-subtitle">
              Capturing the magic of your special day
            </p>
          </div>

          <div className="moments-grid">
            {signatureMoments.map((moment, index) => (
              <div
                key={moment.id}
                className="moment-card"
                onClick={() => openLightbox(index)}
              >
                <div className="moment-image-wrapper">
                  <img
                    src={moment.image}
                    alt={moment.caption}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x600/EBDCF7/D4AF37?text=Moment+" + moment.id;
                    }}
                  />
                  <div className="moment-overlay">
                    <span className="moment-badge">Signature</span>
                    <p className="moment-caption">{moment.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lightboxOpen && (
          <LightboxModal
            images={signatureMoments.map((m) => m.image)}
            startIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="vidhi-why-choose" id="why-choose">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Experience the difference of personalized wedding planning
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card" tabIndex={0}>
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="mandala-pattern" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section
        className="vidhi-testimonials"
        id="testimonials"
        onMouseEnter={() => setTestimonialPaused(true)}
        onMouseLeave={() => setTestimonialPaused(false)}
        aria-live="polite"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real stories from couples who trusted us with their special day
            </p>
          </div>

          <div className="testimonials-slider">
            <div
              className="testimonial-slide"
              key={currentTestimonial}
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://i.pravatar.cc/200?img=" + (currentTestimonial + 1);
                    }}
                  />
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="testimonial-author">
                  <p className="testimonial-name">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="testimonial-event">
                    {testimonials[currentTestimonial].eventType}
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${
                    index === currentTestimonial ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact CTA */}
      <section className="vidhi-contact" id="contact">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="section-header">
              <h2 className="section-title">Let's Plan Your Dream Wedding</h2>
              <p className="section-subtitle">
                Get in touch with us and let's create something magical together
              </p>
            </div>

            {submitSuccess && (
              <div className="form-success">
                <p>Thank you! We'll get back to you soon.</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={formErrors.name ? "error" : ""}
                  />
                  {formErrors.name && (
                    <span className="error-message">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">
                    Event Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleFormChange}
                    required
                    className={formErrors.eventDate ? "error" : ""}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {formErrors.eventDate && (
                    <span className="error-message">
                      {formErrors.eventDate}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleFormChange}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="haldi">Haldi</option>
                    <option value="mehendi">Mehendi</option>
                    <option value="sangeet">Sangeet</option>
                    <option value="reception">Reception</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    placeholder="City, Venue, etc."
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleFormChange}
                  required
                  className={formErrors.contactNumber ? "error" : ""}
                  placeholder="10-digit mobile number"
                />
                {formErrors.contactNumber && (
                  <span className="error-message">
                    {formErrors.contactNumber}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="5"
                  placeholder="Tell us about your vision..."
                />
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleFormChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 7: Footer */}
      <footer className="vidhi-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>VIDHI</h3>
              <p>by Plan-O-Mania</p>
            </div>

            <nav className="footer-links">
              <Link to="/vidhi#services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Plan-O-Mania. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
