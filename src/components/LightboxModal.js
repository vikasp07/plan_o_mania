import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import "./LightboxModal.css";

export default function LightboxModal({
  images = [],
  startIndex = 0,
  onClose,
}) {
  const [idx, setIdx] = useState(startIndex);

  function next() {
    setIdx((i) => Math.min(i + 1, images.length - 1));
  }
  function prev() {
    setIdx((i) => Math.max(i - 1, 0));
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [idx, images.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (images.length === 0) return null;

  return (
    <div className="lightbox-modal" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox">
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <FaTimes />
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={prev}
          disabled={idx === 0}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <div className="lightbox-image-wrapper">
          <img
            src={images[idx]}
            alt={`Gallery image ${idx + 1} of ${images.length}`}
            className="lightbox-image"
          />
          <div className="lightbox-counter">
            {idx + 1} / {images.length}
          </div>
        </div>

        <button
          className="lightbox-nav lightbox-next"
          onClick={next}
          disabled={idx === images.length - 1}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
