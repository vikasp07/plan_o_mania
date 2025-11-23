import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TestimonialSlider from "./TestimonialSlider";
import VideoGrid from "./VideoGrid";
import GalleryGrid from "./GalleryGrid";
import {
  FaCalendarAlt,
  FaBriefcase,
  FaHeart,
  FaRing,
  FaCheck,
  FaPhoneAlt,
} from "react-icons/fa";
import "@splidejs/react-splide/css";
import "aos/dist/aos.css";
import "./Home.css";

const slides = [
  {
    tag: "PREMIUM BIRTHDAY PLANNERS",
    title: "Creating Magical",
    highlight: "Birthday Celebrations",
    description:
      "Transform your special day into an unforgettable celebration with our bespoke birthday planning services.",
    image: "/images/bannerImage-17492160903855186.jpg",
  },
  {
    tag: "LUXURY EVENT PLANNING",
    title: "Crafting Premium",
    highlight: "Event Experiences",
    description:
      "From intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail.",
    image: "/images/bannerImage-174921613899412998.jpg",
  },
  {
    tag: "TRADITIONAL CELEBRATIONS",
    title: "Preserving Culture",
    highlight: "Creating Memories",
    description:
      "Celebrate your traditions with modern elegance through our culturally-inspired event planning services.",
    image: "/images/traditional.jpg",
  },
];

const features = [
  "Professional Event Planning",
  "Creative Concept Development",
  "Full-Service Event Management",
  "Custom Theme Design",
  "Vendor Coordination",
  "On-Site Event Execution",
];

export default function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Initialize AOS animation
    let mounted = true;
    (async () => {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
        easing: "ease-out-cubic",
      });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="viewport">
      {/* ===== HERO BANNER ===== */}
      <section className="hero-banner" aria-label="Hero banner">
        <Splide
          className="banner-slider"
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: true,
            pagination: false,
            cover: true,
            height: "100vh",
            keyboard: "global",
            drag: true,
            gap: 0,
            focus: "center",
            lazyLoad: "nearby",
            speed: 1200,
          }}
          aria-label="Plan-O-Mania banner slideshow"
        >
          {slides.map((slide, idx) => (
            <SplideSlide key={idx} className="splide-slide-custom">
              <div className="banner-slide">
                {/* background image */}
                <img
                  className="banner-bg"
                  src={slide.image}
                  alt={`${slide.title} — ${slide.highlight}`}
                  loading="lazy"
                  decoding="async"
                />

                {/* overlay for readability */}
                <div className="banner-overlay" />

                {/* content */}
                <div className="container banner-inner">
                  <div className="banner-content" data-aos="fade-up">
                    <span className="banner-tag">{slide.tag}</span>

                    <h1 className="banner-title">
                      <span className="title-line">{slide.title}</span>
                      <span className="title-line highlight">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="banner-desc">{slide.description}</p>

                    <div className="banner-cta">
                      <Link
                        to="/contact"
                        className="btn btn-primary btn-cta"
                        aria-label="Get started with Plan O Mania"
                      >
                        Get Started
                      </Link>

                      <Link
                        to="/gallery"
                        className="btn btn-ghost btn-cta"
                        aria-label="View photo gallery"
                      >
                        View Gallery
                      </Link>
                    </div>

                    <div
                      className="banner-features"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      {features.slice(0, 3).map((f, i) => (
                        <div className="feature-chip" key={i}>
                          <FaCheck className="chip-icon" /> <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      {/* ===== SERVICES ===== */}
      <section
        className="services-section section"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div
            className="section-title text-center"
            data-aos="fade-up"
            id="services-title"
          >
            <h2>
              Our Premium <span className="text-accent">Services</span>
            </h2>
            <p>Discover how we can help bring your dream event to life</p>
          </div>

          <div className="services-grid" role="list">
            {[
              {
                icon: <FaCalendarAlt />,
                title: "Birthday Events",
                desc: "Create unforgettable moments with our premium birthday celebration services.",
                link: "/events",
              },
              {
                icon: <FaBriefcase />,
                title: "Corporate Events",
                desc: "Professional event management for all your corporate needs.",
                link: "/events",
              },
              {
                icon: <FaHeart />,
                title: "Theme Parties",
                desc: "Transform your vision into reality with our creative theme parties.",
                link: "/events",
              },
              {
                icon: <FaRing />,
                title: "Wedding Events",
                desc: "Making your special day truly extraordinary.",
                link: "/vidhi",
              },
            ].map((service, idx) => (
              <article
                className="service-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={120 + idx * 80}
                role="listitem"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-link">
                  Discover Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-left" data-aos="fade-right">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 id="about-heading">
                Your Trusted Partner for{" "}
                <span className="text-accent">Premium Events</span>
              </h2>
              <p className="lead">
                With years of experience and a passion for perfection, we
                transform your vision into extraordinary events that leave
                lasting impressions.
              </p>

              <ul className="feature-list">
                {features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="cta-group">
                <a
                  href="tel:+918355846853"
                  className="btn btn-primary"
                  aria-label="Call Plan O Mania"
                >
                  <FaPhoneAlt /> +91 83558 46853
                </a>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="about-right" data-aos="fade-left">
              <div className="about-image-grid">
                <img src="/images/about-1.jpg" alt="Event Planning" />
                <img src="/images/traditional.jpg" alt="Event Decoration" />
                <img src="/images/slider2.jpg" alt="Birthday Events" />
                <img src="/images/birthday.jpg" alt="Birthday Events" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section className="video-stories-section">
        <VideoGrid />
      </section>
      {/* 
      <section className="gallery-section section">
        <GalleryGrid
          images={Array.from({ length: 8 }).map(
            (_, i) => `/gallery-${i + 1}.jpg`
          )}
        />
      </section> */}

      <TestimonialSlider />
    </main>
  );
}
