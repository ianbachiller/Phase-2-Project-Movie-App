import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import "./index.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [displayMovies, setDisplayMovies] = useState([]);
  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  const filteredMovies = displayMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
const counter = 0;
  useEffect(() => {
    console.log(counter)
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then((movies) => {
        setDisplayMovies(movies);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <Form
        search={search}
        setSearch={setSearch}
        handleSearchChange={handleSearchChange}
        displayMovies={displayMovies}
        setDisplayMovies={setDisplayMovies}
      />
      <MovieList
        filteredMovies={filteredMovies}
        displayMovies={displayMovies}
        setDisplayMovies={setDisplayMovies}
      />
    </div>
  );
}

export default App;
