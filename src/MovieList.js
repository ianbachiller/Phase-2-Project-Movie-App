import React from "react";
import MovieCard from "./MovieCard";
import "./index.css"; 
import Header from "./Header";
import NavBar from "./NavBar";
import Form from "./Form";

function MovieList({contextValue}) {
  const { filteredMovies, displayMovies, setDisplayMovies } = contextValue
  console.log(filteredMovies)
  console.log(displayMovies)
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
      <Header />
      <NavBar />
      <Form contextValue={contextValue}/>
      <div className="movie-list-container">
        {movieCards}
      </div>
    </div>);
}

export default MovieList;
