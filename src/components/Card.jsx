import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card ({id, title, cover}) {
    return (
        <Link to={`/house/${id}`} className="card">
                <img src={cover} alt={title} className="card__image" />
                <div className="card__title">{title}</div>
        </Link>
    );
}

Card.propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    cover: propTypes.string.isRequired,
};

export default Card;