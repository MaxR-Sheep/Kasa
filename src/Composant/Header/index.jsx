import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../../styles/header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          alt="Kasa location d'appartements"
          className="header_logo"
        />
      </Link>

      <nav className="header_nav">
        <Link to="/" className="header_accueil">
          Accueil
        </Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
