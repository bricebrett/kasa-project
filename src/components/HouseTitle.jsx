const HouseTitle = ({ title, location }) => {
  return (
    <div className="house__title">
      <h1 className="house__title-content">{title}</h1>
      <p className="house__title-location">{location}</p>
    </div>
  );
};

export default HouseTitle;
