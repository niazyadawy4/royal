"use client"; // This is necessary for client-side rendering in Next.js

import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import ProductItem from './ProductItem';

const FlashSalesCarousel = forwardRef(({ products }, ref) => {
  return (
    <Swiper
      ref={ref} // Assign the ref to the Swiper
      spaceBetween={30}
      slidesPerView={4}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem key={product.id} product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

// Export the component
export default FlashSalesCarousel;
