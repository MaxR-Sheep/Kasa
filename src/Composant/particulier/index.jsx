import "../../styles/particulier.css";

function Particulier({ name, picture }) {
  return (
    <div className="particulier">
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Particulier;
