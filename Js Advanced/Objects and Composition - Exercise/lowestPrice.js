function lowestPrice(inputArr) {

    let obj = {};

    for (let line of inputArr) {

        let [town, product, price] = line.split(' | ');
        price = Number(price);
        
        if(!obj.hasOwnProperty(product)) {
            obj[product] = {price, town};

        } else {
            if(obj[product].price > price) {
                obj[product].price = price;
                obj[product].town = town;

            }
        }
      
    }
    return Object.keys(obj).forEach(product => console.log(`${product} -> ${obj[product].price} (${obj[product].town})`));


}

lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
);