import logements from "./datas/logement.json";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Rating() {
  let { id } = useParams();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    logements.forEach((obj) => {
      if (obj.id === id) {
        setRating(obj.rating);
      }
    });
  });

  return (
    <div>
      <label key={id}>
        <input type="radio" name="rating" value={rating} />
        <span>{rating ? "★" : "☆"}</span>
      </label>
    </div>
  );
}
