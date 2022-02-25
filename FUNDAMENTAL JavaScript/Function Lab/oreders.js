function oreders(product, quntity) {

    let price = 0;

   if(product === 'coffee') {
       price = 1.50;
   } else if(product === 'water') {
       price = 1.00;
   } else if(product === 'coke') {
       price = 1.40;
   } else if(product === 'snacks') {
       price = 2.00;
   }
    let total = price * quntity;

    console.log(total.toFixed(2));

}
oreders('coke', 10);