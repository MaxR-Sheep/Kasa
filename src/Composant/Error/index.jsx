import { Link } from "react-router-dom";
import "../../styles/error.css";

function Error() {
  return (
    <div className="error">
      <h1 className="error_404">404 </h1>
      <h2 className="error_text">
        {" "}
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
