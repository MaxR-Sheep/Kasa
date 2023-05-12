import { Link, NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header_accueil_active" : "header_accueil"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header_about_active" : "header_about"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
