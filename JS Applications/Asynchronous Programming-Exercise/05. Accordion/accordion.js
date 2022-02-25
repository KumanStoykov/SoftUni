window.addEventListener('load', solution);

const mainSection = document.querySelector('#main');

async function solution() {

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');

    const data = await response.json();
    // Add tasks
    data.forEach(d => mainSection.appendChild(makeTask(d)));
}

function makeTask(data) {
    const headOfTask = createEl('div', { class: 'accordion' },
        createEl('div', { class: 'head' },
            createEl('span', {}, data.title),
            createEl('button', { class: 'button', id: data._id }, 'More')),
    );

    return headOfTask;
}
//------------------------------------------------------------------------------------------------------
mainSection.addEventListener('click', toggleCard);

async function toggleCard(event) {
    const currentId = event.target.id;
    const currentBtn = event.target;

    if (currentBtn.className == 'button') {

        const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${currentId}`);

        const data = await response.json();

        const replaceElement = addHiddenPart(data);
        
        if (currentBtn.textContent == 'More') {
            replaceElement.querySelector('.extra').style.display = 'block';
            replaceElement.querySelector('button').textContent = 'Less';
            event.target.parentElement.parentElement.replaceWith(replaceElement);

        } else if (currentBtn.textContent == 'Less') {
            replaceElement.querySelector('.extra').style.display = 'none';
            replaceElement.querySelector('button').textContent = 'More';
            event.target.parentElement.parentElement.replaceWith(replaceElement);
        }
    }
}

function addHiddenPart(data) {

    const task = createEl('div', { class: 'accordion' },
        createEl('div', { class: 'head' },
            createEl('span', {}, data.title),
            createEl('button', { class: 'button', id: data._id }, 'More')),
        createEl('div', { class: 'extra' },
            createEl('p', {}, data.content))
    );

    return task;
}
//----------------------------------------------------------------------------------------------------
function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let item in attr) {
        if (item == 'class') {
            element.classList.add(attr[item]);
        } else {
            element[item] = attr[item];
        }
    }
    content.forEach(item => {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    });
    return element;
}