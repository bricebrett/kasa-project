import { useLocation } from "react-router-dom";
import defaultImage from "../assets/images/bannerKasa.png";
import aboutImage from "../assets/images/aboutBannerKasa.png";

/**
 * BANNER COMPONENT
 */
function Banner() {
  const location = useLocation();

  // Determine if the current page is the "About" page
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="banner">
      {/* Dynamically select the correct banner image based on the route */}
      <img
        src={isAboutPage ? aboutImage : defaultImage}
        alt="Kasa Banner"
        className="banner__image"
      />

      {/* Display the main title only on the home page */}
      {!isAboutPage && (
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  );
}

export default Banner;
