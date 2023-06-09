import logements from "../../datas/logement.json";
import Card from "../Card";
import "../../Styles/card.css";

function Location() {
  return (
    <div className="card">
      {logements.map((obj) => {
        return <Card product={obj} key={obj.id} />;
      })}
    </div>
  );
}

export default Location;
