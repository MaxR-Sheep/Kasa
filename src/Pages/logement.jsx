import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "./error";
import { useEffect, useState } from "react";
import Collapse from "../composant/collapse";
import "../styles/logement.css";
import Slidershow from "../composant/slideshow";
import Tags from "../composant/tags";
import Rating from "../composant/star";
import Particulier from "../composant/particulier";

function Logement() {
  let { id } = useParams(); // useParams permet de récupere l'ID dans la barre url
  const [logement, setLogement] = useState({}); // modification de l'état

  // hook pour récupere l'id pour chaque objet
  useEffect(() => {
    if (id) {
      logements.forEach((obj) => {
        if (obj.id === id) {
          setLogement(obj);
        }
      });
    }
  }, [id]);

  return (
    <div>
      {Object.keys(logement).length !== 0 ? (
        <div>
          <Slidershow /*ou Carousel */ />
          <article>
            <div className="logement_info">
              <div className="logement_titre">
                <h2 className="logement_h2">{logement.title}</h2>
                <p>{logement.location}</p>
                <div className="logement_tag">
                  {logement.tags.map((tags, index) => {
                    return <Tags key={index} text={tags} />;
                  })}
                </div>
              </div>
              <div className="logement_particulier">
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
    </div>
  );
}

export default Logement;
