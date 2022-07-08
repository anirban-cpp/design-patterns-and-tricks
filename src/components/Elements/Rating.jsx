import React from "react";
import { useState } from "react";

import { MdStarRate } from "react-icons/md";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating">
      <h1>Rating</h1>
      <div className="stars">
        {[...Array(5)].map((_e, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <MdStarRate
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                color={ratingValue <= (hover || rating) ? "gold" : "lightgray"}
              />
            </label>
          );
        })}
      </div>
      <p>The Rating is {rating}</p>
    </div>
  );
};

export default Rating;
