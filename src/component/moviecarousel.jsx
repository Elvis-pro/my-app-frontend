import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/MovieCarousel.css';
import MovieCarouselItem from '../component/movieCarouselItem';

const MovieCarousel = () => {
  return (
    <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.custom-pagination' }} // Target the custom pagination container
        navigation
        autoplay={{ delay: 5000 }}
        loop
    >
      <SwiperSlide>
        <MovieCarouselItem
          title="CAPTAIN AMERICA BRAVE NEW WORLD"
          rating={3.3}
          details="In a world reshaped by power and politics, Sam Wilson steps up as the new Captain America to face a global conspiracy, dangerous new enemies, and the rise of Red Hulk. Legacy meets rebellion in this bold new chapter of the Marvel Universe."
          imageUrl="https://example.com/another-movie-poster.jpg" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <MovieCarouselItem
          title="ANOTHER MOVIE TITLE"
          rating={4.2}
          details="A thrilling adventure in a different universe."
          imageUrl="https://example.com/another-movie-poster.jpg"
        />
      </SwiperSlide>,
      <SwiperSlide>
        <MovieCarouselItem
          title="SPIDER MAN"
          rating={4.2}
          details="A thrilling adventure in a different universe."
          imageUrl="https://example.com/another-movie-poster.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MovieCarousel;