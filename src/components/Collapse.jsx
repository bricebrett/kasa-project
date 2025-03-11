import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Collapse () {
    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse__button" onClick={handleCollapse}>
                <div className="collapse__content">
                    <span className="collapse__button-text">Fiabilité</span>
                    <span className="collapse__button-icon">{isOpen ? <FaChevronDown /> : <FaChevronUp />}</span>
                </div>
            </button>
            {isOpen && (
                <ul className="collapse__list">
                    <li className="collapse__item">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</li>
                </ul>
            )}
        </div>
    );
}

export default Collapse;