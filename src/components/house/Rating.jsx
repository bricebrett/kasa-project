import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

/**
 * RATING COMPONENT
 */
function Rating({ rating }) {
  return (
    <div className="star-rating">
      {/* Generate 5 stars and fill them based on the rating */}
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          // Add the 'filled' class if the current index is less than the rating
          className={index < rating ? "star-icon filled" : "star-icon"}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
