import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/MovieCarousel.css';
import MovieCarouselItem from '../component/movieCarouselItem';
import captain from "../images/captain.webp";
import F1 from "../images/F1.webp";
import mission from "../images/mission.webp";

const MovieCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000 }}
      loop
    >
      <SwiperSlide>
        <MovieCarouselItem
          title="Captain America Brave New World"
          subtitle="ADVENTURE, ACTION, DRAMA"
          year="2024"
          imageUrl={captain}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MovieCarouselItem
          title="Thor: Realm of Shadows"
          subtitle="ADVENTURE, ACTION, DRAMA"
          year="2024"
          imageUrl={F1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MovieCarouselItem
          title="Black Panther: Rise of the Tribes"
          subtitle="ADVENTURE, ACTION, DRAMA"
          year="2024"
          imageUrl={mission}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MovieCarousel;