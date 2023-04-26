import "../../styles/banniere.css";

function Banniere({ img, text }) {
  return (
    <div className="banniere">
      <img src={img} alt="paysage belle vue" className="banniere_img" />
      <h1 className="banniere_title">{text}</h1>
    </div>
  );
}

export default Banniere;
