import { useLocation } from 'react-router-dom';
import bannerImage from '../assets/images/bannerKasa.png';
import aboutBannerImage from '../assets/images/aboutBannerKasa.png';


function Banner() {
    const location = useLocation();
    const aboutPage = location.pathname === '/about';

    return (
        <div className="banner">
            <img src={aboutPage ? aboutBannerImage : bannerImage} alt="Kasa Banner" className="banner__image" />
            <h1 className='banner__text'>{aboutPage ? "" : "Chez vous, partout et ailleurs"}</h1>
        </div>
    );
}

export default Banner;