import { useEffect, useState, lazy, Suspense } from 'react';

import * as gameService from '../../service/gameService';
//Code-Splitting-Bundling
const GameCard = lazy(() => import('./GameCard'));

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
            {/* Wait for chunk */}
            <Suspense fallback={<p>Loading...</p>}>
                {loading
                    ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    : loadingCardsStatement(games)
                }
            </Suspense>
        </section>
    );
};

export default Catalog;