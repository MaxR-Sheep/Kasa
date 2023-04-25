import { useState } from "react";

function Collapse() {
  const [texte, setCollapse] = useState();
  return (
    <div>
      <button onChange={() => setCollapse(texte)}>Fiabilité</button>
      <div>
        <div></div>
      </div>
    </div>
  );
}
export default Collapse;
