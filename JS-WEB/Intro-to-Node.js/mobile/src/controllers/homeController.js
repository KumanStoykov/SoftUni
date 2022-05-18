const { loadTemplate, renderLayout } = require('../utils/templateUtil');

const vehicleData = require('../data/vehicleData.json');
const { vehicleCard } = require('../views/template/vehicleCard');


exports.homeController = async (req, res) => {

    let home = await loadTemplate('home');

    home = home.replace('{{vehicle}}', vehicleData.map(x => vehicleCard(x)).join(''));

    let search = true;
    

    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write(await renderLayout(home, search));

    res.end();
};