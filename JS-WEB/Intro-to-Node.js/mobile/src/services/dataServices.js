const fs = require('fs/promises');

const typeData = require('../data/typeData.json');
const vehicleData = require('../data/vehicleData.json');

const createId = () => (Math.random() * Date.now() | 0).toString(16);

exports.getAll = async () => {

    let allVehicle = await fs.readFile('./src/data/vehicleData.json');

    return JSON.parse(allVehicle);
};
exports.getTypes = async () => {

    let types = await fs.readFile('./src/data/typeData.json');

    return JSON.parse(types);
};

exports.createType = (type) => {
    typeData.push(type);
    const result = JSON.stringify(typeData, '', 2);

    return fs.writeFile('./src/data/typeData.json', result);

};

exports.createVehicle = (vehicle) => {

    vehicle._id = createId();

    vehicleData.push(vehicle);

    const result = JSON.stringify(vehicleData, '', 2);

    return fs.writeFile('./src/data/vehicleData.json', result);
};

exports.deleteVehicle = async (id) => {
    
    let allData = await this.getAll();
    let currentImage = allData.find(x => x._id == id);
    let currentVehicles = allData.filter(x => x._id != id);


    await fs.unlink(`./src${currentImage.imageUrl}`);

    const result = JSON.stringify(currentVehicles, '', 2);

    return fs.writeFile('./src/data/vehicleData.json', result);
};

