class Breed {
    static #breeds = [
        {
            breedName: 'Ocicat'
        },
        {
            breedName: 'Angor'
        },
        {
            breedName: 'American bobcat'
        },
        {
            breedName: 'Persian'
        },
    ]

    constructor(breedName) {
        this.breedName = breedName
    }

    static get breeds() {
        return Breed.#breeds.slice();
    }

    static add(breed) {
        Breed.#breeds.push(breed);
    }
}

module.exports = Breed;