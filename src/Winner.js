import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";
import NavBar from "./NavBar";

function Winner({ contextValue }) {
  const [winners, setWinners] = useState([]);
  const { filteredMovies } = contextValue;
  console.log(filteredMovies);

  useEffect(() => {
    const highestLikes = Math.max(
      ...filteredMovies.map((movie) => movie.likes)
    );
    const winningMovies = filteredMovies.filter(
      (movie) => movie.likes === highestLikes
    );
    setWinners(winningMovies);
  }, [filteredMovies]);

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
