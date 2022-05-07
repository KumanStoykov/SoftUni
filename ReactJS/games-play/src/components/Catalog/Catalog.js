import { useEffect, useState } from 'react';

import * as gameService from '../../service/gameService';
import GameCard from './GameCard';

const Catalog = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        setTimeout(() => {
            gameService.getAll()
                .then(result => {
                    setGames(result);

                    setLoading(false);
                });
        }, 1000);
    }, []);

    const loadingCardsStatement = (games) => {
        return games.length > 0
            ? games.map(x => <GameCard key={x._id} game={x} />)
            : <h3 className="no-articles">No games yet</h3>
    };

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {loading
                ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                : loadingCardsStatement(games)
            }
        </section>
    );
};

export default Catalog;