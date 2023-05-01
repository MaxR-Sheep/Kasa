import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "../composant/error";
import { useEffect, useState } from "react";
import Collapse from "../composant/collapse";
import "../styles/logement.css";

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
    <div>
      {Object.keys(logement).length !== 0 ? (
        <div>
          carousel
          <article>
            <div>
              <div>
                <h1>{logement.title}</h1>
                <h3>{logement.location}</h3>
              </div>

              <div>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
            </div>

            <div className="logement_collapse">
              <div className="logement_collapse_div">
                <Collapse title="Description" children={logement.description} />
              </div>
              <div className="logement_collapse_div">
                <Collapse title="Équipements" children={logement.equipments} />
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
