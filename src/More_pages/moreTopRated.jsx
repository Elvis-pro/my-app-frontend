// src/pages/TopRated.jsx
import MovieList from "../component/movieList";

export default function TopRated() {
  return (
    <MovieList
      title="Top Rated"
      movieApi="http://localhost:3000/api/movies/gettoprated"
      seriesApi="http://localhost:3000/api/series/getTopRated"
    />
  );
}
