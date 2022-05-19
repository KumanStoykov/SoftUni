const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const { vehicleCard } = require('../views/template/vehicleCard');
const dataServices = require('../services/dataServices');



exports.homeController = async (req, res) => {

    let home = await loadTemplate('home');

    let allVehicle = await dataServices.getAll();

    home = home.replace('{{vehicle}}', allVehicle.map(x => vehicleCard(x)).join(''));

    let search = true;


    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write(await renderLayout(home, search));

    res.end();
};