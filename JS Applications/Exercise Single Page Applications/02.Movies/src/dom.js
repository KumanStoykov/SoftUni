const main = document.getElementById('currentView');

export function showView(section) {
    main.replaceChildren(section);
}

export function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for(let item in attr) {
        element[item] = attr[item];
    }

    for(let item of content) {

        if(typeof item == 'string'|| typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}