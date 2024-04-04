import React, {useContext} from "react";
import MovieCard from "./MovieCard";
import "./index.css"; 
import { MovieContext } from "./App";

function MovieList() {
  const { filteredMovies, displayMovies, setDisplayMovies } = useContext(MovieContext);
  const movieCards = filteredMovies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.image}
      plotSummary={movie.plotSummary}
      likes={movie.likes}
      displayMovies={displayMovies}
      setDisplayMovies={setDisplayMovies}
    />
  ));

  return <div className="movie-list-container">{movieCards}</div>;
}

export default MovieList;
