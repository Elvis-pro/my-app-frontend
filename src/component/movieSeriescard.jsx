import React, { useState } from "react";
import "../styles/movieSeriesGrid.css";

const movies = [
  { title: "Jungle cruise", year: 2021, rating: 6.5, image: "/images/jungle-cruise.jpg" },
  { title: "A quiet place part II", year: 2021, rating: 7.2, image: "/images/quiet-place-2.jpg" },
  { title: "Rango 2", year: 2023, rating: 6.8, image: "/images/rango-2.jpg" },
  { title: "Atlas", year: 2024, rating: 5.6, image: "/images/atlas.jpg" },
  { title: "Heads of State", year: 2025, rating: 6.8, image: "/images/heads-of-state.jpg" },
  { title: "Kraven the hunter", year: 2024, rating: 7.2, image: "/images/kraven.jpg" },
  { title: "Resident evil: Death island", year: 2023, rating: 5.0, image: "/images/resident-evil.jpg" },
  { title: "Hitman’s bodyguard", year: 2017, rating: 6.9, image: "/images/hitman-bodyguard.jpg" },
];

const series = [
  { title: "Breaking Bad", year: 2008, rating: 9.5, image: "/images/breaking-bad.jpg" },
  { title: "Stranger Things", year: 2016, rating: 8.7, image: "/images/stranger-things.jpg" },
  { title: "The Witcher", year: 2019, rating: 8.2, image: "/images/witcher.jpg" },
  { title: "Loki", year: 2021, rating: 8.3, image: "/images/loki.jpg" },
  { title: "Game of Thrones", year: 2011, rating: 9.3, image: "/images/got.jpg" },
  { title: "Peaky Blinders", year: 2013, rating: 8.8, image: "/images/peaky-blinders.jpg" },
  { title: "Money Heist", year: 2017, rating: 8.2, image: "/images/money-heist.jpg" },
  { title: "Wednesday", year: 2022, rating: 8.1, image: "/images/wednesday.jpg" },
];

export default function MovieList() {
  const [activeTab, setActiveTab] = useState("movies");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 1000); // simulate loading delay
    }
  };

  const data = activeTab === "movies" ? movies : series;

  return (
    <div className="movie-section">
      {/* Header */}
      <div className="movie-header">
        <h2>Recently Added</h2>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={activeTab === "movies" ? "active" : ""}
          onClick={() => handleTabChange("movies")}
        >
          Movies
        </button>
        <button
          className={activeTab === "series" ? "active" : ""}
          onClick={() => handleTabChange("series")}
        >
          TV Series
        </button>
        <button className="more-btn">More</button>
      </div>

      {/* Loader or Movie Grid */}
      {loading ? (
        <div className="movie-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="movie-card skeleton-card">
              <div className="poster skeleton"></div>
              <div className="info">
                
                <div className="skeleton skeleton-text title"></div>
                <div className="skeleton skeleton-text year"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="movie-grid">
          {data.map((item, index) => (
            <div key={index} className="movie-card">
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
      )}
    </div>
  );
}
