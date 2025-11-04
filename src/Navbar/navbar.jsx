import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const handleDropdownClick = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
    setShowSearchOverlay(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".navbar") &&
        !event.target.closest(".overlay")
      ) {
        setActiveDropdown(null);
        setShowSearchOverlay(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const overlays = {
    tv: ["Action", "Comedy", "Drama", "Mystery", "Fantasy", "Animation"],
    movies: ["Adventure", "Horror", "Sci-Fi", "Crime", "Romance", "Thriller"],
    genre: [
      "Thriller",
      "Romance",
      "Documentary",
      "War",
      "Western",
      "Musical",
      "Sports",
    ],
  };

  // 🔍 Handle search logic
  const handleSearch = async (query) => {
    setSearchTerm(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowSearchOverlay(false);
      return;
    }

    setShowSearchOverlay(true);
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/search?q=${query}`);
      if (!res.ok) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="logo">♦</div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>

            <li className={`dropdown ${activeDropdown === "tv" ? "active" : ""}`}>
              <button className="dropbtn" onClick={() => handleDropdownClick("tv")}>
                TV Series
              </button>
            </li>

            <li className={`dropdown ${activeDropdown === "movies" ? "active" : ""}`}>
              <button className="dropbtn" onClick={() => handleDropdownClick("movies")}>
                Movies
              </button>
            </li>

            <li className={`dropdown ${activeDropdown === "genre" ? "active" : ""}`}>
              <button className="dropbtn" onClick={() => handleDropdownClick("genre")}>
                Genre
              </button>
            </li>
          </ul>
        </div>

        {/* 🔍 Inline Search Input */}
        <input
          type="text"
          className="navbar-search"
          placeholder="Search movies or TV series..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </nav>

      {/* === DROPDOWN & SEARCH OVERLAYS === */}
      {activeDropdown && (
        <div className="overlay">
          <button className="close-btn" onClick={() => setActiveDropdown(null)}>✕</button>
          <div className="overlay-content">
            <h2>
              {activeDropdown === "tv"
                ? "TV Series"
                : activeDropdown === "movies"
                ? "Movies"
                : "Genres"}
            </h2>
            <div className="genre-grid">
              {overlays[activeDropdown].map((item, i) => (
                <div key={i} className="genre-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showSearchOverlay && (
        <div className="overlay">
          <button className="close-btn" onClick={() => setShowSearchOverlay(false)}>✕</button>
          <div className="overlay-content">
            <h2>Search Results</h2>
            {loading ? (
              <p className="loading-text">Searching...</p>
            ) : searchResults.length > 0 ? (
              <div className="search-results">
                {searchResults.map((item, i) => (
                  <div key={i} className="search-item">
                    <strong>{item.title}</strong>
                    <span>{item.type || (item.seasons ? "TV Series" : "Movie")}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">No results found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
