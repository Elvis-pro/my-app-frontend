import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import '../styles/MovieCarouselItem.css';

const MovieCarouselItem = ({ title = " ", rating = 3.3, details = " .", imageUrl = "https://example.com/brave-new-world-poster.jpg" }) => {
  return (
    <Box className="movie-carousel-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Box className="movie-carousel-item-content">
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        <Box className="movie-rating">
          <Rating
            name="movie-rating"
            value={rating}
            precision={0.1}
            readOnly
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
            max={5}
          />
          <Typography variant="body1">
            {rating * 2} (imdb) • <span style={{backgroundColor:"#133c8c", padding:"5px", margin:"0 5px"}}>16+</span> • 2h 21min
          </Typography>
        </Box>
        <Typography variant="body1" className="movie-details" paragraph>
          {details}
        </Typography>
        <Button className="movie-button" style={{backgroundColor: "#133c8c", color: "white"}}>
          Browse Movie
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCarouselItem;