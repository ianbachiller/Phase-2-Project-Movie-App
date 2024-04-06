import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";

function Ratings() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((data) => {
        const imdbRatings = data.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}: {movie.imdbRating}</h1>
          </div>
        ));
        setRatings(imdbRatings);
      })
      .catch((error) => console.error("Error fetching ratings:", error));
  }, []);

  return (
    <div className="ratings-container">
      <Header />
      <NavBar />
      <div>{ratings}</div>
    </div>
  );
}

export default Ratings;
