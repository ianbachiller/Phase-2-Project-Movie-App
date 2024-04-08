import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

function Ratings({contextValue}) {
  const [ratings, setRatings] = useState([]);
  const{ filteredMovies} = contextValue

  useEffect(() => {
        const imdbRatings = filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}: {movie.imdbRating}</h1>
          </div>
        ));
        setRatings(imdbRatings);
  }, [filteredMovies]);

  return (
    <div className="ratings-container">
      <Header />
      <NavBar />
      <div>{ratings}</div>
    </div>
  );
}

export default Ratings;
