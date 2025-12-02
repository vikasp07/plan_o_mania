import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GalleryGrid from "./GalleryGrid";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaHeart,
  FaStarAndCrescent,
} from "react-icons/fa";
import "./Events.css";

const categories = [
  {
    id: "birthdays",
    title: "Birthday Parties",
    desc: "Create magical celebrations that leave lasting memories",
    icon: <FaBirthdayCake />,
    features: [
      "Custom theme design and decor",
      "Interactive games and activities",
      "Cake and catering arrangements",
      "Entertainment coordination",
      "Photography and videography",
      "Return gifts and party favors",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    desc: "Professional events that elevate your brand",
    icon: <FaBriefcase />,
    features: [
      "Product launches and conferences",
      "Team building activities",
      "Award ceremonies",
      "Corporate dinner parties",
      "Brand activation events",
      "Business meeting coordination",
    ],
  },
  {
    id: "proposals",
    title: "Proposals & Surprises",
    desc: "Intimate moments crafted with love and creativity",
    icon: <FaHeart />,
    features: [
      "Romantic venue selection",
      "Custom decor and lighting",
      "Photography arrangements",
      "Music and ambiance",
      "Surprise coordination",
      "Post-proposal celebration",
    ],
  },
  {
    id: "festive",
    title: "Festive Décor",
    desc: "Celebrate traditions with modern elegance",
    icon: <FaStarAndCrescent />,
    features: [
      "Festival-themed decorations",
      "Traditional elements integration",
      "Lighting arrangements",
      "Cultural performance coordination",
      "Catering for festivities",
      "Event space transformation",
    ],
  },
];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeEvent = categories.find((c) => c.id === activeCategory);

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container">
          <div className="events-hero-content">
            <h1>Our Services</h1>
            <p className="lead">
              From intimate gatherings to grand celebrations, we bring your
              vision to life with creativity, precision, and attention to
              detail.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="events-categories">
            <div className="categories-nav">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-tab ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="icon">{category.icon}</span>
                  <span className="title">{category.title}</span>
                </button>
              ))}
            </div>

            <div className="category-content">
              <div className="category-info">
                <h2>{activeEvent.title}</h2>
                <p className="category-desc">{activeEvent.desc}</p>
                <div className="features-grid">
                  {activeEvent.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Plan Your Event
                </Link>
              </div>

              <div className="category-gallery">
                <GalleryGrid
                  images={[
                    `https://picsum.photos/seed/${activeEvent.id}1/800/600`,
                    `https://picsum.photos/seed/${activeEvent.id}2/800/600`,
                    `https://picsum.photos/seed/${activeEvent.id}3/800/600`,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient">
        <div className="container">
          <div className="cta-box light">
            <h2>Ready to Create Something Special?</h2>
            <p>
              Let's discuss your event ideas and bring them to life. Our team is
              here to make your celebration truly memorable.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
