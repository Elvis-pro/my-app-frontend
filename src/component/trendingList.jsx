import React from "react";
import "../styles/trending.css";

const trending = [
  {
    title: "Back In Action",
    year: 2025,
    rating: 6.1,
    image: "/images/back-in-action.jpg",
  },
  {
    title: "Spiderman: Across The Spider-Verse",
    year: 2023,
    rating: 8.4,
    image: "/images/spiderman.jpg",
  },
];

export default function TrendingList() {
  return (
    <div className="trending-section">
      {/* Header */}
      <div className="trending-header">
        <h2>Trending</h2>
        <button className="more-btn">More</button>
      </div>

      {/* Trending Grid */}
      <div className="trending-grid">
        {trending.map((item, index) => (
          <div key={index} className="trending-card">
            <div className="poster">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
