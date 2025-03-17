import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? "star-icon filled" : "star-icon"}
        />
      ))}
    </div>
  );
}

export default Rating;
