import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={handleCollapse}>
        <div className="collapse__content">
          <span className="collapse__button-text">{title}</span>
          <span className={`collapse__button-icon ${isOpen ? "rotate" : ""}`}>
            <FaChevronUp />
          </span>
        </div>
      </button>
      <div className={`collapse__description ${isOpen ? "open" : ""}`}>
        <p className="collapse__description-text">{description}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Collapse;
