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
  //setInterval(next, 4000);

  const previous = () => {
    let updatedIndex = index - 1;
    updatedIndex < 0 ? setIndex(imagesUrl.length - 1) : setIndex(updatedIndex);
  };

  if (imagesUrl.length === 1) {
    return (
      <div>
        <div className="slider">
          {<img src={imagesUrl[index]} alt="" className="slider_img" />}
        </div>
      </div>
    );
  } else {
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
        <div className="number_img">
          <p>
            {index + 1}/{imagesUrl.length}
          </p>
        </div>
      </div>
    );
  }
}

export default Carousel;
