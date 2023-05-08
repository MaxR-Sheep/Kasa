import React, { useState, useEffect } from "react";
import logements from "../../datas/logement.json";
import { useParams } from "react-router-dom";
import Arrow from "../assets/arrow.png";
import "../../styles/slideshow.css";

function Carousel() {
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      logements.forEach((obj) => {
        if (obj.id === id) {
          setImagesUrl(obj.pictures);
        }
      });
    }
  }, []);

  const [index, setIndex] = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

  const next = () => {
    let updatedIndex = index + 1;
    updatedIndex < imagesUrl.length ? setIndex(updatedIndex) : setIndex(0);
  };

  const previous = () => {
    let updatedIndex = index - 1;
    updatedIndex < 0 ? setIndex(imagesUrl.length - 1) : setIndex(updatedIndex);
  };

  return (
    <div>
      <div className="slider">
        <img
          src={Arrow}
          alt=""
          className="vector_previous"
          onClick={previous}
        />
        {<img src={imagesUrl[index]} alt="" className="slider_img" />}
        <img src={Arrow} alt="" onClick={next} className="vector_next" />
      </div>
      <div className="point_img">
        {imagesUrl.map((img, indexImg) => {
          return (
            <div key={indexImg}>
              {indexImg === index ? <p>⚫</p> : <p>⚪</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
