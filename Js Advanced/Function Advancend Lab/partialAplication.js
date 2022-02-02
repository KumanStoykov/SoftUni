function greet(name, message) {
    console.log(`Hey ${name}, ${message}`);

}
 //Partial application of greet
// let greetPesho = function(message) {
//     greet('Pesho', message);
// }

// Partial application also
let greetMariya = greet.bind(null, 'Maria');

greet('Stamat', 'Kak si?');
greetMariya('Maria', 'Hi');
greetMariya('asl');
greetMariya('pls');

// Currying

let greetCurry = function(name){
    return function (message) {
        console.log(`Hey ${name}, ${message}`);
    };
};

let greetPesho = greetCurry('Pesho');
greetPesho('Hi');

greetCurry('Gosho')("K'vo staa");