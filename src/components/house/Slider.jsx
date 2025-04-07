import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * SLIDER COMPONENT
 */
function Slider({ pictures }) {
  // Store the index of the current image displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide (loops back to the first image)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide (loops back to the last image)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Enable navigation with keyboard arrows
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    // Add event listener on mount
    document.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slider">
      {/* Render previous button only if there's more than one picture */}
      {pictures.length > 1 && (
        <div className="slider__btn slider__btn--prev" onClick={prevSlide}>
          <FaChevronLeft size={70} />
        </div>
      )}

      {/* Render the current image */}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Render next button only if there's more than one picture */}
      {pictures.length > 1 && (
        <div className="slider__btn slider__btn--next" onClick={nextSlide}>
          <FaChevronRight size={70} />
        </div>
      )}

      {/* Pagination indicator */}
      <div className="slider__pagination">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
