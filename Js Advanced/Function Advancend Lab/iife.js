let returnNumber = () => 10;

let result = ((5) + returnNumber());
//IIFE
let calculate = (function() {
    return 10 + 20;
})()
console.log(calculate);