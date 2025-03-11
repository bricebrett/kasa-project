import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Error() {
    const { state } = useLocation();

    const errorCode = state?.errorCode || "404";
    const errorMessage = state?.errorMessage || "Oups! La page que vous demandez n'existe pas.";

    return (
        <div className="error">
            <h1>{errorCode}</h1>
            <p>{errorMessage}</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default Error;