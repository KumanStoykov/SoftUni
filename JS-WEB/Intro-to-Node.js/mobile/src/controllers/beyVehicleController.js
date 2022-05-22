const { loadTemplate, renderLayout } = require('../utils/templateUtil');
const { formFilling } = require('../utils/formFilling');


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

            const currentVehicle = await dataService.getOne(id);

            let result = formFilling(beyView, currentVehicle);
            let addTypes = `<option value="${currentVehicle.type}">${currentVehicle.type}</option>`;

            result = result.replace('{{type}}', addTypes);

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
