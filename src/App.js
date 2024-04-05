import React, { useEffect, useState, createContext } from "react";
import MovieList from "./MovieList";
import "./index.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Form from "./Form";
import Home from "./Home";
import routes from "./Routes";

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
        {/* <MovieList /> */}
        <div className="image-container">
          <img
            id="welcomeDoggo"
            src="https://c.tenor.com/rDNPdB5bOeEAAAAd/tenor.gif"
            alt="Welcome Doggo"
          />
        </div>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
