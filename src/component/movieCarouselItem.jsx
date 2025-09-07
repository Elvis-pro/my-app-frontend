import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import '../styles/MovieCarouselItem.css';

const MovieCarouselItem = ({ title = "", subtitle = "", year = "", imageUrl }) => {
  return (
    <Box className="movie-carousel-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Box className="movie-carousel-item-content">
        <Typography variant="h3" component="h1" className="movie-title">
          {title}
        </Typography>
        <Typography variant="body2" className="movie-subtitle">
          {subtitle} • {year}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieCarouselItem;
