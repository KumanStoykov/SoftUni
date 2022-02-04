function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let calc = createCalculator();
calc.add(5);
console.log(calc.get());
calc.subtract(2);
console.log(calc.get());
module.exports = createCalculator;