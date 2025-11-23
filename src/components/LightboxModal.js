import React, { useState } from "react";

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

  return (
    <div className="lightbox" onClick={onClose}>
      <div
        style={{ position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={images[idx]} alt={`lightbox-${idx}`} />
        <div style={{ position: "absolute", top: 8, right: 8 }}>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
        <div style={{ position: "absolute", left: 8, top: "50%" }}>
          <button className="btn" onClick={prev} disabled={idx === 0}>
            Prev
          </button>
        </div>
        <div style={{ position: "absolute", right: 8, top: "50%" }}>
          <button
            className="btn"
            onClick={next}
            disabled={idx === images.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
