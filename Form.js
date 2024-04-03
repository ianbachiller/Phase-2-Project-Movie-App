import { formGroupClasses } from "@mui/material";
import React, { useState } from "react";

function Form({ displayMovies, setDisplayMovies, search, setSearch, handleSearchChange }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [plot, setPlot] = useState("");
  const [newMovie, setNewMovie] = useState({});
  const [genre, setGenre] = useState([]);

  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Sci-Fi",
    "Other",
  ];
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handlePosterChange(e) {
    setPoster(e.target.value);
  }
  function handlePlotChange(e) {
    setPlot(e.target.value);
  }
  function handleGenresChange(e) {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setGenre(selectedOptions);
  }
  function handleNewMovieSubmit(e) {
    e.preventDefault();
    if(title !== "" && poster !== "" && plot !== ""&& genre.length > 0){
      const submittedMovie = {
        title: title,
        genre: genre,
        plotSummary: plot,
        image: poster,
      };
      setTitle("");
      setPlot("");
      setPoster("");
      setGenre([]);
      setNewMovie(submittedMovie);
      fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-type": "application/JSON",
        },
        body: JSON.stringify(submittedMovie),
      })
        .then((resp) => resp.json())
        .then((newMovie) => setDisplayMovies([newMovie, ...displayMovies]))
        .catch((error) => console.error(error));
    }else {
      alert("Please fill out all the prompts!")
    }
    
  }
  return (
    <div className="form">
      <div className="new-movie-form">
        <p>Add a new movie: </p>
        <form onSubmit={handleNewMovieSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Movie name"
            onChange={handleTitleChange}
            value={title}
          />
          <input
            type="text"
            name="image"
            placeholder="Poster URL"
            onChange={handlePosterChange}
            value={poster}
          />
          <input
            type="text"
            name="plotSummary"
            placeholder="Plot Summary"
            onChange={handlePlotChange}
            value={plot}
          />
          <select multiple onChange={handleGenresChange}>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <button type="submit">Add Movie</button><br></br>
          <p>Search by entering the title: </p>
          <input placeholder="Enter title..." onChange={handleSearchChange}></input>
        </form>
      </div>
    </div>
  );
}

export default Form;
