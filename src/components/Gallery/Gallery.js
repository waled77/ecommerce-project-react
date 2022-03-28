import React from "react";
import "./Gallery.css";
import { Swiper, SwiperSlide } from 'swiper/react';

const Gallery = () => {
    return (
        <div className="gallery">
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Gallery;
