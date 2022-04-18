const uniqid = require('uniqid');

class Cat {
    static #cats = [
        {
            id: '8g06m9ycl24ioqex',
            name: 'Lisa',
            description: 'Lisa is good cat.',
            image: '/images/Lisa.jpg',
            breed: 'Ocicat'
        },
        {
            id: '8g06mdowl24is4fd',
            name: 'Misho',
            description: "Hi, I'm Misho.",
            image: '/images/Misho.jpg',
            breed: 'Angor'
        },
        {
            id: '8g06m808l24itiqy',
            name: 'Lily',
            description: 'Lily is a best cat ever.',
            image: '/images/Lily.jpg',
            breed: 'American bobcat'
        }
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

    static findByIdAndUpdate(catId, cat) {
        const index = Cat.#cats.findIndex(c => catId == c.id);
        cat.id = uniqid();  

        Cat.#cats.splice(index, 1, cat);
    }

    static deleteCat(catId) {
        const index = Cat.#cats.findIndex(c => catId == c.id);
        Cat.#cats.splice(index, 1);
    }
}

module.exports = Cat;