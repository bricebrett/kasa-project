import { Link } from "react-router-dom";
import GetDate from "./Date";
import logoFooter from "../assets/images/logoKasaFooter.png";

function Footer() {
  const date = GetDate();

  return (
    <footer className="footer">
      <Link to="/">
        <img src={logoFooter} alt="Kasa Logo" className="logo" />
      </Link>
      <p className="logo__text">© {date} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
