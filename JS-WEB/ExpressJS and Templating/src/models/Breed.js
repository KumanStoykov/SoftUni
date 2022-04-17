class Breed {
    static #breeds = []

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