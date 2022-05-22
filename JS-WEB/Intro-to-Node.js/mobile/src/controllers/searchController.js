const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const { vehicleCard } = require('../views/template/vehicleCard');
const dataServices = require('../services/dataServices');
const formidable = require('formidable');

exports.searchController = (req, res) => {

    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.writeHead(err.httpCode || 400, { 'Content-type': 'text/plain' });
            res.end(String(err));
            return;
        }

        let allVehicle = await dataServices.getAll();

        let searchVehicle = allVehicle.filter(x => x.type.toLowerCase().includes(fields.search.toLocaleLowerCase()));
        console.log(searchVehicle);

        let search = true;

        let home = await loadTemplate('home');

        home = home.replace('{{vehicle}}', searchVehicle.map(x => vehicleCard(x)).join(''));

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(await renderLayout(home, search));

        res.end();

    });

};