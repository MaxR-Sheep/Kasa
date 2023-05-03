import React, { useState, useEffect } from "react";
import logements from "../../datas/logement.json";
import { useParams } from "react-router-dom";

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
    <div
      style={{
        border: "solid 2px #000",
        padding: "32px",
        borderRadius: "16px",
      }}
    >
      {<img src={imagesUrl[index]} alt="" />}
      <button onClick={previous}>previous</button>
      <button onClick={next}>next</button>
      <p>current index: {index}</p>
    </div>
  );
}

export default Carousel;
