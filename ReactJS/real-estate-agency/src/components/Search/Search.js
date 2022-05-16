

const Search = () => {


    return (
        <>
            <form class="search" action="" method="">
                <input type="search" name="" placeholder="Search here..." />
                    <button type="submit">Search</button>
            </form>
            <section id="find-section">


                <div class="card">
                    <h3>Real House Luxury Villa</h3>
                    <p>Spacious and grand villa, 3 bedroom, 2 bath </p>
                    <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                    <div class="card_circle"><img src="/images/house2.jpg" /></div>

                </div>

                <div class="no-data-listing">
                    <p class="no-offer">No match was found for the submitted type...</p>
                </div>
            </section>
        </>
    );
};

export default Search;