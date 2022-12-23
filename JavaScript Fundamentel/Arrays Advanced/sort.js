// let sortedArr = numbers.sort((a, b) => a - b);

// numbers.sort((a, b) => b - a);

// texxt.sort((a, b) => a.localeCompare(b));

// texxt.sort((a, b) => b.localeCompare(a));

let word = ['SoftUni', 'Telerik', 'FMI'];
let secondwords = ['First', 'Second', 'third'];

// spread operator
word.push(...secondwords);
console.log(word);

// copy  new arrray
let copy = [ ...word ];

// delete for arr
numbers.spilce(numbers.indexOf(numbers), 1);
