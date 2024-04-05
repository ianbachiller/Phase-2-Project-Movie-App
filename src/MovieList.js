import React, {useContext} from "react";
import MovieCard from "./MovieCard";
import "./index.css"; 
import { MovieContext } from "./App";
import NavBar from "./NavBar";
import contextValue from "./App"


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
      displayMovies={displayMovies}
      setDisplayMovies={setDisplayMovies}
    />
  ));

  return (
    
    <div>
      <div>
        <NavBar />
      </div>
      <div className="movie-list-container">
        {movieCards}
      </div>
    </div>);
}

export default MovieList;
