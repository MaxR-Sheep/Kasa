import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "./error";
import { useEffect, useState } from "react";
import Collapse from "../composant/collapse";
import "../styles/logement.css";
import Carousel from "../composant/slideshow";
import Tags from "../composant/tags";
import Rating from "../composant/star";

function Logement() {
  let { id } = useParams();
  const [logement, setLogement] = useState({});

  useEffect(() => {
    if (id) {
      logements.forEach((obj) => {
        if (obj.id === id) {
          setLogement(obj);
        }
      });
    }
  }, []);

  return (
    <section>
      {Object.keys(logement).length !== 0 ? (
        <div>
          <Carousel />
          <article>
            <div>
              <h1>{logement.title}</h1>
              <h3>{logement.location}</h3>
              {logement.tags.map((tags, index) => {
                return <Tags key={index} text={tags} />;
              })}
            </div>

            <div>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
              <Rating value={logement.rating} />
            </div>

            <div className="logement_collapse">
              <div className="logement_collapse_div">
                <Collapse
                  title="Description"
                  children={logement.description}
                  className="collapse_log"
                />
              </div>
              <div className="logement_collapse_div">
                <Collapse
                  title="Équipements"
                  children={logement.equipments}
                  className="collapse_log"
                />
              </div>
            </div>
          </article>
        </div>
      ) : (
        <Error />
      )}
    </section>
  );
}

export default Logement;
