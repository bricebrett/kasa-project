import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Error() {
  const errorCode = "404";
  const errorMessage = "Oups! La page que vous demandez n'existe pas.";

  return (
    <div className="error">
      <h1 className="error__title">{errorCode}</h1>
      <p className="error__text">{errorMessage}</p>
      <Link className="error__redirection" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

Error.propTypes = {
  errorCode: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Error;
