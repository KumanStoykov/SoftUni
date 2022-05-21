const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const { formFilling } = require('../utils/formFilling');

const vehicleData = require('../data/vehicleData.json');

const dataService = require('../services/dataServices');


exports.beyVehicleController = async (req, res) => {
    try {
        const id = req.url.split('=')[1];

        if (req.method == 'POST') {

            await dataService.deleteVehicle(id);

            res.writeHead(302, {
                location: '/'
            });
            res.end();

        } else {

            let beyView = await loadTemplate('beyVehicle');


            const currentVehicle = vehicleData.filter(vehicle => vehicle._id == id)[0];


            let result = formFilling(beyView, currentVehicle);

            res.write(await renderLayout(result));
            res.end();
        }
    } catch (err) {
        res.writeHead(302, {
            location: '/error'
        });
        res.end();
    }

}
