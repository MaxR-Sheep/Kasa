import { useParams } from "react-router-dom";
import logements from "../datas/logement.json";
import Error from "../composant/error";
import { useEffect, useState } from "react";

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
            <h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
          </article>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Logement;
