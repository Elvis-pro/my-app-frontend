// src/pages/Trending.jsx
import MovieList from "../component/movieList";

export default function Trending() {
  return (
    <MovieList
      title="Trending Now"
      movieApi="http://localhost:3000/api/movies/gettrendingmovies"
      seriesApi="http://localhost:3000/api/series/gettrendingseries"
    />
  );
}
