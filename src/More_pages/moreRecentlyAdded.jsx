// src/pages/RecentlyAdded.jsx
import MovieList from "../component/movieList";

export default function RecentlyAdded() {
  return (
    <MovieList
      title="Recently Added"
      movieApi="http://localhost:3000/api/movies/getrecentlyadded"
      seriesApi="http://localhost:3000/api/series/getRecentlyAddedSeries"
    />
  );
}
