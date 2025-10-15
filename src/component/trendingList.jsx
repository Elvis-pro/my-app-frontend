import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/trending.css";

export default function TrendingList() {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("movies");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const cardRefs = useRef([]);

  // Fetch trending movies
  const fetchTrendingMovies = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/movies/gettrendingmovies");
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  // Fetch trending series
  const fetchTrendingSeries = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/series/gettrendingseries");
      const data = await res.json();
      setSeries(data);
    } catch (error) {
      console.error("Error fetching trending series:", error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchTrendingSeries();
  }, []);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 1000);
    }
  };

  const data = activeTab === "movies" ? movies.slice(0, 2) : series.slice(0, 2);

  // 👇 Fade-in scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [data]);

  return (
    <div className="trending-section">
      {/* Header */}
      <div className="trending-header">
        <h2>Trending</h2>
        <button className="more-btn" onClick={() => navigate("")}>More</button>
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
      </div>

      {/* Trending Grid */}
      {loading ? (
        <div className="trending-grid">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="trending-card skeleton-card">
              <div className="poster skeleton"></div>
              <div className="info">
                <div className="skeleton skeleton-text title"></div>
                <div className="skeleton skeleton-text year"></div>
                <div className="skeleton skeleton-text rating"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="trending-grid">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="trending-card"
            >
              <div className="poster">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.releaseYear}</p>
                <p className="rating">⭐ {item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
