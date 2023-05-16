import "../../styles/banniere.css";

function Banniere({ img, text }) {
  return (
    <div className="banniere">
      <img src={img} alt="paysage belle vue" className="banniere_img" />
      <h2 className="banniere_title">{text}</h2>
    </div>
  );
}

export default Banniere;
