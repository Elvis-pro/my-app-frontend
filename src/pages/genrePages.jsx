import { useParams } from "react-router-dom";
import MovieList from "../component/movieList";

export default function GenrePage() {
  const { genre } = useParams();

  return (
    <MovieList
      title={`${genre} Movies & Series`}
      movieApi={`http://localhost:3000/api/genre/${genre}`}
    />
  );
}
