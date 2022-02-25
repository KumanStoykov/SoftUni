function computerStore(input) {

    let sum = 0;

    for (let price of input) {

        if (price === "special" || price === "regular") {
            break;
        }
        price = Number(price);


        if (price < 0) {
            console.log("Invalid price!");
        } else if (typeof (price) === "number") {
            sum += price;
        }
    }

    let discount = input.pop();
    let taxes = (sum * 1.20) - sum;
    let specialDis = (sum * 1.20) - ((sum * 1.20) * 0.10);

    if (sum < 1) {
        console.log("Invalid order!");
    } else {

        if (discount === "special") {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${sum.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${specialDis.toFixed(2)}$`);
        } else {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${sum.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${(sum + taxes).toFixed(2)}$`);

        }
    }




}


computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);


// computerStore ([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ]);