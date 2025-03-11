import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PropTypes from "prop-types";

function Collapse ({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse__button" onClick={handleCollapse}>
                <div className="collapse__content">
                    <span className="collapse__button-text">{title}</span>
                    <span className="collapse__button-icon">{isOpen ? <FaChevronDown /> : <FaChevronUp />}</span>
                </div>
            </button>
            {isOpen && (
                <ul className="collapse__list">
                    <li className="collapse__item">{description}</li>
                </ul>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Collapse;