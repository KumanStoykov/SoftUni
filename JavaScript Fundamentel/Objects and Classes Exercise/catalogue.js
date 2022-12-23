function catalogue(input) {

    let Allproduct = [];

    for (let income of input) {
        let token = income.split(' : ');
        let productName = token[0];
        let price = token[1];

        let productDate = {
            productName,
            price,
        }

        Allproduct.push(productDate);
    }

    let sortAllPro = Allproduct.sort((a, b) => (a.productName).localeCompare(b.productName));

    let names = [];

    for (let product of sortAllPro) {
        let token = product.productName[0];

        if (product.productName.includes(token)) {

            if (!names.includes(token)) {
                console.log(`${token}`);
                names.push(product.productName[0]);
            }
            console.log(`  ${product.productName}: ${product.price}`);
        } 

    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
// product.sort((a, b) => a.localeCompare(b))