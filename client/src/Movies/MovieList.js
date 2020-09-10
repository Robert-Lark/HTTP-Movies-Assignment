import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function MovieList({ movies }) {
  const { push } = useHistory();
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
      <div>
        <Button
          onClick={() => push(`/add-movie`)}
          value="value"
          variant="contained"
        >
          ADD MOVIE
				</Button>
      </div>
    </div>
  );
}

export default MovieList;
