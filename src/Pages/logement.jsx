import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "./error/index";
import { useEffect, useState } from "react";
import Collapse from "../Composant/collapse";
import "../Styles/logement.css";
import Slideshow from "../Composant/slideshow";
import Tags from "../Composant/tags";
import Rating from "../Composant/star";
import Particulier from "../Composant/particulier";

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
          <Slideshow /*ou Carousel */ />
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
