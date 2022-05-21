const fs = require('fs/promises');

async function loadTemplate(nameOfTemplate) {

    try {        
        const template = await fs.readFile(`./src/views/${nameOfTemplate}.html`);
        const str = template.toString();
        return  str;
    } catch(err) {
        return '';
    }
};

async function renderLayout(html, isHome) {
  
    let layout = await loadTemplate('layout');
    let search = await loadTemplate('search');

    if(isHome) {
        layout = layout.replace('{{search}}', search);
    } else {
        layout = layout.replace('{{search}}', '');
    }

    return layout.replace('{{body}}', html);
};
module.exports = {
    loadTemplate,
    renderLayout
}