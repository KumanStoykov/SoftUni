const { loadTemplate, renderLayout } = require('../util/templateUtility.js');

async function shelterController(req, res) {
    const shelter = await loadTemplate('catShelter');

    res.write(await renderLayout(shelter));
    res.end();
}

module.exports = shelterController;