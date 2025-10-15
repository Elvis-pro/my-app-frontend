import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/movieSeriesGrid.css";

export default function MovieList() {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("movies");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    fetchMovies();
    fetchSeries();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/movies/gettoprated");
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchSeries = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/series/getTopRated");
      const data = await res.json();
      setSeries(data);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 1000); // keep skeleton loader visible briefly
    }
  };

  // Limit to 8 items
  const data = activeTab === "movies" ? movies.slice(0, 8) : series.slice(0, 8);

  return (
    <div className="movie-section">
      {/* Header */}
      <div className="movie-header">
        <h2>Top Rated</h2>
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
        <button className="more-btn"  onClick={() => navigate("")}>More</button>
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
