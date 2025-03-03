import { useParams } from "react-router-dom";
import logements from "../data/logement.json";

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    return (
        <div>
            <img src={logement.cover} alt={logement.title} />
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <p>{logement.tags}</p>

            <p>{logement.description}</p>
        </div>
    );
}

export default Logement;