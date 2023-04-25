import { useState } from "react";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  return (
    <div>
      <button onClick={toggleCollapse}>{title}</button>
      {isOpen && <div>{text}</div>}
    </div>
  );
}
export default Collapse;
