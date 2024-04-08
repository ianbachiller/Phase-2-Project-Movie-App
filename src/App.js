import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Form from "./Form";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Winner from "./Winner";
import Ratings from "./Ratings";
import About from "./About";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={<MovieList contextValue={contextValue} />}
        />
        <Route path="/form" element={<Form />} />
        <Route
          path="/winner"
          element={<Winner contextValue={contextValue} />}
        />
        <Route
          path="/ratings"
          element={<Ratings contextValue={contextValue} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
