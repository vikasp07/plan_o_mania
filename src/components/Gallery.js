import React, { useState, useEffect } from "react";
import GalleryGrid from "./GalleryGrid";
import "./Gallery.css";

const categories = [
  { id: "all", label: "All Events" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "corporate", label: "Corporate" },
  { id: "proposals", label: "Proposals" },
  { id: "festive", label: "Festivals" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Using actual images from our project
  const categoryImages = {
    all: [
      "/images/traditional.jpg",
      "/images/birthday.jpg",
      "/images/milestone-birthdays.jpg",
      "/images/bannerImage-175.jpg",
      "/images/bannerImage-174921616857286011.jpg",
      "/images/bannerImage-174921613899412998.jpg",
      "/images/bannerImage-17492160903855186.jpg",
      "/images/slider2.jpg",
      "/images/slider5.jpg",
      "/images/about-1.jpg",
      "/images/about-2.jpg",
    ],
    weddings: [
      "/images/traditional.jpg",
      "/images/bannerImage-175.jpg",
      "/images/bannerImage-174921616857286011.jpg",
      "/images/slider2.jpg",
    ],
    birthdays: [
      "/images/birthday.jpg",
      "/images/milestone-birthdays.jpg",
      "/images/bannerImage-17492160903855186.jpg",
      "/images/about-1.jpg",
    ],
    corporate: [
      "/images/slider5.jpg",
      "/images/bannerImage-174921613899412998.jpg",
      "/images/about-2.jpg",
    ],
    proposals: [
      "/images/traditional.jpg",
      "/images/bannerImage-175.jpg",
      "/images/about-1.jpg",
    ],
    festive: [
      "/images/slider2.jpg",
      "/images/bannerImage-17492160903855186.jpg",
      "/images/about-2.jpg",
    ],
  };

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <div className="gallery-hero-content">
            <h1>Our Event Portfolio</h1>
            <p className="lead">
              Browse through our collection of memorable celebrations and find
              inspiration for your next event
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className={`gallery-container ${isLoading ? "loading" : ""}`}>
            {isLoading ? (
              <div className="gallery-loader">
                <div className="loader"></div>
              </div>
            ) : (
              <GalleryGrid
                images={categoryImages[activeCategory]}
                pageSize={12}
              />
            )}
          </div>
        </div>
      </section>

      <section className="section bg-light"></section>
    </main>
  );
}
