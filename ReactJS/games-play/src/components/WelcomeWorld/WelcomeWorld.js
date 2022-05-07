import * as gameServices from '../../service/gameService';
import { useEffect, useState } from 'react';
import LatestGameCard from './LatestGameCard';

const WelcomeWorld = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false); 


    useEffect(() => {

        setLoading(true);
        setTimeout(() => {

            gameServices.getLatest()
                .then(result => {
                    setGames(result);
                })
                .catch(err => alert(err.message));

                setLoading(false);
        }, 1000)
    }, []);

    const loadingCardsStatement = (games) => {
        return  games.length > 0 
             ? games.map(x => <LatestGameCard key={x._id} game={x} />)
             : <h3 className="no-articles">No games yet</h3>         
     };
    

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {loading
                ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                : loadingCardsStatement(games)

                }
                
            </div>
        </section>
    );
};

export default WelcomeWorld;