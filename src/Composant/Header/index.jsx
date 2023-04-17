import { Link } from "react-router-dom";
import logo from "../Assets/LOGO.png";
import "../../Styles/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="Kasa location d'appartements"
        className="header-logo"
      />
      <nav className="header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
