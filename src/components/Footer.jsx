import logoFooter from '../assets/images/logoKasaFooter.png';
import GetDate from './Date';

function Footer() {
    let date = GetDate();

    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa Logo" className="logo" />
            <p className='logo__text'>© {date} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;