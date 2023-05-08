import React from "react";
import StarEmpty from "../assets/star.png";
import StarFull from "../assets/starfull.png";
import "../../styles/star.css";

function Rating({ value }) {
  const totalStars = 5;
  const activeStar = value;

  return (
    <div>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStar ? (
          <img key={index} src={StarFull} alt="" className="star" />
        ) : (
          <img key={index} src={StarEmpty} alt="" className="star" />
        );
      })}
    </div>
  );
}

export default Rating;
