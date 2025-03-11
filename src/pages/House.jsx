import { Navigate, useParams } from "react-router-dom";
import houses from "../data/house.json";

function House() {
  const { id } = useParams();
  const house = houses.find((house) => house.id === id);

  if (!house) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div>
      <img src={house.cover} alt={house.title} />
      <h1>{house.title}</h1>
      <p>{house.location}</p>
      <p>{house.tags}</p>
      {/* Component "rating" */}
      {/* Component "slider" description */}
      {/* Component "slider" équipements */}
    </div>
  );
}

export default House;
