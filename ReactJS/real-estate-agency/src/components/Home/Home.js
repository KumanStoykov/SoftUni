

const Home = () => {


    return(
        <>
        <main>
            <section id="home-page" className="background-image">
                <div className="home-container">

                    <div className="info">
                        <h1>Discover Your Perfect Home</h1>
                        <h2>The Best Real Estate Deals</h2>
                    </div>

                </div>
            </section>

            <section id="top-houses">
                <h1>Top Houses</h1>
                <div className="houses">


                    <div className="card-home">
                        <h2>Real House Luxury Villa</h2>
                        <div className="cta-container"><a href="#" className="details-link">Details</a></div>
                        <div className="card_image"><img src="/images/5.jpg" /></div>

                    </div>

                    <div className="card-home">
                        <h2>House Take Away</h2>
                        <div className="cta-container"><a href="#" className="details-link">Details</a></div>
                        <div className="card_image"><img src="/images/house2.jpg" /></div>

                    </div>

                    <div className="card-home">
                        <h2>Sunhouse C21</h2>
                        <div className="cta-container"><a href="/details" className="details-link">Details</a></div>
                        <div className="card_image"><img src="/images/apartments.jpg" /></div>

                    </div>

                    {/* <!-- If there are still no offers for housing in the database display: --> */}
                    <div className="no-data-container">
                        <p className="no-data">There are no housing offers found...</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};


export default Home;