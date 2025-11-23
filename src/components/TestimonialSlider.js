import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "./TestimonialSlider.css";

const testimonials = [
  {
    name: "Riya Shah",
    role: "Birthday Party Client",
    text: "Plan-O-Mania crafted a memorable 18th birthday celebration for my sister. Every detail—from themed décor to entertainment—was executed flawlessly. Their creativity and professionalism made it truly unforgettable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=1",
  },
  {
    name: "Aditya Patel",
    role: "Corporate Event Manager",
    text: "An exceptionally well-organized corporate event. The team managed every aspect—from logistics to coordination—with remarkable professionalism. Highly recommended for any large-scale occasion.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=2",
  },
  {
    name: "Meera & Rahul",
    role: "Wedding Clients",
    text: "Our wedding felt like a dream come true. The blend of traditional and modern elements was perfect, and every guest appreciated the attention to detail. The team went above and beyond.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=3",
  },
  {
    name: "Priya Desai",
    role: "Anniversary Client",
    text: "Our 25th anniversary celebration was magical. The personalized touches and surprise elements were deeply touching. We’ll cherish this experience forever.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=4",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const sliderRef = useRef(null);
  const autoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const AUTO_MS = 6000;

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1200) setSlidesToShow(3);
      else if (window.innerWidth >= 900) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const totalSlides = testimonials.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  // Auto-play with pause on hover/focus
  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesToShow, currentIndex, isPaused]);

  const startAuto = () => {
    stopAuto();
    if (isPaused) return;
    autoRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_MS);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const handleNext = () => {
    stopAuto();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    stopAuto();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAuto();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAuto();
  };

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  // ensure index stays in bounds when slidesToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesToShow, maxIndex]);

  return (
    <section
      className="testimonials-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Client testimonials"
    >
      <div className="testimonials-header">
        <h2>Client Testimonials</h2>
        <p>
          Hear from our valued clients who trusted us to make their special
          occasions truly extraordinary.
        </p>
      </div>

      <div className="testimonials-slider" ref={sliderRef}>
        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={{
              width: `${(100 * testimonials.length) / slidesToShow}%`,
              transform: `translateX(-${
                ((currentIndex * 100) / testimonials.length) * slidesToShow
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                className="testimonial-card"
                key={index}
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                    />
                  </div>

                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>

                <p className="testimonial-text">“{testimonial.text}”</p>

                <div className="testimonial-rating" aria-hidden>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="slider-btn"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="progress-wrap" aria-hidden>
            <div
              className="progress-bar"
              style={{
                animationDuration: `${AUTO_MS}ms`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>

          <button
            className="slider-btn"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="dots" role="tablist" aria-label="Testimonial pages">
          {Array.from({ length: totalSlides - slidesToShow + 1 }, (_, i) => (
            <button
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => {
                stopAuto();
                setCurrentIndex(i);
              }}
              aria-label={`Go to testimonials ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
