function classStorage() {

    class Storage {
        constructor (capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;

        }
        addProduct(addProduct) {
            this.storage.push(addProduct);
            this.capacity -= addProduct.quantity;
            this.totalCost += addProduct.quantity * addProduct.price
        }

        getProducts() {
            let output = [];
            for(let i = 0; i < this.storage.length; i++) {
                output.push(JSON.stringify(this.storage[i]));
            }
            return output.join('\n');
        }
    }

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

    



}
console.log(classStorage())

