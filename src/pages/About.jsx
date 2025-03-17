import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import collapseData from "../data/collapseData.json";

function About() {
  return (
    <>
      <Banner />
      <div className="about">
        {collapseData.map(({ id, title, description }) => (
          <Collapse
            key={id}
            className="about-collapse"
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
