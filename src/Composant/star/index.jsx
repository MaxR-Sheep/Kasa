import React from "react";
import StarEmpty from "../Assets/star.png";
import StarFull from "../Assets/starfull.png";
import "../../Styles/star.css";

function Rating({ value }) {
  const totalStars = 5;
  const activeStar = value;

  return (
    <>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStar ? (
          <img key={index} src={StarFull} alt="" className="star" />
        ) : (
          <img key={index} src={StarEmpty} alt="" className="star" />
        );
      })}
    </>
  );
}

export default Rating;
