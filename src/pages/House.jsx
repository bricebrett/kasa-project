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
    <>
      <Slider pictures={house.pictures} />
      <div className="title-and-host">
        <div className="title-and-host__title">
          <HouseTitle title={house.title} location={house.location} />
          <HouseTags tags={house.tags} />
        </div>
        <div className="title-and-host__host">
          <HouseHost host={house.host} />
          <Rating rating={house.rating} />
        </div>
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
    </>
  );
}

export default House;
