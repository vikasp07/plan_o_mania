import React from "react";
import "./VideoSection.css";

// Video data with more details
const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Magical Wedding Celebration at The Grand Palace",
    duration: "5:24",
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
  },
  {
    id: "M7lc1UVf-VE",
    title: "Colorful Sangeet Night Highlights - Shah Family",
    duration: "4:18",
    thumbnail: `https://img.youtube.com/vi/M7lc1UVf-VE/mqdefault.jpg`,
  },
  {
    id: "9bZkp7q19f0",
    title: "Corporate Event - Annual Tech Summit 2025",
    duration: "3:45",
    thumbnail: `https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg`,
  },
  {
    id: "OPf0YbXqDm0",
    title: "Birthday Bash - Princess Theme Party",
    duration: "6:12",
    thumbnail: `https://img.youtube.com/vi/OPf0YbXqDm0/mqdefault.jpg`,
  },
];

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-grid">
        <div className="featured-video">
          <div className="featured-video-header">
            <h3>Featured Events</h3>
          </div>
          <div className="video-container">
            <iframe
              title="featured"
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="video-playlist">
          <div className="playlist-header">
            <h4>More Highlights</h4>
          </div>
          <ul className="playlist-items">
            {videos.map((video) => (
              <li key={video.id} className="playlist-item">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="video-link"
                >
                  <div className="thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                  </div>
                  <div className="video-info">
                    <div className="video-title">{video.title}</div>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
