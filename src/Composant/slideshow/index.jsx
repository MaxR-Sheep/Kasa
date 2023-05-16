import React, { useState, useEffect } from "react";
import logements from "../../datas/logement.json";
import { useParams } from "react-router-dom";
import Arrow from "../assets/arrow.png";
import vectorPrevious from "../assets/Vectorprevious.png";
import "../../styles/slideshow.css";

function Carousel() {
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      logements.forEach((obj) => {
        if (obj.id === id) {
          setImagesUrl(obj.pictures); // hook qui permet de mettre à jour les images de la location
        }
      });
    }
  }, [id]);

  const [index, setIndex] = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

  const next = () => {
    let updatedIndex = index + 1;
    updatedIndex < imagesUrl.length ? setIndex(updatedIndex) : setIndex(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === imagesUrl.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () =>
      clearInterval(
        interval
      ); /* le clearInterval permet de remettre a 0 la fonction pour évité les problemes avec les functions next et previous */
  }, [
    imagesUrl.length,
  ]); /* useEffect avec setInterval pour avoir un changement d'images avec un timer de 3000ms */

  const previous = () => {
    let updatedIndex = index - 1;
    updatedIndex < 0 ? setIndex(imagesUrl.length - 1) : setIndex(updatedIndex);
  };

  if (imagesUrl.length === 1) {
    return (
      <div className="slider">
        {<img src={imagesUrl[index]} alt="" className="slider_img" />}
      </div>
    );
  } else {
    return (
      <div className="slider">
        <img
          src={vectorPrevious}
          alt=""
          className="vector_previous"
          onClick={previous}
        />
        {<img src={imagesUrl[index]} alt="" className="slider_img" />}
        <img src={Arrow} alt="" onClick={next} className="vector_next" />

        <p className="number_img">
          {index + 1}/{imagesUrl.length}
        </p>
      </div>
    );
  }
}

export default Carousel;
