const db = require('../db.json');
const { renderLayout, loadTemplate } = require('../util/templateUtility.js');

async function addCatController(req, res) {

   
    const addCat = await loadTemplate('addCat');

    let mappedBreeds = db.breeds.map(b => {
        return `<option value="${b.breed}">${b.breed}</option>`
    });
    
    
    const breedsCat = addCat.replace('{{breeds}}', mappedBreeds);
        
    res.write(await renderLayout(breedsCat));
    res.end();
    
}

module.exports = addCatController;