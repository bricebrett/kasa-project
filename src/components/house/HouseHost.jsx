import PropTypes from "prop-types";

function HouseHost({ host }) {
  return (
    <div className="house__host">
      <p className="house__host-name">{host.name}</p>
      <img
        className="house__host-picture"
        src={host.picture}
        alt="Host Profile"
      />
    </div>
  );
}

HouseHost.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default HouseHost;
