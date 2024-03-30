import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import './index.css';
import NavBar from './NavBar';


function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(resp => resp.json())
      .then(movies => {
        setDisplayMovies(movies); // Update state with fetched movies
      })
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
      <div>
        <NavBar />
        <MovieList displayMovies={displayMovies}/>
      </div>
  );
}

export default App;
