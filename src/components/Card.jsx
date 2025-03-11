import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/house/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__title">{title}</div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
