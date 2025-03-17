import { Navigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import HouseTitle from "../components/HouseTitle";
import HouseTags from "../components/HouseTags";
import HouseHost from "../components/HouseHost";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import houses from "../data/house.json";

function House() {
  const { id } = useParams();
  const house = houses.find((house) => house.id === id);

  if (!house) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div className="house">
      <Slider pictures={house.pictures} />
      <div className="first-line">
        <HouseTitle title={house.title} location={house.location} />
        <HouseHost host={house.host} />
      </div>
      <div className="second-line">
        <HouseTags tags={house.tags} />
        <Rating rating={house.rating} />
      </div>
      <div className="third-line">
        <Collapse
          className="house-collapse"
          title="Description"
          description={house.description}
        />
        <Collapse
          className="house-collapse"
          title="Equipements"
          description={house.equipments}
        />
      </div>
    </div>
  );
}

export default House;
