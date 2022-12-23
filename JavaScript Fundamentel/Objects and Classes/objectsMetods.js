// let person = {
//     fistName: 'Kiril',
//     lastName: 'Kirilov',
//     age: 23,
//     sayHello() {
//         console.log(`My name is ${this.fistName} ${this.lastName}`);
//     }
// }
// return object property some as Object.keys
// for (let property in person) {
//   console.log(person[property]);
// }
// object.keys return array
// let kays = Object.keys(person)
// .forEach((property) => {
//     console.log(person[property])
// });

// obeject values return стойностите
// let values = Object.values(person)
// .forEach((values) => {
//     console.log(values)
// });

// let velues = Object.values(person);
// console.log(velues);

// sort as object връща и двете и стойност и запис.
// let entries = Object.entries(person);
// console.log(entries);

// convect array to object
// let object = Object.assign({}, input);



// forof for Array
// and forin for Object

// for (const key in person) {
// console.log(`${key}: ${person[key]}`);
// }


// function mein() {
//     let person = {name: 'Peter'};
//     let json = JSON.stringify(person);
//     let parsed = JSON.parse(json);
//     console.log(parsed.name);
// }
// mein();

//  copy Object
    let personSec = {
        ...person
    };