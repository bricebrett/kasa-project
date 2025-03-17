import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slider">
      {pictures.length > 1 && (
        <div className="slider__btn slider__btn--prev" onClick={prevSlide}>
          <FaChevronLeft size={70} />
        </div>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <div className="slider__btn slider__btn--next" onClick={nextSlide}>
          <FaChevronRight size={70} />
        </div>
      )}
      <div className="slider__pagination">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Slider;
