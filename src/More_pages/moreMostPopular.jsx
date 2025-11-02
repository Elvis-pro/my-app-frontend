// src/pages/Popular.jsx
import MovieList from "../component/movieList";

export default function Popular() {
  return (
    <MovieList
      title="Most Popular"
      movieApi="http://localhost:3000/api/movies/getMostPopular"
      seriesApi="http://localhost:3000/api/series/getMostPopular"
    />
  );
}
