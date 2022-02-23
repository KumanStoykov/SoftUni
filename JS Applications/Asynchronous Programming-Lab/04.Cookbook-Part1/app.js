window.addEventListener('load', () => {
cookingBook();
});


async function cookingBook() {
    const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
    const mainSection = document.querySelector('main');

    try {
        const response = await fetch(url);
        if (response.ok == false) {
            throw new Error(`${response.status} ${'Not found'}`);
        }
        const data = await response.json();

        mainSection.removeChild(mainSection.children[0]);
        
        Object.values(data)
        .forEach(d => {
            const articleToAppend = createEl('article', {class: 'preview'},
                createEl('div', {class: 'title'}, 
                createEl('h2', {}, d.name)),
                createEl('div', {class: 'small'}, createEl('img', {src: d.img})),
            );
            mainSection.appendChild(articleToAppend);
            
             articleToAppend.addEventListener('click', showRecipe.bind(null, d._id, articleToAppend));
        });
    } catch (err) {
        alert(err.message);
    }
}
async function showRecipe(id, articleToAppend) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    try {
        const response = await fetch(url);
        if(response.ok == false) {
            throw new Error(`${response.status} ${'Not found'}`);
        }
        const data = await response.json();
        console.log(data)
        const articleWithAllInfo = createEl('article', {},
                createEl('h2', {}, data.name),
                createEl('div', {class: 'band'}, 
                createEl('div', {class: 'thumb'},
                createEl('img', {src: data.img})),
                createEl('div', {class: 'ingredients'}, 
                createEl('h3', {}, 'Ingredients:'),
                createEl('ul', {}, 
                data.ingredients.map(i => createEl('li', {}, i))))),
                createEl('div', {class: 'description'},
                createEl('h3', {}, 'Preparation:'),
                data.steps.map(p => createEl('p', {}, p))),
        );
        articleToAppend.replaceWith(articleWithAllInfo);
        
        articleWithAllInfo.addEventListener('click', () => {
            articleWithAllInfo.replaceWith(articleToAppend)
        });

    } catch (err) {
        alert(err.message);
    }

}

function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let item in attr) {
        if(item == 'class') {
            element.classList.add(attr[item]);
        } else {
            element[item] = attr[item];
        }      
    }
    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    for (let item of content) {
        if(typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);        
    }
    return element;
}
