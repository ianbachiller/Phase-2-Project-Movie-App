import React from "react";
import MovieCard from "./MovieCard";
import "./index.css"; // Import CSS file for styling

function MovieList({ displayMovies }) {
  const movieCards = displayMovies.map(movie => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.image}
      plotSummary={movie.plotSummary}
    />
  ));

  return (
    <div className="movie-list-container">
      {movieCards}
    </div>
  );
}

export default MovieList;
