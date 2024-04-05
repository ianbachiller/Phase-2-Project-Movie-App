import React, {useContext} from "react";
import MovieCard from "./MovieCard";
import "./index.css"; 
import { MovieContext } from "./App";
import NavBar from "./NavBar";


function MovieList() {
  const { filteredMovies, displayMovies, setDisplayMovies } = useContext(MovieContext);
  console.log("MovieList:", filteredMovies)
  const movieCards = filteredMovies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      image={movie.image}
      plotSummary={movie.plotSummary}
      likes={movie.likes}
      imdbRating={movie.imdbRating}
      displayMovies={displayMovies}
      setDisplayMovies={setDisplayMovies}
    />
  ));

  return (
    
    <div>
      <div className="movie-list-container">
        {movieCards}
      </div>
    </div>);
}

export default MovieList;
