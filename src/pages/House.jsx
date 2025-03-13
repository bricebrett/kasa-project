import { Navigate, useParams } from "react-router-dom";
import Slider from "../components/Slider";
import HouseTitle from "../components/HouseTitle";
import HouseTags from "../components/HouseTags";
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
      <HouseTitle title={house.title} location={house.location} />
      <HouseTags tags={house.tags} />
      {/* Component "rating" */}
      {/* Component "slider" description */}
      {/* Component "slider" équipements */}
    </div>
  );
}

export default House;
