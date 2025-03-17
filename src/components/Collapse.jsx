import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

function Collapse({ title, description, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className || ""}`}>
      <button className="collapse__button" onClick={handleCollapse}>
        <div className="collapse__content">
          <span className="collapse__button-text">{title}</span>
          <span className={`collapse__button-icon ${isOpen ? "rotate" : ""}`}>
            <FaChevronUp />
          </span>
        </div>
      </button>
      <div className={`collapse__description ${isOpen ? "open" : ""}`}>
        {Array.isArray(description) ? (
          <ul className="collapse__list">
            {description.map((item, index) => (
              <li key={index} className="collapse__list-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__description-text">{description}</p>
        )}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Collapse;
