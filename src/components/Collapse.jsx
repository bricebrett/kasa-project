import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * COLLAPSE COMPONENT
 */
function Collapse({ title, description, className }) {
  // State to track if the collapse is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle collapse open/close state
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className || ""}`}>
      {/* Collapse header button */}
      <button className="collapse__button" onClick={handleCollapse}>
        <div className="collapse__content">
          <span className="collapse__button-text">{title}</span>
          {/* Chevron icon rotates when open */}
          <span className={`collapse__button-icon ${isOpen ? "rotate" : ""}`}>
            <FaChevronUp />
          </span>
        </div>
      </button>

      {/* Collapse content */}
      <div className={`collapse__description ${isOpen ? "open" : ""}`}>
        {/* If description is an array, render as a list */}
        {Array.isArray(description) ? (
          <ul className="collapse__list">
            {description.map((item, index) => (
              <li key={index} className="collapse__list-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          // If it's a string, render as paragraph
          <p className="collapse__description-text">{description}</p>
        )}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  className: PropTypes.string,
};

export default Collapse;
