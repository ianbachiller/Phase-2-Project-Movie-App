import React, { useContext } from "react";

function MovieCard({id, image, title}) {
  return (
    <div>
      <li className="card" data-testid="movie-item">
        <img 
            src = {image}
            alt={image}/>
        <h4>{title}</h4>
        <p>{title}</p>
      </li>
    </div>
  );
}
export default MovieCard