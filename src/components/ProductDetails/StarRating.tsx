import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars }: { stars: number }) => {
  const ratings = [];
  for (let index = 0; index < stars; index++) {
    ratings.push(<FaStar className="text-orange-500" />);
  }
  for (let index = 0; index < 5 - stars; index++) {
    ratings.push(<FaStar className="text-gray-500" />);
  }
  return (
    <div className="flex flex-row gap-1 justify-start items-center my-4">
      {ratings.map((rate, i) => (
        <span key={i}>{rate}</span>
      ))}
    </div>
  );
};

export default StarRating;
