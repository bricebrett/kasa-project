import bannerImage from '../assets/images/bannerKasa.png';

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Kasa Banner" className="banner__image" />
            <h1 className='banner__text'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;