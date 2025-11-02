// src/components/MovieList.js
import React, { useState, useEffect, useRef } from "react";
import "../styles/More_pageStyles/moreRecentlyAdded.css";

export default function MovieList({ title, movieApi, seriesApi }) {
  const [activeTab, setActiveTab] = useState("movies");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const cardRefs = useRef([]);

  useEffect(() => {
    fetchMovies();
    fetchSeries();

    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await fetch(movieApi);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchSeries = async () => {
    try {
      const res = await fetch(seriesApi);
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
        setCurrentPage(1);
        setLoading(false);
      }, 1000);
    }
  };

  const itemsPerPage = 9;
  const allData = activeTab === "movies" ? movies : series;
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const paginatedData = isMobile
    ? allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : allData;

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

    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [paginatedData]);

  return (
    <div>
      <div className="Movie-banner"></div>
      <div className="mostpopular movie-section">
        <div className="movie-header">
          <h2>{title}</h2>
        </div>

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

        {loading ? (
          <div className="mra-movie-grid movie-grid">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <div key={i} className="movie-card skeleton1-card">
                <div className="mra-poster skeleton"></div>
                <div className="info">
                  <div className="skeleton skeleton-text title"></div>
                  <div className="skeleton skeleton-text year"></div>
                  <div className="skeleton skeleton-text description"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mra-movie-grid movie-grid">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="movie-card-tv"
                >
                  <div className="movie-info">
                    <div className="mra-poster">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="info">
                      <h3 className="mrah3">{item.title}</h3>
                      <p className="mra-P description">
                        {item.description?.slice(0, 170)}...
                      </p>
                      <p className="mra-P year">{item.releaseYear}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isMobile && totalPages > 1 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`page-btn ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
