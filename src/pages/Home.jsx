import logements from '../data/logement.json';
import Banner from '../components/Banner';
import Card from '../components/Card';

function Home() {
    return (
        <div>
            <Banner />
            <div className="grid">
                {logements.map((logement) => (
                    <Card key={logement.id} {...logement} />
                ))}
            </div>
        </div>
    );
}

export default Home;
