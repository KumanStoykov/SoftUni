const { loadTemplate, renderLayout } = require('../util/templateUtility.js');


async function addBreedController(req, res) {

    const addBreed = await loadTemplate('addBreed');

        res.write(await renderLayout(addBreed));
        res.end();
    
}

module.exports = addBreedController;