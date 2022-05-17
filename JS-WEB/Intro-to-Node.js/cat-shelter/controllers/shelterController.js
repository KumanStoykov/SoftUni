const { loadTemplate, renderLayout } = require('../util/templateUtility.js');
const db = require('../db.json');
const fs = require('fs');



async function shelterController(req, res) {
    let shelter = await loadTemplate('catShelter');
    const id = req.url.split('=')[1];

    const currentCat = db.cats.filter(cat => cat._id == id)[0];


   
    shelter = shelter.replace('{{image}}', currentCat.image);
    shelter = shelter.replace('{{name}}', currentCat.name);
    shelter = shelter.replace('{{description}}', currentCat.description);
    shelter = shelter.replace('{{breed}}', currentCat.breed);

    res.write(await renderLayout(shelter));
    res.end()

}
module.exports = shelterController;