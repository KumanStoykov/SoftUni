// за число с запетая
// (\d+(?:\.\d+)?) non-capturing grup;

function numberTo(number) {
    if(number === null) return
    if(number < 0) return `(${Math.abs(number)})`
    return number.toString()

}
// console.log(numberTo(undefined))
console.log(numberTo(0))
console.log(numberTo(10))
console.log(numberTo(-5))