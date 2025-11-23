import React, { useEffect, useMemo, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import VideoLightbox from "./LightboxModal";
import "./VideoGrid.css";

/**
 * Props:
 * - pageSize (number) : items per page load (default 3)
 * - videosData (array) : optional list of video objects (if omitted uses built-in sample)
 */
const sampleVideos = [
  {
    id: "1",
    title: "Birthday Celebrations",
    thumbnail: "/images/birthday.jpg",
    videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Creating unforgettable birthday moments",
    icon: "/images/milestone-birthdays-icon.png", // PNG fallback
  },
  {
    id: "2",
    title: "Corporate Events",
    thumbnail: "/images/milestone-birthdays.jpg",
    videoEmbed: "https://www.youtube.com/embed/M7lc1UVf-VE",
    description: "Professional corporate event management",
    icon: "/images/milestone-birthdays-icon.png",
  },
  {
    id: "3",
    title: "Wedding Functions",
    thumbnail: "/images/about-1.jpg",
    videoEmbed: "https://www.youtube.com/embed/9bZkp7q19f0",
    description: "Making your special day extraordinary",
    icon: "/images/milestone-birthdays-icon.png",
  },
  // add more items if you like
];

export default function VideoGrid({ pageSize = 3, videosData = sampleVideos }) {
  const [activeIndex, setActiveIndex] = useState(-1); // index within pagedVideos
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  // derive filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return videosData;
    return videosData.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    );
  }, [videosData, query]);

  // paged videos for display
  const pagedVideos = useMemo(
    () => filtered.slice(0, page * pageSize),
    [filtered, page, pageSize]
  );

  // if filter changed and page now too large, reset page
  useEffect(() => {
    if (page > 1 && pagedVideos.length === 0) {
      setPage(1);
    }
    // If filtered results fewer than currently shown pages, reduce page so pagedVideos includes all filtered items
    const maxPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (page > maxPages) setPage(maxPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered]);

  // keyboard: close lightbox with Escape (when open)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && activeIndex > -1) setActiveIndex(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => setActiveIndex(-1);

  const loadMore = () => setPage((p) => p + 1);

  return (
    <section className="video-section container py-5">
      <div className="section-title text-center mb-4">
        <span className="section-subtitle">EVENT STORIES</span>
        <h2>
          Our Event <span className="text-primary">Stories</span>
        </h2>
        <p className="section-description">
          Discover the magic of our events through these captivating stories.
        </p>

        <div className="video-controls">
          <input
            aria-label="Search videos"
            type="search"
            placeholder="Search by title or description..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1); // reset page when searching
            }}
            className="video-search"
          />
        </div>
      </div>

      <div className="row g-4">
        {pagedVideos.length === 0 && (
          <div className="no-results">
            No videos found for &quot;{query}&quot;.
          </div>
        )}

        {pagedVideos.map((video, i) => (
          <div key={video.id} className="col-md-4 col-sm-6">
            <article
              className="video-card"
              aria-labelledby={`video-title-${video.id}`}
            >
              <div
                className="video-thumbnail"
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="img-fluid rounded-3"
                />

                <div className="play-overlay" aria-hidden>
                  <button
                    className="play-btn"
                    aria-label={`Play ${video.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(i);
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                <div className="lottie-icon" aria-hidden>
                  {/* if icon is lottie json -> use Player; otherwise show image fallback */}
                  {typeof video.icon === "string" &&
                  video.icon.trim().toLowerCase().endsWith(".json") ? (
                    <Player
                      autoplay
                      loop
                      src={video.icon}
                      style={{ height: 60, width: 60 }}
                    />
                  ) : (
                    <img
                      src={video.icon}
                      alt={`${video.title} icon`}
                      width={60}
                      height={60}
                    />
                  )}
                </div>
              </div>

              <div className="video-content p-4">
                <h3 id={`video-title-${video.id}`}>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          </div>
        ))}
      </div>

      {filtered.length > pagedVideos.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}

      {activeIndex > -1 && pagedVideos[activeIndex] && (
        <VideoLightbox
          video={pagedVideos[activeIndex]}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
