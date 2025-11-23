import React, { useState } from "react";
import LightboxModal from "./LightboxModal";
import "./GalleryGrid.css";

// Component: GalleryGrid
// Props:
// - images: array of image URLs
// - pageSize: optional, defaults to 12
export default function GalleryGrid({ images = [], pageSize = 12 }) {
  const [openIdx, setOpenIdx] = useState(-1);
  const [page, setPage] = useState(1);

  // Determine images to display for current page
  const paged = images.slice(0, page * pageSize);

  return (
    <div className="gallery-container">
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {paged.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Event gallery image ${i + 1}`}
            loading="lazy"
            onClick={() => setOpenIdx(i)}
            className="gallery-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/about-1.jpg"; // Fallback image
            }}
            style={{
              opacity: 0,
              animation: "fadeIn 0.5s ease forwards",
            }}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
        ))}
      </div>

      {/* Load More Button */}
      {images.length > paged.length && (
        <div className="load-more-container">
          <button
            className="btn secondary"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {openIdx > -1 && (
        <LightboxModal
          images={images}
          startIndex={openIdx}
          onClose={() => setOpenIdx(-1)}
        />
      )}
    </div>
  );
}
