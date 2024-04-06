import React, { useEffect, useState, createContext } from "react";
import MovieList from "./MovieList";
import "./index.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Form from "./Form";

export const MovieContext = createContext();
function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  const filteredMovies = displayMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movies) => {
        setDisplayMovies(movies);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);
  const contextValue = {
    filteredMovies,
    displayMovies,
    setDisplayMovies,
    handleSearchChange,
  };

  return (
    <div>
      <MovieContext.Provider value={contextValue}>
        <Header />
        <NavBar />
        <Form />
        <MovieList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
