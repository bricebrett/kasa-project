import houses from "../data/house.json";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Banner />
      <div className="cards">
        {houses.map((house) => (
          <Card key={house.id} {...house} />
        ))}
      </div>
    </>
  );
}

export default Home;
