function juiceFlowers(input) {

    let bottles = new Map;
    let storage = {};

    input.forEach(line => {
        let [name, quantity] = line.split(' => ');
        quantity = Number(quantity);
        let count = 0;

        if(!storage.hasOwnProperty(name)) {

            storage[name] = Number(quantity);
            if(quantity >= 1000) {

                let rest = (quantity % 1000);
                storage[name] = rest;
                count = (quantity - rest) / 1000
                bottles.set(name, count);
                
            }
        } else {
            storage[name] += quantity;
            let rest = storage[name] % 1000;
            count = ((storage[name] - rest) / 1000) + (bottles.get(name) == undefined ? 0:bottles.get(name));
            storage[name] = rest;
            bottles.set(name, count);
        }
        
    });
    [...bottles].forEach(el => console.log(`${el[0]} => ${el[1]}`));

}


console.log(juiceFlowers(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']));