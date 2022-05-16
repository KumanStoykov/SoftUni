

const Edit = () => {


    return (
        <section id="edit-page">
            <div className="edit-container">
                <div className="box-image">

                </div>
                <h2 className="box-heading">
                    Edit Home
                </h2>

                <form className="form" action="" method="">
                    <div className="input">
                        <input type="text" className="input-field" id="home-name" name="" value="" />
                        <label className="home-name">Name:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="type" name="" value="" />
                        <label className="type">Property Type:</label>
                    </div>
                    <div className="input">
                        <input type="number" className="input-field" id="year" name="" value="" />
                        <label className="year">Year Built:</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" id="city" name="" value="" />
                        <label className="city">City</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="homeImage" name="" value="" />
                        <label className="homeImage">Home Image:</label>
                    </div>

                    <div className="input">
                        <input type="text" className="input-field" id="description" name="" value="" />
                        <label className="description">Property Description:</label>
                    </div>

                    <div className="input">
                        <input type="number" className="input-field" id="availablePieces" name="" value="" />
                        <label className="availablePieces">Available pieces:</label>
                    </div>

                    <div className="create-action">
                        <button className="create-button">Edit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Edit;