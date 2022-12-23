// function factorialDivision(a, b) {

//     let sum = 1;
//     let secundSum = 1;

//     for( let i = 0; i < a ; i++) {
//         sum = sum * (a - i);
//     }
//     for (let index = 0; index < b; index++) {
//         secundSum = secundSum * (b - index);
        
//     }

// console.log((sum / secundSum).toFixed(2));

// }
// factorialDivision(5, 2)


function facto(x, y) {


   function factorial(x) {
    if (x === 0) {
        return 1;
    }
    let endSume = x * factorial(x - 1);
    return endSume;

   }

    let result = ((factorial(x) / factorial(y)).toFixed(2));

    return result;
    
}

let res = facto(5, 2);
console.log(res);