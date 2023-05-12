import { useState } from "react";
import "../../styles/collapse.css";

import vector from "../assets/vector.png";

const StringComponent = ({ text }) => {
  return <p>{text}</p>;
};

const ArrayComponent = ({ list }) => {
  return (
    <ul>
      {list.map((text, index) => {
        return <li key={index}>{text}</li>;
      })}
    </ul>
  );
};

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className="collapse_close">
        <h3>{title}</h3>

        {isOpen ? (
          <img src={vector} alt="vecteur haut" />
        ) : (
          <img src={vector} alt="vecteur bas" className="vector" />
        )}
      </button>
      {isOpen && (
        <div className="collapse_open">
          {typeof children === "string" ? (
            <StringComponent
              text={children} /* pour que le collapse s'adpate soit à du texte*/
            />
          ) : (
            <ArrayComponent
              list={
                children
              } /*  soit à une liste dans un tableau selon le type */
            />
          )}
        </div>
      )}
    </div>
  );
}
export default Collapse;
