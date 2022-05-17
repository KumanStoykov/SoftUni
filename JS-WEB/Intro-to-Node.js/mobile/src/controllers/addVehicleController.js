const { loadTemplate, renderLayout } = require('../utils/templateUtil');


exports.addVehicleController = async (req, res) => {

    let addVehicle = await loadTemplate('addVehicle');

    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.write(await renderLayout(addVehicle));

    res.end();
};