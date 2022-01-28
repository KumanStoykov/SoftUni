function storeCatalogue(inputArr) {
  let productObj = {};

  inputArr.forEach((line) => {
    let [product, price] = line.split(" : ");

    productObj[product] = price;
  });
  let sortedProduct = Object.keys(productObj).sort((a, b) =>
    a.localeCompare(b)
  );
  let chars = [];

  sortedProduct.forEach((key) => {
    if (!chars.includes(key[0])) {
      console.log(key[0]);
      console.log(`  ${key}: ${productObj[key]}`);
      chars.push(key[0]);
    } else {
      console.log(`  ${key}: ${productObj[key]}`);
    }
  });
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
