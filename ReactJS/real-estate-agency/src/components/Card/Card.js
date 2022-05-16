import { useParams } from 'react-router-dom';

const Card = () => {
    const { card } = useParams();

    return (
        <div className="card-home">
            <h2>Sunhouse C21</h2>
            <div className="cta-container"><a href="/details" className="details-link">Details</a></div>
            <div className="card_image"><img src="/images/apartments.jpg" /></div>
        </div>
    );
};

export default Card;