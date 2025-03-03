import { Link } from "react-router-dom";
import logo from "../assets/images/logoKasa.png";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa Logo" className="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;