// function toArray(obj) {

//     let arr = [];
	
//     for (const key of Object.entries(obj)) {
//         arr.push(key)

      
//     }
//     console.log(arr)
// }

// toArray({ a: 1, b: 2 });



// function redundant(str) {

//     function innerFunc(){
//         return str;
//     }
//     return innerFunc;
// }

 

// console.log(redundant("apple"));

// function countBoomerangs(arr) {

//     let inputL = arr.length;

//     let count = 0;

//     for(let i = 0; i < inputL; i++) {
//         let fistNum = arr[i];
//         let secundNum = arr[i + 1];
//         let thirdNum = arr[i + 2];

//         if(fistNum === thirdNum && secundNum !== fistNum) {
//             count++;
//         }
//     }

//     return count;
	
// }

// console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));


// function filter_list(l) {
//     // Return a new array w
//     let list =  [];

//     for (let num of l) {
        
//         if(Number.isInteger(num)) {
//             list.push(num);
//         }
//     }
//     return list;
//   }
  

// console.log(filter_list([1,'a','b',0,15]))



