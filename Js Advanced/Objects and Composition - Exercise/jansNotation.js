function jansNotation(inputArr) {
  let numbers = [];

  let commands = {
    sum(a, b) {
        numbers.splice(numbers.length -2, 2);
      numbers.push(a + b);
    },
    subtract(a, b) {
        numbers.splice(numbers.length -2, 2);
      numbers.push(a - b);
    },
    multiple(a, b) {
        numbers.splice(numbers.length -2, 2);
      numbers.push(a * b);
    },
    divide(a, b) {
        numbers.splice(numbers.length -2, 2);
      numbers.push(a / b);
    },
  };

  for (let operand of inputArr) {
    switch (operand) {
      case "+":
        operand = "sum";
        break;
      case "-":
        operand = "subtract";
        break;
      case "*":
        operand = "multiple";
        break;
      case "/":
        operand = "divide";
        break;
    }

    let firstNum = numbers[numbers.length - 2];
    let secundNum = numbers[numbers.length - 1];

    if (typeof operand === "string") {
      commands[operand](firstNum, secundNum);
    } else {
      numbers.push(operand);
    }
  }

  if (numbers.length > 1) {
    return `Error: too many operands!`;
  } else if (isNaN(numbers)) {
    return `Error: not enough operands!`;
  } else {
    return numbers.join("");
  }
}

console.log(jansNotation([5,
    3,
    4,
    '*',
    '-']
   ));
