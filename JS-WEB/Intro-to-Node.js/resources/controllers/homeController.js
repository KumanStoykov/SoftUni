const { loadTemplate, renderLayout } = require('../util/templateUtility.js');
const db = require('../db.json');
const  catsCard  = require('../template/catsCard.js');


async function homeController(req, res) {

    let home = await loadTemplate('home');

    let allCats = db.cats.map(catsCard).join('');

    home = home.replace('{{cats}}', allCats);


    res.write(await renderLayout(home));
    res.end();

}

module.exports = homeController;