

const Create = () => {


    return (
        <section id="create-page">
            <div class="create-container">
                <div class="box-image"></div>

                <h2 class="box-heading"> Add new home</h2>


                <form class="form" action="" method="">
                    <div class="input">
                        <input type="text" class="input-field" id="home-name" placeholder="Real House Luxury Villa..." name="" value="" />
                        <label class="home-name">Name:</label>
                    </div>
                    <div class="input">
                        <input type="text" class="input-field" id="type" placeholder="Villa..." name="" value="" />
                        <label class="type">Property Type:</label>
                    </div>
                    <div class="input">
                        <input type="number" class="input-field" id="year" placeholder="2018..." name="" value="" />
                        <label class="year">Year Built:</label>
                    </div>
                    <div class="input">
                        <input type="text" class="input-field" id="city" placeholder="Sofia..." name="" value="" />
                        <label class="city">City</label>
                    </div>

                    <div class="input">
                        <input type="text" class="input-field" id="homeImage" placeholder="Image..." name="" value="" />
                        <label class="homeImage">Home Image:</label>
                    </div>

                    <div class="input">
                        <input type="text" class="input-field" id="description" placeholder="Description..." name="" value="" />
                        <label class="description">Property Description:</label>
                    </div>

                    <div class="input">
                        <input type="number" class="input-field" id="availablePieces" placeholder="1" name="" value="" />
                        <label class="availablePieces">Available pieces:</label>
                    </div>

                    <div class="create-action">
                        <button class="create-button">Add</button>
                    </div>


                </form>
            </div>
        </section>
    );
};

export default Create;