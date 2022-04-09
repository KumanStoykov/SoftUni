const fs = require('fs/promises');

async function loadTemplate(name) {

    try{
        const template = await fs.readFile(`./views/${name}.html`);
        return template.toString();
    } catch(err) {
        return '';
    }
}

async function renderLayout(html) {
    const layout = await loadTemplate('layout');

    return layout.replace('{{html}}', html);
}

module.exports = {
    loadTemplate,
    renderLayout
}