import React from "react";
import StarEmpty from "../assets/star.png";
import StarFull from "../assets/starfull.png";

function Rating({ value }) {
  const totalStars = 5;
  const activeStar = value;

  return (
    <div>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStar ? (
          <img src={StarFull} alt="" />
        ) : (
          <img src={StarEmpty} alt="" />
        );
      })}
    </div>
  );
}

export default Rating;
