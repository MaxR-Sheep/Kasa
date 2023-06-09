import { Link } from "react-router-dom";
import "../../Styles/error.css";

function Error() {
  return (
    <section className="error">
      <h1 className="error_404">404 </h1>
      <h2 className="error_text">
        {" "}
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error_link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error;
