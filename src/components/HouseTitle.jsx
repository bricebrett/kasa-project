import PropTypes from "prop-types";

function HouseTitle({ title, location }) {
  return (
    <div className="house__title">
      <p className="house__title-content">{title}</p>
      <p className="house__title-location">{location}</p>
    </div>
  );
}

HouseTitle.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default HouseTitle;
