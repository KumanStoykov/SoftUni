const db = require('../db.json');
const fs = require('fs/promises');



function saveCat(data) {

    data._id = createId();

    db.cats.push(data);

    const result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result);
}

function saveBreed(data) {
    
   
    db.breeds.push(data);

    const result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result);
}

function deleteCat(id) {
    

}

function createId() {
    return ((Math.random() * Date.now()) | 0).toString(16);

}

const storageService = {
    saveCat,
    saveBreed,
    deleteCat,
}

module.exports = storageService;
