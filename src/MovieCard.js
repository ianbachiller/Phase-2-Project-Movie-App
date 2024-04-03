import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MovieCard({ title, plotSummary, image, likes, id, displayMovies, setDisplayMovies }) {
  function handleLikeClick () {
    fetch(`http://localhost:3000/movies/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/JSON"
      },
      body: JSON.stringify( {likes: likes + 1} )
    })
    .then(resp => resp.json())
    .then(updatedMovie => {
      const updatedMovies = displayMovies.map(movie => {
        if (movie.id === id) {
          return { ...movie, likes: updatedMovie.likes };
        }
        return movie;
      });
      setDisplayMovies(updatedMovies);
    })
  }
  return (
    <Card sx={{ maxWidth: 300, marginBottom: 2, padding: 2 }}>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {plotSummary}
        </Typography>
          <div style={{ textAlign: "center" }}> 
            <button style={{ fontSize: "large" }} className="heartButton" onClick={handleLikeClick}> ♥️ {likes} </button>
          </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
