import logoFooter from '../assets/images/logoKasaFooter.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa Logo" className="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;