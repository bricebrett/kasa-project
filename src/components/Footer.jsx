import GetDate from './Date';
import logoFooter from '../assets/images/logoKasaFooter.png';

function Footer() {
    const date = GetDate();

    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa Logo" className="logo" />
            <p className="logo__text">© {date} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;