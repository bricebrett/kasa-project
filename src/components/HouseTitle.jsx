const HouseTitle = ({ title, location }) => {
  return (
    <div className="house__title">
      <p className="house__title-content">{title}</p>
      <p className="house__title-location">{location}</p>
    </div>
  );
};

export default HouseTitle;
