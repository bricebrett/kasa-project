import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logoKasa.png";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link>
        <img src={logo} alt="Kasa Logo" className="logo" to="/" />
      </Link>
      <nav className="nav">
        <Link
          className={`nav__text ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`nav__text ${
            location.pathname === "/about" ? "active" : ""
          }`}
          to="/about"
        >
          À Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
