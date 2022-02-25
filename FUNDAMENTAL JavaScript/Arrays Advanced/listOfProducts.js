function listOfProducts(arr) {

return arr
.sort()
.map((a, i) => `${i + 1}.${a}`)
.join('\n')

}

console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]))