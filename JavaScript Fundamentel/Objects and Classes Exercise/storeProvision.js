function storeProvision(currentStock, storeProduct) {

    let store = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        let productObject = {
            product,
            quantity,
        }
        store.push(productObject);
    }
    for (let i = 0; i < storeProduct.length - 1; i += 2) {
        let product = storeProduct[i];
        let quantity = Number(storeProduct[i + 1]);

        let productObject = {
            product,
            quantity,
        }

        let indexOfProduct = store.findIndex(x => x.product === product);

        if (indexOfProduct === -1) {
            store.push(productObject);
        } else {
            store[indexOfProduct].quantity += quantity;
        }

    }
    for (const product of store) {
        console.log(`${product.product} -> ${product.quantity}`);
    }


}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);