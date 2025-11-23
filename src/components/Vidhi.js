import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GalleryGrid from "./GalleryGrid";
import {
  FaHandSparkles,
  FaPalette,
  FaMusic,
  FaRing,
  FaHeart,
} from "react-icons/fa";

export default function Vidhi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Sample images for different ceremony types
  const weddingImgs = Array.from({ length: 12 }).map(
    (_, i) => `https://picsum.photos/seed/vidhi${i + 1}/900/700`
  );

  // Wedding services data
  const ceremonies = [
    {
      icon: <FaHandSparkles />,
      title: "Mehendi",
      description:
        "Artistic henna applications with traditional customs in a vibrant setting",
    },
    {
      icon: <FaPalette />,
      title: "Haldi",
      description:
        "Beautiful yellow-themed decor for the auspicious turmeric ceremony",
    },
    {
      icon: <FaMusic />,
      title: "Sangeet",
      description:
        "Entertainment-packed evening with music, dance, and family performances",
    },
    {
      icon: <FaHeart />,
      title: "Engagement",
      description: "Elegant ring ceremony arrangements with romantic ambiance",
    },
    {
      icon: <FaRing />,
      title: "Wedding",
      description:
        "Grand celebration with traditional rituals and modern luxury",
    },
  ];

  return (
    <main className="vidhi-page">
      <section className="vidhi-hero">
        <div className="container">
          <div className="vidhi-hero-content">
            <h1>Vidhi by Plan-O-Mania</h1>
            <p className="lead">
              Where tradition meets elegance. We craft timeless wedding
              celebrations that honor your heritage while embracing contemporary
              luxury.
            </p>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">
                Start Planning Your Wedding
              </Link>
              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Ceremonies</h2>
            <p className="section-subtitle">
              Experience the perfect blend of tradition and modern elegance in
              every ceremony we curate
            </p>
          </div>

          <div className="ceremonies-grid">
            {ceremonies.map((ceremony, index) => (
              <div key={index} className="ceremony-card card">
                <div className="icon">{ceremony.icon}</div>
                <h3>{ceremony.title}</h3>
                <p>{ceremony.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient">
        <div className="container">
          <div className="services-showcase">
            <div className="services-content">
              <h2>Comprehensive Wedding Services</h2>
              <div className="services-grid">
                <div className="service-item">
                  <h4>Venue Selection</h4>
                  <p>
                    Handpicked premium venues that match your style and guest
                    count
                  </p>
                </div>
                <div className="service-item">
                  <h4>Decor & Design</h4>
                  <p>
                    Stunning arrangements that blend traditional elements with
                    modern aesthetics
                  </p>
                </div>
                <div className="service-item">
                  <h4>Vendor Management</h4>
                  <p>
                    Coordination with top-tier caterers, photographers, and
                    entertainers
                  </p>
                </div>
                <div className="service-item">
                  <h4>Guest Experience</h4>
                  <p>
                    Thoughtful planning for accommodation, transportation, and
                    activities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wedding Gallery</h2>
            <p className="section-subtitle">
              Browse through our collection of magical moments and dream
              weddings
            </p>
          </div>
          <GalleryGrid images={weddingImgs} />
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Begin Your Wedding Journey?</h2>
            <p>
              Let's create your dream wedding together. Our team is here to
              transform your vision into an unforgettable celebration.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
