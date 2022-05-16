

const Details = () => {


    return (
        <section id="deatils-page">
            <div class="wrapper">
                <div class="product-img">
                    <img src="./static/images/apartments.jpg" />
                </div>
                <div class="product-info">
                    <div class="product-text">
                        <div class="product-text">
                            <h1>Name: Sunhouse C21</h1>
                            <h2>Type: Apartment</h2>
                            <h4>Year: 2021</h4>
                            <h4>City: Sofia</h4>
                            <p>Description: Spacious dining room, remodel kitchen and wonderful deeded walk-out deck.</p>

                            <p>People rented this housing: Alex Petkov, Ivan Dobrev</p>

                            <p>People rented this housing: There are no tenants yet.</p>
                        </div>
                    </div>

                    <div class="product-btn">
                        <a href="#" class="edit">Edit</a>
                        <a href="#" class="remove">Delete</a>

                        <a href="#" class="rentHome">Rent a home, available 2 housing</a>
                        <p class="alRentHome">You have already rent this home</p>

                        <p class="no-housing">No Housing Available!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;