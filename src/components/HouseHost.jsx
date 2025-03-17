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

export default HouseHost;
