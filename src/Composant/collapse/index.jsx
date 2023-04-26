import { useState } from "react";
import "../../styles/collapse.css";
import bas from "../assets/vector_bas.png";
import haut from "../assets/vector_haut.png";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className="collapse_close">
        <h3>{title}</h3>
        {!isOpen && <img src={bas} alt="vecteur bas" />}
        {isOpen && <img src={haut} alt="vecteur haut" />}
      </button>
      {isOpen && <div className="collapse-open">{text}</div>}
    </div>
  );
}
export default Collapse;
