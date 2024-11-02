// StarIcon.js
import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const StarIcon = ({ filled, half }) => {
  return (
    <span>
      {filled ? (
        <FaStar className="text-[#FFAD33]" />
      ) : half ? (
        <FaStarHalfAlt className="text-[#FFAD33]" />
      ) : (
        <FaRegStar className="text-gray-300" />
      )}
    </span>
  );
};

export default StarIcon;
