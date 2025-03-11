import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import bannerImage from "../assets/images/bannerKasa.png";
import aboutBannerImage from "../assets/images/aboutBannerKasa.png";

function Banner({ defaultImage, aboutImage }) {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="banner">
      <img
        src={
          isAboutPage
            ? aboutImage || aboutBannerImage
            : defaultImage || bannerImage
        }
        alt="Kasa Banner"
        className="banner__image"
      />
      {!isAboutPage && (
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}

Banner.propTypes = {
  defaultImage: PropTypes.string,
  aboutImage: PropTypes.string,
};

export default Banner;
