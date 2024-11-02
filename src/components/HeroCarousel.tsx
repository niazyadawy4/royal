"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroCarouselItem from './HeroCarouselItem';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HeroCarousel = () => {
    return (
        <div className='pt-10'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination ]}
            >
                <SwiperSlide>
                    <HeroCarouselItem />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCarouselItem />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCarouselItem />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroCarousel;
