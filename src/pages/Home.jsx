import houses from "../data/house.json";
import Banner from "../components/Banner";
import Card from "../components/Card";

/**
 * HOME COMPONENT
 */
function Home() {
  return (
    <>
      {/* Main banner displayed on the home page */}
      <Banner />

      {/* Container for all house cards */}
      <div className="cards">
        {houses.map((house) => (
          <Card key={house.id} {...house} />
        ))}
      </div>
    </>
  );
}

export default Home;
