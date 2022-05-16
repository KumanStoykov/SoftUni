

const Create = () => {


    return (
        <section id="create-page">
            <div className="create-container">
                <div className="box-image"></div>

                <h2 className="box-heading"> Add new home</h2>


                <form className="form" action="" method="">
                    <div className="input">
                        <input type="text" className="input-field" id="home-name" placeholder="Real House Luxury Villa..." name="" value="" />
                        <label className="home-name">Name:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="type" placeholder="Villa..." name="" value="" />
                        <label className="type">Property Type:</label>
                    </div>
                    <div className="input">
                        <input type="number" className="input-field" id="year" placeholder="2018..." name="" value="" />
                        <label className="year">Year Built:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="city" placeholder="Sofia..." name="" value="" />
                        <label className="city">City</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="homeImage" placeholder="Image..." name="" value="" />
                        <label className="homeImage">Home Image:</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="description" placeholder="Description..." name="" value="" />
                        <label className="description">Property Description:</label>
                    </div>

                    <div className="input">
                        <input type="number" className="input-field" id="availablePieces" placeholder="1" name="" value="" />
                        <label className="availablePieces">Available pieces:</label>
                    </div>

                    <div className="create-action">
                        <button className="create-button">Add</button>
                    </div>


                </form>
            </div>
        </section>
    );
};

export default Create;