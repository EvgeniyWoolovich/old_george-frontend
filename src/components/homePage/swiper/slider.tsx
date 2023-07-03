import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export const Slider = () => {
  return (
    <>
      <h2 className="slider-title">Выбери и закажи здесь</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletActiveClass: "bulletActive",
          bulletClass: "bulletDefolt",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-item-container">
            <img src="/image/slider/sliderImage1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item-container">
            <img src="/image/slider/sliderImage2.jpg" alt="" />
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-item-container">
            <img src="/image/slider/sliderImage3.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
