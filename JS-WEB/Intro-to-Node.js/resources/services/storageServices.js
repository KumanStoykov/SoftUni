const db = require('../db.json');

function saveData(data) {
    db.cats.push(data)

}

const storageService = {
    saveData,
}

module.exports = storageService;
