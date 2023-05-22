import "../../Styles/particulier.css";

function Particulier({ name, picture }) {
  return (
    <div className="particulier">
      <p className="part_name">{name}</p>
      <img src={picture} alt={name} className="part_img" />
    </div>
  );
}

export default Particulier;
