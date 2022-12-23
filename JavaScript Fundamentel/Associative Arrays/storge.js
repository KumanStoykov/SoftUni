function storge(input) {

    let listStorge = new Map();

    for (let el of input) {
        let token = el.split(' ');
        let item = token[0];
        let quantity = Number(token[1]);

        if (!listStorge.has(item)) {
            listStorge.set(item, quantity);
        } else {
            let currQuantity = listStorge.get(item);
            let newQuantity = currQuantity += quantity;
            listStorge.set(item, newQuantity);
        }

    }

    for (let key of listStorge) {
        console.log(`${key[0]} -> ${key[1]}`);
    }


}


storge(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);