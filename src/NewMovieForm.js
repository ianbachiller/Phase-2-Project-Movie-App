import React from "react";

function NewMovieForm() {
  return (
    <div className="new-movie-form">
      <form>
        <input type="text" name="name" placeholder="Movie name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="genre" placeholder="Genre" />
        <input type="text" name="plotSummary" placeholder="Plot Summary" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default NewMovieForm;
