import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "./error";
import { useEffect, useState } from "react";
import Collapse from "../composant/collapse";
import "../styles/logement.css";
import Carousel from "../composant/slideshow";
import Tags from "../composant/tags";
import Rating from "../composant/star";
import Particulier from "../composant/particulier";

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
            <div className="log_info">
              <div className="logement_titre">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="log_tag">
                  {logement.tags.map((tags, index) => {
                    return <Tags key={index} text={tags} />;
                  })}
                </div>
              </div>

              <div>
                <Particulier
                  name={logement.host.name}
                  picture={logement.host.picture}
                />
                <div>
                  <Rating value={logement.rating} />
                </div>
              </div>
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
