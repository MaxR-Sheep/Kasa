import logement from "../datas/logement.json";
import Card from "../Composant/Card";

function Location() {
  return (
    <div>
      {logement.map((obj) => {
        return <Card product={obj} key={obj.id} />;
      })}
    </div>
  );
}

export default Location;
