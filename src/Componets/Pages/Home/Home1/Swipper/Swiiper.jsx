import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; // Include this if you're using fade effect
import { Navigation, Autoplay, A11y } from 'swiper/modules'; // Import Autoplay directly

import Wellcome from '../Wellcome';
import HomeWell2 from '../HomeWell2';
import HomeWell3 from '../HomeWell3';
import './Style.css'; // Custom styles should come last

const Swiiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]} // Include Autoplay in the modules list
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4500, // Delay in ms
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
    >
      <SwiperSlide>
        <Wellcome />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell2 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeWell3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiiper;
