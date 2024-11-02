"use client"; // This is necessary for client-side rendering in Next.js

import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CatItem from './CatItem';
import 'swiper/css'; // Import Swiper styles

const CategoriesCarousel = forwardRef(({ categories }, ref) => {
  return (
    <Swiper
      ref={ref} // Assign the ref to the Swiper
      spaceBetween={30}
      slidesPerView={6}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <CatItem category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

// Export the component
export default CategoriesCarousel;
