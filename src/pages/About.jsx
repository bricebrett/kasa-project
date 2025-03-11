import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import collapseData from "../data/collapseDate.json";

function About() {
  return (
    <>
      <Banner />
      <div className="about">
        {collapseData.map(({ id, title, description }) => (
          <Collapse key={id} title={title} description={description} />
        ))}
      </div>
    </>
  );
}

export default About;
