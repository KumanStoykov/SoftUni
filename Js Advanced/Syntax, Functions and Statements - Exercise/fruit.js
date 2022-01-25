function fruit(fruit, weight, money) {

    return `I need $${((weight / 1000) * money).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`

}
fruit('orange', 2500, 1.80)