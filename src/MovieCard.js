import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function MovieCard({ title, plotSummary, image }) {
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
      </CardContent>
    </Card>
  );
}

export default MovieCard;
