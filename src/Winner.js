import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";
import NavBar from "./NavBar";

function Winner() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movies) => {
        const highestLikes = Math.max(...movies.map((movie) => movie.likes));
        const winningMovies = movies.filter(
          (movie) => movie.likes === highestLikes
        );

        setWinners(winningMovies);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <div className="winner-movie-container">
        <h2>Winner Movie(s)</h2>
        <div className="moviecard-winners">
          {winners.map((winner) => (
            <MovieCard
              key={winner.id}
              title={winner.title}
              plotSummary={winner.plotSummary}
              image={winner.image}
              likes={winner.likes}
              id={winner.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Winner;
