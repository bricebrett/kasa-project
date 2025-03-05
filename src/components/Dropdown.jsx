import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Dropdown () {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={handleDropdown}>
                <div className="dropdown__content">
                    <span className="dropdown__button-text">Fiabilité</span>
                    <span className="dropdown__button-icon">{isOpen ? <FaChevronDown /> : <FaChevronUp />}</span>
                </div>
            </button>
            {isOpen && (
                <ul className="dropdown__list">
                    <li className="dropdown__item">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown;