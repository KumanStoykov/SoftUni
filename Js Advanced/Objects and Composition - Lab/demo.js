let car = {
  model: "BMW",
  year: 20,

  honk: function () {
    console.log("Beep Beep"); //syntax function expression
  },
  honk2: () => {
    console.log("Beep Beep"); //syntax function arrow
  },
  honk3() {
    console.log("Beep Beep"); //Object method notation
  },
};

//object library

let calc = {
  sum: function (a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b,
  subtract(a, b) {
    return a - b;
  },
};
