import houses from '../data/house.json';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
        <div>
            <Banner />
            <div className="grid">
                {houses.map((house) => (
                    <Card key={house.id} {...house} />
                ))}
            </div>
        </div>
    );
}

export default Home;
