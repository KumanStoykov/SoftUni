

const Details = () => {


    return (
        <section id="deatils-page">
            <div className="wrapper">
                <div className="product-img">
                    <img src="./static/images/apartments.jpg" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <div className="product-text">
                            <h1>Name: Sunhouse C21</h1>
                            <h2>Type: Apartment</h2>
                            <h4>Year: 2021</h4>
                            <h4>City: Sofia</h4>
                            <p>Description: Spacious dining room, remodel kitchen and wonderful deeded walk-out deck.</p>

                            <p>People rented this housing: Alex Petkov, Ivan Dobrev</p>

                            <p>People rented this housing: There are no tenants yet.</p>
                        </div>
                    </div>

                    <div className="product-btn">
                        <a href="#" className="edit">Edit</a>
                        <a href="#" className="remove">Delete</a>

                        <a href="#" className="rentHome">Rent a home, available 2 housing</a>
                        <p className="alRentHome">You have already rent this home</p>

                        <p className="no-housing">No Housing Available!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;