// Rating.js
import React from 'react';
import StarIcon from './StarIcon';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Get the whole number part
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
  const totalStars = 5; // Total number of stars

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        if (index < fullStars) {
          return <StarIcon key={index} filled={true} />;
        } else if (index === fullStars && hasHalfStar) {
          return <StarIcon key={index} half={true} />;
        } else {
          return <StarIcon key={index} filled={false} />;
        }
      })}
    </div>
  );
};

export default Rating;
