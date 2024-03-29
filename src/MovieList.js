import React from "react";
import MovieCard from "./MovieCard"

function MovieList ({displayMovies}) {
    console.log("From MovieList:", displayMovies)
    const iterateMovies = displayMovies.map(movie => <MovieCard 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        image={movie.image}
        
         />)
    return (
        <div>
            {iterateMovies}
        </div>
    )
}

export default MovieList