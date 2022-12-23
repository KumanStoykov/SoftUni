// function SumFirstAndLast(arr) {

//     let first = Number(arr.shift());
//     let last = Number(arr.pop());

//     return first + last;

// }
// let numbers = ['20', '30', '40'];
// console.log(SumFirstAndLast(numbers));
// console.log(numbers);

function SumFirstAndLast(arr) {

    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    return first + last;
}
let numbers = ['20', '30', '40'];
console.log(SumFirstAndLast(numbers));
console.log(numbers);