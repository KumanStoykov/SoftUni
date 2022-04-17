const uniqid = require('uniqid');

class Cat {
    static #cats = [
        
    ];

    constructor(name, description, image, breed) {
        this.id = uniqid();
        this.name = name,
        this.description = description,
        this.image = image,
        this.breed = breed
    }

    static get cats() {
        return Cat.#cats.slice();
    }

    static add(cat) {
        Cat.#cats.push(cat);
    }
}

module.exports = Cat;