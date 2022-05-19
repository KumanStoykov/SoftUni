const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const dataServices = require('../services/dataServices');

exports.addVehicleController = async (req, res) => {

    try {

        let addVehicle = await loadTemplate('addVehicle');
        let typeData = await dataServices.getTypes();

        addVehicle = addVehicle.replace('{{type}}', typeData.map(x => `<option value="Fluffy Cat">${x.type}</option>`).join(''));


        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write(await renderLayout(addVehicle));

        res.end();
    } catch (err) {
        console.log(err);
    }

};