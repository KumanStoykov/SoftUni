const db = require('../db.json');
const fs = require('fs/promises');

function saveCat(data) {
    db.cats.push(data);

    const result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result);
}

function saveBreed(data) {
    db.breeds.push(data);

    const result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result);
}

const storageService = {
    saveCat,
    saveBreed,
}

module.exports = storageService;
