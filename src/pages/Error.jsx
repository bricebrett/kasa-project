import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Error({ errorCode, errorMessage }) {
    return (
        <div className="error">
            <h1>{errorCode}</h1>
            <p>{errorMessage}</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

Error.propTypes = {
    errorCode: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
};

Error.defaultProps = {
    errorCode: "404",
    errorMessage: "Oups! La page que vous demandez n'existe pas.",
};

export default Error;